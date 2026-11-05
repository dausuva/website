---
title: "Classroom Manager and Tactical RMM, side by side."
description: "An honest comparison with Tactical RMM, the free self-hosted remote monitoring and management tool: what each is built for, what it takes to run, what costs extra, and which fits a school lab."
url: "/school/compare-tactical-rmm/"
translationKey: "school-compare-rmm"
schoolPage: true
nofollowExternal: true
---
Tactical RMM is a popular free, self-hosted tool for IT departments and service providers who look after many Windows (and some Linux and Mac) computers from one web console. A school IT team may well know it. It overlaps with Classroom Manager on the maintenance side, but the two are built around different people: **Tactical RMM is for the administrator who watches and repairs a fleet; Classroom Manager is for the teacher in front of a lab, with the administrator's tools beside it.**

Checked on 5 November 2026 against the Tactical RMM documentation (home page, server installation guide and license page) and its GitHub repository. Tactical RMM was not installed for this comparison, and its documentation changes; check it for anything you rely on. Classroom Manager's column describes the current build; ask for a demo to see it.

## At a glance

| | Tactical RMM | Classroom Manager |
|---|---|---|
| Built for | Remote monitoring and management of many computers by IT staff | Preparing, running a lesson in, and maintaining a Windows lab, by a teacher or school IT |
| How it is arranged | A central server you install and run, and an agent on every computer | No server: the teacher's Host connects straight to a Client on each computer over the school network |
| What you must run | A Linux server (Debian 13 or Ubuntu 26.04 LTS, at least 4 GB of RAM) with three DNS names, TLS certificates and TCP port 443 | One Host on the teacher's PC and a Client on each student PC; no server, no DNS names |
| Computers | Windows 7 to 11 and Windows Server; Linux and Mac agents are a sponsor feature | Windows 10/11, 64-bit and 32-bit |
| Price | Free to use for your own in-house systems; see the license below | Free for up to 3 computers online at once; for a school, €499 the first year, then €299 a year; no per-PC charge |
| Support | Documentation and community | Setup, onboarding and a year of updates and support included |
| Languages | Not checked | English and Lithuanian, every text |

## In the lesson

| Task | Tactical RMM | Classroom Manager |
|---|---|---|
| Lock screens with a teacher's message | Not in its feature list | Yes |
| Send a message to students | Not in its feature list | Yes |
| Open a website or a program on every PC | Through a script | Yes, one click, saved buttons |
| Hand out files to student folders | Not in its feature list (it has a remote file browser) | Yes, to Desktop, Documents or any folder, with an undo |
| Collect files by name pattern, a folder per student | Not in its feature list | Yes |
| Exam mode with websites, apps, sound, camera and USB storage | Not in its feature list | Included |
| Remote desktop to one computer | Yes (through MeshCentral) | No, deliberately: no viewing, capture or recording of student screens |

## Looking after the computers

| Task | Tactical RMM | Classroom Manager |
|---|---|---|
| Install or uninstall software on many PCs | Yes, through Chocolatey | Yes: installers, MSI, winget, registry files |
| Windows Update: check, choose, install | Yes, patch management | Yes, with pause and resume |
| Hardware and software inventory | Yes | Yes, with CSV export |
| Run scripts | Yes: PowerShell, batch, Python, bash, Nushell and Deno | Run a command on chosen PCs; a command line for scripts and Task Scheduler |
| Remote shell, file browser, registry editor | Yes | Yes |
| Automated checks and alerts by e-mail, SMS or webhook | Yes | No: the console shows each computer's state; there are no alerts |
| Schedules | Automated tasks on the agents | Lock, message, wake, restart, shutdown, clock sync, update checks and a monthly backup of student work, catching up computers that were off |
| Wallpaper, sign-in picture, screen saver, themes, keyboard layouts | Through scripts | Built in |
| Diagnostics when something does not connect | Server and agent logs | Two health checkers and documented error codes |

## Access, security and licensing

| | Tactical RMM | Classroom Manager |
|---|---|---|
| Who may control | Technician accounts on the web console, with a one-time-code login app | Lab keys with Observer, Teacher or Admin roles, checked by each PC; keys can be limited to rooms |
| Where the control path goes | Agents connect to your server, which can stay on the school network or be opened on port 443 for computers elsewhere | Host to Client on the school network only; the control ports are not meant to face the internet |
| Single sign-on, reports, code-signed Windows agents | Sponsor features | Signed programs and installers and a Reports tab are part of the product; there is no single sign-on, access is by lab keys |
| License | Source-available under the Tactical RMM License, which says it is not an open-source license | A commercial license for the school; free for up to 3 computers online at once |
| Terms of use | Free to host and use for in-house networks and systems; commercial or for-profit services (SaaS, managed hosting, installation or configuration services) need the vendor's written approval | One yearly price for the school, no per-PC charge |

## Which one fits

**Choose Tactical RMM** if you are an IT department or a service provider with many computers across places, you want alerts when something fails, remote desktop and a script library, you are comfortable running and securing a Linux server and DNS names, and you only manage your own organisation's computers (or have the vendor's approval for anything commercial).

**Choose Classroom Manager** if the people using it are teachers and a small school IT team who want to lock, message, hand out and collect files and run exams from the teacher's PC, with no server to build, the maintenance tools beside them, a flat yearly price, help with the rollout, and no screen capture of minors to justify under GDPR.

Some schools could use both: Tactical RMM for the district's fleet and alerts, Classroom Manager for the lab in front of the class. Ask us whether that fits your setup. See also the [comparison with Veyon]({{< relref "/school/compare-veyon" >}}) and [all comparisons]({{< relref "/school/compare" >}}).

## Sources

- [Tactical RMM documentation](https://docs.tacticalrmm.com/), its [server installation guide](https://docs.tacticalrmm.com/install_server/) and [license](https://docs.tacticalrmm.com/license/)
- [Tactical RMM on GitHub](https://github.com/amidaware/tacticalrmm)
- <span class="soon" title="available once the public repository is open">Classroom Manager source code</span> and the [facts we can show you]({{< relref "/school/proof" >}})

[Request a demo]({{< relref "/school/request" >}}) · [See the pricing]({{< relref "/school/pricing" >}}) · [What it costs per computer]({{< relref "/school/market" >}})
