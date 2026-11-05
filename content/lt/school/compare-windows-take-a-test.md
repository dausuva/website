---
title: "Classroom Manager ir Microsoft mokyklos kompiuterių įrankiai greta."
description: "Sąžiningas palyginimas su Microsoft programa Set up School PCs ir saugaus vertinimo programa Take a Test sistemai Windows: ką daro kiekviena, ko reikia ir kuo užrakinimo būdas skiriasi nuo blokavimo sąrašų."
translationKey: "school-compare-microsoft"
slug: "palyginimas-microsoft-take-a-test"
schoolPage: true
nofollowExternal: true
---
Mokyklos, naudojančios „Windows“, jau turi du „Microsoft“ įrankius: **Set up School PCs** — programą naujiems kompiuteriams paruošti mokyklai, ir **Take a Test** — įtaisytą saugią naršyklę vertinimams. Tai nėra klasės valdymo programos, bet mokyklos IT specialistas klaus, kuo jie skiriasi nuo tokios, ir jie rodo skirtingą **požiūrį** į tuos pačius darbus: „Microsoft“ kompiuterį vieną kartą nustato ir užrakina testui; Classroom Manager klasės kompiuterius valdo visą dieną.

Palyginta 2026 m. lapkričio 5 d., remiantis „Microsoft Learn“ puslapiais apie Set up School PCs ir Take a Test (paskutinio atnaujinimo datos nurodytos šaltiniuose žemiau; „Microsoft“ taip pat įspėja, kad „Windows 11 SE“ palaikymas baigsis 2026 m. spalį). Nei vieno įrankio šiam palyginimui nenustatinėjome. Classroom Manager stulpelis aprašo dabartinę versiją; paprašykite demonstracijos ir pamatysite patys.

## Trumpai

| | Set up School PCs ir Take a Test | Classroom Manager |
|---|---|---|
| Kas tai | Set up School PCs įrašo „mokyklai optimizuotus nustatymus, programas ir politikas į vieną diegimo paketą“ USB laikmenai. Take a Test — įtaisyta užrakinta naršyklė | Mokytojo pultas ir Client kiekviename kompiuteryje klasei vesti ir prižiūrėti |
| Kada veikia | Vieną kartą, kai kompiuteris nustatomas; ir testo metu | Visą dieną, pagal poreikį: pamokos veiksmai, priežiūra, tvarkaraščiai |
| Ko reikia | „Windows 10“ 1703 ar naujesnės versijos Set up School PCs; „Microsoft Entra ID“ ar „Microsoft 365“, kad kompiuteriai būtų prijungti prie organizacijos paskyros (angl. tenant) (galima nustatyti ir be interneto) | „Windows 10/11“ Host ir Client kompiuteriuose; debesies paskyros nereikia |
| Kaina | Take a Test įtaisyta „Windows“; Set up School PCs: perskaitytame puslapyje kaina nenurodyta | Skelbiama: nemokama iki 3 vienu metu prisijungusių kompiuterių; mokyklai €499 pirmiems metams, vėliau €299 per metus |
| Mokinių ekranai | Netaikoma: peržiūros nėra | Sąmoningai jokių |

## Kompiuterių paruošimas

| Užduotis | Set up School PCs | Classroom Manager |
|---|---|---|
| Greitas prisijungimas, mokyklos pradžios išdėstymas, svečio paskyra, mokyklos politikos | Taip: „greitas prisijungimas“, pritaikyta pradžia, svečio paskyra be prisijungimo, „mokyklos politikos“ | Ne tikslas: darbalaukio foną, prisijungimo paveikslėlį, ekrano užsklandą, temas ir klaviatūros išdėstymus galima nustatyti veikiančioje klasėje |
| Prijungti kompiuterius prie mokyklos debesies tapatybės, vieningas prisijungimas prie „Office 365“ | Taip („Microsoft Entra“ prijungimas; prisijungimas prie „Office 365“) | Ne: klasė valdoma laboratorijos raktais, o ne debesies paskyra |
| Vėliau diegti programas daugeliui kompiuterių, „Windows“ naujinimai, inventorius, paskyros | Nėra programos dalis | Taip: diegikliai, MSI, winget, registro failai; „Windows“ naujinimai; inventorius su eksportu į CSV; paskyros |
| Kaip taikoma | Diegimo paketas, įrašytas į USB laikmeną ir išdalytas mokyklos kompiuteriams | Siunčiama iš Host į tinkle esančius kompiuterius |

