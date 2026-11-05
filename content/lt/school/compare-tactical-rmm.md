---
title: "Classroom Manager ir Tactical RMM greta."
description: "Sąžiningas palyginimas su Tactical RMM, nemokama savo serveryje diegiama nuotolinio stebėjimo ir valdymo programa: kam kuri skirta, ko reikia jai paleisti, kas kainuoja papildomai ir kuri tinka mokyklos klasei."
translationKey: "school-compare-rmm"
slug: "palyginimas-tactical-rmm"
schoolPage: true
nofollowExternal: true
---
Tactical RMM — populiari nemokama, savo serveryje diegiama programa IT skyriams ir paslaugų teikėjams, kurie iš vieno interneto valdymo lango prižiūri daug „Windows“ (ir kai kurių „Linux“ bei „Mac“) kompiuterių. Mokyklos IT komanda ją gali pažinoti. Priežiūros srityje ji dalinai sutampa su Classroom Manager, bet sukurtos jos skirtingiems žmonėms: **Tactical RMM skirta administratoriui, kuris stebi ir taiso kompiuterių parką; Classroom Manager — mokytojui prieš klasę, o šalia jo — administratoriaus įrankiai.**

Palyginta 2026 m. lapkričio 5 d., remiantis Tactical RMM dokumentacija (pagrindinis puslapis, serverio diegimo vadovas ir licencijos puslapis) bei jos GitHub saugykla. Tactical RMM šiam palyginimui nebuvo diegta, o jos dokumentacija keičiasi; viską, kuo remiatės, patikrinkite. Classroom Manager stulpelis aprašo dabartinę versiją; paprašykite demonstracijos ir pamatysite patys.

## Trumpai

| | Tactical RMM | Classroom Manager |
|---|---|---|
| Skirta | Daugelio kompiuterių nuotoliniam stebėjimui ir valdymui IT darbuotojų | Windows klasei paruošti, vesti joje pamoką ir ją prižiūrėti mokytojo ar mokyklos IT |
| Kaip sudaryta | Centrinis serveris, kurį patys įdiegiate ir prižiūrite, ir agentas kiekviename kompiuteryje | Serverio nėra: mokytojo Host jungiasi tiesiai prie Client kiekviename kompiuteryje mokyklos tinklu |
| Ką reikia paleisti | „Linux“ serverį („Debian 13“ ar „Ubuntu 26.04 LTS“, bent 4 GB RAM) su trimis DNS vardais, TLS sertifikatais ir TCP prievadu 443 | Vieną Host mokytojo kompiuteryje ir Client kiekviename mokinio kompiuteryje; jokio serverio, jokių DNS vardų |
| Kompiuteriai | „Windows 7“–11 ir „Windows Server“; „Linux“ ir „Mac“ agentai — rėmėjų galimybė | „Windows 10/11“, 64 ir 32 bitų |
| Kaina | Nemokama savo organizacijos sistemoms; žr. licenciją žemiau | Nemokama iki 3 vienu metu prisijungusių kompiuterių; mokyklai €499 pirmiems metams, vėliau €299 per metus; be mokesčio už kompiuterį |
| Pagalba | Dokumentacija ir bendruomenė | Paruošimas, įvadinė pagalba ir metai naujinimų bei pagalbos įskaičiuoti |
| Kalbos | Nepatikrinta | Anglų ir lietuvių, kiekvienas tekstas |

## Per pamoką

| Užduotis | Tactical RMM | Classroom Manager |
|---|---|---|
| Užrakinti ekranus su mokytojo pranešimu | Nėra galimybių sąraše | Taip |
| Siųsti pranešimą mokiniams | Nėra galimybių sąraše | Taip |
| Atidaryti svetainę ar programą visuose kompiuteriuose | Per scenarijų | Taip, vienu paspaudimu, su išsaugotais mygtukais |
| Išdalinti failus į mokinių aplankus | Nėra galimybių sąraše (yra nuotolinė failų naršyklė) | Taip, į darbalaukį, dokumentus ar bet kurį aplanką, su atšaukimu |
| Surinkti failus pagal pavadinimo šabloną, kiekvienam mokiniui atskirai | Nėra galimybių sąraše | Taip |
| Egzamino režimas: svetainės, programos, garsas, kamera, USB laikmenos | Nėra galimybių sąraše | Įskaičiuota |
| Nuotolinis darbalaukis viename kompiuteryje | Taip (per „MeshCentral“) | Ne, sąmoningai: mokinių ekranai nei peržiūrimi, nei fiksuojami, nei įrašomi |

## Kompiuterių priežiūra

