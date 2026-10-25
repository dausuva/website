---
title: "Information for school IT."
description: "Architecture, access control, update recovery and the checks to complete before a school rollout."
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

## Encrypted transport with endpoint trust

Every connection uses TLS 1.2 or 1.3. The Host also keeps an approved Client certificate for each computer, so it can reject a different endpoint even when that endpoint can establish an encrypted connection.

Certificates can be approved in the Host, imported from a Client Health enrolment file, or enrolled when a new Client announces itself under the lab key. Existing-fleet migration has been completed in the working lab. Package and installation state still matter: check the certificate status in **Secure this lab** for the actual computers before a wider rollout.

## Updates and recovery

Client self-updates check a checksum and code signature before installation. Recovery after a version fails to start is currently a supported manual reinstall from a known-good package, so keep a route to the PCs that does not depend on Classroom Manager and test that procedure during the pilot.

Windows Update and application installers have their own network, privilege and restart requirements. Review these separately from the app's own update process.

## Security boundaries to verify

The current source includes identity checks on the local service/helper connection, hash-chained Client security events, certificate status, and access-key removal that catches up computers which were offline. Repeat the role, revocation, logging and helper-identity checks on the supplied build and your Windows configuration rather than inferring them from a demo.

Allowed file roots reduce accidental reach; they are not a hardened sandbox against filesystem junctions. Admin command execution is intentionally privileged. Recovery after a failed Client start is manual. Classroom Manager has not had an independent security audit and is not compliance-certified or a student-proof lockdown tool. Start on a test PC and expand in stages.

## What to ask for before a pilot

Request the exact package version, a Classroom Health report, the **Secure this lab** report, the endpoint-trust procedure, firewall guidance, role and revocation test results, a refused unsigned update, and the manual recovery steps. Agree acceptance criteria with your school's IT owner.

[Start with a controlled pilot](../getting-started/). For a security concern, contact {{< contact >}}. Do not send private keys, credentials or student records.
