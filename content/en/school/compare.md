---
title: "Classroom Manager and Veyon, side by side."
description: "An honest feature comparison with Veyon, the free open-source classroom tool: where each one leads, what costs extra, and which fits your school."
url: "/school/compare/"
translationKey: "school-compare"
schoolPage: true
aliases: ["/classroom-manager/compare/"]
---
Veyon is the best-known free classroom tool for Windows and Linux labs, and many schools already know it. The two programs overlap on the everyday classroom actions but are built around different centres: **Veyon is about seeing and steering student screens; Classroom Manager is about preparing, configuring and looking after the Windows lab, without watching anyone's screen.**

Checked on 24 October 2026 against Veyon 4.11.4 (released 15 October 2026), its website, blog and documentation. Veyon was not installed for this comparison. Classroom Manager's column describes the current build; ask for a demo to see it.

## At a glance

| | Veyon | Classroom Manager |
|---|---|---|
| Built for | Watching and steering screens during a lesson | Preparing, configuring and maintaining a Windows lab |
| Student screens | Live thumbnails, remote view and control, screen broadcast | Deliberately none: no viewing, capture or recording |
| Computers | Windows 10/11 and Linux | Windows 10/11, 64-bit and 32-bit |
| Price | Free core (GPLv2); paid add-ons, priced on request | €499 the first year per school, then €299 a year; no per-PC charge |
| Support | Community, or a paid contract | Setup, onboarding and a year of updates and support included |
| Languages | Many | English and Lithuanian, every text |

## In the lesson

| Task | Veyon | Classroom Manager |
|---|---|---|
| Lock screens with a message | Yes | Yes |
| Send a message | Yes | Yes |
| Open a website or a program on every PC | Yes | Yes |
| Hand out files | Yes | Yes, to Desktop, Documents or any folder, with an undo |
| Collect files | Yes (since 4.10) | Yes, by name pattern, into a folder per student |
| See what students changed in the last half hour and copy it | No | Yes: recent files by time and type, copied in one click |
| Sign a student in remotely | Yes | Yes |
| Power on, restart, shut down | Yes | Yes, with a cancel |
| Exam mode with websites, apps, sound, camera and USB storage | Website blocking is a paid add-on; device control is a paid add-on | Included |

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
| Finding PCs | Paid add-on | Built-in, authenticated network discovery |

## Which one fits

**Choose Veyon** if seeing and steering students' screens is the point: live thumbnails, demonstrations from the teacher's screen, remote control, Linux labs, or a free tool with community help.

**Choose Classroom Manager** if the work is keeping a Windows lab ready: software, updates, settings, accounts and exam restrictions, files out and back, with a flat yearly price, help with the rollout, and no screen capture of minors to justify under GDPR.

Some schools could use both: Veyon for screen work in the lesson, Classroom Manager for the lab itself. Ask us whether that fits your setup.

## Sources

- [Veyon](https://veyon.io/en/), [its features](https://veyon.io/en/features/) and [add-ons](https://veyon.io/en/addons/)
- [Veyon 4.11.0 announcement](https://veyon.io/blog/2026/07/10/veyon-4-11-0-released/) and [release notes](https://docs.veyon.io/en/latest/admin/release-notes.html)
- [Classroom Manager source code](https://github.com/dausuva/classroom-manager) and the [facts we can show you](../proof/)

[Request a demo](../request/) · [See the pricing](../pricing/) · [What it costs per computer](../market/)
