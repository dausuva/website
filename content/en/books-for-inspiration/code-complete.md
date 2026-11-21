---
title: "Code Complete"
description: "Steve McConnell's handbook of software construction: naming, routines, defensive programming and quality, in one long, practical reference."
url: "/books-for-inspiration/code-complete/"
author: "Steve McConnell"
isbn: "9780735619678"
bookPage: true
layout: "book"
---
**The argument.** Construction, the part of the work where code is written, tested and debugged, is where most of the quality of a program is decided. McConnell collects the practices that research and experience support into one handbook: how to name and organise code, how to write routines, control structures and data, how to check quality, and how to keep complexity manageable. His underlying claim is that managing complexity is the main technical job, and every practice is judged by how it helps.

## Ideas worth keeping

- **Managing complexity is the primary technical imperative.** Prefer code a person can hold in their head.
- **Prerequisites matter.** Understand the problem and the design before coding. A defect costs more the longer it survives.
- **A routine does one thing**, and a class presents one consistent abstraction.
- **Defensive programming.** Assertions, careful error handling, and barricades between trusted and untrusted code.
- **Many quality techniques.** Reviews, testing and debugging each find different defects, and none finds all of them.
- **Layout is for the reader.** Consistency beats any particular style.

## Where it shows in Classroom Manager

We keep functions small, check what arrives at each boundary, and use more than one kind of test. A review of a change asks whether the next person can read it, not only whether it runs.

## Who should read it

Developers who want one dependable reference to dip into, and technical managers who need to judge code quality.