## Vertinimai

| | Take a Test | Classroom Manager egzamino režimas |
|---|---|---|
| Požiūris | Užrakinimas: testas veikia virš „Windows“ užrakto ekrano, per visą ekraną, be kitų programų; „užrakinimo procesas yra atominis“ | Apribojimų sąrašai, taikomi, kol klasė toliau veikia įprastai |
| Ko mokiniai negali | Spausdinti, fiksuoti ekraną ar naudoti teksto pasiūlymų (nebent leista), atverti kitų programų, keisti sistemos nustatymų, naudoti iškarpinės turinio | Programų ir svetainių blokavimo sąraše; garsą, kamerą ir USB laikmenas galima apriboti |
| Kaip prasideda | Saugaus vertinimo nuoroda, kurią dalija mokytojas, arba skirta „kiosko“ paskyra svarbesniems testams | Mokytojas įjungia egzamino režimą Host programoje pasirinktiems kompiuteriams |
| Kaip mokinys išeina | Ctrl+Alt+Delete ir slaptažodis; „permissive mode“ leidžia veikti pritaikymo programoms | Mokytojas išjungia egzamino režimą |
| Iš kur testas | Bet koks tinklalapis; testus gali kurti „Microsoft Forms“; laikomasi SBAC saugios naršyklės standarto | Neteikiama: Classroom Manager savo testų neturi |
| Statusas | Saugi vertinimo aplinka | „Praktinės klasės kontrolės priemonės, o ne saugios egzamino aplinka“ |

## Kuris tinka

**Naudokite „Microsoft“ įrankius** naujiems kompiuteriams vieną kartą paruošti, prijungti prie savo „Microsoft Entra ID“ ar „Microsoft 365“ organizacijos paskyros (tenant) ir tikrai užrakintam vertinimui per Take a Test.

**Pridėkite Classroom Manager** tam, kas vyksta tarp to: pamokai vesti iš mokytojo kompiuterio, klasės programoms ir naujinimams tvarkyti bei egzamino režimo apribojimams įprastiems darbams ir viktorinoms. Jie nekonkuruoja: mokykla gali kompiuterius paruošti per Set up School PCs, klasę valdyti su Classroom Manager, o oficialiems egzaminams naudoti Take a Test. Taip pat žr. [visus palyginimus]({{< relref "/school/compare" >}}) ir [kaip tuos pačius darbus daro skirtingi produktai]({{< relref "/school/compare-approaches" >}}).

## Šaltiniai (perskaityti 2026 m. lapkričio 5 d.)

- [Set up School PCs techninė nuoroda](https://learn.microsoft.com/en-us/education/windows/suspcs/reference) (puslapis datuotas 2024 m. spalio 29 d.)
- [Take tests and assessments in Windows](https://learn.microsoft.com/en-us/education/windows/take-tests-in-windows) (atnaujinta 2025 m. gruodžio 11 d.) ir [Take a Test techninė nuoroda](https://learn.microsoft.com/en-us/education/windows/take-a-test-app-technical) (atnaujinta 2025 m. birželio 4 d.)
- <span class="soon" title="bus prieinama, kai viešoji saugykla bus atidaryta">Classroom Manager pirminis kodas</span> ir [faktai, kuriuos galime parodyti]({{< relref "/school/proof" >}})

[Užsisakyti demonstraciją]({{< relref "/school/request" >}}) · [Žiūrėti kainas]({{< relref "/school/pricing" >}}) · [Kiek kainuoja kompiuteriui]({{< relref "/school/market" >}})
