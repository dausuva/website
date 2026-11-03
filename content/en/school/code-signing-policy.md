---
title: "Code signing policy"
description: "How Classroom Manager releases are built, who approves them, what is signed, and what the programs do and do not send."
url: "/school/code-signing-policy/"
translationKey: "school-code-signing-policy"
schoolPage: true
---
<!-- When the SignPath Foundation has accepted the project, add here, in this order: the sentence
"Free code signing provided by SignPath.io, certificate by SignPath Foundation." with the two names linked to https://about.signpath.io/ and https://signpath.org/ .
Do not add it before: until then releases are not signed that way. -->

This page says how Classroom Manager releases are made and approved. The same text is in the project's repository as `CODE_SIGNING_POLICY.md`.

## What is built and signed

- Two programs: the **Host** (`ClassroomHost.exe`, the teacher console) and the **Client** (`ClassroomClient.exe`, the service and helper on student computers), and the installers that contain them.
- Every release is built by GitHub Actions from a tagged commit in the public repository, <span class="soon" title="available once the public repository is open">github.com/dausuva/classroom-manager</span>. The build scripts and the workflow are in the repository and are reviewed like the code.
- Only programs built from this repository's own source are signed. Packages the programs use are listed, with their versions and hashes, in the software bill of materials of each release.

## Who decides

- **Authors and reviewers:** the maintainers of Dausuva MB. Every change to the repository is reviewed by a maintainer before it is merged.
- **Approver:** a maintainer approves each signing request by hand for each release. Nothing is signed automatically.
- Everyone with a role uses two-factor authentication on GitHub and on the signing service.

## Until signing is in place

A release that is not signed is named "(unsigned)" on its page, and Windows will warn before it runs. Every release, signed or not, has `SHA256SUMS.txt`: check your download against it. A version you build yourself from the source is unofficial and unsigned.

## What the programs send

The programs send no information to other networked systems unless the person using them asks for it. There is no cloud service. The teacher's Host can look once a day at github.com to see whether a newer version exists (nothing is downloaded); it asks the first time it starts and the choice can be changed in the settings. See [Privacy]({{< relref "/school/privacy" >}}).

## Removing the programs

Both programs have an uninstaller in Settings > Apps. The Host also removes the Client from a student computer when the teacher asks.

## Reporting a problem

A weakness in the programs or the release process: write to {{< contact >}} (see [Security]({{< relref "/school/security" >}})). Do not open a public issue for it.
