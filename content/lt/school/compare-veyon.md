---
title: "Classroom Manager ir Veyon greta."
description: "Classroom Manager ir Veyon, nemokama atvirojo kodo klasės programa: ką daro kiekviena, kas kainuoja papildomai ir kuri tinka."
translationKey: "school-compare-veyon"
slug: "palyginimas-veyon"
schoolPage: true
nofollowExternal: true
---
<p class="verdict"><strong>Vienu sakiniu:</strong> Veyon — nemokama atvirojo kodo klasės programa mokinių ekranams matyti ir valdyti; Classroom Manager paruošia ir prižiūri Windows klasę, ekranų nestebėdama.</p>

Veyon — žinomiausia nemokama klasės programa Windows ir Linux kompiuterių klasėms, ją pažįsta daug mokyklų. Abi programos atlieka tuos pačius kasdienius pamokos veiksmus, tačiau sukurtos skirtingiems tikslams: **Veyon skirta mokinių ekranams matyti ir valdyti, o Classroom Manager — Windows klasei paruošti, nustatyti ir prižiūrėti, niekieno ekrano nestebint.**

Dar kartą palyginta 2026 m. lapkričio 5 d. su Veyon 4.11.4 (išleista 2026 m. spalio 15 d., tebėra naujausia), remiantis jos galimybių ir priedų puslapiais, versijų pastabomis ir naujienų puslapiu. Veyon šiam palyginimui nebuvo diegta. Classroom Manager stulpelis aprašo dabartinę versiją; paprašykite demonstracijos ir pamatysite patys.

## Trumpai

| | Veyon | Classroom Manager |
|---|---|---|
| Skirta | Ekranams matyti ir valdyti per pamoką | Windows klasei paruošti, nustatyti ir prižiūrėti |
| Mokinių ekranai | Gyvos miniatiūros, nuotolinis peržiūrėjimas ir valdymas, ekrano transliavimas | Sąmoningai jokių: nei peržiūros, nei įrašymo |
| Kompiuteriai | Windows 10/11 ir Linux (eksperimentinė Wayland parama nuo 4.11) | Windows 10/11, 64 ir 32 bitų |
| Kaina | Nemokamas pagrindas (GPLv2); mokami priedai, kaina pagal užklausą | Nemokama iki 3 vienu metu prisijungusių kompiuterių; mokyklai €499 pirmiems metams, vėliau €299 per metus; be mokesčio už kompiuterį |
| Pagalba | Bendruomenė arba mokama sutartis | Paruošimas, įvadinė pagalba ir metai naujinimų bei pagalbos įskaičiuoti |
| Kalbos | Daug | Anglų ir lietuvių, kiekvienas tekstas |

## Per pamoką

| Užduotis | Veyon | Classroom Manager |
|---|---|---|
| Stebėti mokinių ekranus (miniatiūros, vienas ekranas visu dydžiu), daryti ekrano nuotraukas | Taip | Sąmoningai ne |
| Rodyti mokytojo ar mokinio ekraną klasei | Taip (ekrano transliacija, demonstravimas) | Ne |
| Įrašyti mokinių ekranus kaip vaizdo įrašą | Mokamas priedas (Screen Recorder) | Sąmoningai ne |
| Užrakinti ekranus su pranešimu | Taip | Taip |
| Siųsti pranešimą | Taip | Taip |
| Atidaryti svetainę ar programą visuose kompiuteriuose | Taip | Taip |
| Išdalinti failus | Taip | Taip, į darbalaukį, dokumentus ar bet kurį aplanką, su atšaukimu |
| Surinkti failus | Taip (nuo 4.10) | Taip, pagal pavadinimo šabloną, kiekvienam mokiniui atskirai |
| Matyti, ką mokiniai pakeitė per pusvalandį, ir tai nukopijuoti | Ne | Taip: naujausi failai pagal laiką ir tipą, vienu paspaudimu |
| Prijungti mokinį nuotoliu | Taip | Taip |
| Įjungti, perkrauti, išjungti | Taip | Taip, su atšaukimu |
| Egzamino režimas: svetainės, programos, garsas, kamera, USB laikmenos | Interneto prieigos valdymas (nuo 4.11 ir pagal svetainę) ir įrenginių valdymas (garsas, mikrofonai, internetinės kameros, USB) — mokami priedai | Įskaičiuota |

## Klasės priežiūra

