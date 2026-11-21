---
title: "Threat Modeling: Designing for Security"
description: "Adam Shostack's practical method for finding what can go wrong with a design before a single line is written."
url: "/books-for-inspiration/threat-modeling/"
author: "Adam Shostack"
isbn: "9781118809990"
bookPage: true
category: "security"
weight: 3
layout: "book"
---
**The argument.** Do security design before the code exists, in a repeatable way. Draw the system, find the places where trust changes, and for each part ask what can go wrong. Then decide what to do about each threat and check that you did it. Shostack worked on this at Microsoft, and the book turns a vague worry into a routine anyone on a team can follow.

## Ideas worth keeping

- **Four questions.** What are we building? What can go wrong? What will we do about it? Did we do a good job?
- **Data-flow diagrams with trust boundaries**, showing where privilege changes.
- **STRIDE.** Spoofing, tampering, repudiation, information disclosure, denial of service and elevation of privilege.
- **Responses.** Mitigate, eliminate, transfer or accept, and write down which and why.
- **Track threats like bugs**, and revisit them whenever the design changes.

## Where it shows in Classroom Manager

Every new way for the teacher's computer to act on a student computer gets a short threat check first: who could pretend to be the teacher, what could be changed in transit, what could lock someone out. Our security page lists what the program does and does not protect against.

## Who should read it

Developers, IT administrators and school decision makers who want to ask better questions of any system that handles other people's computers.
