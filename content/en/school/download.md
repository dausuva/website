---
title: "Download Classroom Manager"
description: "The teacher console and the student-PC Client for Windows 10 and 11: where to get them, how to check them, and how the Client is installed."
url: "/classroom-manager/download/"
aliases: ["/school/download/"]
translationKey: "school-download"
schoolPage: true
---
Classroom Manager has two programs: the **Host**, which the teacher runs, and the **Client**, which a school administrator installs once on each student computer. Both are **free to use and try**, and the source code is available if you want to build them yourself (Apache License 2.0). The source code is checked with [{{< product "aqafName" >}}]({{< product "aqafUrl" >}}), an architecture assessment framework.

The downloads are unsigned, so Windows shows security messages when you start them: that is expected, and you see what you run before you trust it. The Host from the Microsoft Store works with up to **3 computers online at the same time**, and the Host downloads from GitHub apply the same limit from release 1.2.2; the Client has no limit. A Host you build yourself from the source has no computer limit. A school license adds more computers, signed builds, updates and support: see [Pricing]({{< relref "/school/pricing" >}}).

{{< shot src="images/moments/en/message.png" alt="The teacher's Host and three student computers, each showing the same message from the teacher." caption="What you get: one console for the teacher, and the Client on each student computer. Recorded in a real classroom test." >}}

## Teacher computer: the Host

- **Microsoft Store:** [Get the Host from the Microsoft Store](https://apps.microsoft.com/detail/9P5BW5W79G41) to see how it looks and works. It is free and needs no account; with no Client on your network it starts with an empty computer list, so every window can be opened and looked at.
- **Direct download (unsigned):** [the Host program](https://github.com/dausuva/classroom-manager/releases/download/v{{< product "version" >}}/Dausuva-Classroom-Host-{{< product "version" >}}-win-x64.exe), one file you can run from anywhere. It offers **Help > Install on this computer**, which adds it to your Start menu without administrator rights. This first release is not signed, so Windows will warn before it runs: check the file against `SHA256SUMS.txt` first (see below).
- **winget (the Microsoft Store version):** `winget install 9P5BW5W79G41 --source msstore`
- **All versions, checksums and the software bill of materials:** [GitHub releases](https://github.com/dausuva/classroom-manager/releases)

## Student computers: the Client

An administrator installs the Client once on each computer, with administrator rights. It is not in the Microsoft Store: a Store app is installed per user and a student could remove it. See [Installing the Client]({{< relref "/school/client" >}}) for the lab key, the silent installation and the Windows tools you can deploy it with.

- **Direct download (unsigned):** [the Client program](https://github.com/dausuva/classroom-manager/releases/download/v{{< product "version" >}}/Dausuva-Classroom-Client-{{< product "version" >}}-win-x64.exe), one file. An administrator installs it on each student computer with the setup script from the source: the steps are in [Installing the Client]({{< relref "/school/client" >}}). This first release is not signed, so Windows will warn before it runs; check the file against `SHA256SUMS.txt` first.
- The Client installer (a Setup program that takes the lab key): **coming soon.** [Arrange a demo]({{< relref "/school/request" >}}) and we prepare an individual package for your school, with the Client installer and your lab key. The Client's source code and build steps are in the [public repository](https://github.com/dausuva/classroom-manager).

## Check what you downloaded

Every release has a `SHA256SUMS.txt`. In PowerShell: `Get-FileHash .\file.exe -Algorithm SHA256`, and compare with the line for that file. Each release also carries a software bill of materials (`sbom.cdx.json`) that lists every package the programs are built from.

## Signing

Releases are built by GitHub Actions from a tagged, public commit. A release that is signed says so on its release page; one that is not is named "(unsigned)" and Windows will warn before it runs. How releases are signed, and who approves them, is on the [code signing policy]({{< relref "/school/code-signing-policy" >}}) page. The first release, 1.2.1, is unsigned.

## Windows and privacy

Windows 10 and Windows 11, 64-bit; 32-bit builds are made on request. The Client installer has been run on Windows 10 version 1903 and 22H2 and on Windows 11; the teacher's Host needs Windows 10 version 2004 or later. A Client delivered as an MSIX package (for Intune or Configuration Manager) needs Windows 10 version 2004 (build 19041) or later, 64-bit; on older Windows 10 use the installer. The programs send nothing to Dausuva Labs: there is no cloud service. The Host can look once a day at github.com to see whether a newer version exists, and asks you the first time it starts; you can switch it off. See [Privacy]({{< relref "/school/privacy" >}}).

Something wrong with a download? [Support]({{< relref "/school/support" >}}).
