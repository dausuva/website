---
title: "Working Effectively with Legacy Code"
description: "Michael Feathers on changing code you did not write and cannot yet test, by getting a safety net in place first."
url: "/books-for-inspiration/working-effectively-with-legacy-code/"
author: "Michael Feathers"
isbn: "9780131177055"
bookPage: true
category: "programming"
weight: 9
layout: "book"
---
**The argument.** Legacy code, in Feathers' sense, is code without tests. To change it safely you first get it under test, using the smallest changes that make that possible, and only then make your real change. The book is a catalogue of ways to break the dependencies that stop a piece of code from being tested.

## Ideas worth keeping

- **The legacy dilemma.** To change code safely you want tests, but to add tests you often must change the code.
- **Seams.** Places where behaviour can change without editing the code there.
- **Characterisation tests.** Record what the code does now, right or wrong, and keep it passing while you work.
- **Sprout and wrap.** Add new behaviour in a new, tested piece instead of weaving it into the old one.
- **Cover and modify**, not edit and pray.

## Where it shows in Classroom Manager

When older parts of the program move to a newer design, we first write tests that record what they do today, including awkward partial-failure behaviour, and only then move them.

## Who should read it

Anyone who maintains software that has outlived its authors, which is most software that matters.
