---
title: "Release It!"
description: "Michael Nygard on designing software for the way systems really fail in production: slow calls, partial failure and cascading breakdown."
url: "/books-for-inspiration/release-it/"
author: "Michael T. Nygard"
isbn: "9781680502398"
bookPage: true
layout: "book"
---
**The argument.** A system that passes its tests can still fail in production, because production brings load, slow dependencies and partial failure. Nygard collects real stories of outages and turns them into patterns. His advice is to assume that every call to another system can hang, fail or lie, and to make sure one failure cannot spread.

## Ideas worth keeping

- **Timeouts everywhere.** A call without a timeout is a hang waiting to happen.
- **Circuit breaker.** After repeated failures stop calling for a while and fail fast.
- **Bulkheads.** Separate resources so one failing part cannot drain the rest.
- **Steady state.** Anything that grows, such as logs, files or caches, needs something that removes it.
- **Governors and load shedding.** Limit how fast an automatic action may change things, and refuse work early when overloaded.
- **Make failure observable** with logs a human can follow and health checks that test the real path.

## Where it shows in Classroom Manager

Calls between the teacher's computer and student computers have timeouts and limits, and the safe state is the default: if nobody answers a display change, it reverts. Classroom Manager also ships a separate Health tool that tests the real connection path.

## Who should read it

Developers and IT staff who run systems that must keep working while something around them is broken, which describes every school network.
