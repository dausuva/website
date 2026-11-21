---
title: "Writing Secure Code"
description: "Howard and LeBlanc's habits for code that handles hostile input and powerful privileges, written around Windows."
url: "/books-for-inspiration/writing-secure-code/"
author: "Michael Howard and David LeBlanc"
isbn: "9780735617223"
bookPage: true
layout: "book"
---
**The argument.** Security flaws are mostly ordinary bugs in code that handles untrusted input or too much privilege. The cure is habits: assume input is hostile, give code the least privilege it needs, fail closed, and review for known classes of flaw. The book is written around Windows by two Microsoft security engineers, which makes it a close match for software like ours.

## Ideas worth keeping

- **All input is evil until proven otherwise.** Validate on the receiving side, by what the data is, not what it is called.
- **Canonicalise before checking** paths and names, then check the canonical form.
- **Least privilege.** Do the work with the weakest identity that can do it.
- **Defence in depth.** No single check carries the whole decision.
- **Fail securely.** An error should leave the system closed.
- **Keep secrets out** of source, logs and error text.

## Where it shows in Classroom Manager

The student service checks what it receives instead of trusting the teacher's program: files are verified by checksum, packages are signed, and credentials carry roles that the student computer enforces itself.

## Who should read it

Developers on Windows, and anyone who wants to understand why careful software seems to refuse things.
