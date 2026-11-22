export const electricityAtHomePost = {
  slug: "kaip-elektra-atkeliauja-iki-jusu-namu",
  title: "Kaip elektra atkeliauja iki Jūsų namų?",
  date: "2026-11-21",
  series: "Būsto elektros instaliacija",
  seriesPart: 1,
  excerpt: "Nuo elektrinės iki kištukinio lizdo. Kaip keičiasi įtampa, kuo skiriasi pastotės ir ką verta žinoti planuojant būsto instaliaciją.",
  intro: "Įjungus virdulį vanduo pradeda kaisti. Kad tai įvyktų, elektra turi pasiekti Jūsų namus, pereiti per skaitiklį ir skydelį, o iš ten – per konkrečios grandinės kabelį iki kištukinio lizdo. Šį kelią verta suprasti prieš rengiant naują elektros instaliaciją. Tai paaiškina, kodėl vienur pakanka pridėti lizdą, o kitur reikia naujos grandinės nuo skydelio.",
  image: {
    src: "/images/blog/kaip-elektra-atkeliauja-iki-namu.jpg",
    width: 640,
    height: 432,
    alt: "Elektros kelio schema: nuo elektrinės per transformatorius, perdavimo linijas ir pastotes iki namo.",
    caption: "Schemą skaitykite viršuje iš kairės į dešinę, tada sekite liniją žemyn ir apačioje judėkite iš dešinės į kairę, iki namo.",
  },
  content: [
    {
      id: "nuo-elektrines-iki-namu",
      heading: "Nuo elektrinės iki namų ūkio",
      figure: true,
      ordered: true,
      items: [
        {
          label: "Elektrinė",
          diagramLabel: "Power plant",
          text: "Čia pagaminama elektra. Pavyzdžiui, hidroelektrinėje vanduo suka turbiną, o ši suka elektros generatorių.",
        },
        {
          label: "Įtampą didinantis transformatorius",
          diagramLabel: "Step-up transformer",
          text: "Prieš siunčiant elektrą toli, transformatorius pakelia įtampą. Perduodant tą pačią galią aukštesne įtampa, linija teka mažesnė srovė. Dėl to laidai mažiau kaista ir prarandama mažiau energijos.",
        },
        {
          label: "Perdavimo linija",
          diagramLabel: "Transmission line",
          text: "Tai paveikslėlyje matomi laidai ant aukštų metalinių atramų. Jais elektra perduodama dideliais atstumais. Lietuvoje perdavimo tinkle naudojamos, pavyzdžiui, 330 kV ir 110 kV linijos.",
        },
        {
          label: "Perdavimo pastotė",
          diagramLabel: "Transmission substation",
          text: "Čia susijungia kelios aukštosios įtampos linijos. Pastotės įranga leidžia jas prijungti ar atjungti, o transformatoriai prireikus pakeičia įtampą, pavyzdžiui, iš 330 kV į 110 kV.",
        },
        {
          label: "Skirstomoji pastotė",
          diagramLabel: "Distribution substation",
          text: "Apačioje dešinėje pavaizduota pastotė sumažina įtampą iki tokios, kuri tinka vietiniam skirstomajam tinklui, pavyzdžiui, iš 110 kV į 10 kV. Iš čia kelios linijos gali maitinti skirtingus rajonus ar gyvenvietes.",
        },
        {
          label: "Vietinė transformatorinė",
          diagramLabel: "Transformers",
          text: "Paveikslėlyje transformatoriai parodyti ant stulpų. Šiame etape įtampa sumažinama dar kartą, pavyzdžiui, iš 10 kV į 0,4 kV. Tai reiškia 400 V tarp dviejų fazių ir 230 V tarp vienos fazės ir neutralės. Būtent 230 V yra įprasto buitinio lizdo vardinė įtampa.",
        },
        {
          label: "Namas",
          diagramLabel: "Home",
          text: "Žemosios įtampos linija pasiekia namo įvadą. Skaitiklis registruoja suvartotą energiją, o skydelyje maitinimas paskirstomas atskiroms grandinėms. Iš jų maitinami lizdai, šviestuvai ir stacionarieji prietaisai.",
        },
      ],
      after: [
        "Daugiabutyje tarp ESO tinklo ir buto instaliacijos yra ir bendroji pastato elektros instaliacija. Skaitiklis gali būti bendroje spintoje, o buto skydelis – prieškambaryje. Individualiame name skaitiklis gali būti lauko spintoje, o skydelis – namo viduje.",
      ],
    },
    {
      id: "ijungus-prietaisa",
      heading: "Kas vyksta įjungus prietaisą?",
      paragraphs: [
        "Įtampa lizde gali būti ir tada, kai jis tuščias. Įjungus virdulį, grandinė užsidaro, srovė teka faziniu ir neutraliuoju laidininkais, o kaitinimo elementas šildo vandenį. Apsauginis laidininkas PE padeda apsaugos įtaisams atjungti maitinimą, jei dėl izoliacijos gedimo įtampa atsiranda ant prie PE prijungto metalinio prietaiso korpuso.",
      ],
    },
    {
      id: "grandines-apkrova",
      heading: "Kaip apskaičiuojama grandinės apkrova?",
      paragraphs: [
        "Jei vienoje grandinėje kartu veikia 2 kW virdulys ir 1 kW skrudintuvas, bendra jų galia tuo metu siekia apie 3 kW. Papildomas lizdas suteikia daugiau vietų prietaisams prijungti. Leistiną grandinės apkrovą lemia kabelis, jo klojimo sąlygos ir apsauga.",
        "Automatinis jungiklis saugo grandinės laidus nuo perkrovos ir trumpojo jungimo. Liekamosios srovės įtaisas, dažnai vadinamas nuotėkio rele arba RCD, reaguoja į srovės nuotėkį. Jei virtuvės lizdų ir apšvietimo grandinės atskiros, suveikus vien lizdų grandinės automatiniam jungikliui virtuvėje gali likti šviesa.",
      ],
    },
    {
      id: "virtuves-grandines",
      heading: "Kaip planuojamos virtuvės grandinės?",
      paragraphs: [
        "Jei virtuvėje planuojate indaplovę, orkaitę ir papildomus lizdus virš stalviršio, su elektriku peržiūrėkite baldų planą ir numatomus prietaisus. Aptarkite, kur stovės įranga, kurie prietaisai veiks kartu ir kurie lizdai liks pasiekiami sumontavus baldus. Pavyzdžiui, virdulys ir mikrobangų krosnelė dažnai naudojami tuo pačiu metu.",
        "Remontuojant elektrikas nustato, kuri grandinė maitina virtuvę, apžiūri skydelį ir įvertina, kuriuos kabelius galima naudoti toliau. Jei reikia naujo kabelio nuo skydelio, jo kelią patogiausia numatyti prieš tinkavimą, plyteles ir baldų montavimą.",
        "Naujai įrengiamoje virtuvėje patogu iš anksto susižymėti šias prietaisų grupes.",
      ],
      items: [
        { label: "Stalviršio lizdai.", text: "Numatykite, kur bus virdulys, mikrobangų krosnelė ir kiti smulkūs prietaisai." },
        { label: "Kaitlentė.", text: "Maitinimas planuojamas pagal konkretaus modelio galią ir gamintojo prijungimo schemą." },
        { label: "Indaplovė ir orkaitė.", text: "Ar joms tinka bendra grandinė, elektrikas sprendžia pagal abiejų prietaisų galią, gamintojų nurodymus ir grandinės parametrus." },
        { label: "Šaldytuvas.", text: "Atskira grandinė gali būti patogi, jei išvykus norite atjungti dalį virtuvės grandinių ir palikti šaldytuvą veikiantį." },
      ],
    },
  ],
  sources: [
    { label: "Elektros perdavimo tinklas, „Litgrid“", url: "https://litgrid.eu/sistema/elektros-energetikos-sistema/elektros-perdavimo-tinklas" },
    { label: "Skirstomojo tinklo techniniai reikalavimai, ESO", url: "https://www.eso.lt/partneriams/partneriams-rangovams/elektros-darbu-rangovams-ir-tiekejams/techniniai-reikalavimai/4216" },
    { label: "Vardinė tinklo įtampa, ESO", url: "https://www.eso.lt/verslui/elektra/elektros-planiniai-atjungimai-ir-itampos-svyravimai/itampos-svyravimai/4031" },
    { label: "Grandinių ir kabelių apsaugos principai", url: "https://www.electrical-installation.org/enwiki/Conductor_sizing%3A_methodology_and_definition" },
    { label: "RCD veikimo principas", url: "https://www.electrical-installation.org/enwiki/Additional_measure_of_protection_against_direct_contact" },
  ],
};
