export const rcdPost = {
  "slug": "automatinis-jungiklis-ir-sroves-nuotekio-rele",
  "title": "Automatinis jungiklis ir RCD: kuo jie skiriasi?",
  "date": "2026-08-17",
  "image": "/images/blog/nuotekio-rele.jpg",
  "excerpt": "Aiškiai apie tai, kuo skiriasi automatinis jungiklis, RCD ir RCBO, nuo kokių gedimų jie saugo ir kodėl vienas aparatas nepakeičia kito.",
  "content": [
    {
      "heading": "Svarbiausia suprasti skirtumą",
      "paragraphs": [
        "Elektros skydelyje automatinis jungiklis ir liekamosios srovės apsaugos įtaisas RCD iš pirmo žvilgsnio gali atrodyti labai panašūs. Abu montuojami ant DIN bėgelio, abu gali turėti įjungimo ir išjungimo svirtelę, o ant jų korpuso pateikiami srovės parametrai. Tačiau šių aparatų paskirtis iš esmės skiriasi.",
        "Automatinis jungiklis, dažnai žymimas MCB, pirmiausia apsaugo elektros instaliaciją nuo perkrovos ir trumpojo jungimo. RCD stebi liekamąją srovę ir skirtas apsaugai esant srovės nuotėkiui. RCBO šias dvi funkcijas sujungia viename aparate.",
        "Šį skirtumą būtina suprasti projektuojant ir eksploatuojant elektros instaliaciją. Paprastas RCD negali pakeisti automatinio jungiklio, o paprastas automatinis jungiklis negali atlikti RCD funkcijos.",
        "Buitinių ir panašios paskirties automatinių jungiklių apsaugos nuo viršsrovių reikalavimai nustatomi IEC 60898-1, o RCCB, tai yra RCD be integruotos apsaugos nuo viršsrovių, reglamentuoja IEC 61008-1. RCBO aparatams, kurie turi abi apsaugos funkcijas, taikomas IEC 61009-1."
      ]
    },
    {
      "heading": "Kas yra automatinis jungiklis?",
      "paragraphs": [
        "Automatinis jungiklis yra apsaugos aparatas, automatiškai atjungiantis elektros grandinę, kai joje atsiranda pavojinga viršsrovė.",
        "Viršsrovė gali atsirasti dėl dviejų pagrindinių priežasčių – perkrovos arba trumpojo jungimo.",
        "Perkrova atsiranda tuomet, kai elektros grandine tam tikrą laiką teka didesnė srovė, nei grandinė suprojektuota saugiai perduoti. Pavyzdžiui, prie vienos 16 A rozečių linijos prijungus kelis didelės galios elektrinius šildytuvus galima viršyti tos grandinės leistiną apkrovą.",
        "Trumpasis jungimas yra kitokio pobūdžio gedimas. Jeigu fazinis laidininkas tiesiogiai susijungia su neutraliu laidininku arba susidaro kitas labai mažos varžos gedimo kelias, srovė gali staiga padidėti iki labai didelės vertės. Tokiu atveju automatinis jungiklis turi grandinę atjungti labai greitai.",
        "IEC 60898-1 būtent taikomas automatiniams jungikliams, skirtiems buitinių ir panašios paskirties instaliacijų apsaugai nuo viršsrovių."
      ]
    },
    {
      "heading": "Kaip automatinis jungiklis apsaugo nuo perkrovos?",
      "paragraphs": [
        "Automatinio jungiklio viduje paprastai naudojamas šiluminis mechanizmas, reaguojantis į ilgiau trunkančią viršsrovę.",
        "Jeigu, pavyzdžiui, 16 A grandinė nežymiai perkraunama, automatas nebūtinai išsijungs tą pačią sekundę. Kuo didesnė perkrova, tuo greičiau turi veikti apsauga.",
        "Tai svarbu todėl, kad elektros įrenginiai gali trumpam naudoti didesnę srovę ir normalios eksploatacijos metu. Jeigu automatinis jungiklis išsijungtų vos srovei akimirkai viršijus jo nominalą, elektros sistema būtų sunkiai naudojama.",
        "Todėl B16 žymėjimas nereiškia, kad esant 16,1 A srovei aparatas iš karto atjungs grandinę.",
        "Automatinio jungiklio veikimą apibūdina jo laiko ir srovės charakteristika."
      ]
    },
    {
      "heading": "Kaip automatinis jungiklis apsaugo nuo trumpojo jungimo?",
      "paragraphs": [
        "Atsiradus labai didelei srovei pradeda veikti greitoji elektromagnetinė automatinio jungiklio apsauga.",
        "Ji skirta situacijoms, kai srovė daug kartų viršija vardinę aparato srovę.",
        "Dėl šios priežasties automatiniai jungikliai turi skirtingas charakteristikas – pavyzdžiui, B, C arba D.",
        "B charakteristikos automatai dažnai naudojami gyvenamųjų patalpų apšvietimui ir rozetėms. C charakteristika gali būti tinkama grandinėms su didesnėmis paleidimo srovėmis, o D charakteristika skirta dar specifinėms didelių paleidimo srovių apkrovoms.",
        "Tai nereiškia, kad C16 yra „stipresnis“ už B16. Abu aparatai turi 16 A vardinę srovę. Skiriasi jų momentinio elektromagnetinio suveikimo charakteristika."
      ]
    },
    {
      "heading": "Ką reiškia B16?",
      "paragraphs": [
        "Žymėjime B16 raidė B nurodo suveikimo charakteristiką, o skaičius 16 – vardinę srovę amperais.",
        "Taigi:",
        "B16 = B charakteristika + 16 A vardinė srovė.",
        "16 A vienfazėje 230 V grandinėje teoriškai atitinka:",
        "P = U × I",
        "P = 230 × 16 ≈ 3680 W.",
        "Tačiau tai nereiškia, kad galima automatiškai laikyti kiekvieną B16 grandinę „3,68 kW grandine“. Turi būti įvertintas kabelio skerspjūvis, jo montavimo būdas, trasos ilgis, aplinkos temperatūra ir kiti parametrai.",
        "Svarbiausia taisyklė yra ta, kad automatinio jungiklio nominalas turi būti suderintas su kabeliu, kurį jis saugo."
      ]
    },
    {
      "heading": "Kas yra RCD?",
      "paragraphs": [
        "RCD yra bendras terminas, reiškiantis Residual Current Device, lietuviškai – liekamosios arba skirtuminės srovės apsaugos įtaisą.",
        "Buitiniuose skydeliuose labai dažnai sutinkamas RCCB – liekamosios srovės jungiklis, kuris pats neturi integruotos apsaugos nuo perkrovos ir trumpojo jungimo.",
        "IEC 61008-1:2024 RCCB apibrėžia kaip liekamosios srovės valdomą jungiklį be integruotos apsaugos nuo viršsrovių, skirtą buitiniams ir panašios paskirties įrenginiams ir pirmiausia naudojamą apsaugai nuo elektros smūgio pavojaus.",
        "Kasdienėje kalboje toks aparatas dažnai vadinamas „nuotėkio rele“, nors techniškai tikslesni terminai yra RCD, RCCB arba skirtuminės srovės apsauga."
      ]
    },
    {
      "heading": "Kaip veikia RCD?",
      "paragraphs": [
        "RCD veikimo principas pagrįstas srovių palyginimu.",
        "Įsivaizduokime standartinę vienfazę grandinę. Per fazinį laidininką L srovė teka į vartotoją, o per neutralų laidininką N grįžta atgal.",
        "Normaliai veikiant grandinei, į vartotoją ištekanti ir iš jo grįžtanti srovė iš esmės sutampa.",
        "Pavyzdžiui:",
        "per L teka 5,00 A;",
        "per N grįžta 5,00 A.",
        "Srovių skirtumas yra praktiškai nulis ir RCD lieka įjungtas.",
        "Situacija pasikeičia atsiradus nuotėkiui.",
        "Tarkime, per fazinį laidininką išteka 5,00 A, tačiau neutraliu laidininku grįžta tik 4,97 A.",
        "Trūkstami:",
        "5,00 − 4,97 = 0,03 A = 30 mA.",
        "Tai reiškia, kad 30 mA srovės grįžta kitu keliu – pavyzdžiui, per pažeistą izoliaciją, įžemintą metalinį korpusą, konstrukciją ar žmogaus kūną.",
        "RCD aptinka šį disbalansą ir, pasiekus jo veikimo sąlygas, atjungia grandinę."
      ]
    },
    {
      "heading": "Ar RCD matuoja srovę įžeminimo laidininke?",
      "paragraphs": [
        "Ne. Tai dažnas klaidingas įsivaizdavimas.",
        "Standartinis RCD neveikia tiesiog matuodamas PE apsauginiu laidininku tekančią srovę. Jis lygina sroves, tekančias per jo kontroliuojamus aktyviuosius laidininkus.",
        "Vienfazėje grandinėje tai paprastai yra L ir N.",
        "Jeigu dalis srovės nebegrįžta neutraliu laidininku, atsiranda liekamoji srovė ir RCD gali suveikti.",
        "Dėl to pats RCD gali aptikti srovės disbalansą net tada, kai nuotėkio kelias nėra PE laidininkas.",
        "Tačiau iš to negalima daryti išvados, kad apsauginis įžeminimas nereikalingas. PE laidininkas ir RCD atlieka skirtingas, viena kitą papildančias elektros saugos funkcijas."
      ]
    },
    {
      "heading": "Pavyzdys: pažeista skalbimo mašina",
      "paragraphs": [
        "Tarkime, skalbimo mašinos fazinio laidininko izoliacija pažeidžiama ir fazinis laidininkas kontaktuoja su metaliniu korpusu.",
        "Jeigu korpusas tinkamai prijungtas prie apsauginio PE laidininko, atsiradusi gedimo srovė turi tekėti apsauginiu keliu ir apsaugos sistema turi atjungti pavojingą grandinę.",
        "RCD papildomai stebi srovių disbalansą ir gali labai greitai reaguoti į atitinkamo dydžio liekamąją srovę.",
        "Tokioje sistemoje įžeminimas, automatinis jungiklis ir RCD nėra konkuruojančios apsaugos priemonės. Jos sudaro bendrą apsaugos sistemą."
      ]
    },
    {
      "heading": "Ką reiškia 30 mA ant RCD?",
      "paragraphs": [
        "Vienas svarbiausių RCD parametrų yra vardinė liekamoji suveikimo srovė, dažnai žymima:",
        "IΔn.",
        "Jeigu ant aparato nurodyta:",
        "IΔn = 30 mA,",
        "tai yra jo liekamosios srovės jautrumo parametras.",
        "30 mA yra:",
        "0,03 A.",
        "Tai visiškai kitas parametras nei, pavyzdžiui, 40 A vardinė RCD srovė.",
        "30 mA jautrumo RCD plačiai naudojami papildomai žmonių apsaugai elektros instaliacijose. IEC 61008-1 RCCB įtaisus pirmiausia sieja su apsauga nuo elektros smūgio pavojaus.",
        "Konkrečios RCD naudojimo vietos ir reikalavimai turi būti parenkami pagal konkrečiai instaliacijai taikomas taisykles."
      ]
    },
    {
      "heading": "Ką reiškia 40 A / 30 mA RCD?",
      "paragraphs": [
        "Tai viena dažniausiai neteisingai interpretuojamų žymų elektros skydelyje.",
        "Jeigu ant RCD parašyta:",
        "40 A / 30 mA,",
        "40 A ir 30 mA reiškia visiškai skirtingus dalykus.",
        "40 A yra vardinė srovė, kurią aparatas suprojektuotas perduoti nustatytomis sąlygomis.",
        "30 mA yra vardinė liekamoji srovė, pagal kurią veikia skirtuminė apsauga.",
        "Todėl 40 A RCD nėra 40 A automatinis jungiklis.",
        "Tai yra esminis skirtumas.",
        "Paprastas RCCB neturi integruotos apsaugos nuo viršsrovės – būtent taip šis įtaisas apibrėžtas IEC 61008-1.",
        "Todėl 40 A RCCB savaime nereiškia, kad jis išjungs grandinę dėl 45 A ar 50 A ilgalaikės perkrovos taip, kaip tai darytų tinkamai parinktas automatinis jungiklis.",
        "RCCB turi būti tinkamai apsaugotas ir koordinuojamas su viršsrovių apsaugos aparatais pagal konkretaus gamintojo techninius duomenis bei elektros instaliacijos projektą."
      ]
    },
    {
      "heading": "Paprastas palyginimas",
      "paragraphs": [
        "Jeigu turime:",
        "B16 automatinį jungiklį",
        "ir",
        "40 A / 30 mA RCD,",
        "jų paskirtis yra skirtinga.",
        "B16 stebi grandinės viršsroves ir saugo nuo perkrovos bei trumpojo jungimo.",
        "40 A / 30 mA RCD stebi liekamąją srovę. Jo 40 A žyma nurodo vardinę srovę, o 30 mA – skirtuminės apsaugos jautrumą.",
        "Todėl tipinėje schemoje šie du aparatai gali būti naudojami kartu."
      ]
    },
    {
      "heading": "Ar automatinis jungiklis apsaugo žmogų nuo elektros smūgio?",
      "paragraphs": [
        "Automatinis jungiklis yra labai svarbi elektros saugos sistemos dalis, tačiau jo negalima laikyti RCD pakaitalu.",
        "Pavyzdžiui, 16 A automatinis jungiklis skirtas visai kito dydžio srovėms nei 30 mA liekamosios srovės apsauga.",
        "Jeigu per žmogaus kūną pradėtų tekėti pavojinga srovė, ji gali būti daug mažesnė nei 16 A ir todėl vien pagal apkrovos dydį B16 automatas tokios situacijos nelaikytų 16 A grandinės perkrova.",
        "Būtent dėl to naudojamos papildomos apsaugos priemonės, įskaitant RCD."
      ]
    },
    {
      "heading": "Ar RCD apsaugo nuo trumpojo jungimo?",
      "paragraphs": [
        "Paprastas RCCB – ne.",
        "IEC 61008-1 aiškiai apibrėžia šiuos įtaisus kaip liekamosios srovės jungiklius be integruotos apsaugos nuo viršsrovių.",
        "Jeigu tarp fazės L ir neutralaus N įvyksta trumpasis jungimas, didelė srovė gali ištekėti faze ir tokia pati grįžti neutraliu laidininku.",
        "RCD požiūriu:",
        "IL ≈ IN.",
        "Taigi skirtumas gali būti praktiškai nulinis.",
        "RCD gali nematyti priežasties veikti pagal savo liekamosios srovės funkciją, nors grandine teka milžiniška trumpojo jungimo srovė.",
        "Tokį gedimą turi išjungti viršsrovių apsauga – automatinis jungiklis arba kitas tam skirtas apsaugos aparatas."
      ]
    },
    {
      "heading": "Ar RCD apsaugo nuo perkrovos?",
      "paragraphs": [
        "Paprastas RCCB – taip pat ne.",
        "Jeigu 40 A / 30 mA RCD grandine teka, pavyzdžiui, per didelė apkrovos srovė, tačiau visa faze ištekėjusi srovė grįžta neutraliu laidininku, liekamosios srovės nėra.",
        "Todėl RCD neturi pagrindo išjungti grandinės pagal skirtuminės srovės funkciją.",
        "Apsauga nuo perkrovos turi būti užtikrinama tinkamai parinktu viršsrovių apsaugos aparatu."
      ]
    },
    {
      "heading": "Ar automatinis jungiklis apsaugo nuo srovės nuotėkio?",
      "paragraphs": [
        "Paprastas MCB specialiai liekamosios srovės nestebi.",
        "Todėl nedidelis srovės nuotėkis gali būti gerokai mažesnis už B16, B10 ar kito automato suveikimui reikalingą viršsrovę.",
        "Automatinis jungiklis ir RCD dėl to atlieka skirtingas funkcijas."
      ]
    },
    {
      "heading": "Kas yra RCBO?",
      "paragraphs": [
        "RCBO – Residual Current operated Circuit-Breaker with integral Overcurrent protection.",
        "Paprasčiau tariant, tai viename aparate sujungtas:",
        "automatinis jungiklis + RCD.",
        "IEC 61009-1:2024 RCBO apibrėžia kaip liekamosios srovės valdomą automatinį jungiklį su integruota viršsrovių apsauga.",
        "Todėl, pavyzdžiui, RCBO gali turėti žymėjimus:",
        "B16",
        "ir",
        "30 mA.",
        "Tokiu atveju aparatas gali apsaugoti grandinę nuo perkrovos, trumpojo jungimo ir atitinkamos liekamosios srovės."
      ]
    },
    {
      "heading": "Kodėl RCBO tampa vis populiaresni?",
      "paragraphs": [
        "Vienas didžiausių RCBO privalumų yra galimybė kiekvienai elektros grandinei suteikti individualią apsaugą.",
        "Pavyzdžiui, skydelyje galima turėti atskirus RCBO:",
        "virtuvės rozetėms;",
        "miegamojo rozetėms;",
        "indaplovei;",
        "skalbimo mašinai;",
        "lauko rozetėms;",
        "kitoms atskiroms grandinėms.",
        "Jeigu skalbimo mašinos grandinėje atsiranda srovės nuotėkis, išsijungia tik skalbimo mašinos RCBO.",
        "Kitos grandinės toliau veikia.",
        "Tai suteikia didelį eksploatacinį pranašumą, ypač didesniuose namuose."
      ]
    },
    {
      "heading": "Klasikinė schema: RCD ir keli automatai",
      "paragraphs": [
        "Kitas paplitęs sprendimas yra vienu RCCB apsaugoti kelias grupines linijas.",
        "Principinė struktūra gali atrodyti taip:",
        "RCD 40 A / 30 mA → B16 virtuvės rozetės",
        "RCD 40 A / 30 mA → B16 kambario rozetės",
        "RCD 40 A / 30 mA → B10 apšvietimas",
        "RCD 40 A / 30 mA → B16 indaplovė",
        "Tokiu atveju automatai saugo atskiras linijas nuo viršsrovių, o vienas bendras RCD stebi kelių grandinių liekamąją srovę.",
        "Tai ekonomiškas ir plačiai naudojamas sprendimas.",
        "Tačiau jis turi ir trūkumą.",
        "Jeigu nuotėkis atsiranda vienoje grandinėje ir bendras RCD išsijungia, be elektros lieka visos prie to RCD prijungtos grupės."
      ]
    },
    {
      "heading": "Kodėl nerekomenduojama viso namo palikti ant vieno 30 mA RCD?",
      "paragraphs": [
        "Kuo daugiau grandinių prijungiama prie vieno RCD, tuo didesnė vieno suveikimo įtaka visam objektui.",
        "Jeigu vienas sugedęs lauko šviestuvas išjungia RCD, prie kurio prijungtas šaldytuvas, interneto įranga, apšvietimas ir pusė namo rozečių, gedimo pasekmės tampa daug didesnės nei būtina.",
        "Be to, elektroniniai įrenginiai normaliai gali turėti nedideles liekamąsias sroves. Daugelio įrenginių poveikis bendrame RCD gali sumuotis.",
        "Todėl didesniuose šiuolaikiniuose skydeliuose dažnai racionalu naudoti kelis RCD arba individualius RCBO."
      ]
    },
    {
      "heading": "Kas geriau – RCD su automatais ar RCBO?",
      "paragraphs": [
        "Vieno universalaus atsakymo nėra.",
        "RCD su keliais automatiniais jungikliais paprastai leidžia ekonomiškiau įrengti didesnį grandinių skaičių. Tačiau RCD suveikimas gali atjungti kelias grupes vienu metu.",
        "RCBO suteikia individualią apsaugą kiekvienai linijai, todėl gedimas geriau lokalizuojamas.",
        "Tai ypač naudinga svarbioms grandinėms:",
        "šaldytuvui;",
        "šildymo sistemai;",
        "lauko įrangai;",
        "šaldikliui;",
        "interneto ir ryšio sistemoms;",
        "apsaugos sistemoms;",
        "kitoms grandinėms, kurių nepageidautina išjungti dėl visiškai kito vartotojo gedimo.",
        "IEC 61009-1 nustato buitinių RCBO su integruota viršsrovių apsauga reikalavimus."
      ]
    },
    {
      "heading": "Kas yra RCD Type AC?",
      "paragraphs": [
        "RCD tipas nurodo, kokios formos liekamąją srovę aparatas geba aptikti.",
        "Type AC RCD yra skirtas sinusoidinei kintamajai liekamajai srovei.",
        "Šiuolaikinėje elektros instaliacijoje tai svarbus klausimas, nes daugelis vartotojų turi elektroninius maitinimo šaltinius, lygintuvus, dažnio keitiklius ir kitą galios elektroniką.",
        "Hager ir ABB techninėje dokumentacijoje Type AC nurodomas kaip tipas, reaguojantis į sinusoidinę kintamąją liekamąją srovę."
      ]
    },
    {
      "heading": "Kas yra RCD Type A?",
      "paragraphs": [
        "Type A RCD, be sinusoidinės kintamosios liekamosios srovės, gali aptikti ir pulsuojančią nuolatinės srovės dedamąją.",
        "Tai aktualu dėl šiuolaikinių elektroninių prietaisų.",
        "ABB nurodo, kad Type A RCD, be Type AC aptinkamų srovių, aptinka pulsuojančias nuolatines liekamąsias sroves, kurios gali atsirasti elektroninėse grandinėse su lygintuvais.",
        "Dėl to Type A yra labai dažnas pasirinkimas šiuolaikinėms buitinėms grandinėms, kuriose naudojamos skalbimo mašinos, elektroniniai maitinimo šaltiniai, indukcinė įranga ir įvairūs elektronikos prietaisai. Gamintojų techninėse rekomendacijose Type A būtent siejamas su elektroninius komponentus turinčiomis apkrovomis."
      ]
    },
    {
      "heading": "Kas yra Type F RCD?",
      "paragraphs": [
        "Type F yra platesnes aptikimo galimybes turinti RCD kategorija, skirta tam tikroms apkrovoms su dažnio valdymo elektronika.",
        "IEC 62423 nustato papildomus Type F ir Type B RCD reikalavimus. Type F įtaisai, be Type A funkcijų, skirti reaguoti į tam tikras sudėtines liekamąsias sroves, kurios gali atsirasti naudojant vienfazius dažnio keitiklius.",
        "Tokio tipo RCD gali būti aktualus, pavyzdžiui, tam tikrai inverterinei įrangai, tačiau galutinį tipą reikia parinkti pagal konkretaus įrenginio gamintojo reikalavimus."
      ]
    },
    {
      "heading": "Kas yra Type B RCD?",
      "paragraphs": [
        "Type B RCD turi dar platesnes liekamųjų srovių aptikimo galimybes.",
        "IEC 62423 nurodo, kad Type B RCCB ir RCBO gali reaguoti ne tik į kintamąsias ir pulsuojančias nuolatines liekamąsias sroves, bet ir į glotnią nuolatinę liekamąją srovę bei platesnio dažnių diapazono komponentus.",
        "Type B gali būti reikalingas įrangai su tam tikrais trifaziais keitikliais, dažnio pavaromis, fotovoltinėmis sistemomis, elektromobilių įkrovimo infrastruktūra ir kita galios elektronika.",
        "Tačiau negalima automatiškai teigti, kad kiekvienai EV stotelei arba kiekvienam inverteriui būtinai reikia atskiro Type B RCCB. Dalis šiuolaikinės įrangos turi integruotą nuolatinės liekamosios srovės aptikimą, todėl RCD reikalavimai priklauso nuo konkrečios įrangos konstrukcijos ir gamintojo instrukcijų."
      ]
    },
    {
      "heading": "Kodėl negalima visur tiesiog montuoti Type AC?",
      "paragraphs": [
        "Prieš kelis dešimtmečius buitinės apkrovos daugiausia buvo paprasti kaitinimo elementai, lempos ir elektromechaniniai įrenginiai.",
        "Šiuolaikinis namas visiškai kitoks.",
        "Jame naudojami:",
        "LED maitinimo šaltiniai;",
        "skalbimo mašinos su elektroniniu valdymu;",
        "indukcinės kaitlentės;",
        "kompiuteriai;",
        "telefonų įkrovikliai;",
        "šilumos siurbliai;",
        "inverteriniai kondicionieriai;",
        "EV įkrovimo įranga;",
        "saulės elektrinių inverteriai.",
        "Tokios apkrovos gali generuoti kitokios formos gedimo sroves nei paprasta sinusoidinė kintamoji srovė. Gamintojai Type A RCD būtent rekomenduoja elektroninius komponentus turinčioms apkrovoms, o Type F ir B skirti dar sudėtingesnėms srovės formoms.",
        "Todėl RCD tipas turi būti parenkamas ne vien pagal kainą ar tai, kas liko elektriko automobilyje."
      ]
    },
    {
      "heading": "Vienfazis ir trifazis RCD",
      "paragraphs": [
        "Vienfazėje grandinėje paprastai naudojamas dviejų polių RCCB arba atitinkamos konstrukcijos RCBO, kuris kontroliuoja reikalingus aktyviuosius laidininkus.",
        "Trifazėje keturių laidų sistemoje dažnai naudojamas keturių polių RCD, per kurį praeina L1, L2, L3 ir N.",
        "Veikimo principas išlieka tas pats – aparatas vertina per jį praeinančių aktyviųjų laidininkų srovių vektorinę sumą.",
        "Normalioje grandinėje ji turi būti praktiškai lygi nuliui. Atsiradus srovei, grįžtančiai kitu keliu, susidaro liekamoji srovė."
      ]
    },
    {
      "heading": "Kodėl neutralūs laidininkai po RCD negali būti maišomi?",
      "paragraphs": [
        "Tai viena dažniausių skydelio montavimo klaidų.",
        "Jeigu viena grandinė prijungta prie RCD Nr. 1, jos fazinė ir neutrali srovė turi grįžti per tą pačią apsaugos sistemą pagal jos schemą.",
        "Jeigu tos grandinės neutralus laidininkas klaidingai prijungiamas prie kito RCD neutralios magistralės, dalis srovės grįžta kitu keliu.",
        "Pirmasis RCD mato:",
        "per fazę srovė išėjo;",
        "per jo neutralų laidininką visa srovė negrįžo.",
        "Rezultatas – RCD išsijungia.",
        "Dėl šios priežasties skydeliuose, kuriuose yra keli RCD, neutralių laidininkų organizavimas turi būti atliekamas labai tvarkingai."
      ]
    },
    {
      "heading": "Ar galima po RCD sujungti N ir PE?",
      "paragraphs": [
        "Ne.",
        "N ir PE paskirtis yra skirtinga, o jų netinkamas sujungimas RCD saugomoje grandinės dalyje gali sukurti neteisingus srovės kelius, nepageidaujamus RCD suveikimus ir pavojingas apsaugos sąlygas.",
        "Apsauginė sistema turi būti įrengiama pagal konkretaus tinklo TN, TT ar kitos sistemos reikalavimus.",
        "Savarankiškai daryti „tiltuką“ tarp neutralo ir įžeminimo rozetėje, paskirstymo dėžėje ar už RCD negalima."
      ]
    },
    {
      "heading": "Kodėl RCD išsijungia įjungus prietaisą?",
      "paragraphs": [
        "Priežasčių gali būti daug.",
        "Prietaisas gali turėti realų izoliacijos gedimą. Gali būti pažeistas kabelis, drėgmės paveikta jungtis, šildymo elementas, elektroninis filtras arba kitas komponentas.",
        "Taip pat gali būti neteisingai sujungti neutralūs laidininkai, sumaišytos kelių RCD neutralios magistralės arba kažkur už RCD sujungti N ir PE.",
        "Kartais atskiros grandinės nuotėkis nėra didelis, tačiau kartu veikiant daug elektroninių prietaisų jų liekamosios srovės sumuojasi.",
        "Todėl pasikartojančio RCD išsijungimo nereikėtų spręsti keičiant 30 mA RCD mažiau jautriu aparatu neidentifikavus gedimo priežasties."
      ]
    },
    {
      "heading": "Kodėl RCD išsijungia lyjant?",
      "paragraphs": [
        "Jeigu problema atsiranda tik lietaus metu, viena pirmųjų tikrinamų sričių turėtų būti lauko elektros instaliacija.",
        "Drėgmė gali patekti į:",
        "lauko rozetę;",
        "šviestuvą;",
        "paskirstymo dėžutę;",
        "vartų automatiką;",
        "pažeistą kabelį;",
        "lauko prailgintuvą;",
        "kitą lauke sumontuotą įrangą.",
        "Drėgmė sumažina izoliacijos varžą, todėl dalis srovės gali pradėti tekėti į žemę arba apsaugines konstrukcijas.",
        "RCD tokį gedimą gali aptikti anksčiau nei jis taptų didesniu elektros gedimu."
      ]
    },
    {
      "heading": "Kodėl RCD turi TEST mygtuką?",
      "paragraphs": [
        "Ant RCCB ir RCBO dažnai yra mygtukas, pažymėtas T arba TEST.",
        "Jį paspaudus aparato viduje dirbtinai sukuriamos sąlygos, imituojančios liekamąją srovę, todėl tinkamai veikiantis aparatas turi išsijungti pagal gamintojo numatytą bandymo schemą.",
        "TEST mygtukas nėra profesionalių elektros matavimų pakaitalas.",
        "Jis patikrina konkrečią vidinę aparato bandymo funkciją, tačiau nepatvirtina visos elektros instaliacijos įžeminimo, izoliacijos, gedimo kilpos ir kitų parametrų.",
        "RCD bandymo periodiškumą reikia vykdyti pagal konkretaus gamintojo nurodymus."
      ]
    },
    {
      "heading": "Ar galima patikrinti RCD paprastu multimetru?",
      "paragraphs": [
        "Pilnavertiškai – ne.",
        "Profesionaliam RCD patikrinimui naudojamas instaliacijos matuoklis arba specialus RCD testeris, galintis sukurti kontroliuojamą liekamąją srovę ir išmatuoti suveikimo laiką bei kitus parametrus.",
        "Paprastas multimetras nėra skirtas tokiems bandymams.",
        "Tai ypač svarbu atliekant naujos arba rekonstruotos instaliacijos patikrinimą."
      ]
    },
    {
      "heading": "Kas išsijungs esant trumpajam jungimui – automatas ar RCD?",
      "paragraphs": [
        "Jeigu įvyksta klasikinis L–N trumpasis jungimas, pirmiausia tai yra viršsrovės gedimas.",
        "Jį turi atjungti automatinis jungiklis arba RCBO viršsrovinė dalis.",
        "Jeigu gedimas susijęs su fazės kontaktu su įžeminta dalimi, gali veikti tiek viršsrovinė, tiek liekamosios srovės apsauga – priklausomai nuo gedimo pobūdžio, tinklo sistemos ir srovės kelio.",
        "Todėl iš to, kuris aparatas konkrečioje situacijoje išsijungė pirmas, negalima vienareikšmiškai nustatyti gedimo priežasties be matavimų."
      ]
    },
    {
      "heading": "Kas išsijungs dėl perkrovos?",
      "paragraphs": [
        "Paprastas automatinis jungiklis arba RCBO viršsrovinė dalis.",
        "RCCB 40 A / 30 mA nėra skirtas būti 40 A perkrovos automatiniu jungikliu.",
        "Tai vienas svarbiausių praktinių skirtumų tarp šių aparatų."
      ]
    },
    {
      "heading": "Kas išsijungs dėl srovės nuotėkio?",
      "paragraphs": [
        "RCD arba RCBO liekamosios srovės dalis, jeigu gedimo srovė ir jos charakteristikos atitinka aparato veikimo sąlygas.",
        "Paprastas MCB specialiai 30 mA liekamosios srovės nestebi."
      ]
    },
    {
      "heading": "Ar RCD suveiks žmogui palietus fazę?",
      "paragraphs": [
        "Jeigu žmogui palietus fazę dalis srovės teka per jo kūną į žemę ir negrįžta per RCD kontroliuojamą neutralų laidininką, RCD matys srovių disbalansą.",
        "Jeigu pasiekiamos aparato veikimo sąlygos, RCD turi atjungti grandinę.",
        "Tačiau RCD negalima traktuoti kaip leidimo liesti aktyvias elektros dalis. Jis yra papildoma apsaugos priemonė, o ne saugaus kontakto su faziniu laidininku priemonė."
      ]
    },
    {
      "heading": "Ar RCD visada apsaugo nuo elektros smūgio?",
      "paragraphs": [
        "Ne kiekvienoje teoriškai įmanomoje situacijoje.",
        "Pavyzdžiui, jeigu žmogus vienu metu tiesiogiai paliestų fazę ir neutralą taip, kad srovė iš fazės per kūną grįžtų į neutralą ir RCD nematytų pakankamo srovių disbalanso, vien liekamosios srovės principas nebūtinai identifikuotų tokią situaciją kaip nuotėkį.",
        "Todėl elektros sauga negali remtis vien RCD.",
        "Reikalinga tinkama izoliacija, apsauginis įžeminimas, automatinis atjungimas, apsauginiai gaubtai, teisinga instaliacija ir kitos apsaugos priemonės."
      ]
    },
    {
      "heading": "Ar galima RCD montuoti be įžeminimo?",
      "paragraphs": [
        "RCD veikimo principui nereikia matuoti PE laidininku tekančios srovės, todėl techniniu požiūriu jis gali aptikti srovės disbalansą ir grandinėje, kurioje nėra PE.",
        "Tačiau tai nereiškia, kad RCD pakeičia apsauginį įžeminimą.",
        "Jeigu elektros įrenginiui pagal jo apsaugos klasę ir instaliacijos sistemą reikalingas PE laidininkas, jis turi būti įrengtas.",
        "RCD nėra būdas „sutvarkyti“ seną dvilaidę instaliaciją tiesiog įdedant vieną aparatą į skydelį."
      ]
    },
    {
      "heading": "Ar galima dėti RCD į seną butą?",
      "paragraphs": [
        "Galima svarstyti elektros instaliacijos modernizavimą įrengiant RCD, tačiau senos instaliacijos atveju pirmiausia būtina įvertinti jos schemą ir techninę būklę.",
        "Senuose pastatuose gali būti TN-C sistemos dalys, bendri PEN laidininkai, netinkamai atlikti N ir PE sujungimai, pažeista izoliacija arba ankstesni savavališki instaliacijos pakeitimai.",
        "Todėl vien RCD įmontavimas be visos sistemos įvertinimo gali neišspręsti pagrindinių saugos problemų."
      ]
    },
    {
      "heading": "RCD taip pat reikia apsaugoti",
      "paragraphs": [
        "Kadangi RCCB neturi integruotos viršsrovių apsaugos, jo vardinė srovė turi būti suderinta su visa sistema.",
        "Pavyzdžiui, jeigu naudojamas 40 A RCCB, reikia įvertinti, kokia maksimali srovė realiai gali per jį tekėti ir kokia viršsrovių apsauga yra prieš jį.",
        "Negalima vien mechaniškai sudėti po vienu 40 A RCD keturių B16 automatų ir padaryti išvadą, kad viskas tinkama vien todėl, kad „4 × 16 = 64 A“ arba priešingai – kad tokia sistema savaime netinkama.",
        "Reikia vertinti instaliacijos struktūrą, apkrovų vienalaikiškumą, prieš srovę esančią apsaugą ir konkretaus RCD gamintojo koordinavimo sąlygas."
      ]
    },
    {
      "heading": "RCD nėra viršįtampių apsauga",
      "paragraphs": [
        "Dar viena dažna painiava – RCD ir SPD.",
        "RCD skirtas liekamosios srovės apsaugai.",
        "SPD – Surge Protective Device – skirtas apsaugai nuo trumpalaikių viršįtampių.",
        "Automatinis jungiklis – apsaugai nuo viršsrovių.",
        "Tai trys skirtingas funkcijas atliekantys įrenginiai.",
        "Šiuolaikiniame skydelyje gali būti visi trys, ir vienas nepakeičia kitų."
      ]
    },
    {
      "heading": "Automatas, RCD, RCBO ir SPD – trumpai",
      "paragraphs": [
        "Paprasčiausia šiuos aparatus prisiminti pagal jų paskirtį.",
        "MCB / automatinis jungiklis – perkrova ir trumpasis jungimas.",
        "RCCB / RCD – liekamoji arba nuotėkio srovė.",
        "RCBO – viršsrovė + liekamoji srovė viename aparate.",
        "SPD – trumpalaikiai viršįtampiai.",
        "Buitinių MCB funkcijas reglamentuoja IEC 60898-1, RCCB – IEC 61008-1, o RCBO – IEC 61009-1."
      ]
    },
    {
      "heading": "Apibendrinimas",
      "paragraphs": [
        "Automatinis jungiklis ir RCD yra du skirtingas problemas sprendžiantys elektros apsaugos aparatai.",
        "Automatinis jungiklis reaguoja į viršsrovę. Jo užduotis yra apsaugoti elektros instaliaciją nuo perkrovos ir trumpojo jungimo. Buitiniams ir panašios paskirties automatiniams jungikliams taikomas IEC 60898-1.",
        "RCD reaguoja į liekamąją srovę – skirtumą tarp per jo kontroliuojamus laidininkus ištekančios ir grįžtančios srovės. RCCB neturi integruotos apsaugos nuo viršsrovių, todėl paprastas RCD negali pakeisti automatinio jungiklio. RCCB reikalavimus nustato IEC 61008-1.",
        "RCBO sujungia abi funkcijas viename aparate: apsaugą nuo perkrovos ir trumpojo jungimo bei apsaugą nuo liekamosios srovės. RCBO reglamentuoja IEC 61009-1.",
        "Todėl elektros skydelyje žymėjimai B16 ir 40 A / 30 mA neturi būti lyginami kaip du skirtingo dydžio automatai. B16 apibūdina viršsrovių apsaugos charakteristiką ir vardinę srovę, o 40 A / 30 mA RCCB atveju 40 A yra vardinė aparato srovė, o 30 mA – jo liekamosios srovės jautrumas.",
        "Lygiai taip pat svarbu pasirinkti tinkamą RCD tipą. Type AC skirtas sinusoidinei kintamajai liekamajai srovei, Type A papildomai aptinka pulsuojančias nuolatines liekamąsias sroves, o Type F ir Type B skirti sudėtingesnėms srovės formoms bei specifinei elektroninei įrangai.",
        "Gerai suprojektuotame elektros skydelyje automatinis jungiklis, RCD, RCBO, įžeminimo sistema ir kitos apsaugos nėra atskiri atsitiktiniai komponentai. Jie turi būti parinkti ir suderinti kaip viena apsaugos sistema.",
        "Pastaba: straipsnis skirtas paaiškinti elektros apsaugos aparatų veikimo principus ir nėra konkretaus objekto elektros projekto ar matavimų pakaitalas. RCD, RCBO, automatinių jungiklių nominalai, tipai ir jų sujungimo schema turi būti parenkami pagal konkrečią elektros instaliaciją, tinklo sistemą, apkrovas, kabelių parametrus, gamintojo dokumentaciją ir taikomus elektros įrenginių įrengimo reikalavimus."
      ]
    }
  ],
  "faq": [
    {
      "question": "Kuo skiriasi automatinis jungiklis nuo RCD?",
      "answer": "Automatinis jungiklis saugo elektros grandinę nuo perkrovos ir trumpojo jungimo. RCD stebi liekamąją srovę ir atjungia grandinę atsiradus atitinkamam srovės disbalansui. Todėl šie aparatai atlieka skirtingas funkcijas."
    },
    {
      "question": "Ar RCD pakeičia automatinį jungiklį?",
      "answer": "Paprastas RCCB – ne. IEC 61008-1 apibrėžia RCCB kaip įtaisą be integruotos apsaugos nuo viršsrovių."
    },
    {
      "question": "Ar automatinis jungiklis pakeičia RCD?",
      "answer": "Ne. Automatinis jungiklis specialiai nestebi mažų liekamųjų srovių ir skirtas kitai apsaugos funkcijai."
    },
    {
      "question": "Kas yra RCBO?",
      "answer": "RCBO yra viename aparate sujungta liekamosios srovės ir viršsrovių apsauga. Jis gali atlikti tiek automatinio jungiklio, tiek RCD funkcijas. Tokius įtaisus reglamentuoja IEC 61009-1."
    },
    {
      "question": "Ką reiškia 40 A / 30 mA ant RCD?",
      "answer": "40 A yra aparato vardinė srovė, o 30 mA – vardinė liekamoji suveikimo srovė. Tai du visiškai skirtingi parametrai."
    },
    {
      "question": "Ar 40 A RCD išsijungs, kai srovė pasieks 41 A?",
      "answer": "Paprastas RCCB nėra automatinis jungiklis nuo perkrovos, todėl jo 40 A žyma neturi būti interpretuojama kaip 40 A automato suveikimo nominalas. RCCB turi būti tinkamai apsaugotas viršsrovių apsaugos aparatais."
    },
    {
      "question": "Ką reiškia 30 mA?",
      "answer": "30 mA yra 0,03 A vardinė liekamoji suveikimo srovė. Tai RCD jautrumo parametras, o ne maksimali vartotojo apkrova."
    },
    {
      "question": "Ar RCD apsaugo nuo trumpojo jungimo?",
      "answer": "Paprastas RCCB – ne. Trumpojo jungimo apsaugą turi užtikrinti automatinis jungiklis arba RCBO integruota viršsrovių apsauga."
    },
    {
      "question": "Ar RCD apsaugo nuo perkrovos?",
      "answer": "Paprastas RCCB – ne. Jeigu faze ištekėjusi srovė visa grįžta neutraliu laidininku, RCD nemato liekamosios srovės vien dėl to, kad apkrova didelė."
    },
    {
      "question": "Ar RCD reikia įžeminimo, kad jis veiktų?",
      "answer": "RCD matuoja srovių disbalansą tarp per jį praeinančių aktyviųjų laidininkų, todėl jo veikimo principas nėra pagrįstas PE laidininko srovės matavimu. Tačiau RCD nepakeičia apsauginio įžeminimo ir negali būti naudojamas kaip priežastis jo neįrengti."
    },
    {
      "question": "Kodėl RCD išsijungia, o automatas lieka įjungtas?",
      "answer": "Tai dažnai reiškia, kad RCD aptiko liekamąją srovę, tačiau nebuvo tokios perkrovos ar trumpojo jungimo, dėl kurio turėtų veikti automatas. Vis dėlto tiksli priežastis nustatoma diagnostika ir matavimais."
    },
    {
      "question": "Kodėl automatas išsijungia, o RCD lieka įjungtas?",
      "answer": "Jeigu priežastis yra perkrova arba L–N trumpasis jungimas be reikšmingos liekamosios srovės, gali suveikti automatinis jungiklis, o RCD likti įjungtas."
    },
    {
      "question": "Kas geriau – vienas RCD ir keli automatai ar RCBO kiekvienai linijai?",
      "answer": "Abu sprendimai gali būti techniškai tinkami. Vienas RCD su keliais automatais paprastai ekonomiškesnis, tačiau vienas RCD gedimo atveju gali išjungti kelias grandines. Individualūs RCBO leidžia gedimą lokalizuoti konkrečioje grandinėje."
    },
    {
      "question": "Ar vieną RCD galima naudoti keliems automatams?",
      "answer": "Taip, jeigu visa sistema tinkamai suprojektuota. Tačiau reikia įvertinti RCD vardinę srovę, bendras liekamąsias sroves, viršsrovių apsaugą ir tai, kokias grandines vienu metu atjungs vienas RCD."
    },
    {
      "question": "Kuo Type A skiriasi nuo Type AC?",
      "answer": "Type AC reaguoja į sinusoidinę kintamąją liekamąją srovę. Type A papildomai geba aptikti pulsuojančią nuolatinę liekamąją srovę, kuri gali atsirasti šiuolaikinėje elektroninėje įrangoje."
    },
    {
      "question": "Kas yra Type B RCD?",
      "answer": "Type B turi platesnes liekamųjų srovių aptikimo galimybes ir gali aptikti glotnią nuolatinę bei kitų formų liekamąją srovę, kurios Type AC arba Type A gali neaptikti. Type B ir Type F papildomus reikalavimus nustato IEC 62423."
    },
    {
      "question": "Ar namui geriau Type A ar Type AC?",
      "answer": "Tai turi būti sprendžiama pagal prie grandinių prijungiamą įrangą ir taikomus reikalavimus. Kadangi šiuolaikiniuose namuose labai daug elektroninių prietaisų, Type A dažnai yra racionalesnis pasirinkimas elektronikos turinčioms apkrovoms. Gamintojų dokumentacijoje Type A būtent siejamas su AC ir pulsuojančių DC liekamųjų srovių aptikimu."
    },
    {
      "question": "Ar RCD apsaugo nuo žaibo?",
      "answer": "Ne. Apsaugai nuo trumpalaikių viršįtampių naudojamas SPD. RCD atlieka kitą funkciją."
    },
    {
      "question": "Ar RCD TEST mygtuką reikia spausti?",
      "answer": "RCD turi būti periodiškai tikrinamas pagal konkretaus aparato gamintojo instrukciją. TEST mygtukas skirtas patikrinti jo vidinę bandymo ir atjungimo funkciją, tačiau nepakeičia profesionalių elektros instaliacijos matavimų."
    },
    {
      "question": "Ar galima nuolat išsijungiantį 30 mA RCD pakeisti 100 mA?",
      "answer": "Vien tam, kad jis nebeišsijunginėtų, – neteisinga praktika. Pirmiausia turi būti nustatyta, kodėl atsiranda liekamoji srovė. Priežastis gali būti pažeistas prietaisas, drėgmė, neteisingai prijungti neutralūs laidininkai, izoliacijos gedimas arba kelių įrenginių liekamųjų srovių suma."
    },
    {
      "question": "Kodėl po dviejų skirtingų RCD negalima sumaišyti neutralių laidų?",
      "answer": "Nes RCD turi matyti tos pačios grandinės ištekančią ir grįžtančią srovę. Jeigu srovė faze išeina per vieną RCD, o neutraliu laidininku grįžta per kitą kelią, susidaro matomas disbalansas ir RCD gali išsijungti."
    },
    {
      "question": "Ar galima už RCD sujungti N ir PE?",
      "answer": "Ne. Savavališkas N ir PE sujungimas RCD saugomoje grandinės dalyje gali sukurti neteisingus srovės kelius ir pažeisti elektros apsaugos sistemos veikimą."
    },
    {
      "question": "Kodėl RCD kartais išsijungia tik tada, kai įjungiami keli prietaisai?",
      "answer": "Atskiri elektroniniai prietaisai gali turėti nedideles normalias liekamąsias sroves. Keliems prietaisams veikiant kartu jos gali sumuotis. Taip pat tai gali rodyti vieno iš prietaisų ar pačios instaliacijos gedimą, todėl pasikartojantis išsijungimas turi būti diagnozuojamas."
    }
  ]
};
