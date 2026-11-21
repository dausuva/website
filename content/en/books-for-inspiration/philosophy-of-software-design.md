---
title: "A Philosophy of Software Design"
description: "John Ousterhout on fighting complexity with deep modules and simple interfaces, the idea behind how Classroom Manager's parts fit together."
url: "/books-for-inspiration/philosophy-of-software-design/"
author: "John Ousterhout"
isbn: "9781732102217"
bookPage: true
layout: "book"
---
**The argument.** Complexity is the enemy of software, and it grows in small steps. The best modules hide a lot of work behind a small, simple interface.

**Ideas worth keeping.** Deep modules, designing interfaces twice, and writing comments that explain why.

**Where it shows in Classroom Manager.** Each feature is a module with a narrow contract, so adding one does not make the rest harder to understand.
