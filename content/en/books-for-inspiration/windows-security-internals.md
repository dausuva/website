---
title: "Windows Security Internals"
description: "James Forshaw's deep look at how Windows decides who may do what: accounts, tokens, permissions and authentication."
url: "/books-for-inspiration/windows-security-internals/"
author: "James Forshaw"
isbn: "9781718501980"
bookPage: true
category: "security"
weight: 4
layout: "book"
---
**The argument.** This book explains the security model of Windows from the inside. It shows how the system identifies a user, represents what that user may do, checks each request against the rules, and authenticates over a network. The author is a well-known security researcher, and the book includes hands-on examples using a PowerShell tool he wrote, so readers can look at their own systems.

## Ideas worth keeping

- **Who is asking?** How Windows represents users and groups.
- **What may they do?** How permissions on files, registry keys and other objects are checked.
- **Tokens and privileges**, the data a running program carries.
- **Authentication**, locally and over a network.

## Where it shows in Classroom Manager

A program that administers other computers must work with, not against, the Windows security model. Understanding it is the difference between a tool that behaves safely and one that surprises its users.

## Who should read it

Developers and administrators who work on Windows, and readers who want to move from using security tools to understanding them. This is an advanced book.
