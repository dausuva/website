---
title: "Kodo pasirašymo politika"
description: "Kaip kuriami ir tvirtinami Classroom Manager leidimai, kas pasirašoma ir ką programos siunčia arba nesiunčia."
translationKey: "school-code-signing-policy"
slug: "kodo-pasirasymo-politika"
schoolPage: true
draft: true
---
<!-- Kai SignPath Foundation projektą patvirtins, čia pridėkite (šia tvarka) sakinį
"Free code signing provided by SignPath.io, certificate by SignPath Foundation." su dviem pavadinimais, nurodančiais https://about.signpath.io/ ir https://signpath.org/ .
Anksčiau neįrašykite: kol kas leidimai taip nepasirašomi. -->

Šiame puslapyje aprašoma, kaip kuriami ir tvirtinami Classroom Manager leidimai. Tas pats tekstas yra projekto saugykloje, faile `CODE_SIGNING_POLICY.md`.

## Kas kuriama ir pasirašoma

- Dvi programos: **Host** (`ClassroomHost.exe`, mokytojo valdymo programa) ir **Client** (`ClassroomClient.exe`, paslauga ir pagalbinė programa mokinių kompiuteriuose), taip pat jas talpinančios diegimo programos.
- Kiekvieną leidimą „GitHub Actions“ sukuria iš pažymėtos versijos viešoje saugykloje [github.com/dausuva/classroom-manager](https://github.com/dausuva/classroom-manager). Kūrimo scenarijai ir darbo eiga yra saugykloje ir tikrinami kaip kodas.
- Pasirašomos tik iš šios saugyklos šaltinio sukurtos programos. Programų naudojami paketai su versijomis ir maišos reikšmėmis išvardyti kiekvieno leidimo programinės įrangos sudėties sąraše.

## Kas sprendžia

- **Autoriai ir peržiūrėtojai:** Dausuva MB prižiūrėtojai. Kiekvieną saugyklos pakeitimą prieš sujungiant peržiūri prižiūrėtojas.
- **Tvirtintojas:** prižiūrėtojas kiekvieno leidimo pasirašymo užklausą patvirtina rankiniu būdu. Niekas nepasirašoma automatiškai.
- Kiekvienas, turintis vaidmenį, naudoja dviejų veiksnių autentifikaciją „GitHub“ ir pasirašymo paslaugoje.

## Kol pasirašymo nėra

Nepasirašytas leidimas savo puslapyje pavadintas „(unsigned)“, ir prieš jį paleidžiant „Windows“ perspės. Kiekvienas leidimas, pasirašytas ar ne, turi `SHA256SUMS.txt`: palyginkite su juo savo atsisiuntimą. Pačių iš šaltinio sukurta versija yra neoficiali ir nepasirašyta.

## Ką programos siunčia

Programos nesiunčia informacijos kitoms tinklo sistemoms, nebent to paprašo jas naudojantis asmuo. Debesijos paslaugos nėra. Mokytojo Host gali kartą per parą pažiūrėti github.com, ar yra naujesnė versija (nieko nesiunčiama atgal ir nieko neatsisiunčiama); pirmą kartą paleistas jis paklausia, ir pasirinkimą galima keisti nustatymuose. Žr. [Privatumas](/mokykloms/privatumas/).

## Programų šalinimas

Abi programos turi pašalinimo programą skiltyje Nustatymai > Programos. Host taip pat pašalina Client iš mokinio kompiuterio, kai mokytojas to paprašo.

## Pranešti apie problemą

Apie programų ar leidimų proceso silpnybę rašykite [support@dausuva.com](mailto:support@dausuva.com) (žr. [Saugumas](/mokykloms/saugumas/)). Dėl jos neatidarykite viešo pranešimo.
