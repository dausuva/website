---
title: "Classroom Manager and Microsoft's school PC tools, side by side."
description: "An honest comparison with Microsoft's Set up School PCs app and the Take a Test secure assessment app for Windows: what each does, what it needs, and how a lock-down approach differs from block lists."
url: "/school/compare-windows-take-a-test/"
translationKey: "school-compare-microsoft"
schoolPage: true
nofollowExternal: true
---
Schools that run Windows already have two tools from Microsoft: **Set up School PCs**, an app that prepares new PCs for school use, and **Take a Test**, a built-in secure browser for assessments. They are not classroom management programs, but a school IT person will ask how they differ from one, and they show a different **approach** to the same jobs: Microsoft locks a PC down for a test, and sets it up once; Classroom Manager keeps controlling the lab's PCs during the day.

Checked on 5 November 2026 against Microsoft Learn's pages on Set up School PCs and Take a Test (last-updated dates shown in the sources below; Microsoft also warns that support for Windows 11 SE ends in October 2026). We did not set up either tool for this comparison. Classroom Manager's column describes the current build; ask for a demo to see it.

## At a glance

| | Set up School PCs and Take a Test | Classroom Manager |
|---|---|---|
| What they are | Set up School PCs saves "school-optimized settings, apps, and policies into a single provisioning package" for a USB drive. Take a Test is a built-in locked-down browser | A teacher's console and a Client on each PC for running and maintaining a lab |
| When they act | Once, when a PC is set up; and during a test | All day, on demand: lesson actions, maintenance, schedules |
| Needs | Windows 10 version 1703 or later for Set up School PCs; Microsoft Entra ID or Microsoft 365 to join PCs to a tenant (it can also set PCs up without the internet) | Windows 10/11 on the Host and the Clients; no cloud account |
| Price | Take a Test is built into Windows; Set up School PCs: no price stated on the page read | Published: free for up to 3 computers online at once; for a school, €499 the first year, then €299 a year |
| Student screens | Not applicable: no viewing | Deliberately none |

## Preparing the PCs

| Task | Set up School PCs | Classroom Manager |
|---|---|---|
| Fast sign-in, a school Start layout, a guest account, school policies | Yes: "fast sign-in", a custom Start experience, guest account with no sign-in, "school policies" | Not the aim: wallpaper, sign-in picture, screen saver, themes and keyboard layouts can be set on the running lab |
| Join PCs to the school's cloud identity, single sign-on to Office 365 | Yes (Microsoft Entra join; sign-on to Office 365) | No: the lab is run with lab keys, not a cloud account |
| Install software on many PCs afterwards, Windows Update, inventory, accounts | Not part of the app | Yes: installers, MSI, winget, registry files; Windows Update; inventory with CSV export; accounts |
| Applied by | A provisioning package saved to a USB drive and distributed to the school PCs | Pushed from the Host to the PCs that are on the network |

## Assessments

| | Take a Test | Classroom Manager Exam mode |
|---|---|---|
| Approach | A lock-down: the test runs above the Windows lock screen, full screen, with no other apps; "the lock-down process is atomic" | Restriction lists applied while the lab keeps running normally |
| What students cannot do | Print, capture the screen or use text suggestions (unless enabled), open other apps, change system settings, use content copied to the clipboard | Programs and websites on the block list; sound, camera and USB storage can be restricted |
| How it starts | A secure assessment link the teacher shares, or a dedicated "kiosk" account for higher-stakes tests | The teacher turns Exam mode on from the Host for the chosen computers |
| How a student gets out | Ctrl+Alt+Delete and a password; a "permissive mode" lets accessibility apps run | The teacher turns Exam mode off |
| Where the test comes from | Any web page; Microsoft Forms can make quizzes; it follows the SBAC secure-browser standard | Not provided: Classroom Manager has no tests of its own |
| Standing | A secure assessment environment | "Practical classroom controls, not a secure-exam environment" |

## Which one fits

**Use Microsoft's tools** to prepare new PCs once, to join them to your Microsoft Entra ID or Microsoft 365 tenant, and for a properly locked-down assessment through Take a Test.

**Add Classroom Manager** for what happens between those: running a lesson from the teacher's PC, keeping the lab's software and updates in order, and Exam-mode restrictions for ordinary classwork and quizzes. They do not compete: a school can set PCs up with Set up School PCs, run the lab with Classroom Manager, and use Take a Test for formal exams. See also [all comparisons]({{< relref "/school/compare" >}}) and [how the same jobs are done differently]({{< relref "/school/compare-approaches" >}}).

## Sources (read on 5 November 2026)

- [Set up School PCs technical reference](https://learn.microsoft.com/en-us/education/windows/suspcs/reference) (page dated 29 October 2024)
- [Take tests and assessments in Windows](https://learn.microsoft.com/en-us/education/windows/take-tests-in-windows) (updated 11 December 2025) and the [Take a Test technical reference](https://learn.microsoft.com/en-us/education/windows/take-a-test-app-technical) (updated 4 June 2025)
- <span class="soon" title="available once the public repository is open">Classroom Manager source code</span> and the [facts we can show you]({{< relref "/school/proof" >}})

[Request a demo]({{< relref "/school/request" >}}) · [See the pricing]({{< relref "/school/pricing" >}}) · [What it costs per computer]({{< relref "/school/market" >}})
