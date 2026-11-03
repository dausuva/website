---
title: "Installing the Client on student computers"
description: "What the school's administrator does: the lab key, the installer, silent installation, winget, and deploying it with Intune or Configuration Manager."
url: "/school/client/"
translationKey: "school-client"
schoolPage: true
draft: true
---
The **Client** is a small Windows service with a helper that shows a notification-area icon. The teacher's Host connects to it over the school network. It is installed once on each student computer by someone with administrator rights, and it is not in the Microsoft Store (a Store app is installed per user, and a student could remove it).

Students see the icon in the notification area; opening it shows that the computer is managed and what is active. The programs do not view, capture or record student screens.

## 1. Make the lab key

One key for a whole lab: at least 12 characters, the same on every computer and in the teacher's Host. Keep it secret. Put it in a text file named `classroom-kit.json`:

```json
{ "key": "your-lab-key-here" }
```

The file may also name the ports, the folders the Client may reach and named keys for teachers; every entry other than the key is optional. Keep this file off shared drives: it holds a secret. It is only read, never written, by the setup.

## 2. Install

Download the [Client installer]({{< relref "/school/download" >}}) and run it as an administrator, with the kit file beside it, or give the file's path:

```
Dausuva-Classroom-Client-Setup-win-x64.exe /VERYSILENT /KIT=C:\path\to\classroom-kit.json
```

With winget: `winget install Dausuva.ClassroomClient --custom "/KIT=C:\path\to\classroom-kit.json"`. Only the path of the file is on the command line, never the key.
Setup adds three firewall rules (TCP 5050 for the Host, UDP 5051 for discovery, and ping, on Domain and Private networks), registers the service and an entry in Settings > Apps.

## 3. Deploy to many computers

Use the silent command above from Microsoft Intune (as a Win32 app) or Configuration Manager, or from a Group Policy startup script, with the kit file delivered to each computer by the way your organisation delivers secrets.

## 4. Connect from the teacher's computer

In the Host, find the computers (**Scan network**) or add them by address, and put them in a room. The first time, the Host shows each computer's certificate fingerprint: compare it with the one the Client reports on that computer, and approve it. After that the connection is encrypted (TLS 1.2 or 1.3) and the lab key proves who is connecting.

## Updating and removing

The Host can update the Client on a room of computers, with a signed build the Client checks for its signature and hash first, and can remove it from one computer at a time. Or run the installer or uninstaller on the computer itself.

More: [Download]({{< relref "/school/download" >}}), [Privacy]({{< relref "/school/privacy" >}}), [Security]({{< relref "/school/security" >}}), [Support]({{< relref "/school/support" >}}).
