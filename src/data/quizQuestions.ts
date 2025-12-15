// Kviz pitanja za biciklistički ispit - temeljem Zakona o sigurnosti prometa na cestama (NN 145/24)

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  medimurskaIzreka: string;
  signImage?: string;
}

export const quizQuestions: QuizQuestion[] = [
  // POJMOVI KOJE MORAŠ POZNAVATI
  {
    id: 1,
    question: "Što je kolnik?",
    options: [
      "Prometna površina namijenjena za kretanje pješaka",
      "Dio cestovne površine namijenjen u prvom redu za promet vozila",
      "Izgrađena prometna površina namijenjena za promet bicikala",
      "Uzdužni dio ceste za parkiranje"
    ],
    correctAnswer: 1,
    explanation: "Kolnik je dio cestovne površine namijenjen u prvom redu za promet vozila.",
    medimurskaIzreka: "Kolnik ti je za vožnju, ne za šetnju, kapči?",
    signImage: "road"
  },
  {
    id: 2,
    question: "Što je biciklistička staza?",
    options: [
      "Dio kolnika označen uzdužnom crtom",
      "Površina za parkiranje bicikala",
      "Izgrađena prometna površina namijenjena za promet bicikala, odvojena od kolnika",
      "Pješačka zona s dozvolom za bicikle"
    ],
    correctAnswer: 2,
    explanation: "Biciklistička staza je izgrađena prometna površina namijenjena za promet bicikala koja je odvojena od kolnika i obilježena propisanim prometnim znakom.",
    medimurskaIzreka: "Staza za bicikline - tam ti je najsigurnije!",
    signImage: "bike-path"
  },
  {
    id: 3,
    question: "Što je biciklistička traka?",
    options: [
      "Posebna cesta samo za bicikle",
      "Dio kolnika namijenjen za promet bicikla, označen uzdužnom crtom i prometnim znakom",
      "Parkiralište za bicikle",
      "Pješačka staza s dozvolom za bicikle"
    ],
    correctAnswer: 1,
    explanation: "Biciklistička traka je dio kolnika namijenjen za promet bicikla koja se prostire uzduž kolnika i koja je obilježena uzdužnom crtom na kolniku i propisanim prometnim znakom.",
    medimurskaIzreka: "Traka na kolniku, tam voziš - ne mešaj se z autima!",
    signImage: "bike-lane"
  },
  {
    id: 4,
    question: "Što je zona smirenog prometa?",
    options: [
      "Zona bez ikakvih vozila",
      "Područje gdje je brzina ograničena na 50 km/h",
      "Područje u naselju gdje se vozila ne smiju kretati brzinom većom od brzine hoda pješaka i gdje je dječja igra svugdje dopuštena",
      "Zona rezervirana samo za autobuse"
    ],
    correctAnswer: 2,
    explanation: "Zona smirenog prometa je područje u naselju obilježeno propisanim prometnim znakom, u kojem se vozila ne smiju kretati brzinom većom od brzine hoda pješaka i u kojem je dječja igra svugdje dopuštena.",
    medimurskaIzreka: "V zoni smirenoj - polahko kak po jajcima!",
    signImage: "calm-zone"
  },
  // OSOBNO PRIJEVOZNO SREDSTVO (OPS)
  {
    id: 5,
    question: "Što je osobno prijevozno sredstvo (OPS)?",
    options: [
      "Bicikl s pomoćnim motorom",
      "Motocikl do 50 ccm",
      "Vozilo bez sjedećeg mjesta, čija trajna snaga elektromotora nije jača od 0,6 kW i koje ne može razviti brzinu veću od 25 km/h (npr. romobil)",
      "Električni automobil"
    ],
    correctAnswer: 2,
    explanation: "Osobno prijevozno sredstvo (OPS) je vozilo koje nije razvrstano ni u jednu kategoriju vozila, bez sjedećeg mjesta, čija trajna snaga elektromotora nije jača od 0,6 kW i koje ne može razviti brzinu veću od 25 km/h.",
    medimurskaIzreka: "Romobil ti je OPS - ne zuri se, 25 je max!",
    signImage: "scooter"
  },
  {
    id: 6,
    question: "Koju zaštitnu opremu moraju nositi vozači osobnih prijevoznih sredstava (OPS)?",
    options: [
      "Samo reflektirajući prsluk",
      "Propisanu, homologiranu i uredno pričvršćenu zaštitnu kacigu",
      "Rukavice i štitnike za koljena",
      "Nije potrebna nikakva oprema"
    ],
    correctAnswer: 1,
    explanation: "Vozači osobnih prijevoznih sredstava moraju nositi propisanu, homologiranu i uredno pričvršćenu zaštitnu kacigu za vrijeme vožnje.",
    medimurskaIzreka: "Na romobil bez kacige? Si poludel?",
    signImage: "helmet"
  },
  // OPREMA BICIKLA
  {
    id: 7,
    question: "Koja oprema MORA biti na biciklu za vožnju noću?",
    options: [
      "Samo zvono",
      "Prednje bijelo svjetlo, stražnje crveno svjetlo i reflektori (katadiopteri)",
      "Samo kaciga",
      "Bočna ogledala"
    ],
    correctAnswer: 1,
    explanation: "Za noćnu vožnju obavezna su prednje bijelo svjetlo, stražnje crveno svjetlo i reflektori (katadiopteri).",
    medimurskaIzreka: "Bez svetla noćum - to je glupost kaj nema meje!",
    signImage: "lights"
  },
  {
    id: 8,
    question: "Do koje dobi je kaciga OBAVEZNA za bicikliste?",
    options: [
      "Do 12 godina",
      "Do 14 godina", 
      "Do 16 godina",
      "Do 18 godina"
    ],
    correctAnswer: 2,
    explanation: "Kaciga je obavezna za sve bicikliste mlađe od 16 godina! Nošenje kacige smanjuje rizik od ozljede glave za 85%!",
    medimurskaIzreka: "Kaciga ti je kak prijatel - čuva ti glavu!",
    signImage: "helmet"
  },
  {
    id: 9,
    question: "Što vozač bicikla mora nositi noću i danju u slučaju smanjene vidljivosti?",
    options: [
      "Samo kacigu",
      "Reflektirajući prsluk ili reflektirajuću odjeću ili drugu reflektirajuću oznaku",
      "Samo rukavice",
      "Ništa posebno"
    ],
    correctAnswer: 1,
    explanation: "Vozač bicikla i osobnog prijevoznog sredstva koji sudjeluju u prometu dužni su noću uvijek, a i danju u slučaju smanjene vidljivosti biti označeni reflektirajućim prslukom ili reflektirajućom odjećom ili drugom reflektirajućom oznakom.",
    medimurskaIzreka: "Brez refleksa noćum si kak crni mačak - nevidljiv!",
    signImage: "vest"
  },
  // PRAVILA VOŽNJE
  {
    id: 10,
    question: "Kojom stranom ceste moraš voziti bicikl?",
    options: [
      "Lijevom stranom",
      "Sredinom ceste",
      "Desnom stranom, što bliže desnom rubu kolnika",
      "Bilo kojom stranom"
    ],
    correctAnswer: 2,
    explanation: "Biciklom se uvijek vozi desnom stranom kolnika, što bliže desnom rubu.",
    medimurskaIzreka: "Desna stran je tvoja stran, ne pozabi!",
    signImage: "right-side"
  },
  {
    id: 11,
    question: "Što moraš napraviti prije skretanja?",
    options: [
      "Samo pogledati unatrag",
      "Signalizirati rukom i pogledati preko ramena pa potom najava uključivanja odručenjem ruke",
      "Samo se zaustaviti",
      "Ništa posebno"
    ],
    correctAnswer: 1,
    explanation: "Prije obavljanja neke radnje biciklom u prometu moraš provjeriti uvjete preko ramena pa potom najaviti uključivanje odručenjem ruke.",
    medimurskaIzreka: "Ruka van - i svi znaju kam ideš, kapči?",
    signImage: "hand-signal"
  },
  {
    id: 12,
    question: "Smiješ li koristiti mobitel dok voziš bicikl?",
    options: [
      "Da, ako voziš polako",
      "Da, ali samo za poruke",
      "NE, zabranjeno je koristiti mobitel na način koji bi umanjio mogućnost reagiranja",
      "Da, ako imaš slušalice"
    ],
    correctAnswer: 2,
    explanation: "Vozač vozila za vrijeme vožnje ne smije upotrebljavati mobitel niti druge uređaje na način koji bi umanjio mogućnost reagiranja i sigurnog upravljanja vozilom.",
    medimurskaIzreka: "Telefon v žep dok voziš, jel kapči?",
    signImage: "no-phone"
  },
  {
    id: 13,
    question: "Smije li vozač bicikla koristiti slušalice na oba uha tijekom vožnje?",
    options: [
      "Da, ako sluša glazbu",
      "Da, ako je glasnoća niska",
      "NE, zabranjeno je koristiti slušalice na ili u oba uha",
      "Da, ako su bežične"
    ],
    correctAnswer: 2,
    explanation: "Vozač bicikla ne smije upravljati vozilom koristeći slušalice na ili u oba uha čime bi umanjio mogućnost reagiranja i sigurnog upravljanja vozilom. Kazna iznosi 30 eura.",
    medimurskaIzreka: "Slušalice van z vušesa, moraš čuti promet!",
    signImage: "no-headphones"
  },
  {
    id: 14,
    question: "Koja je minimalna starosna dob za samostalno upravljanje biciklom u prometu?",
    options: [
      "8 godina",
      "10 godina",
      "12 godina",
      "14 godina"
    ],
    correctAnswer: 2,
    explanation: "Minimalna starosna dob potrebna za samostalno upravljanje biciklom i osobnim prijevoznim sredstvom u prometu je 12 godina.",
    medimurskaIzreka: "Dok nemaš 12 let, starši te moraju paziti!",
    signImage: "age"
  },
  // PROMETNI ZNAKOVI
  {
    id: 15,
    question: "Što označava prometni znak oblika trokuta s crvenim rubom?",
    options: [
      "Znak obavijesti",
      "Znak opasnosti - upozorava na opasnost",
      "Znak zabrane",
      "Znak naredbe"
    ],
    correctAnswer: 1,
    explanation: "Trokut s crvenim rubom i vrhom prema gore označava znak opasnosti - upozorava te na nešto opasno na cesti!",
    medimurskaIzreka: "Trokut z crlenim rubom - pazi, nekaj je opasno!",
    signImage: "warning"
  },
  {
    id: 16,
    question: "Što znači okrugli prometni znak s crvenim rubom?",
    options: [
      "Znak opasnosti",
      "Znak obavijesti",
      "Znak izričitih naredbi - zabranjuje ili naređuje nešto",
      "Znak smjera"
    ],
    correctAnswer: 2,
    explanation: "Okrugli znakovi s crvenim rubom su znakovi izričitih naredbi - zabranjuju ili naređuju nešto!",
    medimurskaIzreka: "Krug z crlenim - to ti nekaj naređuje ili brani!",
    signImage: "prohibition"
  },
  {
    id: 17,
    question: "Što znači pravokutni ili kvadratni prometni znak?",
    options: [
      "Znak opasnosti",
      "Znak zabrane",
      "Znak obavijesti - daje korisne informacije",
      "Znak naredbe"
    ],
    correctAnswer: 2,
    explanation: "Kvadrat ili pravokutnik kao oblik prometnog znaka predstavlja znak obavijesti - daje ti korisne informacije.",
    medimurskaIzreka: "Pravokutnik ti daje informacije - čitaj ga!",
    signImage: "info"
  },
  // RASKRIŽJE
  {
    id: 18,
    question: "Tko ima prednost na raskrižju bez prometnih znakova?",
    options: [
      "Vozilo koje ide brže",
      "Vozilo s lijeve strane",
      "Vozilo s desne strane",
      "Bicikl uvijek"
    ],
    correctAnswer: 2,
    explanation: "Na raskrižju bez znakova vrijedi pravilo DESNE STRANE - prednost ima vozilo koje dolazi s desne strane.",
    medimurskaIzreka: "Ne budi tokmak, desni ima prednost!",
    signImage: "intersection"
  },
  {
    id: 19,
    question: "Kako se PRAVILNO vozi više biciklista zajedno?",
    options: [
      "Jedan pored drugoga",
      "Jedan iza drugoga u koloni",
      "U troje usporedno",
      "Kako žele"
    ],
    correctAnswer: 1,
    explanation: "Biciklisti moraju voziti JEDAN IZA DRUGOGA, nikada usporedno!",
    medimurskaIzreka: "V koloni jeden za drugim - ne kak guske v redu!",
    signImage: "single-file"
  },
  {
    id: 20,
    question: "Smiješ li voziti bicikl držeći se za drugo vozilo?",
    options: [
      "Da, ako je to bicikl",
      "Da, ako ideš uzbrdo",
      "NE, nikada - strogo je zabranjeno",
      "Da, ako vozilo vozi polako"
    ],
    correctAnswer: 2,
    explanation: "Držanje za drugo vozilo u pokretu je STROGO ZABRANJENO - vrlo je opasno!",
    medimurskaIzreka: "Kaj praviš bez ruk na rulju? Si normalen?",
    signImage: "no-holding"
  },
  // ZABRANE
  {
    id: 21,
    question: "Biciklom ne smiješ sudjelovati u prometu na:",
    options: [
      "Biciklističkoj stazi",
      "Prometnoj traci u naselju",
      "Autocestama, brzim cestama i cestama namijenjenim isključivo za promet motornih vozila",
      "Kolniku u seoskom području"
    ],
    correctAnswer: 2,
    explanation: "Biciklom ne smiješ sudjelovati u prometu na autocestama, brzim cestama i cestama namijenjenim isključivo za promet motornih vozila.",
    medimurskaIzreka: "Na autocesti z biciklinom? Si poludel?",
    signImage: "no-bikes"
  },
  {
    id: 22,
    question: "Što od navedenog je zabranjeno tijekom vožnje bicikla?",
    options: [
      "Voziti desnom stranom kolnika",
      "Signalizirati rukom",
      "Krivudanje po cesti i slalom vožnja između vozila",
      "Koristiti biciklističku stazu"
    ],
    correctAnswer: 2,
    explanation: "Vozeći bicikl u prometu zabranjeno je krivudanje po cesti i slalom vožnja između vozila.",
    medimurskaIzreka: "Ne vuriš se med autima kak zmija!",
    signImage: "no-weaving"
  },
  // NEISPRAVAN BICIKL
  {
    id: 23,
    question: "Što radiš ako ti se bicikl pokvari na cesti?",
    options: [
      "Nastaviš voziti",
      "Ostaviš ga na cesti",
      "Možeš ga gurati po cesti krećući se kao pješak",
      "Zoveš policiju"
    ],
    correctAnswer: 2,
    explanation: "Neispravan bicikl u prometu na cesti možeš gurati po cesti krećući se kao pješak ili ga možeš prevesti na drugom vozilu.",
    medimurskaIzreka: "Ak se bicklin pokvaril - guraj ga kak pešak!",
    signImage: "walking"
  },
  // PJEŠAČKI PRIJELAZ
  {
    id: 24,
    question: "Kako prelazite pješački prijelaz s biciklom?",
    options: [
      "Vozite brzo preko",
      "Siđete s bicikla i hodate gurajući bicikl",
      "Vozite polako",
      "Svejedno je"
    ],
    correctAnswer: 1,
    explanation: "Pješački prijelaz prelazite hodajući i gurajući bicikl. Nogostup ćeš prijeći hodajući i gurajući bicikl.",
    medimurskaIzreka: "Priko zebre si pešak - sjahaj z biciklina!",
    signImage: "crosswalk"
  },
  // TERET
  {
    id: 25,
    question: "Koliko smije biti širok teret na nosaču bicikla?",
    options: [
      "Koliko god želiš",
      "Ne širi od 50 cm sa svake strane bicikla",
      "Ne širi od 1 metra",
      "Samo 20 cm"
    ],
    correctAnswer: 1,
    explanation: "Na svom biciklu prevoziš teret smješten na nosaču tereta. Teret ne smije biti širi od 50 cm sa svake strane bicikla.",
    medimurskaIzreka: "Ne tovaruj kak magarec - 50 cm je max!",
    signImage: "cargo"
  },
  // PRIKOLICA
  {
    id: 26,
    question: "Koliko smije biti široka prikolica koju vučeš biciklom?",
    options: [
      "100 cm",
      "80 cm",
      "60 cm",
      "Nema ograničenja"
    ],
    correctAnswer: 1,
    explanation: "U prometu na cesti, prikolica koju vučeš svojim biciklom ne smije biti šira od 80 cm.",
    medimurskaIzreka: "Prikolica max 80 cm široka - to je pravilo!",
    signImage: "trailer"
  },
  // ŽELJEZNICA
  {
    id: 27,
    question: "Kada moraš zaustaviti bicikl prije prijelaza ceste preko željezničke pruge?",
    options: [
      "Samo ako vidiš vlak",
      "Nikada",
      "Ako se na svjetlosnom znaku pale crvena svjetla, ako se branici spuštaju ili ako je prijelaz nezaštićen",
      "Samo ako čuješ vlak"
    ],
    correctAnswer: 2,
    explanation: "Prije prijelaza ceste preko željezničke pruge obvezno moraš zaustaviti bicikl ako se na svjetlosnom prometnom znaku naizmjenično pale crvena svjetla, ako su se branici ili polubranici počeli spuštati, ili ako je prijelaz ceste preko željezničke pruge nezaštićen.",
    medimurskaIzreka: "Vlak ne čeka - stani dok je crveno!",
    signImage: "railway"
  },
  // KOČENJE
  {
    id: 28,
    question: "O čemu ovisi dužina puta kočenja tvog bicikla?",
    options: [
      "Samo o boji bicikla",
      "O stanju kolnika, brzini vožnje i stanju guma",
      "Samo o vremenu",
      "Samo o godišnjem dobu"
    ],
    correctAnswer: 1,
    explanation: "Dužina puta kočenja tvog bicikla ovisi o stanju kolnika, brzini kojom voziš i stanju guma na tvom biciklu.",
    medimurskaIzreka: "Brže voziš - duže kočiš, tak je to!",
    signImage: "braking"
  },
  // PJEŠACI NA STAZI
  {
    id: 29,
    question: "Pješaci hodaju po biciklističkoj stazi kojom voziš. Kako ćeš postupiti?",
    options: [
      "Vikati na njih",
      "Voziti između njih",
      "Lagano zvrcnuti zvoncem i usporiti, po potrebi stati i propustiti pješaka",
      "Nastaviti voziti istom brzinom"
    ],
    correctAnswer: 2,
    explanation: "Lagano ćeš zvrcnuti zvoncem pješaku kako bi ga upozorio na svoju prisutnost i usporiti, po potrebi stati i propustiti pješaka proći.",
    medimurskaIzreka: "Zvonček lagano - pešaki su sveti!",
    signImage: "bell"
  },
  // SIGURNOST
  {
    id: 30,
    question: "Što je najvažnije za sigurnu vožnju biciklom?",
    options: [
      "Imati najskuplji bicikl",
      "Osigurati ispravnost bicikla, voziti oprezno i paziti na prometne znakove",
      "Voziti što brže",
      "Imati puno prijatelja"
    ],
    correctAnswer: 1,
    explanation: "Za sigurnu vožnju cestom moraš osigurati ispravnost svoga bicikla, uvijek voziti oprezno i pažljivo, te paziti na prometne znakove.",
    medimurskaIzreka: "Pameten biciklist si, ak paziš na sebe i druge!",
    signImage: "safety"
  }
];

export const getRandomQuestions = (count: number = 5): QuizQuestion[] => {
  const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};