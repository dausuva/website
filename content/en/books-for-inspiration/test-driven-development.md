---
title: "Test-Driven Development: By Example"
description: "Kent Beck's short book on writing a failing test first, making it pass, and cleaning up, in very small steps."
url: "/books-for-inspiration/test-driven-development/"
author: "Kent Beck"
isbn: "9780321146533"
bookPage: true
layout: "book"
---
**The argument.** Write a failing test, make it pass in the simplest way, then clean up. Repeat in very small steps. Beck, who popularised the practice, shows it by building working examples live in the book. The rhythm gives steady progress, a working system at every moment, and a design shaped by how it is used.

## Ideas worth keeping

- **Red, green, refactor.** Fail first so you know the test can fail, pass quickly, then remove duplication.
- **Keep a to-do list** of tests, and do one at a time.
- **Three ways to go green.** Fake it, write the obvious implementation, or triangulate with a second example.
- **Shrink the step** when things get hard.
- **Duplication is the signal** to refactor.

## Where it shows in Classroom Manager

New behaviour in the program usually starts with a test that states it in one sentence, such as what happens when a display change is not confirmed, so the list of tests reads like the specification.

## Who should read it

Developers who have never tried test-first work, and managers who wonder why teams that write tests move faster over time.
