@echo off
setlocal
powershell.exe -NoLogo -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\run-site.ps1" %*
set "WEBSITE_EXIT_CODE=%ERRORLEVEL%"
if not "%WEBSITE_EXIT_CODE%"=="0" if "%~1"=="" pause
exit /b %WEBSITE_EXIT_CODE%
