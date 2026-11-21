---
title: "The Pragmatic Programmer"
description: "Hunt and Thomas on the habits of programmers who ship reliable software: small steps, tests, automation and honest tools."
url: "/books-for-inspiration/pragmatic-programmer/"
author: "David Thomas and Andrew Hunt"
isbn: "9780135957059"
bookPage: true
layout: "book"
---
**The argument.** Good software comes from craft: care for details, small reversible steps, and tools that remove repetition. The book is a collection of short tips, each about a habit of mind rather than a technology, which is why it has stayed useful through several languages and fashions. The anniversary edition updates the examples and keeps the advice.

## Ideas worth keeping

- **Don't repeat yourself.** Every piece of knowledge should live in one place.
- **Automate what you do twice.** Builds, tests and releases should not depend on someone remembering.
- **Fix broken windows.** Small neglect invites larger neglect, so repair problems when you see them.
- **Make changes easy to reverse.** Assume today's decision will be wrong and plan the way back.
- **Tracer bullets.** Build a thin end-to-end slice early to learn what is real.
- **Take responsibility.** Say what you cannot do and offer options, not excuses.

## Where it shows in Classroom Manager

Our rule is one change per commit, with a full build and test run before it. Releases are produced by scripts, not by hand, and the program never relies on one person remembering a manual step.

## Who should read it

Developers at any stage, and anyone who manages them and wants to know what a healthy engineering habit looks like.
