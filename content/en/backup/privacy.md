---
title: "Privacy policy: Dausuva Backup and Backup Companion"
description: "How Dausuva Backup for Windows and Backup Companion for Android handle your data: nothing is sent to us, backups stay on your PC, and what each app can read."
url: "/backup/privacy/"
translationKey: "backup-privacy"
backupPage: true
---
Last updated 25 November 2026.

## The short version

- **Nothing is sent to us.** Neither app has an account, advertising, analytics or telemetry, and neither sends your data to Dausuva Labs or any other company.
- **Your backup stays on your PC**, in a folder you choose. Backup Companion on the phone declares no network permission, so it cannot send data over the network by itself.
- **You decide what is copied.** Android asks you before Backup Companion can read each kind of data.

## Who we are

Dausuva Backup and Backup Companion are published by Dausuva Labs, the name under which Dausuva MB (registration code 307580523, Vytauto g. 22-22A, LT-90123 Plungė, Lithuania) publishes software. Contact: {{< contact >}}. This policy does not cover this website; see the [website privacy notice]({{< relref "/privacy" >}}).

## Dausuva Backup for Windows

**What it handles.** When you press Run Backup, the app copies from the connected phone: the installed apps' packages (APK files) and their details such as package names and versions; photos, videos, documents, downloads and other files in shared storage (and removable storage if you include it); and device details such as the model, manufacturer, Android version and serial number. If Backup Companion is installed and you have allowed it, it also copies the companion's export (see below). It writes a report and logs, and optional checksums, into the same backup folder. A backup can contain very sensitive information.

**Where it is kept.** On your PC, in the backups folder you choose (by default `AndroidBackups` in your user folder), one timestamped subfolder per backup. The app's own settings are minimal. Windows stores the phone's USB-debugging approval key in your user folder (`.android`), as it does for any Android tool.

**What leaves your PC.** Nothing. The app talks to the phone over the USB cable, using the Android Debug Bridge (`adb`) that is included with it, which runs locally on your PC. The app makes no network connection of its own and includes no analytics. The button *Get companion from Play Store* only asks your phone to open the companion's Google Play page; Google Play then works under Google's own policies.

**The Microsoft Store.** Microsoft, not us, handles your purchase, payment and updates under Microsoft's policies. Microsoft may give publishers aggregated Store reports (for example the number of downloads); these do not identify you to us.

**Deleting data.** Delete a backup by deleting its folder. Uninstalling the app does not delete your backups, because they live in your own folder. Please protect them as you would the phone itself, for example with Windows device encryption (BitLocker) and a strong account password, and delete copies you no longer need.

## Backup Companion for Android

**What it can read.** Only after you grant each access in Android's settings, and only when you start an export, the app can read the data that access covers. Depending on your phone and your choices this can include contacts, calendars, SMS/MMS, call records, media and shared-storage indexes, installed-app and usage information, notification history, Bluetooth information, settings, account identifiers and device details. It can create VCF and ICS files and a ZIP export. Every access is optional, and Android's Settings screens control whether it is granted.

**Where it goes.** The export is made on the phone, in the app's private storage, to be pulled by Dausuva Backup over the USB cable (or by the macOS tool). The app declares no internet permission, so it has no way to send the export over the network itself. We do not receive it.

**Retention.** The latest temporary export stays in the app's private storage until it is replaced, until you clear the app's cache or storage in Android settings, or until you uninstall the app. The copy on your PC is under your control and has to be deleted there separately.

**Special access.** Optional access such as *All files access* is used only for the backup you start, to list the files on shared storage. It does not give the app access to other apps' private data or to Android's keystore. Optional links to Shizuku open your browser; those pages have their own privacy practices.

**Google Play.** The app is installed through Google Play, which has its own data practices. The app has no account system, advertising or analytics.

## Children

Neither app is directed at children, and neither collects information from anyone, children included.

## Your rights

Because the apps send us no personal data, we hold none from them. If you email us, we use your message and contact details only to answer you and keep them no longer than that and our legal obligations require; please do not send backups or personal files. You may ask to see, correct or delete what we hold about you, and you may complain to the State Data Protection Inspectorate of Lithuania (vdai.lrv.lt).

## Changes

We will update this page before a release that changes how the apps handle data, and show the date above.

## Contact

Questions about this policy: {{< contact >}}.
