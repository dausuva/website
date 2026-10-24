---
title: "Faktai, kuriuos galite patikrinti."
description: "Kas įrodyta apie Classroom Manager, kaip tai išbandyta, ko neteigiame ir kaip kiekvieną teiginį patikrinti patiems prieš perkant."
translationKey: "school-proof"
slug: "faktai"
schoolPage: true
aliases: ["/classroom-manager/proof/", "/school/proof/"]
---
Mokykla, perkanti programą savo kompiuterių klasei, neturėtų tikėti vien mūsų žodžiu. Šiame puslapyje išvardyta, ką Classroom Manager daro, kaip kiekvienas teiginys parodytas ir kaip galite jį patikrinti. Kiekvienam šios svetainės sakiniui vedame faktų tikrinimo įrašą ir jį atnaujiname su kiekviena versija; kas neparodyta, į puslapį nepatenka.

## Naudojama

- **Veikianti mokyklos klasė.** Classroom Manager valdo mokyklos kompiuterių klasę su 20 Windows kompiuterių; ją šia programa prižiūri klasės administratorius.
- **Penki bandomieji kompiuteriai namuose** su Windows 10 ir Windows 11, tarp jų Windows 11 Home, praeina visą patikrą nuo pradžios iki galo.
- **32 bitų Windows 10 bandomasis kompiuteris** senesnei įrangai. 2026 m. spalio 24 ir 25 d. jame patvirtinti naujausi failai, akcento spalva, klaidų kodai, laiko sinchronizavimas, Windows naujinimų patikra, tvarkaraščiai uždarius mokytojo programą ir tai, kad išjungti kompiuteriai pasiveja.

## Sukurta taip, kad būtų galima patikrinti

| Faktas | Kaip parodyta | Patikrinkite patys |
|---|---|---|
| Daugiau nei 2 100 automatinių testų po kiekvieno pakeitimo | Testai pirminiame kode; versija nesukuriama, jei bent vienas nepavyksta | Testus rasite [pirminiame kode](https://github.com/dausuva/classroom-manager) |
| 89 sveikatos patikros išbando kiekvieną veiksmą tarp mokytojo ir mokinio kompiuterio | Classroom Health jas vykdo tikrame kompiuteryje | Paprašykite parodyti sveikatos ataskaitą per demonstraciją |
| Kiekviena kliento komanda arba patikrinta, arba įrašyta į niekada nesiunčiamų sąrašą su priežastimi | Kitaip testas sustabdo versijos kūrimą | Sąrašas yra pirminiame kode |
| 25 aprašyti klaidų kodai su priežastimi ir sprendimu | Kiekvienas klaidos pranešimas baigiasi kodu | Klaidų kodai paaiškinti vadove |
| Kiekvienas langas anglų ir lietuvių kalba, daugiau nei 3 500 tekstų | Testas nepraeina, jei tekstas neišverstas | Perjunkite kalbą per demonstraciją |
| Visada šifruojama: TLS 1.2/1.3, patvirtintas kiekvieno kompiuterio sertifikatas, pasirašyti kadrai | Saugumo testai, tarp jų su pakeistais ir pakartotais pranešimais | Žr. [Mokyklos IT specialistui](../saugumas/) |
| Vaidmenys, kuriuos tikrina mokinio kompiuteris: stebėtojas, mokytojas, administratorius, pasirinktinai tik tam tikrose klasėse | Testai su kiekvienu vaidmeniu; patikrinta tikruose kompiuteriuose | Bandymo metu paprašykite mokytojo rakto |
| Mokinio programos naujinimai turi būti pasirašyti jūsų sertifikatu | Klientas atsisako nepasirašytos ar nežinomos versijos | Išbandykite bandymo metu |
| Jokio ekranų peržiūrėjimo, fiksavimo ar įrašymo | Tokios funkcijos kode nėra | Skaitykite [privatumo puslapį](../privatumas/) |

## Ko neteigiame

- **Jokio mokinių sekimo.** Programa niekada nerodo ir neįrašo mokinių ekranų. Ji tvarko administracinius duomenis ir failus, kuriuos nusprendžiate surinkti.
- **Ne saugaus egzamino sistema.** Egzamino režimas nustato klasės apribojimus; tai nėra apsaugos nuo nusirašinėjimo garantija.
- **Ankstyvoji prieiga.** Kiekviena mokykla pradeda nuo demonstracijos ir vieno bandomojo kompiuterio. Kas veikia, lemia jūsų Windows sąranka ir taisyklės; tai patikriname kartu.
- **Jokio atsakymo laiko pažado.** Pagalba — tikri žmonės el. paštu ir telefonu, ne garantuotas paslaugos lygis.
- **Kol kas jokių vertinimų ar atsiliepimų.** Mokyklų žodžius skelbsime tik su jų sutikimu ir jų pačių žodžiais.

## Paprašykite įrodymų

Per demonstraciją galite paprašyti parodyti bet kurią šio puslapio eilutę: sveikatos ataskaitą tikrame kompiuteryje, klaidų kodų sąrašą, testų paleidimą ar lietuvišką sąsają. Po to paruošiame bandomąjį paketą vienam jūsų kompiuteriui, kad patikrintumėte savo tinkle dar nieko nemokėję.

[Užsisakyti demonstraciją](../kontaktai/) · [Kaip vyksta bandymas](../pradzia/) · [Palyginimas su Veyon](../palyginimas/)
