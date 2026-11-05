---
title: "Classroom Manager and Veyon, side by side."
description: "Classroom Manager vs Veyon, the free open-source classroom tool: what each does, what costs extra, and which fits your school."
url: "/classroom-manager/compare-veyon/"
aliases: ["/school/compare-veyon/"]
translationKey: "school-compare-veyon"
schoolPage: true
nofollowExternal: true
---
<p class="verdict"><strong>In one sentence:</strong> Veyon is a free, open-source classroom tool for seeing and steering student screens; Classroom Manager prepares and maintains a Windows lab without watching screens.</p>

Veyon is the best-known free classroom tool for Windows and Linux labs, and many schools already know it. The two programs overlap on the everyday classroom actions but are built around different centres: **Veyon is about seeing and steering student screens; Classroom Manager is about preparing, configuring and looking after the Windows lab, without watching anyone's screen.**

Checked again on 5 November 2026 against Veyon 4.11.4 (released 15 October 2026, still the newest release), its features and add-ons pages, its release notes and its news page. Veyon was not installed for this comparison. Classroom Manager's column describes the current build; ask for a demo to see it.

## At a glance

| | Veyon | Classroom Manager |
|---|---|---|
| Built for | Watching and steering screens during a lesson | Preparing, configuring and maintaining a Windows lab |
| Student screens | Live thumbnails, remote view and control, screen broadcast | Deliberately none: no viewing, capture or recording |
| Computers | Windows 10/11 and Linux (experimental Wayland support since 4.11) | Windows 10/11, 64-bit and 32-bit |
| Price | Free core (GPLv2); paid add-ons, priced on request | Free for up to 3 computers online at once; for a school, €499 the first year, then €299 a year; no per-PC charge |
| Support | Community, or a paid contract | Setup, onboarding and a year of updates and support included |
| Languages | Many | English and Lithuanian, every text |

## In the lesson

| Task | Veyon | Classroom Manager |
|---|---|---|
| Watch student screens (thumbnails, one screen at full size), take screenshots | Yes | Deliberately no |
| Show the teacher's screen, or a student's, to the class | Yes (screen broadcast, demo) | No |
| Record student screens as video | Paid add-on (Screen Recorder) | Deliberately no |
| Lock screens with a message | Yes | Yes |
| Send a message | Yes | Yes |
| Open a website or a program on every PC | Yes | Yes |
| Hand out files | Yes | Yes, to Desktop, Documents or any folder, with an undo |
| Collect files | Yes (since 4.10) | Yes, by name pattern, into a folder per student |
| See what students changed in the last half hour and copy it | No | Yes: recent files by time and type, copied in one click |
| Sign a student in remotely | Yes | Yes |
| Power on, restart, shut down | Yes | Yes, with a cancel |
| Exam mode with websites, apps, sound, camera and USB storage | Internet access control (since 4.11 also per website) and device control (audio, microphones, webcams, USB) are paid add-ons | Included |

## Looking after the lab

| Task | Veyon | Classroom Manager |
|---|---|---|
| Install or uninstall software on many PCs | No | Yes: installers, MSI, winget, registry files |
| Windows Update: check, choose, install, pause | Only at power-down | Yes |
| Accounts, processes, scheduled tasks, start-up programs, registry | No | Yes |
| Wallpaper, sign-in picture, screen saver, themes, keyboard layouts | No | Yes |
| Rename computers, set the clock on every PC | No | Yes |
| Schedules that catch up computers that were off | No | Yes: clock sync, update checks, monthly backup of student work |
| Command line for scripts and Task Scheduler | Yes, and a web API | Yes, no web API |
| Diagnostics when something does not connect | Logs | Two health checkers and documented error codes |

## Access and security

| | Veyon | Classroom Manager |
|---|---|---|
| Who may control | Windows or Linux logon, or key files; group rules | Lab keys with Observer, Teacher or Admin roles, checked by each PC; keys can be limited to rooms |
| Directory | Built-in list or LDAP/Active Directory; Entra ID as a paid add-on | Built-in list with rooms |
| Encryption | Not established for the main channel from the pages read | TLS 1.2/1.3 always on, an approved certificate per PC, signed and checked frames |
| Finding PCs | Paid add-on (Network Discovery) | Built-in, authenticated network discovery |

## What changed in Veyon recently

- **4.11.0 (10 July 2026):** experimental Wayland support on Linux; the Internet Access Control add-on can restrict access to chosen websites instead of cutting the internet entirely.
- **4.11.1 (21 August):** security hardening of the VNC protocol and the internal feature communication, a limit on simultaneous server connections, and custom titles for text messages.
- **4.11.3 (18 September):** a visibility mode that can blur or hide the thumbnails in the monitoring view.
- **4.11.4 (15 October):** fixes, including features that stopped working after a Windows Defender update.

Veyon's add-ons today: Internet Access Control, Auvidus (audio, microphones, webcams and USB), Screen Recorder, Chat, Entra ID Connector and Network Discovery. None has a published price; each is quoted on request.

## Which one fits

**Choose Veyon** if seeing and steering students' screens is the point: live thumbnails, demonstrations from the teacher's screen, remote control, Linux labs, or a free tool with community help.

**Choose Classroom Manager** if the work is keeping a Windows lab ready: software, updates, settings, accounts and exam restrictions, files out and back, with a flat yearly price, help with the rollout, and no screen capture of minors to justify under GDPR.

Some schools could use both: Veyon for screen work in the lesson, Classroom Manager for the lab itself. Ask us whether that fits your setup.

## Sources (read on 5 November 2026)

- [Veyon](https://veyon.io/en/), [its features](https://veyon.io/en/features/) and [add-ons](https://veyon.io/en/addons/)
- [Veyon releases on GitHub](https://github.com/veyon/veyon/releases) and [news](https://veyon.io/blog/)
- [Veyon 4.11.0 announcement](https://veyon.io/blog/2026/07/10/veyon-4-11-0-released/) and [release notes](https://docs.veyon.io/en/latest/admin/release-notes.html)
- <span class="soon" title="available once the public repository is open">Classroom Manager source code</span> and the [facts we can show you](../proof/)

See [all comparisons]({{< relref "/school/compare" >}}), including [Tactical RMM]({{< relref "/school/compare-tactical-rmm" >}}) and [NetSupport School]({{< relref "/school/compare-netsupport-school" >}}).

[Request a demo](../request/) · [See the pricing](../pricing/) · [What it costs per computer](../market/)