| Užduotis | Veyon | Classroom Manager |
|---|---|---|
| Diegti ar šalinti programas daugelyje kompiuterių | Ne | Taip: diegikliai, MSI, winget, registro failai |
| Windows naujinimai: patikrinti, pasirinkti, įdiegti, pristabdyti | Tik išjungiant | Taip |
| Paskyros, procesai, suplanuotos užduotys, paleisties programos, registras | Ne | Taip |
| Darbalaukio fonas, prisijungimo paveikslėlis, ekrano užsklanda, temos, klaviatūros išdėstymai | Ne | Taip |
| Pervardyti kompiuterius, nustatyti laiką visuose kompiuteriuose | Ne | Taip |
| Tvarkaraščiai, kurie pasiveja išjungtus kompiuterius | Ne | Taip: laiko sinchronizavimas, naujinimų patikra, mėnesinė mokinių darbų kopija |
| Komandinė eilutė scenarijams ir užduočių planuokliui | Taip, ir žiniatinklio API | Taip, be žiniatinklio API |
| Diagnostika, kai neprisijungia | Žurnalai | Du sveikatos tikrintojai ir aprašyti klaidų kodai |

## Prieiga ir saugumas

| | Veyon | Classroom Manager |
|---|---|---|
| Kas gali valdyti | Windows ar Linux prisijungimas arba raktų failai; grupių taisyklės | Klasės raktai su stebėtojo, mokytojo ar administratoriaus vaidmeniu, kurį tikrina kiekvienas kompiuteris; raktus galima apriboti klasėmis |
| Katalogas | Įtaisytas sąrašas arba LDAP/Active Directory; Entra ID — mokamas priedas | Įtaisytas sąrašas su klasėmis |
| Šifravimas | Pagrindiniam kanalui iš perskaitytų puslapių nenustatyta | TLS 1.2/1.3 visada įjungtas, patvirtintas kiekvieno kompiuterio sertifikatas, pasirašyti ir tikrinami kadrai |
| Kompiuterių paieška | Mokamas priedas (Network Discovery) | Įtaisyta, autentifikuota paieška tinkle |

## Kas neseniai pasikeitė Veyon

- **4.11.0 (2026 m. liepos 10 d.):** eksperimentinė Wayland parama „Linux“; priedas Internet Access Control gali riboti prieigą prie pasirinktų svetainių, o ne visą internetą.
- **4.11.1 (rugpjūčio 21 d.):** VNC protokolo ir vidinio funkcijų ryšio sauga sugriežtinta, riba vienu metu prisijungiančių serverio ryšių skaičiui, pritaikomi tekstinių pranešimų pavadinimai.
- **4.11.3 (rugsėjo 18 d.):** matomumo režimas, galintis sulieti ar paslėpti miniatiūras stebėjimo rodinyje.
- **4.11.4 (spalio 15 d.):** pataisymai, įskaitant funkcijas, kurios nustojo veikti po „Windows Defender“ naujinimo.

Veyon priedai šiandien: Internet Access Control, Auvidus (garsas, mikrofonai, internetinės kameros ir USB), Screen Recorder, Chat, Entra ID Connector ir Network Discovery. Nė vieno kaina neskelbiama, kiekvieno — pagal užklausą.

## Kuri tinka

**Rinkitės Veyon**, jei svarbiausia matyti ir valdyti mokinių ekranus: gyvos miniatiūros, demonstravimas iš mokytojo ekrano, nuotolinis valdymas, Linux klasės ar nemokama programa su bendruomenės pagalba.

**Rinkitės Classroom Manager**, jei darbas — palaikyti Windows klasę paruoštą: programos, naujinimai, nustatymai, paskyros ir egzamino apribojimai, failai pirmyn ir atgal, su fiksuota metine kaina, pagalba diegiant ir be nepilnamečių ekranų įrašymo, kurį reikėtų pagrįsti pagal BDAR.

Kai kurios mokyklos galėtų naudoti abi: Veyon — ekranų darbui per pamoką, Classroom Manager — pačiai klasei. Paklauskite mūsų, ar tai tinka jūsų sąrankai.

## Šaltiniai (perskaityti 2026 m. lapkričio 5 d.)

- [Veyon](https://veyon.io/en/), [jos galimybės](https://veyon.io/en/features/) ir [priedai](https://veyon.io/en/addons/)
- [Veyon leidimai „GitHub“](https://github.com/veyon/veyon/releases) ir [naujienos](https://veyon.io/blog/)
- [Veyon 4.11.0 pranešimas](https://veyon.io/blog/2026/07/10/veyon-4-11-0-released/) ir [versijų pastabos](https://docs.veyon.io/en/latest/admin/release-notes.html)
- <span class="soon" title="bus prieinama, kai viešoji saugykla bus atidaryta">Classroom Manager pirminis kodas</span> ir [faktai, kuriuos galime parodyti](../faktai/)

Žr. [visus palyginimus]({{< relref "/school/compare" >}}), įskaitant [Tactical RMM]({{< relref "/school/compare-tactical-rmm" >}}) ir [NetSupport School]({{< relref "/school/compare-netsupport-school" >}}).

[Užsisakyti demonstraciją](../kontaktai/) · [Kainos](../kainos/) · [Kiek kainuoja vienam kompiuteriui](../rinka/)
