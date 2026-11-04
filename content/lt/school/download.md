---
title: "Atsisiųskite Classroom Manager"
description: "Mokytojo valdymo programa ir mokinių kompiuterių Client, skirti Windows 10 ir 11: kur juos gauti, kaip patikrinti ir kaip diegiamas Client."
translationKey: "school-download"
slug: "atsisiuntimas"
schoolPage: true
---
Classroom Manager sudaro dvi programos: **Host**, kurią naudoja mokytojas, ir **Client**, kurį mokyklos administratorius vieną kartą įdiegia kiekviename mokinių kompiuteryje. Abi nemokamos, atvirojo kodo (Apache License 2.0) ir be kompiuterių skaičiaus ribos.

## Mokytojo kompiuteris: Host

- **Tiesioginis atsisiuntimas:** <span class="soon" title="bus prieinama su pirmuoju leidimu">Host diegimo programa</span> arba <span class="soon" title="bus prieinama su pirmuoju leidimu">viena programa, kurią galima paleisti bet kur</span> (bus prieinama su pirmuoju leidimu). Vieno failo programa turi komandą **Žinynas > Įdiegti šiame kompiuteryje**: ji įtraukia programą į Pradžios meniu be administratoriaus teisių.
- **winget:** `winget install Dausuva.ClassroomHost`
- **Visos versijos, kontrolinės sumos ir programinės įrangos sudėties sąrašas:** <span class="soon" title="bus prieinama, kai viešoji saugykla bus atidaryta">GitHub leidimai</span>

## Mokinių kompiuteriai: Client

Administratorius Client įdiegia vieną kartą kiekviename kompiuteryje, su administratoriaus teisėmis. Jo nėra „Microsoft Store“: parduotuvės programa diegiama kiekvienam naudotojui atskirai, o mokinys galėtų ją pašalinti. Apie laboratorijos raktą, tylųjį diegimą ir „Windows“ įrankius, kuriais galima diegti, žr. [Client diegimas]({{< relref "/school/client" >}}).

- <span class="soon" title="bus prieinama su pirmuoju leidimu">Client diegimo programa</span> (bus prieinama su pirmuoju leidimu)
- **winget:** `winget install Dausuva.ClassroomClient --custom "/KIT=C:\kelias\iki\classroom-kit.json"`

## Patikrinkite, ką atsisiuntėte

Kiekvienas leidimas turi `SHA256SUMS.txt`. „PowerShell“ komanda: `Get-FileHash .\failas.exe -Algorithm SHA256`; palyginkite su to failo eilute. Kiekvienas leidimas turi ir programinės įrangos sudėties sąrašą (`sbom.cdx.json`), kuriame išvardyti visi paketai, iš kurių programos sukurtos.

## Parašai

Leidimus sukuria „GitHub Actions“ iš pažymėtos viešos versijos. Pasirašytas leidimas tai nurodo savo puslapyje; nepasirašytas pavadintas „(unsigned)“, ir prieš jį paleidžiant „Windows“ perspės. Kaip leidimai pasirašomi ir kas juos tvirtina, rašoma [kodo pasirašymo politikoje]({{< relref "/school/code-signing-policy" >}}).

## Windows ir privatumas

Windows 10 ir Windows 11, 64 arba 32 bitų. Diegimo programos išbandytos su Windows 10 1903 ir 22H2 versijomis bei Windows 11. Client, pateiktas kaip MSIX paketas (Intune ar Configuration Manager), reikalauja Windows 10 2004 (darinys 19041) ar naujesnės versijos, 64 bitų; senesniame Windows 10 naudokite diegimo programą. Programos nieko nesiunčia Dausuva Labs: debesijos paslaugos nėra. Host gali kartą per parą pažiūrėti github.com, ar yra naujesnė versija; pirmą kartą paleidus jis paklausia, ir tai galima išjungti. Žr. [Privatumas]({{< relref "/school/privacy" >}}).

Kažkas negerai su atsisiuntimu? [Pagalba]({{< relref "/school/support" >}}).
