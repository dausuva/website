---
title: "Informacija mokyklos IT specialistui."
description: "Architektūra, prieigos teisės, naujinimas ir ankstyvosios prieigos ribos, kurias reikia įvertinti prieš bandymą mokykloje."
translationKey: "school-security"
slug: "saugumas"
schoolPage: true
aliases: ["/classroom-manager/security/", "/school/security/"]
---
## Tiesioginis ryšys ir plačios administravimo teisės

Mokytojo Host jungiasi prie kiekvieno Windows Client mokyklos tinkle. Windows tarnyba atlieka privilegijuotus veiksmus, o pagalbinė programa veikia prisijungusio naudotojo seanse. Debesijos valdymo serverio ir paskyros nereikia.

Leiskite valdymo ryšius tik iš numatytų mokytojų ar administratorių kompiuterių mokyklos tinkle. Neatidarykite šių prievadų viešajam internetui.

## Vaidmenys ir raktų gyvavimo ciklas

Ryšiai autentifikuojami bendraisiais raktais. Naudokite atskirus, įvardytus Teacher ir Admin prieigos duomenis, o ne vieną visiems išdalytą administravimo raktą. Žinokite, kas turi raktus, saugokite konfigūraciją bei kopijas ir sutarkite raktų išdavimą, keitimą bei atšaukimą.

Teacher teises tikrina Client. Vien naudotojo sąsajos režimas nesumažina Admin rakto teisių. Atšaukimo ir žurnalų patikras reikia pakartoti su pateikiama versija ir konkrečiu diegimu.

## TLS šifravimas nėra serverio tapatybės patikra

TLS šifruoja ryšį, tačiau Host turi patikrinti, kad jungiasi prie numatyto Client. **Senesnės Host versijos netikrina Client sertifikato**, todėl vien šifravimo negalima pristatyti kaip apsaugos nuo aktyvaus tarpininko.

Naujame išeities kode komandų eilutės Host papildytas tikslių TLS sertifikatų susiejimu ir nepriklausomu jų registravimu. Grafinis registravimas ir jau įdiegtų kompiuterių migracija dar nebaigti. Pasiteiraukite, kokios patikros yra būtent jums pateiktame pakete, ir jas patikrinkite prieš plėtrą.

## Naujinimas ir atkūrimas

Client savinaujinimas prieš diegimą tikrina kontrolinę sumą ir kodo parašą. **Automatinis grįžimas į ankstesnę versiją nepavykus programai pasileisti neįgyvendintas.** Turėkite žinomą veikiančią versiją, nepriklausomą prieigos būdą ir išbandytą pakartotinio diegimo procedūrą.

Windows Update ir programų diegikliai turi atskirus tinklo, teisių ir paleidimo iš naujo reikalavimus. Vertinkite juos atskirai nuo pačios programos naujinimo.

## Nebaigti saugumo darbai

Vietinio tarnybos ir pagalbinės programos kanalo tapatybės stiprinimas, automatinis grįžimas po naujinimo ir platesnės saugumo žurnalų bei raktų atšaukimo patikros dar nebaigti. Failų kelių apribojimai nėra sustiprinta apsauga nuo failų sistemos jungčių. Admin komandų vykdymas sąmoningai turi plačias teises.

Šio ankstyvosios prieigos produkto negalima pristatyti kaip saugumo auditą praėjusio, sertifikuoto atitikčiai, mokinio neapeinamo užrakto ar paruošto plačiam neprižiūrimam diegimui.

## Ko paprašyti prieš bandymą

Paprašykite tikslios paketo versijos, vaidmenų ir atšaukimo testų rezultatų, serverio tapatybės tikrinimo procedūros, ugniasienės rekomendacijų, žurnalų laukų, naujinimo patikrų bei atkūrimo bandymo. Priėmimo kriterijus sutarkite su mokyklos IT atsakingu asmeniu.

[Pradėkite nuo kontroliuojamo bandymo]({{< relref "/school/getting-started" >}}). Apie saugumo klausimus rašykite [support@dausuva.lt](mailto:support@dausuva.lt). Nesiųskite privačių raktų, prisijungimo duomenų ar mokinių įrašų.
