---
title: "Manage a Windows computer lab from one console"
htmlTitle: "Classroom Manager — Windows computer lab management | Dausuva"
description: "Manage Windows classroom PCs from one console: install software, send and collect files, lock screens, run exams and keep the lab up to date over your school's own network."
url: "/school/"
layout: "landing"
aliases: ["/classroom-manager/"]
translationKey: "school"
eyebrow: "Classroom Manager · early access"
lead: "Install software, send and collect files, lock screens, run commands, and restart or wake the whole room, without visiting every desk. A teacher console talks directly to a small client on each student PC over your school's network."
pricingButton: "Supported deployment — €499"
facts:
  - "Windows 10 and 11"
  - "Works on your school network"
  - "No cloud service in between"
  - "Does not view or record student screens"
  - "English and Lithuanian"
shot:
  src: "images/overview-en.png"
  alt: "Classroom Manager main window: six computers of a test lab with their state, user, clock offset and Windows build, four online ones selected, and buttons for common tasks such as Message, Lock screen, Send files and Install / uninstall."
  caption: "See the room, select the computers, run the action. (A real test lab of Windows 10 and 11 PCs.)"
highlightsHeading: "The four things teachers use most"
highlights:
  - title: "Lock every screen at once"
    text: "One click covers every monitor with your message and blocks Win, Alt+Tab and Alt+F4. It stays locked until you unlock it, even if a student signs out and back in."
    src: "images/features/lock-en.png"
    alt: "Lock screens window: four selected computers in the [lab] room, a title, the message shown to students, and Lock and Cancel buttons."
  - title: "Exam mode"
    text: "Block chosen websites and programs, mute speakers and microphones, turn cameras off and block USB drives for the exam. Turn it off and everything goes back to normal."
    src: "images/features/exam-en.png"
    alt: "Exam mode settings window: blocked websites (chatgpt.com, youtube.com, tiktok.com) and programs (discord.exe, steam.exe), and options to mute sound, turn cameras off and block USB drives."
  - title: "Install software on the whole lab"
    text: "Install or uninstall `.exe`, `.msi` or winget packages on many PCs at once, in batches if you like, without visiting a single desk."
    src: "images/features/install-en.png"
    alt: "Install / uninstall software window: four selected computers, how many at once, the action, run as SYSTEM, the installer and its silent parameters."
  - title: "Collect students' work"
    text: "Gather matching files from every student PC into one folder on your computer, one subfolder per student. The originals stay where they are."
    src: "images/features/collect-en.png"
    alt: "Collect files from students window: four selected computers, the folder on the student PC, the file name pattern *.docx and the folder to save into."
upkeepHeading: "Keeping every PC the same"
upkeep:
  - title: "Windows Update from your desk"
    wide: true
    text: "See which updates each PC is waiting for, install all of them or only the ones you pick, pause updates before an exam week and resume them after, and restart for updates when the lesson is over."
    src: "images/features/windows-update-en.png"
    alt: "Windows Update window for four lab computers: two Windows 11 and two Windows 10 PCs, each with its Windows version, the updates it is waiting for (a new Windows version, security and .NET updates, Defender and driver updates) and buttons to check, update, pause and resume."
  - title: "The right time on every PC"
    wide: true
    text: "Set every clock from your own computer in one step, even without internet, and match the time zone too. Wrong clocks break sign-in, websites and exam timing."
    src: "images/features/time-en.png"
    alt: "Sync time window: four selected computers, setting the clock from this computer's clock, and an option to match the time zone."
  - title: "Keyboard layouts that match"
    wide: true
    text: "See at a glance which PCs miss a layout or start in the wrong one, add or remove layouts and choose the default. Save the room's set once and bring every PC back to it."
    src: "images/features/keyboard-en.png"
    alt: "Keyboard layouts window for four lab computers: Lithuanian and US layouts installed on 4 of 4, with two PCs starting in Lithuanian and two in US, and buttons to add, remove, make default and apply the room default."
featuresHeading: "Everything else you can do"
features:
  - title: "Before the lesson"
    items:
      - "Install and uninstall software on many PCs at once (`.exe`, `.msi`, winget)"
      - "Send files to the students' Desktop, Documents or any folder"
      - "Wake the room with Wake-on-LAN, restart or shut it down"
      - "Schedule lock, message, wake, restart or shut-down by day and time"
  - title: "During the lesson"
    items:
      - "Lock screens with a message, send messages"
      - "Exam mode: block websites and programs, mute sound, turn cameras off, block USB drives"
      - "Open a website or program on every selected PC"
      - "Collect the students' work into one folder per student"
  - title: "Looking after the lab"
    items:
      - "Hardware and installed-software inventory, exported to CSV"
      - "Windows Update, processes, scheduled tasks, registry and local accounts"
      - "Run commands as administrator or as the signed-in student"
      - "Update the client on every PC from the console"
pricingHeading: "Pricing"
plans:
  - name: "Demo and test package"
    price: "Free"
    items:
      - "A demo with questions and answers: on site in Vilnius County, or a short Zoom call anywhere"
      - "Then a test package prepared for your school"
      - "Try it on one PC, then on a lab"
    cta:
      label: "requestTest"
      subject: "mailTestSubject"
  - name: "Supported School Deployment"
    price: "€499"
    per: "flat, first year"
    featured: true
    items:
      - "Signed installation package for your school"
      - "Help with setup and rolling it out to your labs"
      - "One year of updates"
      - "One year of support by e-mail and phone"
      - "No price per computer"
    cta:
      label: "requestDeployment"
      subject: "mailDeploymentSubject"
  - name: "Renewal"
    price: "€299"
    per: "per year"
    items:
      - "Updates and new versions"
      - "Support and help with upgrades"
      - "Your installation keeps working if you do not renew"
pricingNote: "Existing installations do not stop working if support is not renewed. Renewal keeps updates and support active."
contactLine: "We are based in Vilnius, Lithuania. Write or call to arrange a demo (on site in Vilnius County, or by Zoom with questions and answers), ask a question or plan a deployment."
---

## How it works

- **Classroom Manager** runs on the teacher's PC. A small **client** runs on each student PC: a Windows
  service for administration and a helper in the student's own session.
- They talk directly over the school's network. Every connection is authenticated with the lab's key and
  encrypted with TLS. There is no account to create and no cloud server in between.
- Each person can get their own **Teacher** or **Admin** key. The student PCs themselves refuse what a
  Teacher key is not allowed to do, such as installing software or running commands.
- The client is updated from the console; each PC checks the update's checksum and signature before
  installing it.

## Privacy

Classroom Manager **does not view, capture or record student screens**. To manage the computers it does
read administrative information: computer and user names, running programs, installed software, hardware
details, and the files you send or collect. It stays on the school's computers. Each school remains
responsible for its own policies and for informing students and parents.

## Getting started

1. **Request a demo** by e-mail or phone: on site in Vilnius County, or a short Zoom call with questions
   and answers. Afterwards we prepare a test package for your school.
2. **Install it on one student PC and the teacher's PC**, and try the actions you need.
3. **Roll it out to the lab** with the setup kit: one window on each PC, or a silent install.
4. **Manage the lab** from the console. Updates for the client are pushed from there.

Classroom Manager is in **early access**: it is in daily use in a school computer lab, and every new
school helps shape it.
