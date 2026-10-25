---
title: "Informacija mokyklos IT specialistui."
description: "Architektūra, prieigos teisės, atkūrimas po naujinimo ir patikros prieš diegiant mokykloje."
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

## Šifruotas ryšys ir Client tapatybės patikra

Kiekvienam ryšiui naudojamas TLS 1.2 arba 1.3. Host taip pat saugo patvirtintą kiekvieno kompiuterio Client sertifikatą, todėl gali atmesti kitą serverį, net jei šis sugeba užmegzti šifruotą ryšį.

Sertifikatą galima patvirtinti Host programoje, importuoti iš Client Health registravimo failo arba užregistruoti naujam Client pranešus apie save su klasės raktu. Naudojamoje klasėje jau įdiegti kompiuteriai perkelti į šią tvarką. Vis tiek svarbi konkretaus paketo ir diegimo būsena: prieš diegdami plačiau patikrinkite tikrų kompiuterių sertifikatų būseną lange **Apsaugoti laboratoriją**.

## Naujinimas ir atkūrimas

Client savinaujinimas prieš diegimą tikrina kontrolinę sumą ir kodo parašą. Jei nauja versija nepasileidžia, šiuo metu atkuriama rankiniu būdu iš žinomo veikiančio paketo. Todėl turėkite nuo Classroom Manager nepriklausomą prieigos prie kompiuterių būdą ir šią procedūrą išbandykite bandymo metu.

Windows Update ir programų diegikliai turi atskirus tinklo, teisių ir paleidimo iš naujo reikalavimus. Vertinkite juos atskirai nuo pačios programos naujinimo.

## Saugumo ribos, kurias reikia patikrinti

Dabartiniame kode yra vietinio tarnybos ir pagalbinės programos ryšio tapatybės patikros, grandine apsaugoti Client saugumo įvykiai, sertifikatų būsenos patikra ir prieigos raktų pašalinimas, kuris pasiveja tuo metu išjungtus kompiuterius. Vaidmenų, atšaukimo, žurnalų ir pagalbinio ryšio patikras pakartokite su pateikta versija ir savo Windows konfigūracija, o ne spręskite vien iš demonstracijos.

Leidžiami failų aplankai sumažina netyčinės prieigos ribas, bet nėra sustiprinta apsauga nuo failų sistemos jungčių. Admin komandų vykdymas sąmoningai turi plačias teises. Nepasileidus Client, atkūrimas atliekamas rankiniu būdu. Classroom Manager nėra nepriklausomai audituota saugumo požiūriu, sertifikuota atitikčiai ar mokinio neapeinama užrakinimo sistema. Pradėkite nuo vieno bandomojo kompiuterio ir plėskite etapais.

## Ko paprašyti prieš bandymą

Paprašykite tikslios paketo versijos, Classroom Health ataskaitos, lango **Apsaugoti laboratoriją** ataskaitos, Client tapatybės tikrinimo procedūros, ugniasienės rekomendacijų, vaidmenų ir atšaukimo testų, nepasirašyto naujinimo atmetimo rezultato ir rankinio atkūrimo veiksmų. Priėmimo kriterijus sutarkite su mokyklos IT atsakingu asmeniu.

[Pradėkite nuo kontroliuojamo bandymo]({{< relref "/school/getting-started" >}}). Apie saugumo klausimus rašykite {{< contact >}}. Nesiųskite privačių raktų, prisijungimo duomenų ar mokinių įrašų.
