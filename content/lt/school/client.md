---
title: "Client diegimas mokinių kompiuteriuose"
description: "Ką daro mokyklos administratorius: laboratorijos raktas, diegimo programa, tylusis diegimas, winget ir diegimas per Intune ar Configuration Manager."
translationKey: "school-client"
slug: "klientas"
schoolPage: true
---
**Client** yra nedidelė „Windows“ paslauga su pagalbine programa, rodančia piktogramą pranešimų srityje. Mokytojo Host prisijungia prie jo mokyklos tinklu. Jį vieną kartą kiekviename mokinio kompiuteryje įdiegia asmuo su administratoriaus teisėmis. Jo nėra „Microsoft Store“ (parduotuvės programa diegiama kiekvienam naudotojui atskirai, o mokinys galėtų ją pašalinti).

> **Client diegimo programa bus prieinama netrukus.** Kol ji nėra vieša, Client pateikiamas mokyklai paruoštame individualiame pakete: [užsisakykite demonstraciją]({{< relref "/school/request" >}}) ir atsiųsime jį su jūsų laboratorijos raktu. Mokytojo programą Host jau galima nemokamai gauti [„Microsoft Store“](https://apps.microsoft.com/detail/9P5BW5W79G41), kad pamatytumėte, kaip ji atrodo ir veikia.

Mokiniai mato piktogramą pranešimų srityje; ją atidarius matoma, kad kompiuteris valdomas ir kas šiuo metu aktyvu. Programos neperžiūri, nefiksuoja ir neįrašo mokinių ekranų.

## Išbandykite per dešimt minučių dviejuose kompiuteriuose

Reikia mokytojo kompiuterio ir dar vieno „Windows“ kompiuterio, kuris vaidins mokinio kompiuterį. Abu turi būti viename tinkle, o antrame reikia administratoriaus teisių. Host nemokamas iki 3 vienu metu prisijungusių kompiuterių, o Client neturi apribojimų, todėl bandymas nieko nekainuoja.

1. **Įdiekite Host** mokytojo kompiuteryje ([atsisiuntimo puslapyje]({{< relref "/school/download" >}}) rasite „Microsoft Store“, winget ir tiesioginį atsisiuntimą).
2. **Sukurkite rakto failą** antrame kompiuteryje. „PowerShell“ komanda sukuria atsitiktinį raktą ir įrašo failą: `$k = -join ((48..57 + 65..90 + 97..122) | Get-Random -Count 20 | ForEach-Object { [char]$_ }); Set-Content classroom-kit.json ('{ "key": "' + $k + '" }')`. Raktą pasilikite įvesti Host.
3. **Įdiekite Client** antrame kompiuteryje, šalia diegimo programos padėję tą failą (toliau 2 žingsnis).
4. **Prisijunkite:** Host paleiskite Sąrankos vedlį, įveskite tą patį raktą, spauskite **Ieškoti tinkle**, patvirtinkite kompiuterio sertifikatą ir priskirkite jį klasei.
5. **Išbandykite:** išsiųskite žinutę, užrakinkite ir atrakinkite ekraną, atidarykite jame svetainę. Bandymo metu ekranas neperžiūrimas ir neįrašomas.
6. **Po to pašalinkite:** antrame kompiuteryje pašalinkite **Classroom Manager Client** skiltyje Nustatymai > Programos ir ištrinkite `classroom-kit.json`.

## 1. Sukurkite laboratorijos raktą

Vienas raktas visai laboratorijai: bent 12 ženklų, tas pats kiekviename kompiuteryje ir mokytojo Host. Laikykite jį paslaptyje. Įrašykite jį tekstiniame faile `classroom-kit.json`:

```json
{ "key": "jusu-laboratorijos-raktas" }
```

Faile galima nurodyti ir prievadus, aplankus, kuriuos Client gali pasiekti, ir mokytojams skirtus pavadintus raktus; visi įrašai, išskyrus raktą, neprivalomi. Nelaikykite šio failo bendrai prieinamuose diskuose: jame yra paslaptis. Diegimas jį tik skaito, niekada nerašo.

## 2. Įdiekite

Atsisiųskite [Client diegimo programą]({{< relref "/school/download" >}}) ir paleiskite kaip administratorius, šalia turėdami rinkinio failą, arba nurodykite failo kelią:

```
Dausuva-Classroom-Client-Setup-win-x64.exe /VERYSILENT /KIT=C:\kelias\iki\classroom-kit.json
```

Su winget: `winget install Dausuva.ClassroomClient --custom "/KIT=C:\kelias\iki\classroom-kit.json"`. Komandų eilutėje nurodomas tik failo kelias, niekada pats raktas.
Diegimas prideda tris užkardos taisykles (TCP 5050 Host ryšiui, UDP 5051 aptikimui ir ping, domeno ir privačiuose tinkluose), užregistruoja paslaugą ir įrašą skiltyje Nustatymai > Programos.

## 3. Diekite daugeliui kompiuterių

Naudokite aukščiau pateiktą tylią komandą iš „Microsoft Intune“ (kaip Win32 programą), „Configuration Manager“ arba grupės politikos paleisties scenarijaus; rinkinio failą į kiekvieną kompiuterį pristatykite taip, kaip jūsų organizacija pristato paslaptis.

## 4. Prisijunkite iš mokytojo kompiuterio

Host programoje suraskite kompiuterius (**Ieškoti tinkle**) arba pridėkite pagal adresą ir sudėkite į klasę. Pirmą kartą Host parodo kiekvieno kompiuterio liudijimo kontrolinį kodą: palyginkite jį su tuo, kurį Client praneša tame kompiuteryje, ir patvirtinkite. Toliau ryšys šifruojamas (TLS 1.2 arba 1.3), o laboratorijos raktas įrodo, kas jungiasi.

## Atnaujinimas ir šalinimas

Host gali atnaujinti Client visos klasės kompiuteriuose pasirašyta versija, kurios parašą ir maišą Client pirmiausia patikrina, ir gali jį pašalinti iš vieno kompiuterio vienu metu. Arba paleiskite diegimo ar šalinimo programą pačiame kompiuteryje.

Daugiau: [Atsisiuntimas]({{< relref "/school/download" >}}), [Privatumas]({{< relref "/school/privacy" >}}), [Saugumas]({{< relref "/school/security" >}}), [Pagalba]({{< relref "/school/support" >}}).
