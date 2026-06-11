export const blogPosts = [
  {
    slug: "kodel-ismusa-automatus",
    title: "Kodėl išmuša automatus ir kada kviesti elektriką?",
    category: "Elektros gedimai",
    date: "2026-06-05",
    readTime: "4 min.",
    image: "/images/fazis-hero.jpg",
    excerpt:
      "Dažniausios priežastys, kodėl dingsta elektra ar suveikia automatiniai jungikliai, ir kaip saugiai elgtis prieš kviečiant meistrą.",
    videoUrl: null,
    content: [
      {
        heading: "Pirmiausia - saugumas",
        body: "Jeigu automatas suveikia pakartotinai, jo nereikėtų junginėti daug kartų iš eilės. Tai gali reikšti perkrovą, trumpą jungimą arba sugedusį prietaisą. Tokiu atveju geriau atjungti įtartinus prietaisus ir kreiptis į elektriką.",
      },
      {
        heading: "Dažnos priežastys",
        body: "Automatai dažnai išmuša dėl per didelės apkrovos vienoje linijoje, drėgmės, pažeisto kabelio, netvarkingos rozetės ar prietaiso gedimo. Tiksliai priežasčiai nustatyti reikia patikrinti grandinę ir apkrovą.",
      },
      {
        heading: "Ką galite patikrinti patys",
        body: "Galite atjungti paskutinį naudotą prietaisą, patikrinti, ar nėra degėsių kvapo, kaitimo ar kibirkščiavimo. Jeigu matote įtartinų požymių, nelieskite pažeistos vietos ir nekvieskite problemos spręsti spėlionėmis.",
      },
    ],
    faq: [
      {
        question: "Ar galima tiesiog pakeisti automatą į galingesnį?",
        answer:
          "Ne visada. Galingesnis automatas be linijos įvertinimo gali būti pavojingas, nes kabelis turi atlaikyti apkrovą.",
      },
      {
        question: "Kada būtina kviesti elektriką?",
        answer:
          "Jeigu automatas išmuša pakartotinai, jaučiamas kvapas, matomas kaitimas arba problema kartojasi naudojant skirtingus prietaisus.",
      },
    ],
  },
  {
    slug: "kaip-planuoti-apsvietima",
    title: "Kaip planuoti apšvietimą namuose prieš remontą",
    category: "Apšvietimas",
    date: "2026-06-05",
    readTime: "5 min.",
    image: "/images/fazis-hero.jpg",
    excerpt:
      "Praktiniai patarimai, kaip apgalvoti šviestuvų vietas, jungiklius, LED juostas ir zoninį apšvietimą dar prieš pradedant remontą.",
    videoUrl: null,
    content: [
      {
        heading: "Apšvietimas turi sekti gyvenimo scenarijus",
        body: "Prieš pažymint šviestuvų vietas verta pagalvoti, kur bus baldai, darbo zona, valgomasis stalas, veidrodis ar poilsio vieta. Taip apšvietimas tampa ne tik gražus, bet ir patogus.",
      },
      {
        heading: "Nepamirškite valdymo",
        body: "Dažna klaida - suplanuoti gražius šviestuvus, bet nepatogius jungiklius. Koridoriuose, miegamuosiuose ir laiptinėse verta pagalvoti apie valdymą iš kelių vietų.",
      },
      {
        heading: "LED juostoms reikia vietos",
        body: "LED juostoms reikalingas maitinimo šaltinis ir patogus priėjimas prie jo. Jeigu tai suplanuojama iš anksto, vėliau nereikia ardyti apdailos.",
      },
    ],
    faq: [
      {
        question: "Kada geriausia kviesti elektriką apšvietimo planavimui?",
        answer:
          "Geriausia prieš apdailos darbus, kai dar galima patogiai keisti kabelių ir jungiklių vietas.",
      },
      {
        question: "Ar verta daryti kelias apšvietimo zonas?",
        answer:
          "Dažniausiai taip, nes tai leidžia patogiau valdyti šviesą ir taupyti energiją.",
      },
    ],
  },
  {
    slug: "rozetes-ir-jungikliai",
    title: "Rozetės ir jungikliai: ką verta apgalvoti iš anksto",
    category: "Patarimai namams",
    date: "2026-06-05",
    readTime: "4 min.",
    image: "/images/fazis-hero.jpg",
    excerpt:
      "Kiek rozečių reikia virtuvėje, kur patogu montuoti jungiklius ir kodėl elektros taškų planavimas padeda išvengti prailgintuvų.",
    videoUrl: null,
    content: [
      {
        heading: "Rozetės turi būti ten, kur bus prietaisai",
        body: "Virtuvėje, darbo kambaryje ir prie televizoriaus elektros taškų dažnai pritrūksta greičiausiai. Geriau suplanuoti kelis papildomus taškus iš anksto nei vėliau naudoti prailgintuvus.",
      },
      {
        heading: "Jungiklių aukštis ir vieta",
        body: "Jungikliai turi būti patogiai pasiekiami natūraliame judėjimo kelyje. Prie durų svarbu įvertinti, į kurią pusę jos atsidarys.",
      },
      {
        heading: "Atsarga ateičiai",
        body: "Namų poreikiai keičiasi: atsiranda robotai siurbliai, įkrovikliai, papildomas apšvietimas ar darbo vietos. Maža atsarga planavimo metu vėliau gali sutaupyti daug nepatogumų.",
      },
    ],
    faq: [
      {
        question: "Ar galima perkelti rozetę po remonto?",
        answer:
          "Galima, bet dažnai tai reiškia daugiau apdailos darbų, todėl geriausia planuoti prieš remontą.",
      },
      {
        question: "Ar visoms rozetėms užtenka vienos linijos?",
        answer:
          "Ne visada. Tai priklauso nuo planuojamų prietaisų ir apkrovos, todėl verta įvertinti konkrečią situaciją.",
      },
    ],
  },
];

export function getPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}
