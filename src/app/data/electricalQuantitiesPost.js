export const electricalQuantitiesPost = {
  slug: "itampa-srove-galia-ir-energija-buityje",
  title: "Įtampa, srovė, galia ir energija buityje",
  date: "2026-11-22",
  series: "Būsto elektros instaliacija",
  seriesPart: 2,
  justify: true,
  excerpt: "Ką reiškia voltai, amperai, kilovatai ir kilovatvalandės? Praktiniai pavyzdžiai, padedantys suprasti prietaisų žymėjimą, grandinės apkrovą ir elektros sąskaitą.",
  intro: "Ant virdulio parašyta **2 000 W**, ant automatinio jungiklio matote užrašą **B16**, o sąskaitoje nurodyta **180 kWh**. Virdulio etiketė rodo prietaiso galią. Jungiklio žymėjimas apibūdina grandinės apsaugą. Sąskaita rodo, kiek energijos sunaudota per mėnesį. Šie skaičiai padeda planuoti būsto instaliaciją ir stebėti elektros vartojimą.",
  image: {
    src: "/images/blog/itampa-srove-galia-energija.png",
    width: 1200,
    height: 600,
    alt: "Vandens žarnos analogija: įtampa lyginama su slėgiu, srovė su vandens tekėjimu, o jų sandauga iliustruoja galią.",
    caption: "Paveiksle įtampa palyginta su vandens slėgiu, o elektros srovė su vandens tekėjimu. Paprasta formulė „voltai × amperai = vatai“ tinka nuolatinei srovei ir tokiai kintamosios srovės apkrovai kaip virdulio kaitinimo elementas.",
  },
  content: [
    {
      id: "matavimo-vienetai",
      heading: "Pagrindiniai matavimo vienetai",
      figure: true,
      table: {
        headings: ["Dydis", "Vienetas", "Kur praverčia buityje"],
        rows: [
          ["Įtampa", "V (voltai)", "Tikrinant, kokiam tinklui ar maitinimo šaltiniui skirtas prietaisas."],
          ["Srovė", "A (amperai)", "Vertinant grandinės apkrovą ir parenkant apsaugą."],
          ["Galia", "W arba kW (vatai arba kilovatai)", "Vertinant vienu metu veikiančių prietaisų apkrovą."],
          ["Energija", "Wh arba kWh (vatvalandės arba kilovatvalandės)", "Skaitant skaitiklio rodmenis ir lyginant suvartojimą."],
        ],
      },
    },
    {
      id: "itampa-ir-srove",
      heading: "Įtampa ir srovė",
      paragraphs: [
        "Įtampa yra elektrinių potencialų skirtumas tarp dviejų taškų. Buitiniame kištukiniame lizde vardinė įtampa tarp fazės ir neutralės yra **230 V**. Įtampa gali būti ir tuščiame lizde. Kai įjungiate virdulį, susidaro uždara grandinė, per kaitinimo elementą teka srovė ir vanduo šyla. Srovė, žymima raide **I**, parodo, kiek elektros krūvio per laiko vienetą prateka laidininku. Ji matuojama amperais.",
        "Kai kuriems įrenginiams, pavyzdžiui, LED juostoms, reikia maitinimo šaltinio. Užrašas **INPUT** nurodo, kokį maitinimą jis priima. Užrašas **OUTPUT** nurodo, ką jis tiekia įrenginiui. LED juostos maitinimo šaltinis gali priimti **230 V kintamąją įtampą** ir tiekti **24 V nuolatinę įtampą**. Renkantis šaltinį reikia sutikrinti juostos vardinę įtampą, reikiamą galią ir gamintojo nurodymus. Verta šiuos duomenis išsaugoti, kad prireikus šaltinį būtų lengviau pakeisti.",
      ],
    },
    {
      id: "galia-ir-grandines-apkrova",
      heading: "Galia ir grandinės apkrova",
      paragraphs: [
        "Galia rodo, kaip sparčiai prietaisas tuo metu naudoja energiją. **1 000 W = 1 kW.** Vienfaziam kaitinimo prietaisui, tokiam kaip virdulys, srovę galima apytiksliai įvertinti padalijus jo galią iš įtampos.",
        { formula: "2 000 W ÷ 230 V ≈ 8,7 A" },
        "Variklių, kompresorių ir kai kurių elektroninių prietaisų atveju verta remtis gamintojo nurodyta įėjimo srove. Jai įtakos gali turėti galios koeficientas. Paleidimo metu srovė gali trumpam išaugti.",
        "**Virtuvės pavyzdys.** Tarkime, viena grandinė maitina 2 kW virdulį ir indaplovę. Jeigu indaplovės kaitinimo elementas tuo metu naudoja 1,8 kW, abiejų prietaisų bendra galia siekia apie **3,8 kW**. Esant 230 V įtampai, beveik vien iš kaitinimo elementų sudaryta apkrova atitinka maždaug **16,5 A**. Srovė sumažėja, kai virdulys išsijungia arba indaplovė baigia šildyti vandenį. Planuojant virtuvę verta aptarti, kurie prietaisai veiks kartu ir iš kurių grandinių jie bus maitinami.",
      ],
    },
    {
      id: "b16-ir-suveikimo-charakteristikos",
      heading: "Ką reiškia B16?",
      paragraphs: [
        "Jei ant automatinio jungiklio parašyta **B16**, skaičius **16** nurodo vardinę srovę amperais, o raidė **B** žymi suveikimo charakteristiką. B tipo jungiklio greitojo elektromagnetinio suveikimo slenkstis yra **3-5 kartus didesnis už vardinę srovę**. B16 atveju tai **48-80 A** (nuo 3 × 16 A iki 5 × 16 A). Į mažesnę, ilgiau trunkančią perkrovą reaguoja šiluminė apsauga.",
      ],
      table: {
        headings: ["Tipas", "Srovės kartotinis", "Pavyzdys su 16 A jungikliu"],
        rows: [
          ["B", "3-5 × vardinė srovė", "B16: 48-80 A"],
          ["C", "5-10 × vardinė srovė", "C16: 80-160 A"],
          ["D", "10-20 × vardinė srovė", "D16: 160-320 A"],
        ],
      },
      after: [
        "C ir D jungikliai toleruoja didesnius trumpalaikius paleidimo srovės šuolius, pavyzdžiui, įjungus variklį. Parinkdamas jungiklį elektrikas įvertina kabelį ir patikrina, ar įvykus gedimui grandinė atsijungs pakankamai greitai.",
      ],
    },
    {
      id: "energija-ir-skaitiklio-rodmenys",
      heading: "Energija ir skaitiklio rodmenys",
      paragraphs: [
        "**Kilovatvalandė (kWh)** parodo, kiek elektros energijos sunaudota. Jei prietaiso galia pastovi, galią kilovatais padauginkite iš veikimo trukmės valandomis. **2 kW virdulys per 6 minutes sunaudoja apie 0,2 kWh.** Tiek pat sunaudos 10 W LED lemputė, jei per kelis vakarus iš viso švies 20 valandų.",
        "Skaitiklis kaupia suvartotos energijos rodmenį. Jeigu mėnesio pradžioje jis rodo 1 250 kWh, o pabaigoje 1 430 kWh, per tą laiką sunaudota **180 kWh**. Trumpas virtuvės apkrovos pikas svarbus konkrečiai grandinei. Mėnesio suvartojimą gali labiau paveikti kasdien veikiantis boileris.",
        "**Orkaitės pavyzdys.** Jei 2,5 kW orkaitė visą valandą veiktų tokia galia, ji sunaudotų 2,5 kWh. Pasiekus nustatytą temperatūrą kaitinimas paprastai išsijungia ir vėliau vėl įsijungia. Norint įvertinti tikrą suvartojimą, verta matuoti visą kepimo ciklą nuo įkaitinimo iki išjungimo.",
        "Energijos etiketėje atkreipkite dėmesį, kuriam laikotarpiui ar ciklų skaičiui pateiktas rodmuo. Pavyzdžiui, **55 kWh per 100 skalbimo ciklų** atitinka vidutiniškai **0,55 kWh vienam ciklui** pagal programos „Eco 40-60“ bandymo sąlygas. Namuose suvartojimas priklauso nuo programos, skalbinių kiekio ir temperatūros.",
      ],
    },
    {
      id: "kaip-pasitikrinti-suvartojima",
      heading: "Kaip pasitikrinti suvartojimą namuose?",
      paragraphs: [
        "Kištuku prijungto prietaiso suvartojimą galima pasitikrinti kištukiniu energijos matuokliu, jei jo vardiniai parametrai tinka prietaisui. Užsirašykite, ką matavote, kiek laiko ir kokiu režimu prietaisas veikė. Skalbyklei išmatuokite visą pasirinktą programą. Šaldytuvą verta stebėti bent parą, kad į matavimą patektų keli darbo ciklai. Stacionariai prijungtai įrangai atskirą matavimą gali numatyti elektrikas. Jei domina viso būsto suvartojimas, pradėkite nuo skaitiklio istorijos.",
        "**Maža galia per ilgą laiką.** Jei budėjimo režimu įrenginys nuolat naudoja 5 W, per 30 dienų tai sudaro apie **3,6 kWh** (0,005 kW × 24 val. × 30 dienų). Todėl nuolat prijungtus prietaisus verta vertinti per ilgesnį laikotarpį.",
      ],
    },
    {
      id: "ivado-galia-ir-grandines",
      heading: "Įvado galia ir atskiros grandinės",
      paragraphs: [
        "Planuojant būstą patogu susidaryti du sąrašus. Pirmajame surašykite, **kas gali veikti vienu metu visame būste**. Tai padeda įvertinti įvado galios poreikį. Antrajame pasižymėkite, **kurie prietaisai bus maitinami iš tos pačios grandinės**. Taip lengviau nuspręsti, kuriems prietaisams reikia atskiros grandinės ir kaip paskirstyti apkrovą skydelyje.",
        "Esamą leistiną naudoti galią galima pasitikrinti ESO savitarnoje. Išmaniojo skaitiklio 15 minučių galios rodmuo padeda susidaryti vaizdą apie apkrovą tuo laikotarpiu. Trumpas apkrovos šuolis, pavyzdžiui, įjungus virdulį, tokiame vidurkyje gali būti vos matomas.",
        "**Trifazio įvado pavyzdys.** Įprasti 230 V lizdai maitinami tarp vienos fazės ir neutralės. Tarp dviejų fazių vardinė įtampa yra 400 V. Jei keli galingi vienfaziai prietaisai prijungti prie tos pačios fazės, ji gali būti apkrauta labiau už kitas. Todėl elektrikas vertina bendrą būsto galią ir apkrovą kiekvienoje fazėje.",
        "**Elektromobilio pavyzdys.** Renkantis stotelę verta įvertinti, kiek kWh norite papildyti per naktį ir kiek kW stotelė naudos kraudama. Jei bateriją norite papildyti 12 kWh, o stotelė iš tinklo nuolat naudoja 3 kW, paprastas skaičiavimas duoda keturias valandas. Praktiškai dėl įkrovimo nuostolių ar galios pokyčių laikas gali būti ilgesnis. Dinaminis galios valdymas gali sumažinti įkrovimo galią, kai daugiau galios naudoja namo prietaisai.",
      ],
    },
    {
      id: "daznos-klaidos",
      heading: "Dažnos klaidos ir klaidingi įsitikinimai",
      items: [
        { label: "„Daugiau rozečių reiškia daugiau galios.“", text: "Papildomas lizdas suteikia daugiau vietų prietaisams prijungti. Leistiną grandinės apkrovą lemia kabelis, jo klojimo sąlygos ir apsauga. Jei prietaisai dažnai veiks vienu metu, iš anksto aptarkite grandinių paskirstymą." },
        { label: "„Jei automatas neišsijungė, apkrova tinkama.“", text: "Automatas reaguoja pagal suveikimo charakteristiką. Grandinės būklę ir leistiną apkrovą reikia vertinti pagal jos įrengimą. Jei automatas suveikia pakartotinai, pasižymėkite, kas tuo metu veikė, ir pasakykite elektrikui." },
        { label: "„Maža sąskaita reiškia, kad užteks mažo įvado.“", text: "Net mažai energijos per mėnesį vartojantis būstas gali turėti didelę vakarinę apkrovą, kai sutampa maisto gaminimas, vandens šildymas ir automobilio krovimas." },
        { label: "„6 kW šilumos siurblys iš tinklo naudoja 6 kW.“", text: "Patikrinkite, kuri galia nurodyta. Šiluminė galia apibūdina į patalpas tiekiamą šilumą. Elektros grandinei svarbi įrenginio elektrinė įėjimo galia ar srovė ir, jei yra, rezervinio elektrinio šildytuvo galia." },
      ],
    },
    {
      id: "pries-pokalbi-su-elektriku",
      heading: "Ką pasiruošti prieš pokalbį su elektriku?",
      items: [
        { label: "Įvado duomenis.", text: "Pasižymėkite leistiną naudoti galią ir tai, ar įvadas vienfazis, ar trifazis." },
        { label: "Prietaisų sąrašą.", text: "Įtraukite kaitlentę, orkaitę, indaplovę, džiovyklę, boilerį ir kitus didesnės galios prietaisus. Jei modelį jau išsirinkote, pasiimkite techninių duomenų lapą." },
        { label: "Kelias realias situacijas.", text: "Pavyzdžiui, vakare gaminate valgyti, tuo pat metu veikia indaplovė ir kraunasi automobilis. Tokie pavyzdžiai padeda įvertinti, kurie prietaisai veiks kartu." },
        { label: "Būsimus poreikius.", text: "Jei vėliau planuojate kondicionierių, šilumos siurblį ar įkrovimo stotelę, pasakykite apie tai prieš apdailą. Tada galima suplanuoti kabelio trasą, vietą skydelyje ar galios valdymą." },
      ],
    },
  ],
  sources: [
    { label: "Vardinė tinklo įtampa, ESO", url: "https://www.eso.lt/verslui/elektra/elektros-planiniai-atjungimai-ir-itampos-svyravimai/itampos-svyravimai/4031" },
    { label: "B, C ir D automatinių jungiklių charakteristikos, „Eaton“", url: "https://www.eaton.com/content/dam/eaton/products/low-voltage-power-distribution-controls-systems/eaton-power-distribution-components-catalogue-ca014013en-en-gb.pdf" },
    { label: "Elektros galios ir energijos matavimas, EIA", url: "https://www.eia.gov/energyexplained/electricity/measuring-electricity.php" },
    { label: "Skalbyklių energijos etiketės, Europos Komisija", url: "https://energy-efficient-products.ec.europa.eu/product-list/washing-machines_en" },
    { label: "Leistina naudoti galia ir 15 minučių rodmenys, ESO", url: "https://www.eso.lt/elektros-ivedimo-imokos-skaiciuokle-namams-351" },
    { label: "Elektromobilio įkrovimas individualiame name, ESO", url: "https://www.eso.lt/namams/elektra/kitos-paslaugos/elektromobiliu-ikrovimas/individualiam-namui/3336" },
  ],
};
