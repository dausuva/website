---
title: "Facts you can check."
description: "What is proven about Classroom Manager, how it was tested, what it does not claim, and how to check each point yourself before you buy."
url: "/school/proof/"
translationKey: "school-proof"
schoolPage: true
aliases: ["/classroom-manager/proof/"]
---
A school buying software for its lab should not have to take our word for it. This page lists what Classroom Manager does, how each point was shown, and how you can check it. We keep a fact-check record for every sentence on this site and update it with each release; anything that was not shown stays off the page.

## In use

- **A working school lab.** Classroom Manager runs a school computer lab of 20 Windows PCs, looked after by its administrator with this tool.
- **Five test computers at home**, with Windows 10 and Windows 11, including a Windows 11 Home edition, pass the full end-to-end check.
- **A 32-bit Windows 10 test PC** for older hardware. On 24 and 25 October 2026 it confirmed recent files, the accent colour, error codes, clock sync, the Windows update check, schedules that run while the teacher's program is closed, and computers that were off catching up.

## Built to be checked

| Fact | How it was shown | Check it yourself |
|---|---|---|
| More than 2,100 automated tests run on every change | The test suite in the source code; the build fails when one fails | Read the tests in the [source code](https://github.com/dausuva/classroom-manager) |
| 89 health checks test every action between the teacher's PC and a student PC | Classroom Health runs them against a real PC | Ask to see a health report in the demo |
| Every client command is either health-checked or listed as never sent, with the reason | A test fails the build otherwise | The list is in the source code |
| 25 documented error codes, each with its cause and the fix | Every error message ends with its code | Error codes are explained in the guide |
| Every screen in English and Lithuanian, 3,500+ texts | A test fails when a text has no Lithuanian translation | Switch the language in the demo |
| Encrypted always: TLS 1.2/1.3, an approved certificate per PC, signed frames | Security tests, including tampered and replayed messages | See [For school IT](../security/) |
| Roles that the student PC enforces: Observer, Teacher, Admin, optionally limited to rooms | Tests with each role; checked on real PCs | Ask for a Teacher key in the pilot |
| Updates of the student program must be signed by your certificate | The client refuses an unsigned or unknown build | Try it during the pilot |
| No screen viewing, capture or recording, anywhere | There is no such feature in the code | Read the [privacy page](../privacy/) |

## What we do not claim

- **No student surveillance.** The program never shows or records student screens. It does handle administrative data and the files you choose to collect.
- **Not a secure-exam system.** Exam mode sets classroom restrictions; it is not an anti-cheating guarantee.
- **Early access.** Every school starts with a demo and a test PC before a wider rollout. Your Windows setup and policies decide what works; we check that together in the pilot.
- **No response-time promise.** Support is real people by email and phone, not a guaranteed service level.
- **No ratings or testimonials yet.** We will publish quotes from schools only when they agree, in their own words.

## Ask for proof

In the demo you can ask to see any line on this page: a health report against a real PC, the error code catalogue, the test run, or the Lithuanian interface. Afterwards we prepare a test package for one of your PCs, so you check it on your own network before you pay anything.

[Request a demo](../request/) · [How a pilot works](../getting-started/) · [Compare with Veyon](../compare/)
