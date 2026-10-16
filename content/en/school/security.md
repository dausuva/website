---
title: "Information for school IT."
description: "Architecture, access control, update behavior and the early-access limits to review before a school pilot."
url: "/school/security/"
translationKey: "school-security"
schoolPage: true
aliases: ["/classroom-manager/security/"]
---
## Direct connections, powerful administration

The teacher Host connects to each Windows Client on the school network. A Windows service handles privileged work; a helper runs in the signed-in user's session. No cloud control server or cloud account is required.

Keep control ports limited to the intended teacher/admin machines and the school network. Do not expose them to the public internet.

## Access roles and key lifecycle

Connections use shared-key authentication. Use separate, named Teacher and Admin credentials rather than distributing one administrative key. Inventory who holds them, protect configuration and backups, and agree how keys are issued, rotated and revoked.

Teacher permissions are enforced by the Client. A UI mode alone does not restrict the privileges of an Admin credential. Revocation and log checks must be repeated for the supplied build and deployment, not inferred from a demo.

## TLS is not the same as endpoint trust

TLS encrypts the transport, but the Host must also establish that it is connecting to the intended Client. **Older Host builds do not validate the Client certificate**, so encryption alone must not be described as protection against an active intermediary.

New source work adds exact TLS certificate pins and independent enrollment for the command-line Host. This is not yet a completed graphical enrollment or installed-fleet migration. Ask which trust controls are present in the actual package you receive, and verify them before a wider rollout.

## Updates and recovery

Client self-updates check a checksum and code signature before installation. **Automatic rollback after a failed application start is not implemented.** Keep a known-good package, a recovery route independent of Classroom Manager, and a tested reinstall procedure.

Windows Update and application installers have their own network, privilege and restart requirements. Review these separately from the app's own update process.

## Remaining hardening work

Local service/helper-pipe identity hardening, automatic update rollback, and broader security logging and revocation coverage remain unfinished. File-path restrictions are not a hardened boundary against filesystem junctions. Admin command execution is intentionally privileged.

These limits mean this early-access product should not be presented as security-audited, compliance-certified, a student-proof lockdown tool, or ready for an unattended broad rollout.

## What to ask for before a pilot

Request the exact package version, role and revocation test results, endpoint-trust procedure, firewall guidance, available log fields, update verification results and a recovery drill. Agree acceptance criteria with your school's IT owner.

[Start with a controlled pilot](../getting-started/). For a security concern, contact {{< contact >}}. Do not send private keys, credentials or student records.
