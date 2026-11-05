---
title: "The same job, done differently."
description: "How classroom management products approach the same everyday jobs: watching screens, getting attention, sharing files, restricting the web, testing, hosting and price. Which combination of features a school lab needs, from the vendors' own pages."
url: "/classroom-manager/compare-approaches/"
aliases: ["/school/compare-approaches/"]
translationKey: "school-compare-approaches"
schoolPage: true
nofollowExternal: true
---
Almost every product on our [comparison pages]({{< relref "/school/compare" >}}) can "lock the screens" or "send a file". The useful question is **how** each does it, because the approach decides who the product suits. This page lines the products up job by job, using only what each vendor says on its own pages (read on 5 November 2026; each product's page lists its sources). Where a vendor does not say, we write "not stated". Classroom Manager's entries describe the current build.

**The products, in alphabetical order:** Classroom Manager, [Faronics Insight]({{< relref "/school/compare-faronics-insight" >}}), [Impero Education Pro]({{< relref "/school/compare-impero-education-pro" >}}), [LanSchool]({{< relref "/school/compare-lanschool" >}}), [Microsoft's Take a Test and Set up School PCs]({{< relref "/school/compare-windows-take-a-test" >}}), [NetSupport School]({{< relref "/school/compare-netsupport-school" >}}), [remote desktop tools]({{< relref "/school/compare-remote-tools" >}}), [Tactical RMM]({{< relref "/school/compare-tactical-rmm" >}}) and [Veyon]({{< relref "/school/compare-veyon" >}}). The first five are classroom products built around the students' screens; Tactical RMM and the remote tools are built around reaching a computer; Microsoft's tools prepare PCs and lock them down for a test.

## 1. Seeing the students' screens

| Product | Approach |
|---|---|
| Classroom Manager | **None, by design**: no viewing, capture or recording. The teacher acts on the computers and sees their state, not their screens |
| Faronics Insight | Thumbnails of every device, with alerts for banned words, messages and raised hands |
| Impero Education Pro | "Real-time visibility of every student's screen", with keyword flags for safeguarding |
| LanSchool | Real-time thumbnails, or one screen at full size; snapshots; web, app and keystroke history (Classic) |
| NetSupport School | Live views through adjustable thumbnails, including dual monitors; app, website and keyboard activity |
| Remote desktop tools | One computer at a time, on request |
| Veyon | Thumbnails of connected computers, a remote view of one at full size, remote control, screenshots |

## 2. Getting the class's attention

| Product | Approach |
|---|---|
| Classroom Manager | Lock the screens with the teacher's message; send a message |
| Faronics Insight | Blank screens with custom text or images |
| LanSchool | Blank and lock devices; broadcast the teacher's screen, where a full-screen view locks student devices |
| NetSupport School | Blank or lock screens, and keyboards and mice; messages with clickable links |
| Veyon | Lock screens and input devices temporarily; send a short message |

## 3. Putting a page or a program on every screen

| Product | Approach |
|---|---|
| Classroom Manager | The same, plus saved buttons (for example a "Class website" button) so a repeated action is one click |
| Faronics Insight, LanSchool, NetSupport School, Veyon | A built-in action: open a website, launch an app on selected or all devices |
| Remote desktop tools, Tactical RMM | Through a script, or per computer |

## 4. Handing out and collecting files

| Product | Approach |
|---|---|
| Classroom Manager | To Desktop, Documents or any folder, **with an undo**; collected by name pattern into a folder per student; "recent files" lists what students changed in the last half hour and copies it |
| Faronics Insight, LanSchool | Send and collect files |
| NetSupport School | Send files and folders to one or many students; collect work |
| Remote desktop tools | A file transfer inside one connection |
| Veyon | File distribution, and file collection since 4.10 |

## 5. Restricting the web and programs

| Product | Approach |
|---|---|
| Classroom Manager | Exam mode: block lists for programs and websites, plus sound, camera and USB storage; "practical classroom controls, not a secure-exam environment" |
| Faronics Insight | Allow or block websites and apps, see history, disable InPrivate/Incognito, stop running apps |
| Impero Education Pro | Keyword detection and flags; web filtering is a separate product (ContentKeeper) |
| LanSchool | Limit the web to approved sites and disable internet during tests; limit apps; keyword alerts to a central server (Classic) |
| NetSupport School | Only approved programs and websites, or block listed ones |
| Take a Test (Microsoft) | A lock-down of the whole PC for the test, above the lock screen |
| Veyon | An add-on (Internet Access Control, since 4.11 also per website) and another for devices |

## 6. Testing

| Product | Approach |
|---|---|
| Classroom Manager, Veyon | No tests of their own |
| Faronics Insight | Built-in tests (true/false, multiple choice, short answer, essay) and polls with real-time results |
| LanSchool | Built-in tests of up to 100 questions that grade themselves, and voting with CSV export |
| NetSupport School | Built-in tests with text, picture, audio and video questions, marked automatically; surveys |
| Take a Test (Microsoft) | A locked-down browser for a test hosted elsewhere (Microsoft Forms can make quizzes) |

## 7. Where the product runs, and what it needs

| Product | Approach |
|---|---|
| Classroom Manager | **No server and no cloud account**: the Host on the teacher's PC connects straight to a Client on each computer over the school network |
| Faronics Insight | Controlled "from one central computer"; listed as on-premise |
| Impero Education Pro, NetSupport School | Not stated on the pages read (Impero: "various hosting options") |
| LanSchool | Two editions: Classic hosted on the school's servers, Air hosted in the cloud |
| Microsoft's tools | Set up School PCs joins PCs to Microsoft Entra ID or Microsoft 365 (it can also set up PCs without the internet) |
| Remote desktop tools | A vendor cloud (TeamViewer, DWService), cloud or on-premises (AnyDesk), or your own server (RustDesk) |
| Tactical RMM | A Linux server you run, with three DNS names, and an agent on every computer |
| Veyon | A service on each computer and a Master console (no central server is described on its pages) |

## 8. Looking after the computers themselves

| Product | Approach |
|---|---|
| Classroom Manager | Software (installers, MSI, winget, registry files), Windows Update, inventory, accounts, processes, scheduled tasks, start-up programs, registry, wallpaper and themes, renaming, clock sync, schedules that catch up computers that were off |
| Faronics Insight, Impero Education Pro, NetSupport School | Not itemised on the pages read (NetSupport has a Technician's Console for IT staff) |
| LanSchool | Remote login to install apps or updates while students work (Classic) |
| Microsoft's tools | Set up School PCs prepares new PCs once: sign-in, Start layout, policies, join |
| Tactical RMM | The full set: scripts, patch management, software through Chocolatey, inventory, checks and alerts |
| Veyon | Power control and user login; no software installation |

## 9. How it is priced

| Product | Approach |
|---|---|
| Classroom Manager | Published: free for up to 3 computers online at once; for a school, €499 the first year, then €299 a year; no per-PC charge |
| Faronics Insight | A quote through sales; volume and education pricing are not available online |
| Impero Education Pro | Not stated on the page read |
| LanSchool | "Single SKU" pricing, one price for either hosting edition; a quote; a free year with eligible Lenovo devices |
| Microsoft's tools | Take a Test is built into Windows; Set up School PCs: not stated on the page read |
| NetSupport School | A quote by number of devices; a "buy once and own forever" option |
| Remote desktop tools | Per-user or per-plan (TeamViewer, AnyDesk), a Pro edition (RustDesk), accounts and subscriptions (DWService) |
| Tactical RMM | Free to host for your own systems; commercial services need the vendor's approval |
| Veyon | A free core; add-ons are priced on request |

## Which combination of features a school lab needs

A computer lab usually needs five things together. The table shows which products say they offer each, according to the pages we read. A dash means we did not find it there, not that it does not exist.

| What the lab needs | Classroom Manager | Faronics Insight | Impero | LanSchool | Microsoft | NetSupport | Remote tools | Tactical RMM | Veyon |
|---|---|---|---|---|---|---|---|---|---|
| Lesson control for the teacher (lock, message, push a page, files) | Yes | Yes | Listed, not itemised | Yes | — | Yes | — | — | Yes |
| Seeing the students' screens | By design, no | Yes | Yes | Yes | — | Yes | One at a time | Remote desktop | Yes |
| Assessment (tests or a locked-down test) | Restrictions only | Tests | — | Tests | Lock-down | Tests | — | — | — |
| Safeguarding alerts (keywords) | — | Banned-word alerts | Yes | Keyword alerts | — | — | — | — | — |
| Lab upkeep (software, updates, inventory) | Yes | Not stated | Not stated | Some (Classic) | One-time setup | Not stated | Per computer | Yes | Little |
| No server and no cloud account | Yes | Not stated | Not stated | Classic: local | Entra ID only to join PCs | Not stated | Varies | Needs a server | Not described |
| Published price | Yes | No | No | No | Built in | No | Varies | Free, in-house | Core free |

**What the table shows:** the classroom products agree on lesson control and differ on what sits around it: Insight, LanSchool, NetSupport and Impero add student-screen visibility, tests or safeguarding; Tactical RMM and Classroom Manager add care of the computers themselves. Only Classroom Manager combines lesson control with lab upkeep **and** gives up screen viewing on purpose. That is a trade, not an advantage for every school: if you need to see screens, or need keyword safeguarding, or tests, choose a product that has them.

## Sources (read on 5 November 2026)

Each product's own comparison page lists its vendor sources: [Faronics Insight]({{< relref "/school/compare-faronics-insight" >}}), [Impero Education Pro]({{< relref "/school/compare-impero-education-pro" >}}), [LanSchool]({{< relref "/school/compare-lanschool" >}}), [Microsoft's tools]({{< relref "/school/compare-windows-take-a-test" >}}), [NetSupport School]({{< relref "/school/compare-netsupport-school" >}}), [remote desktop tools]({{< relref "/school/compare-remote-tools" >}}), [Tactical RMM]({{< relref "/school/compare-tactical-rmm" >}}) and [Veyon]({{< relref "/school/compare-veyon" >}}). Classroom Manager's entries come from the [facts we can show you]({{< relref "/school/proof" >}}) and the [features page]({{< relref "/school/features" >}}).

[Request a demo]({{< relref "/school/request" >}}) · [See the pricing]({{< relref "/school/pricing" >}}) · [What it costs per computer]({{< relref "/school/market" >}})
