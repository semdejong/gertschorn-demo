/**
 * Alle zichtbare gegevens van deze demo.
 * Slug blijft "gertschorn-demo" (data-demo van de analytics-tracker).
 */
export const content = {
  slug: "gertschorn-demo",

  company: {
    name: "Hoveniersbedrijf Gert Schorn",
    slogan: "Natuurlijk plantastisch!",
    logo: "/logo.png",
    logoWidth: 171,
    logoHeight: 117,
    city: "Almelo",
  },

  colors: {
    inkt: "#2F2F2F",
    grijs: "#5C5C5C",
    papier: "#F4F5F3",
    vlak: "#E6E7E4",
    steen: "#7A8086",
    wit: "#FFFFFF",
    blauw: "#0088D0",
    link: "#0A5F8A",
    geel: "#F0E40C",
  },

  seo: {
    title: "Hoveniersbedrijf Gert Schorn | Almelo",
    description:
      "Conceptwebsite voor Hoveniersbedrijf Gert Schorn in Almelo: tuinonderhoud, ontwerp, aanleg, snoei en het groencentrum. Sinds 1994.",
    lang: "nl",
  },

  contact: {
    phoneDisplay: "0546 566 671",
    phoneHref: "tel:+31546566671",
    email: "info@gertschorn.nl",
    street: "Haghoeksweg 37",
    postal: "7602 XZ Almelo",
    address: "Haghoeksweg 37, 7602 XZ Almelo",
    hours: [
      { days: "Maandag t/m zaterdag", time: "09.00–19.00" },
      { days: "Zondag", time: "gesloten" },
    ],
    hoursSummary: "Maandag t/m zaterdag 09.00–19.00, zondag gesloten",
    response:
      "Wanneer u contact met ons opneemt via de mail, proberen wij zo snel mogelijk te reageren. Heeft u een dringendere vraag, neemt u dan alstublieft telefonisch contact op.",
  },

  nav: [
    { label: "Ontwerp", href: "/ontwerp" },
    { label: "Aanleg", href: "/aanleg" },
    { label: "Onderhoud", href: "/onderhoud" },
    { label: "Snoeien", href: "/snoeien" },
    { label: "Groencentrum", href: "/groencentrum" },
    { label: "Projecten", href: "/projecten" },
    { label: "Over ons", href: "/over-ons" },
    { label: "Contact", href: "/contact" },
  ],

  courses: [
    {
      label: "01 ONTWERP",
      title: "Een plan, samen met u",
      text: "Bent u uitgekeken op uw huidige tuin, of wilt u juist meer of minder groen? Wij stellen samen met u een plan op. Een ontwerp voor een vriendelijke prijs, en een vrijblijvende offerte.",
      href: "/ontwerp",
      link: "Naar tuinontwerp",
      width: "min-[760px]:w-[90%]",
    },
    {
      label: "02 AANLEG",
      title: "Naar ontwerp afgeleverd",
      text: "Wilt u een oase van groen, of juist meer bestrating en minder onderhoud? Wij ontwerpen met u en leveren de tuin naar dat ontwerp af.",
      href: "/aanleg",
      link: "Naar aanleg",
      width: "min-[760px]:ml-auto min-[760px]:w-[82%]",
    },
    {
      label: "03 ONDERHOUD",
      title: "Bestrating, snoei en gras",
      text: "Wij borstelen de bestrating, verwijderen onkruid, snoeien planten en bomen en onderhouden het gras. De eerste twee jaar na aanleg zijn cruciaal. Lukt het zelf niet? Vraag naar de mogelijkheden.",
      href: "/onderhoud",
      link: "Naar onderhoud",
      width: "min-[760px]:w-[74%]",
      joint: "blauw" as const,
    },
    {
      label: "04 GROENCENTRUM",
      title: "Planten, bloemen en advies",
      text: "In het groencentrum vindt u planten en bloemen voor binnen en buiten, bomen en tuinmeubilair. Onze medewerkers adviseren u, en wij bezorgen aankopen thuis.",
      href: "/groencentrum",
      link: "Naar het groencentrum",
      width: "min-[760px]:ml-auto min-[760px]:w-[86%]",
    },
  ],

  projects: [
    {
      id: "verhoogde-border",
      src: "/img/projecten/border-bak.jpg",
      label: "Verhoogde border",
      alt: "Verhoogde border van grijze stapelblokken met een dunne afdekplaat, rozen, hortensia's en een waterornament.",
      width: 2000,
      height: 1500,
      maxWidth: 2000,
    },
    {
      id: "tuinoverzicht",
      src: "/img/projecten/tuin-overzicht.jpg",
      label: "Tuinoverzicht",
      alt: "Wijder zicht op dezelfde tuin: grind, een terras, verhoogde borders en een jonge boom met een steunpaal.",
      width: 2000,
      height: 1500,
      maxWidth: 2000,
    },
    {
      id: "voortuin",
      src: "/img/projecten/voortuin.jpg",
      label: "Voortuin",
      alt: "Voortuin bij een rij woningen, met een verhoogde muur van stapelblokken, hortensia's en jonge beplanting.",
      width: 2000,
      height: 1500,
      maxWidth: 2000,
    },
    {
      id: "achtertuin",
      src: "/img/projecten/achtertuin.jpg",
      label: "Achtertuin",
      alt: "Achtertuin met terras, tuintafel en stoelen, gazon en borders.",
      width: 2000,
      height: 1500,
      maxWidth: 2000,
    },
    {
      id: "vijver",
      src: "/img/projecten/vijver.jpg",
      label: "Vijver",
      alt: "Vijver met een houten vlonder en een hangmand met planten.",
      width: 1024,
      height: 768,
      maxWidth: 1024,
    },
  ],

  testimonial: {
    quote:
      "Hoveniersbedrijf Gert Schorn doet al meer dan 4 jaar bij ons het onderhoud aan de tuin en de plas bij ons achter. Ziet er strak uit!",
    name: "Jaap Besteman",
    organisation: "Westerhuis Verhuur Twente",
  },

  home: {
    h1: "Tuinen in de omgeving van Almelo",
    lede: "Al sinds 1994 onderhouden wij tuinen in de omgeving van Almelo en leggen wij nieuwe tuinen aan in de regio.",
    statements: [
      "Wij hebben veel ervaring met alles wat met de tuin te maken heeft en stralen dat ook uit naar u toe wanneer we bij u aan het werk zijn.",
      "Wanneer u met ons werkt, is alleen perfectie genoeg, of het nou een kleine onderhoudsbeurt is of een complete achtertuin make-over.",
      "Wanneer het over onderhoud in de tuin gaat, is er niets waar wij u niet mee kunnen helpen.",
    ],
    photosTitle: "Tuinen uit ons werk",
    photosText:
      "Een verhoogde border van stapelblokken, en dezelfde tuin wijder gezien: grind, terras en borders. Meer foto's staan bij de projecten.",
    quoteTitle: "Wat een klant zegt",
    ctaTitle: "Vrijblijvend een offerte",
    ctaText:
      "Samen met u maken wij een ontwerp en bespreken wij de kosten. Wij zijn pas tevreden als u tevreden bent.",
  },

  articles: {
    onderhoud: {
      metaTitle: "Tuinonderhoud in Almelo",
      description:
        "Tuinonderhoud in Almelo door Hoveniersbedrijf Gert Schorn: bestrating borstelen, onkruid weghalen, snoeien en het gras.",
      label: "03 ONDERHOUD",
      h1: "Tuinonderhoud in Almelo",
      photo: "achtertuin",
      paragraphs: [
        "Bent u op zoek naar tuinonderhoud in Almelo? Kies voor Hoveniersbedrijf Gert Schorn. Wij borstelen uw bestrating en ontdoen die van onkruid, snoeien planten en bomen, en onderhouden het gras.",
        "In de eerste twee jaar nadat uw tuin is aangelegd, is het cruciaal dat de tuin goed wordt onderhouden. Lukt het niet om dit zelf te doen? Vraag naar de mogelijkheden.",
        "Heeft u na het onderhoud nog vragen? Wij staan altijd voor u klaar. Wij zijn pas tevreden als u tevreden bent.",
        "Wilt u nieuwe planten toevoegen, dan vindt u in Groencentrum Gert Schorn planten, bomen, bloemen en tuinmeubelen. Uw aankopen bezorgen wij ook thuis. Voor een grotere verandering ontwerpen wij een nieuwe tuin.",
      ],
    },
    ontwerp: {
      metaTitle: "Tuin ontwerpen",
      description:
        "Tuinontwerp in Almelo: samen een plan, een ontwerp voor een vriendelijke prijs en een vrijblijvende offerte bij Gert Schorn.",
      label: "01 ONTWERP",
      h1: "Tuin ontwerpen",
      photo: "voortuin",
      paragraphs: [
        "Tuin ontwerpen doet u bij Hoveniersbedrijf Gert Schorn. Bent u uitgekeken op uw huidige tuin, of wilt u juist meer of minder groen? Wij stellen samen met u een plan op, zodat u uw droomtuin krijgt. Bij ons krijgt u een ontwerp voor een vriendelijke prijs.",
        "Wilt u meer groen? Dan zorgen wij voor een oase van groen in uw achtertuin. U herkent uw tuin niet meer terug. Wilt u minder onderhoud en meer bestrating? Ook dan staan wij voor u klaar.",
        "In de twee jaar na het aanleggen van een nieuwe tuin is het belangrijk de tuin goed te onderhouden. Ook daarvoor bent u bij ons aan het juiste adres.",
        "Wilt u zich oriënteren terwijl de tuin wordt ontworpen? Bezoek Tuincentrum Gert Schorn. Er is een aanbod aan planten, bomen, bloemen en tuinmeubilair, zodat u in het echt kunt bekijken hoe bepaalde planten eruitzien. Onze medewerkers geven u graag advies en informatie.",
        "Vraag een vrijblijvende offerte aan. Dan kijken we samen naar de mogelijkheden.",
      ],
    },
    aanleg: {
      metaTitle: "Tuin aanleggen",
      description:
        "Nieuwe tuin aanleggen in de regio Almelo. Sinds 1994. Ontwerp, oplevering naar ontwerp en een vrijblijvende offerte.",
      label: "02 AANLEG",
      h1: "Een nieuwe tuin aanleggen",
      photo: "tuinoverzicht",
      paragraphs: [
        "Sinds 1994 leggen wij al nieuwe tuinen aan in de regio Almelo. Wij streven ernaar uw ideale tuin te creëren.",
        "Wilt u meer groen? Dan zorgen wij voor een oase van groen in uw achtertuin. U herkent uw tuin niet meer terug. Wilt u minder onderhoud en meer bestrating? Ook dan staan wij voor u klaar. Wij helpen u met het ontwerpen en zorgen dat alles naar ontwerp wordt afgeleverd.",
        "Daarnaast kunnen wij de tuin daarna voor u onderhouden. Dat is belangrijk in de twee jaar na het aanleggen.",
        "Wat een nieuwe tuin kost, hangt af van het ontwerp en uw budget. U vraagt vrijblijvend een offerte aan. Samen maken wij een ontwerp en bespreken wij de kosten. Wij zorgen dat de nieuwe tuin naar wens is qua uiterlijk en budget. Wij zijn pas tevreden als u tevreden bent.",
        "Wilt u geen volledige tuin laten aanleggen, maar wel een andere uitstraling? Kom langs bij Tuincentrum Gert Schorn. Onze medewerkers adviseren welke planten bij uw tuin passen.",
      ],
    },
    snoeien: {
      metaTitle: "Bomen snoeien en kappen",
      description:
        "Bomen snoeien en kappen is een specialisme van Hoveniersbedrijf Gert Schorn in Almelo.",
      label: "SNOEIEN",
      h1: "Bomen snoeien en kappen",
      photo: null,
      paragraphs: [
        "Bomen snoeien en kappen is een specialisme van Hoveniersbedrijf Gert Schorn. U bent bij ons aan het juiste adres. Wij weten hoe uw boom beter gaat groeien.",
        "Ook bij een kleine onderhoudsbeurt of een totale achtertuin make-over kunt u bij ons terecht. Hovenier Almelo Gert Schorn denkt met u mee.",
        "Wilt u weten wat er voor uw boom nodig is, vraag dan een vrijblijvende offerte aan of bel ons. Wij kijken met u mee.",
      ],
    },
    groencentrum: {
      metaTitle: "Groencentrum Gert Schorn",
      description:
        "Groencentrum en Tuincentrum Gert Schorn in Almelo: planten en bloemen voor binnen en buiten, bomen, tuinmeubilair, advies en bezorging.",
      label: "04 GROENCENTRUM",
      h1: "Groencentrum Gert Schorn",
      photo: null,
      hours: true,
      paragraphs: [
        "Groencentrum Gert Schorn hoort bij hetzelfde hoveniersbedrijf. Op de bestaande site heet het ook Tuincentrum Gert Schorn en Groencentrum Almelo.",
        "U vindt er planten en bloemen voor binnen en buiten, bomen en tuinmeubilair. Onze medewerkers geven advies welke planten het beste passen bij uw tuin of woning. Uw aankopen bezorgen wij thuis.",
        "Wilt u de tuin een andere uitstraling geven zonder alles opnieuw te laten aanleggen? Nieuwe planten en bloemen kunnen al veel doen. Voor een groter plan tekenen wij ook een ontwerp.",
        "Op deze conceptsite staat geen assortimentslijst en geen prijslijst. Wat er is, hoort u van onze medewerkers, in de winkel of aan de telefoon.",
        "Langskomen doet u op het adres van Hoveniersbedrijf Gert Schorn. De openingstijden zijn dezelfde als van het bedrijf: maandag t/m zaterdag 09.00–19.00, zondag gesloten.",
      ],
    },
    overOns: {
      metaTitle: "Over ons",
      description:
        "Hoveniersbedrijf Gert Schorn is een ervaren hoveniersbedrijf in de omgeving van Almelo. Sinds 1994. Kwaliteit, service en een groencentrum.",
      label: "HET BEDRIJF",
      h1: "Over Hoveniersbedrijf Gert Schorn",
      photo: "verhoogde-border",
      testimonial: true,
      paragraphs: [
        "Hoveniersbedrijf Gert Schorn is een ervaren hoveniersbedrijf in de omgeving van Almelo. Kwaliteit en service staan hoog bij ons in het vaandel. Al sinds 1994 onderhouden wij tuinen in de omgeving van Almelo.",
        "U kunt bij ons terecht voor een kleine onderhoudsbeurt of een totale achtertuin make-over. Ook zijn wij gespecialiseerd in het snoeien en kappen van bomen.",
        "Bij Groencentrum Gert Schorn vindt u planten en bloemen voor binnen en buiten. Onze werknemers geven u graag advies welke planten het beste geschikt zijn voor uw tuin of woning.",
        "Wij verzorgen alles op het gebied van tuinen en tuinonderhoud. Bij ons vindt u alleen opgeleide en gepassioneerde werknemers die het beste willen voor uw tuin. Hovenier Almelo Gert Schorn denkt met u mee. Vraag vrijblijvend een offerte aan.",
      ],
    },
  },

  projecten: {
    metaTitle: "Projecten",
    description:
      "Foto's van tuinen van Hoveniersbedrijf Gert Schorn: verhoogde border, tuinoverzicht, voortuin, achtertuin en vijver.",
    h1: "Projecten",
    lede: "Foto's van tuinen van Hoveniersbedrijf Gert Schorn. De namen blijven bij wat u ziet: een verhoogde border, een tuinoverzicht, een voortuin, een achtertuin en een vijver.",
  },

  contactPage: {
    metaTitle: "Contact",
    description:
      "Contact met Hoveniersbedrijf Gert Schorn: Haghoeksweg 37, 7602 XZ Almelo, 0546 566 671, info@gertschorn.nl.",
    h1: "Contact",
    lede: "Vul het formulier in om in contact te komen met Hoveniersbedrijf Gert Schorn. Het formulier opent uw e-mailprogramma. Er wordt niets naar een server gestuurd.",
  },

  offerte: {
    metaTitle: "Vrijblijvende offerte",
    description:
      "Vrijblijvende offerte voor ontwerp, aanleg, onderhoud of snoei bij Hoveniersbedrijf Gert Schorn in Almelo.",
    h1: "Vrijblijvende offerte",
    lede: "U kunt vrijblijvend een offerte aanvragen bij Hoveniersbedrijf Gert Schorn. Samen met u maken wij een ontwerp voor uw tuin en bespreken wij de kosten. Wij zijn pas tevreden als u tevreden bent.",
    subjects: ["Onderhoud", "Ontwerp", "Aanleg", "Snoeien", "Groencentrum", "Anders"],
  },

  privacy: {
    metaTitle: "Privacy",
    description:
      "Korte privacytoelichting bij deze conceptwebsite van Sleads voor Hoveniersbedrijf Gert Schorn. Cookieloos, geen formulier naar een server.",
    h1: "Privacy",
    paragraphs: [
      "Dit is een conceptwebsite, gemaakt door Sleads voor Hoveniersbedrijf Gert Schorn, Haghoeksweg 37, 7602 XZ Almelo.",
      "De site plaatst geen cookies. Een cookieloos analytics-script van Sleads telt paginabezoeken, zodat zichtbaar is of deze demo wordt bekeken. Er is via deze pagina geen account en geen nieuwsbrief.",
      "De formulieren op Contact en Offerte versturen niets naar een server. Ze openen uw e-mailprogramma met een bericht aan het adres hieronder. Wat u daarna verstuurt, gaat via uw eigen mailprogramma naar dat adres.",
      "Deze tekst is een korte toelichting bij de conceptsite, geen volledig juridisch document. Vragen over het hoveniersbedrijf stelt u per telefoon of per e-mail.",
    ],
  },

  notFound: {
    h1: "Deze pagina bestaat niet",
    text: "Het adres klopt niet, of de pagina is hier niet aanwezig. Ga terug naar de homepage, of bel ons.",
  },

  form: {
    noteBefore: "Dit formulier opent uw e-mailprogramma met een bericht aan",
    noteAfter: "Er wordt niets naar een server gestuurd.",
    sentHint: "Daarna verstuurt u het bericht zelf, vanuit uw mailprogramma.",
    required: "Vul dit veld in.",
    emailInvalid: "Vul een geldig e-mailadres in.",
  },
};

export type Content = typeof content;
export type Project = (typeof content.projects)[number];
export type ArticleId = keyof typeof content.articles;

export function projectById(id: string): Project | undefined {
  return content.projects.find((project) => project.id === id);
}
