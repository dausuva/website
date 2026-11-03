---
title: "Download Classroom Manager"
description: "The teacher console and the student-PC Client for Windows 10 and 11: where to get them, how to check them, and how the Client is installed."
url: "/school/download/"
translationKey: "school-download"
schoolPage: true
---
Classroom Manager has two programs: the **Host**, which the teacher runs, and the **Client**, which a school administrator installs once on each student computer. Both are free, open source (Apache License 2.0) and have no limit on the number of computers.

## Teacher computer: the Host

- **Direct download:** <span class="soon" title="available with the first release">the Host installer</span>, or <span class="soon" title="available with the first release">one program you can run from anywhere</span> (available with the first release). The one-file program offers **Help > Install on this computer**, which adds it to your Start menu without administrator rights.
- **winget:** `winget install Dausuva.ClassroomHost`
- **All versions, checksums and the software bill of materials:** <span class="soon" title="available once the public repository is open">GitHub releases</span>

## Student computers: the Client

An administrator installs the Client once on each computer, with administrator rights. It is not in the Microsoft Store: a Store app is installed per user and a student could remove it. See [Installing the Client]({{< relref "/school/client" >}}) for the lab key, the silent installation and the Windows tools you can deploy it with.

- <span class="soon" title="available with the first release">The Client installer</span> (available with the first release)
- **winget:** `winget install Dausuva.ClassroomClient --custom "/KIT=C:\path\to\classroom-kit.json"`

## Check what you downloaded

Every release has a `SHA256SUMS.txt`. In PowerShell: `Get-FileHash .\file.exe -Algorithm SHA256`, and compare with the line for that file. Each release also carries a software bill of materials (`sbom.cdx.json`) that lists every package the programs are built from.

## Signing

Releases are built by GitHub Actions from a tagged, public commit. A release that is signed says so on its release page; one that is not is named "(unsigned)" and Windows will warn before it runs. How releases are signed, and who approves them, is on the [code signing policy]({{< relref "/school/code-signing-policy" >}}) page.

## Windows and privacy

Windows 10 and Windows 11. The programs send nothing to Dausuva: there is no cloud service. The Host can look once a day at github.com to see whether a newer version exists, and asks you the first time it starts; you can switch it off. See [Privacy]({{< relref "/school/privacy" >}}).

Something wrong with a download? [Support]({{< relref "/school/support" >}}).
