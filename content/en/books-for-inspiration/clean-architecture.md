---
title: "Clean Architecture"
description: "Robert C. Martin on keeping the rules of a system independent from screens, databases and frameworks, so that the details can change."
url: "/books-for-inspiration/clean-architecture/"
author: "Robert C. Martin"
isbn: "9780134494166"
bookPage: true
layout: "book"
---
**The argument.** Source-code dependencies should point toward policy, the rules of the business, and away from detail: the interface, the database, the framework, the devices. The core must not know how it is shown or stored, and the details plug into it. A system built that way can swap its details, and its rules can be tested without them.

## Ideas worth keeping

- **The dependency rule.** Inner parts never name outer ones.
- **Boundaries by interface.** Put an interface where the inner side needs something, and implement it outside.
- **The humble object.** Keep the hard-to-test edge, such as a window, so thin that there is almost nothing to test.
- **Details are late decisions.** Frameworks, storage and delivery are plug-ins.
- **Screaming architecture.** The folder layout should say what the system is for, not which framework it uses.

## Where it shows in Classroom Manager

The protocol library knows nothing about the teacher's window or the student service, and the code that decides what to do is kept apart from the code that touches Windows. That is why most of the decision logic has automated tests, even though the program itself is a Windows desktop application.

## Who should read it

Developers deciding how to structure a growing application, and technical leads who want to keep options open.
