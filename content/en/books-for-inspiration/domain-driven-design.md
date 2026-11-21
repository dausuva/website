---
title: "Domain-Driven Design"
description: "Eric Evans on understanding the field first: build a model with the people who know it and use its words everywhere, in talk and in code."
url: "/books-for-inspiration/domain-driven-design/"
author: "Eric Evans"
isbn: "9780321125217"
bookPage: true
layout: "book"
---
**The argument.** In software for a complicated field, the hard part is understanding the field, not the technology. Evans argues that you should build a model of the domain together with the people who know it, use that model's words everywhere, and keep the code shaped like the model. Where a large system must hold more than one model, say where each applies and how they meet.

## Ideas worth keeping

- **Ubiquitous language.** One vocabulary shared by the experts and the code. A word that means two things is a defect to fix.
- **Model-driven design.** The code is the model, not a picture of it.
- **Entities and value objects.** Some things have identity, and others are only their values.
- **Bounded context.** A model is valid inside a boundary. Do not let two models blur together.
- **Anti-corruption layer.** Translate at the edge when you must talk to a system whose model you do not want.

## Where it shows in Classroom Manager

The words matter: computer, room, key, teacher, administrator. They are used the same way in the teacher's program, the student service and the documentation, and the English source text with its Lithuanian translation keeps that vocabulary consistent in two languages.

## Who should read it

Anyone building software for a specialised field, and domain experts, such as teachers, who will work with the people building it.
