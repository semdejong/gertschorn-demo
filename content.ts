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
    snoeiTitle: "Ook de bomen",
    snoeiText:
      "Bomen snoeien en kappen is een specialisme. Wij weten hoe uw boom beter gaat groeien, of het nou bij een onderhoudsbeurt hoort of bij een complete make-over.",
    vijverText: "Een vijver met een houten vlonder en een hangmand met planten.",
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
        "Bent u op zoek naar tuinonderhoud in Almelo? Kies voor Hoveniersbedrijf Gert Schorn.",
        "Heeft u na het onderhoud nog vragen? Wij staan altijd voor u klaar. Wij zijn pas tevreden als u tevreden bent.",
        "Voor een grotere verandering ontwerpen wij een nieuwe tuin.",
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
        "Tuin ontwerpen doet u bij Hoveniersbedrijf Gert Schorn. Samen met u stellen wij een plan op, zodat u uw droomtuin krijgt.",
        "Vraag een vrijblijvende offerte aan. Dan kijken wij samen naar de mogelijkheden.",
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
        "Wij zijn pas tevreden als u tevreden bent.",
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
        "Bomen snoeien en kappen is een specialisme van Hoveniersbedrijf Gert Schorn. U bent bij ons aan het juiste adres.",
        "Wilt u weten wat er voor uw boom nodig is, vraag dan een vrijblijvende offerte aan of bel ons.",
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
        "Groencentrum Gert Schorn hoort bij hetzelfde hoveniersbedrijf. Het heet ook Tuincentrum Gert Schorn en Groencentrum Almelo.",
        "Langskomen doet u op het adres van Hoveniersbedrijf Gert Schorn. De openingstijden zijn dezelfde als van het bedrijf.",
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
        "Hoveniersbedrijf Gert Schorn is een ervaren hoveniersbedrijf in de omgeving van Almelo.",
        "Wij verzorgen alles op het gebied van tuinen en tuinonderhoud. Vraag vrijblijvend een offerte aan.",
      ],
    },
  },

  projecten: {
    metaTitle: "Projecten",
    description:
      "Foto's van tuinen van Hoveniersbedrijf Gert Schorn: verhoogde border, tuinoverzicht, voortuin, achtertuin en vijver.",
    h1: "Projecten",
    lede: "Foto's van tuinen van Hoveniersbedrijf Gert Schorn. De namen blijven bij wat u ziet: een verhoogde border, een tuinoverzicht, een voortuin, een achtertuin en een vijver.",
    after:
      "Twee foto's tonen dezelfde tuin: eerst de verhoogde border, daarna het wijdere zicht met grind, terras en een jonge boom. De voortuin, de achtertuin en de vijver zijn aparte beelden. Klik een foto om hem groter te bekijken.",
    notes: [
      {
        title: "Verhoogde border",
        text: "De border ligt hoger dan het grind en de tegels. Grijze stapelblokken, een dunne afdekplaat, rozen, hortensia's en een waterornament.",
      },
      {
        title: "Tuinoverzicht",
        text: "Hetzelfde stuk tuin, wijder gezien. Grind, een terras, verhoogde borders en een jonge boom met een steunpaal.",
      },
      {
        title: "Voortuin",
        text: "Een voortuin bij een rij woningen: een verhoogde muur van stapelblokken, hortensia's en jonge beplanting.",
      },
      {
        title: "Achtertuin",
        text: "Terras, tuintafel en stoelen, een gazon en borders.",
      },
      {
        title: "Vijver",
        text: "Een vijver met een houten vlonder en een hangmand met planten.",
        accent: "blauw" as const,
      },
    ],
  },

  contactPage: {
    metaTitle: "Contact",
    description:
      "Contact met Hoveniersbedrijf Gert Schorn: Haghoeksweg 37, 7602 XZ Almelo, 0546 566 671, info@gertschorn.nl.",
    h1: "Contact",
    lede: "Vul het formulier in om in contact te komen met Hoveniersbedrijf Gert Schorn. Het formulier opent uw e-mailprogramma. Er wordt niets naar een server gestuurd.",
    aside:
      "Een kleine onderhoudsbeurt, een achtertuin make-over, snoeiwerk of een vraag over planten: u kunt voor het hele tuinwerk bij ons terecht. Hovenier Almelo Gert Schorn denkt met u mee.",
  },

  offerte: {
    metaTitle: "Vrijblijvende offerte",
    description:
      "Vrijblijvende offerte voor ontwerp, aanleg, onderhoud of snoei bij Hoveniersbedrijf Gert Schorn in Almelo.",
    h1: "Vrijblijvende offerte",
    lede: "U kunt vrijblijvend een offerte aanvragen bij Hoveniersbedrijf Gert Schorn. Samen met u maken wij een ontwerp voor uw tuin en bespreken wij de kosten. Wij zijn pas tevreden als u tevreden bent.",
    subjects: ["Onderhoud", "Ontwerp", "Aanleg", "Snoeien", "Groencentrum", "Anders"],
    notes: [
      {
        title: "Uiterlijk en budget",
        text: "Wij zorgen dat een nieuwe tuin naar wens is qua uiterlijk en budget. De kosten hangen af van het ontwerp. Die bespreken wij samen met u.",
      },
      {
        title: "Meer groen, of juist minder werk",
        text: "Wilt u een oase van groen, dan leggen wij die aan. Wilt u minder onderhoud en meer bestrating, dan staan wij ook daarvoor klaar. Alles wordt naar ontwerp afgeleverd.",
      },
      {
        title: "De twee jaar erna",
        text: "Na het aanleggen is onderhoud belangrijk, zeker in de eerste twee jaar. Lukt het zelf niet, vraag dan naar de mogelijkheden.",
        accent: "geel" as const,
      },
      {
        title: "Alleen de beplanting vernieuwen",
        text: "Geen hele tuin laten aanleggen, wel een andere uitstraling? In Tuincentrum Gert Schorn adviseren onze medewerkers welke planten bij uw tuin passen. Aankopen bezorgen wij thuis.",
        href: "/groencentrum",
        link: "Naar het groencentrum",
      },
    ],
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

  bedHeadings: {
    onderhoud: "Het onderhoud zelf",
    ontwerp: "Hoe een plan ontstaat",
    aanleg: "Van plan tot oplevering",
    snoeien: "Wat wij met een boom doen",
    groencentrum: "Wat u er vindt",
    overOns: "Waar het bedrijf voor staat",
  },

  pageBeds: {
    onderhoud: [
      {
        title: "Bestrating borstelen",
        text: "Wij borstelen uw bestrating.",
      },
      {
        title: "Onkruid eruit",
        text: "De bestrating ontdoen wij van onkruid.",
      },
      {
        title: "Planten en bomen snoeien",
        text: "Wij snoeien planten en bomen. Voor het grotere snoei- en kapwerk is dat een specialisme van het bedrijf.",
        href: "/snoeien",
        link: "Bomen snoeien en kappen",
      },
      {
        title: "Het gras",
        text: "Het gras onderhouden wij voor u. Een kleine onderhoudsbeurt kan, en een complete achtertuin make-over ook.",
      },
      {
        title: "De eerste twee jaar",
        text: "In de eerste twee jaar nadat uw tuin is aangelegd, is het cruciaal dat de tuin goed wordt onderhouden. Lukt het niet om dit zelf te doen? Vraag naar de mogelijkheden.",
        accent: "blauw" as const,
      },
      {
        title: "Nieuwe planten tussendoor",
        text: "Wilt u na het onderhoud iets toevoegen, dan vindt u in Groencentrum Gert Schorn planten, bomen, bloemen en tuinmeubilair. Uw aankopen bezorgen wij thuis.",
        href: "/groencentrum",
        link: "Naar het groencentrum",
      },
    ],
    ontwerp: [
      {
        title: "Uitgekeken, of juist anders groen",
        text: "Bent u uitgekeken op uw huidige tuin, of wilt u meer of minder groen? Wij stellen samen met u een plan op, zodat u uw droomtuin krijgt.",
      },
      {
        title: "Een ontwerp voor een vriendelijke prijs",
        text: "Bij ons krijgt u een ontwerp van uw tuin voor een vriendelijke prijs. Daarna kijkt u vrijblijvend naar de offerte en de mogelijkheden.",
        href: "/offerte",
        link: "Vrijblijvende offerte",
      },
      {
        title: "Een oase van groen",
        text: "Wilt u meer groen? Dan zorgen wij voor een oase van groen in uw achtertuin. U herkent uw tuin niet meer terug.",
      },
      {
        title: "Meer bestrating, minder onderhoud",
        text: "Wilt u minder onderhoud en meer bestrating? Ook dan staan wij voor u klaar.",
        accent: "geel" as const,
      },
      {
        title: "Eerst de planten in het echt zien",
        text: "Tijdens het ontwerpen kunt u in Tuincentrum Gert Schorn kijken hoe planten, bomen, bloemen en tuinmeubilair eruitzien. Onze medewerkers geven advies en informatie.",
        href: "/groencentrum",
        link: "Naar Tuincentrum Gert Schorn",
      },
      {
        title: "En daarna het onderhoud",
        text: "In de twee jaar na het aanleggen is het belangrijk de tuin goed te onderhouden. Ook daarvoor bent u bij ons aan het juiste adres.",
        href: "/onderhoud",
        link: "Naar tuinonderhoud",
      },
    ],
    aanleg: [
      {
        title: "Sinds 1994 in de regio",
        text: "Sinds 1994 leggen wij al nieuwe tuinen aan in de regio Almelo. Wij streven ernaar uw ideale tuin te creëren.",
      },
      {
        title: "Naar ontwerp afgeleverd",
        text: "Wij helpen u met het ontwerpen en zorgen dat alles naar ontwerp wordt afgeleverd.",
        href: "/ontwerp",
        link: "Eerst het ontwerp",
      },
      {
        title: "Oase, of meer verharding",
        text: "Wilt u meer groen? Dan zorgen wij voor een oase van groen in uw achtertuin. U herkent uw tuin niet meer terug. Wilt u minder onderhoud en meer bestrating? Ook dan staan wij voor u klaar.",
      },
      {
        title: "Wat het kost",
        text: "De kosten hangen af van het ontwerp en uw budget. U vraagt vrijblijvend een offerte aan. Samen maken wij het ontwerp en bespreken wij de kosten. De tuin moet naar wens zijn qua uiterlijk en budget.",
        href: "/offerte",
        link: "Offerte aanvragen",
        accent: "geel" as const,
      },
      {
        title: "De tuin daarna bijhouden",
        text: "Wij kunnen de tuin na de aanleg ook onderhouden. Dat is belangrijk in de twee jaar na het aanleggen.",
        href: "/onderhoud",
        link: "Onderhoud na de aanleg",
      },
      {
        title: "Liever een kleine ingreep",
        text: "Geen volledige tuin laten aanleggen, wel een andere uitstraling? Kom langs bij Tuincentrum Gert Schorn. Onze medewerkers adviseren welke planten bij uw tuin passen.",
        href: "/groencentrum",
        link: "Naar het tuincentrum",
      },
    ],
    snoeien: [
      {
        title: "Een specialisme",
        text: "Bomen snoeien en kappen is een specialisme van Hoveniersbedrijf Gert Schorn. U bent bij ons aan het juiste adres.",
      },
      {
        title: "Hoe de boom verder groeit",
        text: "Wij weten hoe uw boom beter gaat groeien.",
        accent: "blauw" as const,
      },
      {
        title: "Bij een beurt of een make-over",
        text: "Ook bij een kleine onderhoudsbeurt of een totale achtertuin make-over kunt u bij ons terecht.",
        href: "/onderhoud",
        link: "Ook voor het onderhoud",
      },
      {
        title: "Wij denken met u mee",
        text: "Hovenier Almelo Gert Schorn denkt met u mee. Wat er voor uw boom nodig is, bespreekt u vrijblijvend. Bel of vraag een offerte aan.",
        href: "/offerte",
        link: "Vrijblijvende offerte",
      },
    ],
    groencentrum: [
      {
        title: "Eén adres",
        text: "Het groencentrum zit op het adres van het hoveniersbedrijf. De openingstijden zijn dezelfde.",
      },
      {
        title: "Binnen en buiten",
        text: "U vindt er planten en bloemen voor binnen en buiten. Onze medewerkers adviseren welke planten het beste passen bij uw tuin of woning.",
      },
      {
        title: "Bomen",
        text: "Ook bomen horen bij het aanbod. Zo kunt u in het echt bekijken hoe een boom eruitziet voordat die in het ontwerp komt.",
        href: "/ontwerp",
        link: "Terug naar tuinontwerp",
      },
      {
        title: "Tuinmeubilair",
        text: "Naast planten is er tuinmeubilair. Handig als de tuin een andere uitstraling krijgt zonder dat alles opnieuw aangelegd wordt.",
      },
      {
        title: "Advies van de medewerkers",
        text: "Onze medewerkers staan voor u klaar en geven graag advies en informatie.",
        accent: "geel" as const,
      },
      {
        title: "Thuisbezorgd",
        text: "Uw aankopen bezorgen wij thuis. Voor een grotere verandering ontwerpen en leggen wij ook een tuin aan.",
        href: "/aanleg",
        link: "Een tuin laten aanleggen",
      },
    ],
    overOns: [
      {
        title: "Kwaliteit en service",
        text: "Kwaliteit en service staan hoog bij ons in het vaandel. Wij stralen dat ook uit wanneer we bij u aan het werk zijn.",
      },
      {
        title: "Al sinds 1994",
        text: "Al sinds 1994 onderhouden wij tuinen in de omgeving van Almelo. Sinds 1994 leggen wij ook nieuwe tuinen aan in de regio.",
      },
      {
        title: "Van een beurt tot een make-over",
        text: "U kunt bij ons terecht voor een kleine onderhoudsbeurt of een totale achtertuin make-over. Alleen perfectie is genoeg, in beide gevallen.",
        href: "/onderhoud",
        link: "Naar onderhoud",
      },
      {
        title: "Opgeleide mensen",
        text: "Bij ons vindt u alleen opgeleide en gepassioneerde werknemers die het beste willen voor uw tuin. Hovenier Almelo Gert Schorn denkt met u mee.",
        accent: "blauw" as const,
      },
      {
        title: "Snoeien en kappen",
        text: "Wij zijn gespecialiseerd in het snoeien en kappen van bomen en weten hoe een boom beter gaat groeien.",
        href: "/snoeien",
        link: "Naar snoeien",
      },
      {
        title: "Het groencentrum erbij",
        text: "Bij Groencentrum Gert Schorn vindt u planten en bloemen voor binnen en buiten. Onze werknemers adviseren wat bij uw tuin of woning past.",
        href: "/groencentrum",
        link: "Naar het groencentrum",
      },
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
