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

**The products:** Veyon, NetSupport School, [Faronics Insight]({{< relref "/school/compare-faronics-insight" >}}), [LanSchool]({{< relref "/school/compare-lanschool" >}}), [Impero Education Pro]({{< relref "/school/compare-impero-education-pro" >}}), [Microsoft's Take a Test and Set up School PCs]({{< relref "/school/compare-windows-take-a-test" >}}), [Tactical RMM]({{< relref "/school/compare-tactical-rmm" >}}), [remote desktop tools]({{< relref "/school/compare-remote-tools" >}}), and Classroom Manager. The first five are classroom products built around the students' screens; Tactical RMM and the remote tools are built around reaching a computer; Microsoft's tools prepare PCs and lock them down for a test.

## 1. Seeing the students' screens

| Product | Approach |
|---|---|
| Veyon | Thumbnails of connected computers, a remote view of one at full size, remote control, screenshots |
| NetSupport School | Live views through adjustable thumbnails, including dual monitors; app, website and keyboard activity |
| Faronics Insight | Thumbnails of every device, with alerts for banned words, messages and raised hands |
| LanSchool | Real-time thumbnails, or one screen at full size; snapshots; web, app and keystroke history (Classic) |
| Impero Education Pro | "Real-time visibility of every student's screen", with keyword flags for safeguarding |
| Remote desktop tools | One computer at a time, on request |
| Classroom Manager | **None, by design**: no viewing, capture or recording. The teacher acts on the computers and sees their state, not their screens |

## 2. Getting the class's attention

| Product | Approach |
|---|---|
| Veyon | Lock screens and input devices temporarily; send a short message |
| NetSupport School | Blank or lock screens, and keyboards and mice; messages with clickable links |
| Faronics Insight | Blank screens with custom text or images |
| LanSchool | Blank and lock devices; broadcast the teacher's screen, where a full-screen view locks student devices |
| Classroom Manager | Lock the screens with the teacher's message; send a message |

## 3. Putting a page or a program on every screen

| Product | Approach |
|---|---|
| Veyon, NetSupport School, Faronics Insight, LanSchool | A built-in action: open a website, launch an app on selected or all devices |
| Classroom Manager | The same, plus saved buttons (for example a "Class website" button) so a repeated action is one click |
| Tactical RMM, remote tools | Through a script, or per computer |

## 4. Handing out and collecting files

| Product | Approach |
|---|---|
| Veyon | File distribution, and file collection since 4.10 |
| NetSupport School | Send files and folders to one or many students; collect work |
| Faronics Insight, LanSchool | Send and collect files |
| Classroom Manager | To Desktop, Documents or any folder, **with an undo**; collected by name pattern into a folder per student; "recent files" lists what students changed in the last half hour and copies it |
| Remote desktop tools | A file transfer inside one connection |

## 5. Restricting the web and programs

| Product | Approach |
|---|---|
| Veyon | An add-on (Internet Access Control, since 4.11 also per website) and another for devices |
| NetSupport School | Only approved programs and websites, or block listed ones |
| Faronics Insight | Allow or block websites and apps, see history, disable InPrivate/Incognito, stop running apps |
| LanSchool | Limit the web to approved sites and disable internet during tests; limit apps; keyword alerts to a central server (Classic) |
| Impero Education Pro | Keyword detection and flags; web filtering is a separate product (ContentKeeper) |
| Take a Test (Microsoft) | A lock-down of the whole PC for the test, above the lock screen |
| Classroom Manager | Exam mode: block lists for programs and websites, plus sound, camera and USB storage; "practical classroom controls, not a secure-exam environment" |

## 6. Testing

| Product | Approach |
|---|---|
| NetSupport School | Built-in tests with text, picture, audio and video questions, marked automatically; surveys |
| Faronics Insight | Built-in tests (true/false, multiple choice, short answer, essay) and polls with real-time results |
| LanSchool | Built-in tests of up to 100 questions that grade themselves, and voting with CSV export |
| Take a Test (Microsoft) | A locked-down browser for a test hosted elsewhere (Microsoft Forms can make quizzes) |
| Veyon, Classroom Manager | No tests of their own |

## 7. Where the product runs, and what it needs

| Product | Approach |
|---|---|
| Veyon | A service on each computer and a Master console (no central server is described on its pages) |
| NetSupport School, Impero Education Pro | Not stated on the pages read (Impero: "various hosting options") |
| Faronics Insight | Controlled "from one central computer"; listed as on-premise |
| LanSchool | Two editions: Classic hosted on the school's servers, Air hosted in the cloud |
| Microsoft's tools | Set up School PCs joins PCs to Microsoft Entra ID or Microsoft 365 (it can also set up PCs without the internet) |
| Tactical RMM | A Linux server you run, with three DNS names, and an agent on every computer |
| Remote desktop tools | A vendor cloud (TeamViewer, DWService), cloud or on-premises (AnyDesk), or your own server (RustDesk) |
| Classroom Manager | **No server and no cloud account**: the Host on the teacher's PC connects straight to a Client on each computer over the school network |

## 8. Looking after the computers themselves

| Product | Approach |
|---|---|
| Veyon | Power control and user login; no software installation |
| NetSupport School, Faronics Insight, Impero Education Pro | Not itemised on the pages read (NetSupport has a Technician's Console for IT staff) |
| LanSchool | Remote login to install apps or updates while students work (Classic) |
| Microsoft's tools | Set up School PCs prepares new PCs once: sign-in, Start layout, policies, join |
| Tactical RMM | The full set: scripts, patch management, software through Chocolatey, inventory, checks and alerts |
| Classroom Manager | Software (installers, MSI, winget, registry files), Windows Update, inventory, accounts, processes, scheduled tasks, start-up programs, registry, wallpaper and themes, renaming, clock sync, schedules that catch up computers that were off |

## 9. How it is priced

| Product | Approach |
|---|---|
| Veyon | A free core; add-ons are priced on request |
| NetSupport School | A quote by number of devices; a "buy once and own forever" option |
| Faronics Insight | A quote through sales; volume and education pricing are not available online |
| LanSchool | "Single SKU" pricing, one price for either hosting edition; a quote; a free year with eligible Lenovo devices |
| Impero Education Pro | Not stated on the page read |
| Microsoft's tools | Take a Test is built into Windows; Set up School PCs: not stated on the page read |
| Tactical RMM | Free to host for your own systems; commercial services need the vendor's approval |
| Remote desktop tools | Per-user or per-plan (TeamViewer, AnyDesk), a Pro edition (RustDesk), accounts and subscriptions (DWService) |
| Classroom Manager | Published: free for up to 3 computers online at once; for a school, €499 the first year, then €299 a year; no per-PC charge |

## Which combination of features a school lab needs

A computer lab usually needs five things together. The table shows which products say they offer each, according to the pages we read. A dash means we did not find it there, not that it does not exist.

| What the lab needs | Veyon | NetSupport | Insight | LanSchool | Impero | Microsoft | Tactical RMM | Remote tools | Classroom Manager |
|---|---|---|---|---|---|---|---|---|---|
| Lesson control for the teacher (lock, message, push a page, files) | Yes | Yes | Yes | Yes | Listed, not itemised | — | — | — | Yes |
| Seeing the students' screens | Yes | Yes | Yes | Yes | Yes | — | Remote desktop | One at a time | By design, no |
| Assessment (tests or a locked-down test) | — | Tests | Tests | Tests | — | Lock-down | — | — | Restrictions only |
| Safeguarding alerts (keywords) | — | — | Banned-word alerts | Keyword alerts | Yes | — | — | — | — |
| Lab upkeep (software, updates, inventory) | Little | Not stated | Not stated | Some (Classic) | Not stated | One-time setup | Yes | Per computer | Yes |
| No server and no cloud account | Not described | Not stated | Not stated | Classic: local | Not stated | Entra ID only to join PCs | Needs a server | Varies | Yes |
| Published price | Core free | No | No | No | No | Built in | Free, in-house | Varies | Yes |

**What the table shows:** the classroom products agree on lesson control and differ on what sits around it: Insight, LanSchool, NetSupport and Impero add student-screen visibility, tests or safeguarding; Tactical RMM and Classroom Manager add care of the computers themselves. Only Classroom Manager combines lesson control with lab upkeep **and** gives up screen viewing on purpose. That is a trade, not an advantage for every school: if you need to see screens, or need keyword safeguarding, or tests, choose a product that has them.

## Sources (read on 5 November 2026)

Each product's own comparison page lists its vendor sources: [Veyon]({{< relref "/school/compare-veyon" >}}), [NetSupport School]({{< relref "/school/compare-netsupport-school" >}}), [Faronics Insight]({{< relref "/school/compare-faronics-insight" >}}), [LanSchool]({{< relref "/school/compare-lanschool" >}}), [Impero Education Pro]({{< relref "/school/compare-impero-education-pro" >}}), [Microsoft's tools]({{< relref "/school/compare-windows-take-a-test" >}}), [Tactical RMM]({{< relref "/school/compare-tactical-rmm" >}}) and [remote desktop tools]({{< relref "/school/compare-remote-tools" >}}). Classroom Manager's entries come from the [facts we can show you]({{< relref "/school/proof" >}}) and the [features page]({{< relref "/school/features" >}}).

[Request a demo]({{< relref "/school/request" >}}) · [See the pricing]({{< relref "/school/pricing" >}}) · [What it costs per computer]({{< relref "/school/market" >}})
