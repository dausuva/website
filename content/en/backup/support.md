---
title: "Support for Dausuva Backup"
description: "Get help with Dausuva Backup for Windows and Backup Companion for Android: what to send us, and the usual fixes when a phone does not appear or a backup stops."
url: "/backup/support/"
translationKey: "backup-support"
backupPage: true
---
**Email:** {{< contact >}}. Dausuva MB, registration code 307580523. We answer in English and Lithuanian.

## What helps us answer

- **Which program:** Dausuva Backup on Windows, or Backup Companion on the phone. The Windows app shows its version under its name at the top of the window.
- **Your Windows version** (Settings > System > About) and **your phone's make, model and Android version**.
- **What you expected and what happened.** The grey and black box at the bottom of the window is the log; copy the last lines from it into your message.
- **A screenshot** of the window, if it helps. Please blur the phone's serial number if you would rather not share it.

## Please do not send

Backups, photos, messages, contacts or any other personal files from your phone. We do not need them to help, and you should not email them.

## The phone does not appear

1. Use a USB **data** cable (some cables only charge) and plug it straight into the PC.
2. On the phone, switch on **Developer options**, then **USB debugging**. (Tap *Build number* in Settings > About phone seven times to reveal Developer options.)
3. Unlock the phone and look for the prompt **Allow USB debugging?** Tick *Always allow from this computer* and tap **Allow**. The window says *Waiting for approval on the phone* until you do.
4. Pull down the phone's USB notification and choose **File transfer** (some phones need this before they show up).
5. Press **Refresh devices** (or F5). Still nothing? Try another USB port or cable, then restart the phone.

## The backup stopped or failed

- Press **Resume backup**. It continues in the same folder and skips what was already copied.
- Keep the phone **unlocked** and the cable connected while it runs, and do not switch USB debugging off until it finishes.
- Check there is enough free space on the drive that holds your backups folder.
- If the log mentions files that "could not be copied", Android did not allow access to them. That is expected for other apps' private data.

## Backup Companion

Press **Get companion from Play Store** in the Windows app to open its page on your phone. If Google Play does not open, search for *Backup Companion* in Google Play on the phone. Android asks for each permission separately, and you can leave any of them off.

## Privacy and security

How the apps handle data is explained in the [privacy policy]({{< relref "/backup/privacy" >}}). If you find a security problem, please email us rather than posting it publicly.
