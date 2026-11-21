---
title: "Refactoring"
description: "Martin Fowler on improving the design of existing code in small, safe steps, each one checked by tests."
url: "/books-for-inspiration/refactoring/"
author: "Martin Fowler"
isbn: "9780134757599"
bookPage: true
layout: "book"
---
**The argument.** Refactoring means changing the structure of code without changing what it does, in steps small enough that each one is safe and each one is checked by tests. Fowler presents it as the way a design improves continuously, instead of through risky rewrites. The second edition uses JavaScript for its examples and organises a catalogue of named moves you can apply by name.

## Ideas worth keeping

- **Small, behaviour-preserving steps**, each leaving the tests green.
- **Code smells as prompts**, not rules: long functions, duplicated code, large classes, and changes that must be repeated in many places.
- **A catalogue of moves** such as extract function, move function and introduce parameter object.
- **Tests first.** Without a safety net you are editing, not refactoring.
- **Two hats.** Add a feature or refactor, but never both in one step.

## Where it shows in Classroom Manager

Large windows in Classroom Manager were split into smaller parts one slice at a time, each slice in its own commit and checked by the test suite before the next. The rule of one change per commit is Fowler's two hats.

## Who should read it

Developers who inherit code they did not write, and anyone who asks how to keep a product healthy for years instead of rewriting it.