| Užduotis | Tactical RMM | Classroom Manager |
|---|---|---|
| Įdiegti ar pašalinti programas keliuose kompiuteriuose | Taip, per „Chocolatey“ | Taip: diegimo programos, MSI, winget, registro failai |
| „Windows“ naujinimai: tikrinti, rinktis, diegti | Taip, naujinimų valdymas | Taip, su pristabdymu ir tęsimu |
| Aparatinės ir programinės įrangos inventorius | Taip | Taip, su eksportu į CSV |
| Vykdyti scenarijus | Taip: „PowerShell“, „batch“, „Python“, „bash“, „Nushell“ ir „Deno“ | Vykdyti komandą pasirinktuose kompiuteriuose; komandinė eilutė scenarijams ir užduočių planuokliui |
| Nuotolinė komandų eilutė, failų naršyklė, registro redaktorius | Taip | Taip |
| Automatiniai patikrinimai ir įspėjimai el. paštu, SMS ar žiniatinkliu | Taip | Ne: pultas rodo kiekvieno kompiuterio būseną, įspėjimų nėra |
| Tvarkaraščiai | Automatinės užduotys agentuose | Užrakinti, pranešimas, įjungti, perkrauti, išjungti, laikrodžio sinchronizavimas, naujinimų tikrinimas ir mėnesinė mokinių darbų kopija, pasivejant išjungtus kompiuterius |
| Fono paveikslėlis, prisijungimo paveikslėlis, ekrano užsklanda, temos, klaviatūros išdėstymai | Per scenarijus | Įtaisyta |
| Diagnostika, kai kas nors nesijungia | Serverio ir agento žurnalai | Du sveikatos tikrintuvai ir dokumentuoti klaidų kodai |

## Prieiga, sauga ir licencija

| | Tactical RMM | Classroom Manager |
|---|---|---|
| Kas gali valdyti | Technikų paskyros interneto pulte, su vienkartinių kodų programa | Laboratorijos raktai su Observer, Teacher ar Admin vaidmenimis, kuriuos tikrina kiekvienas kompiuteris; raktus galima riboti klasėmis |
| Kuo eina valdymo kelias | Agentai jungiasi prie jūsų serverio, kuris gali likti mokyklos tinkle arba būti atvertas per 443 prievadą kitur esantiems kompiuteriams | Tik Host–Client mokyklos tinkle; valdymo prievadai neskirti matytis internete |
| Vieningas prisijungimas, ataskaitos, pasirašyti „Windows“ agentai | Rėmėjų galimybės | Pasirašytos programos ir diegimo programos bei skiltis Reports yra produkto dalis; vieningo prisijungimo nėra, prieiga — laboratorijos raktais |
| Licencija | Pirminis kodas prieinamas pagal Tactical RMM licenciją, kurioje sakoma, kad ji nėra atvirojo kodo licencija | Komercinė licencija mokyklai; nemokama iki 3 vienu metu prisijungusių kompiuterių |
| Naudojimo sąlygos | Nemokama diegti ir naudoti savo tinklams ir sistemoms; komercinėms ar pelno paslaugoms (SaaS, valdoma prieglobos paslauga, diegimo ar konfigūravimo paslaugos) reikia raštiško tiekėjo sutikimo | Viena metinė kaina mokyklai, be mokesčio už kompiuterį |

## Kuri tinka

**Rinkitės Tactical RMM**, jei esate IT skyrius ar paslaugų teikėjas su daugybe kompiuterių skirtingose vietose, norite įspėjimų, kai kas nors sugenda, nuotolinio darbalaukio ir scenarijų bibliotekos, jums patogu patiems diegti ir saugoti „Linux“ serverį bei DNS vardus, ir valdote tik savo organizacijos kompiuterius (arba turite tiekėjo sutikimą komercinei veiklai).

**Rinkitės Classroom Manager**, jei juo naudosis mokytojai ir nedidelė mokyklos IT komanda, norintys iš mokytojo kompiuterio užrakinti, siųsti pranešimus, dalinti ir rinkti failus bei vesti egzaminus, be serverio, šalia turėdami priežiūros įrankius, už fiksuotą metinę kainą, su pagalba diegiant ir be nepilnamečių ekranų fiksavimo, kurį reikėtų pagrįsti pagal BDAR.

Kai kurios mokyklos galėtų naudoti abi: Tactical RMM — savivaldybės kompiuterių parkui ir įspėjimams, Classroom Manager — klasei prieš mokinius. Paklauskite, ar tai tiktų jūsų aplinkai. Taip pat žr. [palyginimą su Veyon]({{< relref "/school/compare-veyon" >}}) ir [visus palyginimus]({{< relref "/school/compare" >}}).

## Šaltiniai (perskaityti 2026 m. lapkričio 5 d.)

- [Tactical RMM dokumentacija](https://docs.tacticalrmm.com/), jos [serverio diegimo vadovas](https://docs.tacticalrmm.com/install_server/) ir [licencija](https://docs.tacticalrmm.com/license/)
- [Tactical RMM „GitHub“](https://github.com/amidaware/tacticalrmm)
- <span class="soon" title="bus prieinama, kai viešoji saugykla bus atverta">Classroom Manager pirminis kodas</span> ir [faktai, kuriuos galime parodyti]({{< relref "/school/proof" >}})

[Užsisakyti demonstraciją]({{< relref "/school/request" >}}) · [Žiūrėti kainas]({{< relref "/school/pricing" >}}) · [Kiek kainuoja kompiuteriui]({{< relref "/school/market" >}})
