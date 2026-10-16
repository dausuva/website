[CmdletBinding()]
param(
    [ValidateRange(1024, 65535)]
    [int]$Port = 1313,
    [switch]$NoBrowser,
    [switch]$Check
)

$ErrorActionPreference = 'Stop'
$websiteRoot = Split-Path -Parent $PSScriptRoot
$browserJob = $null
$websiteExitCode = 1
Push-Location -LiteralPath $websiteRoot
try {
    $hugoCommand = Get-Command hugo.exe -CommandType Application -ErrorAction SilentlyContinue | Select-Object -First 1
    $hugoPath = if ($hugoCommand) { $hugoCommand.Source } else { $null }
    if (-not $hugoPath -and $env:LOCALAPPDATA) {
        $packageRoot = Join-Path $env:LOCALAPPDATA 'Microsoft\WinGet\Packages'
        if (Test-Path -LiteralPath $packageRoot) {
            $hugoPath = Get-ChildItem -LiteralPath $packageRoot -Directory -Filter 'Hugo.Hugo.Extended_*' |
                ForEach-Object { Join-Path $_.FullName 'hugo.exe' } |
                Where-Object { Test-Path -LiteralPath $_ -PathType Leaf } |
                Select-Object -First 1
        }
    }
    if (-not $hugoPath) {
        throw 'Hugo is missing. Install it with: winget install --id Hugo.Hugo.Extended --version 0.168.0 --exact. Then run run.bat again.'
    }
    & $hugoPath version
    if ($LASTEXITCODE -ne 0) { throw 'Unable to run Hugo.' }

    if ($Check) {
        & $hugoPath --minify --panicOnWarning
        $websiteExitCode = $LASTEXITCODE
    }
    else {
        $url = "http://localhost:$Port/school/"
        Write-Host "Local website: $url"
        Write-Host "Lithuanian: http://localhost:$Port/lt/mokykloms/"
        Write-Host 'Keep this window open. Press Ctrl+C to stop. Changes reload automatically.'
        if (-not $NoBrowser) {
            $browserJob = Start-Job -ArgumentList $url -ScriptBlock {
                param($PreviewUrl)
                for ($attempt = 0; $attempt -lt 60; $attempt++) {
                    try {
                        $response = Invoke-WebRequest -Uri $PreviewUrl -UseBasicParsing -TimeoutSec 1
                        if ($response.StatusCode -eq 200 -and $response.Content -match 'Classroom Manager') {
                            Start-Process $PreviewUrl
                            return
                        }
                    }
                    catch { }
                    Start-Sleep -Milliseconds 500
                }
            }
        }
        & $hugoPath server --bind 127.0.0.1 --port $Port --disableFastRender --environment preview
        $websiteExitCode = $LASTEXITCODE
    }
}
catch {
    Write-Host "Website startup failed: $($_.Exception.Message)" -ForegroundColor Red
}
finally {
    if ($browserJob) { Stop-Job $browserJob; Remove-Job $browserJob }
    Pop-Location
}
exit $websiteExitCode
