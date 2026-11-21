---
title: "A Philosophy of Software Design"
description: "John Ousterhout on fighting complexity with deep modules and simple interfaces, the idea behind how Classroom Manager's parts fit together."
url: "/books-for-inspiration/philosophy-of-software-design/"
author: "John Ousterhout"
isbn: "9781732102217"
bookPage: true
layout: "book"
---
**The argument.** Complexity is the enemy of software, and it arrives in small steps: one exception here, one special case there, until nobody can hold the whole system in their head. Ousterhout, a professor at Stanford, argues that the main job of design is to reduce it. His central picture is the deep module, a part that hides a lot of work behind a small, simple interface, as opposed to a shallow one whose interface is nearly as complicated as its inside.

## Ideas worth keeping

- **Deep modules.** The best parts do a lot behind a little. Judge a module by how much it hides.
- **Design it twice.** Sketch at least two different designs before choosing one.
- **Define errors out of existence.** Where you can, change the rules so the error case cannot occur.
- **Comments describe what the code cannot say**, such as why, and what the interface promises.
- **Tactical versus strategic programming.** Fast patches add up to a mess. Invest a little in design every time.

## Where it shows in Classroom Manager

Each feature of Classroom Manager sits behind a narrow, well-defined boundary, so adding one does not make the rest harder to understand. The program also prefers to remove choices a teacher does not need to make, instead of adding a setting for them.

## Who should read it

Anyone who writes or reviews code, and anyone who wonders why some software stays pleasant to change and other software does not.
