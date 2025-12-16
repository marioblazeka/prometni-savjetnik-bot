// Kviz pitanja za biciklistički ispit - temeljem Zakona o sigurnosti prometa na cestama (NN 145/24)
// i DOPUNA PROGRAMA OSPOSOBLJAVANJA ZA UPRAVLJANJE BICIKLOM I OBJEDINJENA PITANJA I ODGOVORI

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
  // I. POJMOVI KOJE MORAŠ POZNAVATI
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
    question: "Što je prometna traka?",
    options: [
      "Posebna cesta samo za bicikle",
      "Obilježeni ili neobilježeni uzdužni dio kolnika čija je širina dovoljna za nesmetan promet jednog reda motornih vozila",
      "Površina za parkiranje vozila",
      "Dio nogostupa za pješake"
    ],
    correctAnswer: 1,
    explanation: "Prometna traka je obilježeni ili neobilježeni uzdužni dio kolnika čija je širina dovoljna za nesmetan promet jednog reda motornih vozila u jednom smjeru.",
    medimurskaIzreka: "Traka ti je za vožnju - drži se svoje!",
    signImage: "road"
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
    id: 5,
    question: "Što je nogostup?",
    options: [
      "Dio kolnika za parkiranje",
      "Prometna traka za bicikle",
      "Posebno uređena prometna površina namijenjena za kretanje pješaka, koja nije u razini s kolnikom ceste ili je od kolnika odvojena na drugi način",
      "Zona smirenog prometa"
    ],
    correctAnswer: 2,
    explanation: "Nogostup je posebno uređena prometna površina namijenjena za kretanje pješaka, koja nije u razini s kolnikom ceste ili je od kolnika odvojena na drugi način.",
    medimurskaIzreka: "Nogostup je za pešake, ne za bicikline!",
    signImage: "pedestrian"
  },
  {
    id: 6,
    question: "Što je obilježeni pješački prijelaz?",
    options: [
      "Zona smirenog prometa",
      "Dio kolničke površine namijenjen za prelaženje pješaka preko kolnika, obilježen oznakama na kolniku i prometnim znakom",
      "Biciklistička staza",
      "Parkiralište za vozila"
    ],
    correctAnswer: 1,
    explanation: "Pješački prijelaz je dio kolničke površine namijenjen za prelaženje pješaka preko kolnika, obilježen oznakama na kolniku i prometnim znakom obavijesti.",
    medimurskaIzreka: "Priko zebre si pešak - sjahaj z biciklina!",
    signImage: "crosswalk"
  },
  {
    id: 7,
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
  {
    id: 8,
    question: "Što je vozilo?",
    options: [
      "Svako prijevozno sredstvo namijenjeno za kretanje po cesti, osim dječjih prijevoznih sredstava i prijevoznih sredstava za osobe s invaliditetom ako se kreću brzinom većom od brzine hoda",
      "Samo motorna vozila",
      "Samo bicikli i motocikli",
      "Samo automobili"
    ],
    correctAnswer: 0,
    explanation: "Vozilo je svako prijevozno sredstvo namijenjeno za kretanje po cesti, osim dječjih prijevoznih sredstava i prijevoznih sredstava za osobe s invaliditetom ako se pri tom ne kreću brzinom većom od brzine čovječjeg hoda.",
    medimurskaIzreka: "Bicikl je vozilo, tak i ti si vozač!",
    signImage: "vehicle"
  },
  {
    id: 9,
    question: "Što je pješačka zona?",
    options: [
      "Područje u naselju koje je namijenjeno kretanju pješaka i koje je obilježeno propisanim prometnim znakom",
      "Biciklistička staza",
      "Parkiralište za vozila",
      "Zona brzog prometa"
    ],
    correctAnswer: 0,
    explanation: "Pješačka zona je područje u naselju koje je namijenjeno kretanju pješaka i koje je obilježeno propisanim prometnim znakom. U pješačkoj zoni vozila se mogu kretati s posebnom dozvolom brzinom hoda pješaka.",
    medimurskaIzreka: "V pješačkoj zoni - sjahaj i guraj bicikl!",
    signImage: "pedestrian-zone"
  },
  // OSOBNO PRIJEVOZNO SREDSTVO (OPS)
  {
    id: 10,
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
    id: 11,
    question: "Gdje se vozači osobnih prijevoznih sredstava (OPS) prvenstveno moraju kretati?",
    options: [
      "Po kolniku, što bliže desnom rubu kolnika",
      "Biciklističkom stazom ili biciklističkom trakom u smjeru kretanja",
      "Po nogostupu",
      "Po sredini ceste"
    ],
    correctAnswer: 1,
    explanation: "Vozači OPS-a se prvenstveno moraju kretati biciklističkom stazom ili biciklističkom trakom u smjeru kretanja.",
    medimurskaIzreka: "Z romobilom po stazi za bicikline - tak je sigurno!",
    signImage: "bike-path"
  },
  {
    id: 12,
    question: "U kojim uvjetima se OPS smije kretati po površinama namijenjenim za kretanje pješaka?",
    options: [
      "Samo ako ne postoji biciklistička staza ili traka i ako se vodi računa o sigurnosti drugih sudionika",
      "Dozvoljeno je uvijek, jer je brzina OPS-a mala",
      "Dozvoljeno je samo ako je vozač OPS-a mlađi od 16 godina",
      "Nikada nije dozvoljeno"
    ],
    correctAnswer: 0,
    explanation: "OPS se smije kretati po površinama namijenjenim za kretanje pješaka samo ako ne postoji biciklistička staza ili biciklistička traka i ako se vodi računa o sigurnosti drugih sudionika u prometu.",
    medimurskaIzreka: "Ak nema staze, moraš paziti na pešake!",
    signImage: "pedestrian"
  },
  {
    id: 13,
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
  {
    id: 14,
    question: "Koja je od navedenih radnji zabranjena vozaču bicikla ili OPS-a?",
    options: [
      "Korištenje mobitela ako se upotrebljava naprava koja omogućava korištenje bez upotrebe ruke",
      "Upravljanje vozilom koristeći slušalice na ili u oba uha",
      "Nošenje reflektirajuće odjeće noću",
      "Korištenje biciklističke staze"
    ],
    correctAnswer: 1,
    explanation: "Upravljanje vozilom koristeći slušalice na ili u oba uha je zabranjeno jer umanjuje mogućnost reagiranja i sigurnog upravljanja vozilom.",
    medimurskaIzreka: "Slušalice van z vušesa, moraš čuti promet!",
    signImage: "no-headphones"
  },
  {
    id: 15,
    question: "Koja je novčana kazna za korištenje slušalica na oba uha tijekom vožnje bicikla ili OPS-a?",
    options: [
      "30,00 eura",
      "60,00 eura",
      "130,00 eura",
      "200,00 eura"
    ],
    correctAnswer: 0,
    explanation: "Novčana kazna za korištenje slušalica na ili u oba uha tijekom vožnje bicikla ili OPS-a iznosi 30,00 eura.",
    medimurskaIzreka: "30 ojra za slušalice - bolje ih skini!",
    signImage: "fine"
  },
  // II. SAMOSTALNO PJEŠICE U PROMETU
  {
    id: 16,
    question: "Za svoje kretanje kao pješak obvezno ćeš koristiti:",
    options: [
      "Kolnik",
      "Nogostup",
      "Biciklističku stazu",
      "Sredinu ceste"
    ],
    correctAnswer: 1,
    explanation: "Za kretanje kao pješak obvezno koristiš nogostup.",
    medimurskaIzreka: "Pešak ideš po nogostupu - to je tvoja strana!",
    signImage: "pedestrian"
  },
  {
    id: 17,
    question: "Ako se kao pješak krećeš cestom izvan naselja, kretat ćeš se:",
    options: [
      "Uz lijevi rub kolnika",
      "Uz desni rub kolnika",
      "Po sredini ceste",
      "Svejedno je"
    ],
    correctAnswer: 0,
    explanation: "Ako se kao pješak krećeš cestom izvan naselja, kretat ćeš se uz lijevi rub kolnika kako bi vidio vozila koja ti dolaze ususret.",
    medimurskaIzreka: "Izvan sela ideš levo - vidiš kaj ti dolazi!",
    signImage: "walking"
  },
  {
    id: 18,
    question: "Kolnik ćeš uvijek prelaziti:",
    options: [
      "Dijagonalno",
      "Najkraćim putem",
      "Trčeći",
      "Bilo kako"
    ],
    correctAnswer: 1,
    explanation: "Kolnik ćeš uvijek prelaziti najkraćim putem.",
    medimurskaIzreka: "Priko kolnika najkraćim putem - ne vuci se!",
    signImage: "crosswalk"
  },
  {
    id: 19,
    question: "Za prijelaz preko kolnika obvezno ćeš koristiti:",
    options: [
      "Bilo koje mjesto",
      "Mjesto gdje je manje prometa",
      "Obilježeni pješački prijelaz",
      "Mjesto blizu semafora"
    ],
    correctAnswer: 2,
    explanation: "Za prijelaz preko kolnika obvezno koristiš obilježeni pješački prijelaz.",
    medimurskaIzreka: "Zebra ti je prijatelj - tam prelaziš!",
    signImage: "crosswalk"
  },
  {
    id: 20,
    question: "Neispravan bicikl u prometu na cesti:",
    options: [
      "Možeš nastaviti voziti",
      "Možeš gurati po cesti krećući se kao pješak ili prevesti na drugom vozilu",
      "Moraš ostaviti na cesti",
      "Moraš zvati policiju"
    ],
    correctAnswer: 1,
    explanation: "Neispravan bicikl u prometu na cesti možeš gurati po cesti krećući se kao pješak ili ga možeš prevesti na drugom vozilu.",
    medimurskaIzreka: "Ak se bicklin pokvaril - guraj ga kak pešak!",
    signImage: "walking"
  },
  // III. UPOZNAJ SVOJE VOZILO
  {
    id: 21,
    question: "Na svom biciklu prevoziš teret smješten na nosaču tereta. Teret ne smije biti:",
    options: [
      "Širi od 30 cm sa svake strane bicikla",
      "Širi od 50 cm sa svake strane bicikla",
      "Širi od 1 metra",
      "Nema ograničenja"
    ],
    correctAnswer: 1,
    explanation: "Na svom biciklu prevoziš teret smješten na nosaču tereta. Teret ne smije biti širi od 50 cm sa svake strane bicikla.",
    medimurskaIzreka: "Ne tovaruj kak magarec - 50 cm je max!",
    signImage: "cargo"
  },
  {
    id: 22,
    question: "U prometu na cesti smiješ vući prikolicu:",
    options: [
      "Na jednom kotaču",
      "Na dva kotača",
      "Na tri kotača",
      "Nikakvu prikolicu"
    ],
    correctAnswer: 1,
    explanation: "U prometu na cesti smiješ vući prikolicu na dva kotača.",
    medimurskaIzreka: "Prikolica mora biti na dva kotača!",
    signImage: "trailer"
  },
  {
    id: 23,
    question: "U prometu na cesti, prikolica koju vučeš svojim biciklom ne smije biti šira od:",
    options: [
      "60 cm",
      "80 cm",
      "100 cm",
      "Nema ograničenja"
    ],
    correctAnswer: 1,
    explanation: "U prometu na cesti, prikolica koju vučeš svojim biciklom ne smije biti šira od 80 cm.",
    medimurskaIzreka: "Prikolica max 80 cm široka - to je pravilo!",
    signImage: "trailer"
  },
  {
    id: 24,
    question: "Dužina puta kočenja tvog bicikla ovisi o:",
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
  {
    id: 25,
    question: "Na biciklu uvijek mora biti ispravna:",
    options: [
      "Samo prednja kočnica",
      "Samo stražnja kočnica",
      "Kočnica prednjeg i zadnjeg kotača",
      "Nije obavezno imati kočnice"
    ],
    correctAnswer: 2,
    explanation: "Na biciklu uvijek mora biti ispravna kočnica prednjeg i zadnjeg kotača.",
    medimurskaIzreka: "Bicikl bez kočnic je kak auto bez volana!",
    signImage: "braking"
  },
  {
    id: 26,
    question: "Dovoljan razmak između tvog bicikla i vozila koje se kreće ispred tebe ovisi o:",
    options: [
      "Brzini kojom voziš i stanju kolnika",
      "Samo o boji vozila",
      "Samo o vremenu dana",
      "Nije bitan razmak"
    ],
    correctAnswer: 0,
    explanation: "Dovoljan razmak između tvog bicikla i vozila ispred ovisi o brzini kojom voziš i stanju kolnika.",
    medimurskaIzreka: "Drži razmak - ne vozi drugome v rit!",
    signImage: "distance"
  },
  {
    id: 27,
    question: "Razmak sa strane bitan je prilikom:",
    options: [
      "Samo parkiranja",
      "Mimoilaženja, pretjecanja i obilaženja",
      "Samo kočenja",
      "Nije bitan"
    ],
    correctAnswer: 1,
    explanation: "Razmak sa strane bitan je prilikom mimoilaženja, pretjecanja i obilaženja.",
    medimurskaIzreka: "Bočni razmak ti čuva kožu!",
    signImage: "distance"
  },
  {
    id: 28,
    question: "Gume na tvom biciklu moraju biti ispravno napumpane i bez oštećenja radi:",
    options: [
      "Samo estetike",
      "Udobnosti i sigurnosti vožnje",
      "Samo brzine",
      "Nije važno"
    ],
    correctAnswer: 1,
    explanation: "Gume na tvom biciklu moraju biti ispravno napumpane i bez oštećenja radi udobnosti i sigurnosti vožnje.",
    medimurskaIzreka: "Gume moraju biti v redu - to je osnova!",
    signImage: "tire"
  },
  {
    id: 29,
    question: "Bijelo svjetlo mora se nalaziti:",
    options: [
      "S prednje strane bicikla",
      "Sa stražnje strane bicikla",
      "Sa strane bicikla",
      "Na kacigi"
    ],
    correctAnswer: 0,
    explanation: "Bijelo svjetlo mora se nalaziti s prednje strane bicikla.",
    medimurskaIzreka: "Belo svetlo napred - da vidiš kam ideš!",
    signImage: "lights"
  },
  {
    id: 30,
    question: "Crveno svjetlo mora se nalaziti:",
    options: [
      "S prednje strane bicikla",
      "Sa stražnje strane bicikla",
      "Sa strane bicikla",
      "Na kacigi"
    ],
    correctAnswer: 1,
    explanation: "Crveno svjetlo mora se nalaziti sa stražnje strane bicikla.",
    medimurskaIzreka: "Crveno vzadi - da te vide!",
    signImage: "lights"
  },
  {
    id: 31,
    question: "Crveni katadiopter mora se nalaziti:",
    options: [
      "S prednje strane bicikla",
      "Sa strane bicikla",
      "Na stražnjoj strani bicikla",
      "Na pedalama"
    ],
    correctAnswer: 2,
    explanation: "Crveni katadiopter mora se nalaziti na stražnjoj strani bicikla.",
    medimurskaIzreka: "Crveni reflektor vzadi - to je zakon!",
    signImage: "reflector"
  },
  {
    id: 32,
    question: "Na kotačima bicikla, vidljivi s bočnih strana, moraju se nalaziti:",
    options: [
      "Crveni katadiopteri",
      "Plavi katadiopteri",
      "Bijeli ili žuti katadiopteri",
      "Nije obavezno"
    ],
    correctAnswer: 2,
    explanation: "Na kotačima bicikla, vidljivi s bočnih strana, moraju se nalaziti bijeli ili žuti katadiopteri.",
    medimurskaIzreka: "Refleksi na kotačima - da te vide z boka!",
    signImage: "reflector"
  },
  {
    id: 33,
    question: "Ispravnost bicikla moraš pregledati:",
    options: [
      "Jednom godišnje",
      "Jednom mjesečno",
      "Jednom tjedno",
      "Prije svake vožnje biciklom"
    ],
    correctAnswer: 3,
    explanation: "Ispravnost bicikla moraš pregledati prije svake vožnje biciklom.",
    medimurskaIzreka: "Predi nego voziš - provjeri bicikl!",
    signImage: "check"
  },
  // IV. POBRINI SE ZA SVOJU SIGURNOST
  {
    id: 34,
    question: "Kada u prometu na cesti upravljaš biciklom, obavezno moraš:",
    options: [
      "Imati najskuplji bicikl",
      "Koristiti kacigu za bicikliste (obavezno za mlađe od 16 godina)",
      "Voziti što brže",
      "Slušati glazbu"
    ],
    correctAnswer: 1,
    explanation: "Kada u prometu upravljaš biciklom, obavezno moraš koristiti kacigu za bicikliste (obvezno za mlađe od 16 godina).",
    medimurskaIzreka: "Kaciga ti je kak prijatel - čuva ti glavu!",
    signImage: "helmet"
  },
  {
    id: 35,
    question: "Za osobnu zaštitu za vrijeme vožnje biciklom, koristit ću:",
    options: [
      "Samo sunčane naočale",
      "Rukavice, štitnike za laktove i koljena, kacigu",
      "Samo prsluk",
      "Ništa posebno"
    ],
    correctAnswer: 1,
    explanation: "Za osobnu zaštitu koristit ćeš rukavice, štitnike za laktove i koljena, te kacigu.",
    medimurskaIzreka: "Zaštiti se - koža se teško zaceli!",
    signImage: "safety"
  },
  {
    id: 36,
    question: "Umoran si nakon napornog treninga. Kako ćeš postupiti?",
    options: [
      "Vozit ćeš brže da brže dođeš kući",
      "Neću sjesti na bicikl jer to može biti opasno, odgurat ću bicikl kući",
      "Vozit ću normalno",
      "Slušat ću glazbu da se razbudim"
    ],
    correctAnswer: 1,
    explanation: "Kada si umoran, neću sjesti na bicikl jer to može biti opasno. Odgurat ću bicikl kući.",
    medimurskaIzreka: "Umoren si? Guraj bicikl, ne rizikiraj!",
    signImage: "tired"
  },
  {
    id: 37,
    question: "Na kolniku kojim voziš je šljunak i pijesak. Kako ćeš postupiti?",
    options: [
      "Vozit ću brže",
      "Vozit ću oprezno i izbjegavat ću naglo kočenje da ne izgubim ravnotežu",
      "Nastavit ću normalno",
      "Kočit ću naglo"
    ],
    correctAnswer: 1,
    explanation: "Na šljunku i pijesku vozi oprezno i izbjegavaj naglo kočenje da ne izgubiš ravnotežu.",
    medimurskaIzreka: "Na šljunku polahko - inače buš na ritima!",
    signImage: "slippery"
  },
  {
    id: 38,
    question: "Za sigurnu vožnju cestom moraš:",
    options: [
      "Imati najbrži bicikl",
      "Osigurati ispravnost bicikla, voziti oprezno i paziti na prometne znakove",
      "Voziti što brže",
      "Slušati glazbu tijekom vožnje"
    ],
    correctAnswer: 1,
    explanation: "Za sigurnu vožnju cestom moraš osigurati ispravnost svoga bicikla, uvijek voziti oprezno i pažljivo, te paziti na prometne znakove.",
    medimurskaIzreka: "Pameten biciklist si, ak paziš na sebe i druge!",
    signImage: "safety"
  },
  // V. PROMETNI ZNAKOVI
  {
    id: 39,
    question: "Trokut kao oblik prometnog znaka predstavlja:",
    options: [
      "Znak obavijesti",
      "Opasnost za vozila - znak opasnosti",
      "Znak zabrane",
      "Znak naredbe"
    ],
    correctAnswer: 1,
    explanation: "Trokut kao oblik prometnog znaka predstavlja opasnost - upozorava te na nešto opasno na cesti!",
    medimurskaIzreka: "Trokut z crlenim rubom - pazi, nekaj je opasno!",
    signImage: "warning"
  },
  {
    id: 40,
    question: "Krug kao oblik prometnog znaka predstavlja:",
    options: [
      "Znak opasnosti",
      "Znak obavijesti",
      "Zabranu ili obvezu za kretanje vozila",
      "Znak smjera"
    ],
    correctAnswer: 2,
    explanation: "Krug kao oblik prometnog znaka predstavlja zabranu kretanja vozila ili obvezu za kretanje vozila.",
    medimurskaIzreka: "Krug z crlenim - to ti nekaj naređuje ili brani!",
    signImage: "prohibition"
  },
  {
    id: 41,
    question: "Kvadrat ili pravokutnik kao oblik prometnog znaka predstavlja:",
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
  {
    id: 42,
    question: "Kako ćeš postupiti nailaskom na prometni znak 'Zona smirenog prometa'?",
    options: [
      "Nastavit ću vožnju istom brzinom",
      "Nastavit ću vožnju brzinom hoda pješaka i posebnu pozornost obratit ću na djecu i pješake",
      "Zabit ću se u promet",
      "Zaobiđi ću zonu"
    ],
    correctAnswer: 1,
    explanation: "Nailaskom na znak 'Zona smirenog prometa' nastavit ćeš vožnju brzinom hoda pješaka i posebnu pozornost obratit ćeš na djecu i pješake.",
    medimurskaIzreka: "V zoni smirenoj voziš kak da hodiš!",
    signImage: "calm-zone"
  },
  // VI. BICIKLOM U PROMETU NA CESTI
  {
    id: 43,
    question: "Biciklom ne smiješ sudjelovati u prometu na:",
    options: [
      "Biciklističkoj stazi",
      "Autocestama, brzim cestama i cestama namijenjenim isključivo za promet motornih vozila",
      "Prometnoj traci u naselju",
      "Kolniku u seoskom području"
    ],
    correctAnswer: 1,
    explanation: "Biciklom ne smiješ sudjelovati u prometu na autocestama, brzim cestama i cestama namijenjenim isključivo za promet motornih vozila.",
    medimurskaIzreka: "Na autocesti z biciklinom? Si poludel?",
    signImage: "no-bikes"
  },
  {
    id: 44,
    question: "Za vožnju biciklom možeš koristiti:",
    options: [
      "Samo biciklističku stazu",
      "Kolnik, prometnu traku, biciklističku traku i biciklističku stazu",
      "Samo nogostup",
      "Samo pješačku zonu"
    ],
    correctAnswer: 1,
    explanation: "Za vožnju biciklom možeš koristiti kolnik, prometnu traku, biciklističku traku i biciklističku stazu.",
    medimurskaIzreka: "Bicikl ima svoje mjesto - koristi ga pametno!",
    signImage: "bike-path"
  },
  {
    id: 45,
    question: "Za vrijeme vožnje biciklom ne smiješ:",
    options: [
      "Voziti desnom stranom",
      "Skidati obje ruke s upravljača, pridržavati se za drugo vozilo, ugrožavati druge sudionike u prometu",
      "Signalizirati rukom",
      "Koristiti biciklističku stazu"
    ],
    correctAnswer: 1,
    explanation: "Za vrijeme vožnje biciklom ne smiješ skidati obje ruke s upravljača, pridržavati se za drugo vozilo ili ugrožavati druge sudionike u prometu.",
    medimurskaIzreka: "Ruke na upravljač, ne drži se za auto!",
    signImage: "no-holding"
  },
  {
    id: 46,
    question: "Biciklističke staze ili trake namijenjene su za kretanje:",
    options: [
      "Pješaka",
      "Motornih vozila",
      "Bicikala",
      "Svih vozila"
    ],
    correctAnswer: 2,
    explanation: "Biciklističke staze ili trake namijenjene su za kretanje bicikala.",
    medimurskaIzreka: "Biciklistička staza je za bicikline - logično!",
    signImage: "bike-path"
  },
  {
    id: 47,
    question: "Na biciklističkoj stazi ili traci namijenjenoj za dvosmjerni promet bicikla, svojim biciklom vozit ćeš:",
    options: [
      "Desnom stranom u smjeru kretanja",
      "Lijevom stranom",
      "Sredinom",
      "Bilo kojom stranom"
    ],
    correctAnswer: 0,
    explanation: "Na biciklističkoj stazi ili traci namijenjenoj za dvosmjerni promet bicikla, vozit ćeš desnom stranom u smjeru kretanja.",
    medimurskaIzreka: "Desna stran je tvoja stran, ne pozabi!",
    signImage: "right-side"
  },
  {
    id: 48,
    question: "Prije obavljanja neke radnje biciklom u prometu moraš provjeriti uvjete da bi se:",
    options: [
      "Vozio brže",
      "Radnja izvela na siguran način i bez ometanja drugih",
      "Impresionirao druge",
      "Nije potrebno provjeravati"
    ],
    correctAnswer: 1,
    explanation: "Prije obavljanja neke radnje biciklom u prometu moraš provjeriti uvjete da bi se radnja izvela na siguran način i bez ometanja drugih.",
    medimurskaIzreka: "Predi nego nekaj napraiš - provjeri!",
    signImage: "check"
  },
  {
    id: 49,
    question: "Nogostup ćeš prijeći:",
    options: [
      "Vozeći brzo",
      "Hodajući i gurajući bicikl",
      "Vozeći polako",
      "Svejedno je"
    ],
    correctAnswer: 1,
    explanation: "Nogostup ćeš prijeći hodajući i gurajući bicikl.",
    medimurskaIzreka: "Priko nogostupa si pešak - sjahaj!",
    signImage: "walking"
  },
  {
    id: 50,
    question: "Koji je redoslijed radnji prije uključivanja u promet?",
    options: [
      "Samo pogledati naprijed",
      "Samo signalizirati rukom",
      "Provjera uvjeta preko ramena pa potom najava uključivanja odručenjem ruke",
      "Samo krenuti"
    ],
    correctAnswer: 2,
    explanation: "Redoslijed radnji prije uključivanja u promet: provjera uvjeta preko ramena pa potom najava uključivanja odručenjem ruke.",
    medimurskaIzreka: "Poglej priko ramena, digni ruku - pak pojdi!",
    signImage: "hand-signal"
  },
  {
    id: 51,
    question: "Vozeći bicikl u prometu zabranjeno je:",
    options: [
      "Voziti desnom stranom",
      "Signalizirati rukom",
      "Krivudanje po cesti i slalom vožnja između vozila",
      "Koristiti kočnice"
    ],
    correctAnswer: 2,
    explanation: "Vozeći bicikl u prometu zabranjeno je krivudanje po cesti i slalom vožnja između vozila.",
    medimurskaIzreka: "Ne vuriš se med autima kak zmija!",
    signImage: "no-weaving"
  },
  {
    id: 52,
    question: "Pješaci hodaju po biciklističkoj stazi kojom voziš. Kako ćeš postupiti?",
    options: [
      "Vikati na njih",
      "Voziti između njih",
      "Nastaviti voziti istom brzinom",
      "Lagano zvrcnuti zvoncem i usporiti, po potrebi stati i propustiti pješaka"
    ],
    correctAnswer: 3,
    explanation: "Lagano ćeš zvrcnuti zvoncem pješaku kako bi ga upozorio na svoju prisutnost i usporiti, po potrebi stati i propustiti pješaka proći.",
    medimurskaIzreka: "Zvonček lagano - pešaki su sveti!",
    signImage: "bell"
  },
  {
    id: 53,
    question: "Prije prijelaza ceste preko željezničke pruge obvezno moraš zaustaviti bicikl:",
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
  {
    id: 54,
    question: "Prilikom obilaženja osobitu pozornost moraš obratiti na:",
    options: [
      "Samo na vozila iza tebe",
      "Bočni razmak od prepreke, vozila iz suprotnog smjera i vozila iza tebe",
      "Samo na pješake",
      "Ne moraš obraćati pozornost"
    ],
    correctAnswer: 1,
    explanation: "Prilikom obilaženja osobitu pozornost moraš obratiti na bočni razmak od prepreke koju obilaziš, vozila koja nailaze iz suprotnog smjera i vozila koja se kreću iza tebe.",
    medimurskaIzreka: "Kad obilaziš - gledaj na sve strane!",
    signImage: "overtaking"
  },
  {
    id: 55,
    question: "Svoj bicikl parkirat ćeš na:",
    options: [
      "Sredini nogostupa",
      "Nosačima za ostavljanje bicikla",
      "Pješačkom prijelazu",
      "Na prometnoj traci"
    ],
    correctAnswer: 1,
    explanation: "Svoj bicikl parkirat ćeš na nosačima za ostavljanje bicikla.",
    medimurskaIzreka: "Bicikl na stalak - ne v sredinu ceste!",
    signImage: "parking"
  },
  {
    id: 56,
    question: "Vozeći bicikl, približavaš se pješačkom prijelazu. Kako ćeš postupiti?",
    options: [
      "Ubrzat ću",
      "Smanjenom brzinom i s povećanim oprezom",
      "Nastavit ću istom brzinom",
      "Nije bitno"
    ],
    correctAnswer: 1,
    explanation: "Vozeći bicikl, približavaš se pješačkom prijelazu smanjenom brzinom i s povećanim oprezom.",
    medimurskaIzreka: "Polahko priko zebre - pešaki su sveti!",
    signImage: "crosswalk"
  },
  {
    id: 57,
    question: "Vozeći bicikl naišao si na pješačku zonu. Kako ćeš postupiti?",
    options: [
      "Nastavit ću voziti",
      "Vozit ću polako",
      "Sići ću s bicikla i nastaviti kao pješak gurajući bicikl",
      "Zaobići ću zonu"
    ],
    correctAnswer: 2,
    explanation: "U pješačkoj zoni sići ćeš s bicikla i nastaviti kao pješak gurajući bicikl.",
    medimurskaIzreka: "V pješačkoj zoni - sjahaj i guraj!",
    signImage: "pedestrian-zone"
  },
  // VII. PROMET NA RASKRIŽJU
  {
    id: 58,
    question: "Žuto treptavo svjetlo na semaforu upozorava te na:",
    options: [
      "Slobodan prolaz",
      "Povećani oprez",
      "Zabranu prolaza",
      "Prebrzu vožnju"
    ],
    correctAnswer: 1,
    explanation: "Žuto treptavo svjetlo na semaforu upozorava te na povećani oprez.",
    medimurskaIzreka: "Žuto trepta - pazi kaj radiš!",
    signImage: "traffic-light"
  },
  {
    id: 59,
    question: "Na što te upozorava prometni znak 'Raskrižje s cestom s prednošću prolaska'?",
    options: [
      "Da imaš prednost",
      "Da nailaziš na cestu s pravom prednosti prolaska i obvezu propuštanja svih vozila na toj cesti",
      "Da je cesta zatvorena",
      "Da možeš ubrzati"
    ],
    correctAnswer: 1,
    explanation: "Znak te upozorava da nailaziš na cestu s pravom prednosti prolaska i na obvezu propuštanja svih vozila koja se kreću cestom na koju se uključuješ.",
    medimurskaIzreka: "Na glavnoj cesti drugi imaju prednost!",
    signImage: "yield"
  },
  {
    id: 60,
    question: "Žuto svjetlo upaljeno istovremeno sa crvenim svjetlom najavljuje:",
    options: [
      "Skoru pojavu zelenog svjetla i prestanak zabrane prolaska kroz raskrižje",
      "Zabranu prolaska",
      "Kvar semafora",
      "Ništa posebno"
    ],
    correctAnswer: 0,
    explanation: "Žuto svjetlo upaljeno istovremeno sa crvenim svjetlom najavljuje skoru pojavu zelenog svjetla i prestanak zabrane prolaska kroz raskrižje.",
    medimurskaIzreka: "Crveno-žuto - pripremi se, zeleno dolazi!",
    signImage: "traffic-light"
  },
  {
    id: 61,
    question: "Koje ćeš sve radnje učiniti približavajući se raskrižju?",
    options: [
      "Samo ubrzati",
      "Usporiti vožnju, obvezno se zaustaviti, spustiti jednu nogu na kolnik, propustiti sva vozila na cesti na koju se uključuješ",
      "Samo pogledati lijevo",
      "Nastaviti bez zaustavljanja"
    ],
    correctAnswer: 1,
    explanation: "Približavajući se raskrižju: uspori vožnju, obvezno se zaustavi, spusti jednu nogu na kolnik, propusti sva vozila koja se kreću cestom na koju se uključuješ.",
    medimurskaIzreka: "Na raskršću stani, poglej, propusti - pak pojdi!",
    signImage: "intersection"
  },
  {
    id: 62,
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
    id: 63,
    question: "Pri skretanju ulijevo na raskrižju dužan si propustiti:",
    options: [
      "Nikoga",
      "Vozilo iz suprotnog smjera koje zadržava smjer ili skreće udesno",
      "Samo pješake",
      "Samo bicikliste"
    ],
    correctAnswer: 1,
    explanation: "Pri skretanju ulijevo dužan si propustiti vozilo iz suprotnog smjera koje zadržava smjer kretanja ili skreće udesno.",
    medimurskaIzreka: "Skrećeš levo? Propusti one z druge strane!",
    signImage: "left-turn"
  },
  {
    id: 64,
    question: "Prije skretanja udesno obvezno se moraš kretati:",
    options: [
      "Po sredini prometne trake",
      "Uz lijevi rub prometne trake",
      "Uz desni rub prometne trake",
      "Svejedno je"
    ],
    correctAnswer: 2,
    explanation: "Prije skretanja udesno obvezno se moraš kretati uz desni rub prometne trake.",
    medimurskaIzreka: "Za desno - drži se desne strane!",
    signImage: "right-turn"
  },
  {
    id: 65,
    question: "Približavaš se raskrižju kao na slici. Vozilo policije daje zvučne i svjetlosne znakove. Kako ćeš postupiti?",
    options: [
      "Nastavit ću voziti",
      "Propustit ću vozilo policije (vozilo s pravom prednosti prolaska)",
      "Ubrzat ću",
      "Zaustavit ću se na sredini raskrižja"
    ],
    correctAnswer: 1,
    explanation: "Propustit ćeš vozilo policije jer ima pravo prednosti prolaska kad daje zvučne i svjetlosne znakove.",
    medimurskaIzreka: "Policija z rotirkom ima prednost - makni se!",
    signImage: "police"
  },
  // DODATNA PITANJA
  {
    id: 66,
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
  {
    id: 67,
    question: "Do koje dobi je kaciga OBAVEZNA za bicikliste?",
    options: [
      "Do 12 godina",
      "Do 14 godina",
      "Do 16 godina",
      "Do 18 godina"
    ],
    correctAnswer: 2,
    explanation: "Kaciga je obavezna za sve bicikliste mlađe od 16 godina! Nošenje kacige smanjuje rizik od ozljede glave za 85%!",
    medimurskaIzreka: "Do 16 let - kaciga na glavu, jel kapči?",
    signImage: "helmet"
  },
  {
    id: 68,
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
  {
    id: 69,
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
    id: 70,
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
    id: 71,
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
  {
    id: 72,
    question: "Kako prelazite pješački prijelaz s biciklom?",
    options: [
      "Vozite brzo preko",
      "Siđete s bicikla i hodate gurajući bicikl",
      "Vozite polako",
      "Svejedno je"
    ],
    correctAnswer: 1,
    explanation: "Pješački prijelaz prelazite hodajući i gurajući bicikl.",
    medimurskaIzreka: "Priko zebre si pešak - sjahaj z biciklina!",
    signImage: "crosswalk"
  },
  {
    id: 73,
    question: "Što radiš s neispravnim biciklom u prometu?",
    options: [
      "Nastaviš voziti",
      "Guraš bicikl kao pješak ili ga prevezeš drugim vozilom",
      "Ostaviš ga na cesti",
      "Zoveš policiju"
    ],
    correctAnswer: 1,
    explanation: "Neispravan bicikl u prometu možeš gurati po cesti krećući se kao pješak ili ga prevesti drugim vozilom.",
    medimurskaIzreka: "Ak se bicklin pokvaril - guraj ga kak pešak!",
    signImage: "walking"
  },
  {
    id: 74,
    question: "Koliko široka smije biti prikolica za bicikl?",
    options: [
      "60 cm",
      "80 cm",
      "100 cm",
      "Nema ograničenja"
    ],
    correctAnswer: 1,
    explanation: "Prikolica koju vučeš biciklom ne smije biti šira od 80 cm.",
    medimurskaIzreka: "Prikolica max 80 cm široka - to je pravilo!",
    signImage: "trailer"
  },
  {
    id: 75,
    question: "Na koliko kotača mora biti prikolica za bicikl?",
    options: [
      "Na jednom kotaču",
      "Na dva kotača",
      "Na tri kotača",
      "Na četiri kotača"
    ],
    correctAnswer: 1,
    explanation: "U prometu na cesti smiješ vući prikolicu na dva kotača.",
    medimurskaIzreka: "Prikolica mora biti na dva kotača!",
    signImage: "trailer"
  },
  {
    id: 76,
    question: "O čemu ovisi duljina puta kočenja bicikla?",
    options: [
      "Samo o boji bicikla",
      "O stanju kolnika, brzini vožnje i stanju guma",
      "Samo o vremenu",
      "Samo o godišnjem dobu"
    ],
    correctAnswer: 1,
    explanation: "Duljina puta kočenja ovisi o stanju kolnika, brzini vožnje i stanju guma.",
    medimurskaIzreka: "Brže voziš - duže kočiš, tak je to!",
    signImage: "braking"
  },
  {
    id: 77,
    question: "Zašto moraju gume na biciklu biti ispravno napumpane?",
    options: [
      "Samo zbog estetike",
      "Radi udobnosti i sigurnosti vožnje",
      "Samo zbog brzine",
      "Nije važno"
    ],
    correctAnswer: 1,
    explanation: "Gume moraju biti ispravno napumpane i bez oštećenja radi udobnosti i sigurnosti vožnje.",
    medimurskaIzreka: "Gume moraju biti v redu - to je osnova!",
    signImage: "tire"
  },
  {
    id: 78,
    question: "O čemu ovisi dovoljan razmak od vozila ispred tebe?",
    options: [
      "O brzini vožnje i stanju kolnika",
      "Samo o boji vozila",
      "Samo o vremenu dana",
      "Nije bitan razmak"
    ],
    correctAnswer: 0,
    explanation: "Dovoljan razmak ovisi o brzini kojom voziš i stanju kolnika.",
    medimurskaIzreka: "Drži razmak - ne vozi drugome v rit!",
    signImage: "distance"
  },
  {
    id: 79,
    question: "Kada je bitan bočni razmak?",
    options: [
      "Samo kod parkiranja",
      "Kod mimoilaženja, pretjecanja i obilaženja",
      "Samo kod kočenja",
      "Nije bitan"
    ],
    correctAnswer: 1,
    explanation: "Bočni razmak je bitan prilikom mimoilaženja, pretjecanja i obilaženja.",
    medimurskaIzreka: "Bočni razmak ti čuva kožu!",
    signImage: "distance"
  },
  {
    id: 80,
    question: "Kako postupaš na kolniku gdje je šljunak i pijesak?",
    options: [
      "Voziš brže",
      "Voziš oprezno i izbjegavaš naglo kočenje",
      "Nastaviš normalno",
      "Kočiš naglo"
    ],
    correctAnswer: 1,
    explanation: "Na šljunku i pijesku vozi oprezno i izbjegavaj naglo kočenje da ne izgubiš ravnotežu.",
    medimurskaIzreka: "Na šljunku polahko - inače buš na ritima!",
    signImage: "slippery"
  },
  {
    id: 81,
    question: "Kako postupaš ako si umoran nakon treninga?",
    options: [
      "Voziš brže da brže dođeš kući",
      "Ne sjedaš na bicikl - guraš ga kući",
      "Voziš normalno",
      "Slušaš glazbu da se razbudiš"
    ],
    correctAnswer: 1,
    explanation: "Kada si umoran, ne sjedaš na bicikl jer je to opasno. Guraš bicikl kući.",
    medimurskaIzreka: "Umoren si? Guraj bicikl, ne rizikiraj!",
    signImage: "tired"
  },
  {
    id: 82,
    question: "Gdje NE smiješ voziti bicikl?",
    options: [
      "Na biciklističkoj stazi",
      "Na autocesti i brzoj cesti",
      "Na prometnoj traci u naselju",
      "Na kolniku u seoskom području"
    ],
    correctAnswer: 1,
    explanation: "Biciklom ne smiješ sudjelovati u prometu na autocestama, brzim cestama i cestama namijenjenim isključivo za promet motornih vozila.",
    medimurskaIzreka: "Na autocesti z biciklinom? Si poludel?",
    signImage: "no-bikes"
  },
  {
    id: 83,
    question: "Na što obraćaš pozornost prilikom obilaženja?",
    options: [
      "Samo na vozila iza tebe",
      "Na bočni razmak, vozila iz suprotnog smjera i vozila iza tebe",
      "Samo na pješake",
      "Ne moraš obraćati pozornost"
    ],
    correctAnswer: 1,
    explanation: "Prilikom obilaženja obraćaš pozornost na bočni razmak, vozila iz suprotnog smjera i vozila iza tebe.",
    medimurskaIzreka: "Kad obilaziš - gledaj na sve strane!",
    signImage: "overtaking"
  },
  {
    id: 84,
    question: "Gdje parkiraš bicikl?",
    options: [
      "Na sredini nogostupa",
      "Na nosačima za bicikle",
      "Na pješačkom prijelazu",
      "Na prometnoj traci"
    ],
    correctAnswer: 1,
    explanation: "Bicikl parkiraš na nosačima za ostavljanje bicikla.",
    medimurskaIzreka: "Bicikl na stalak - ne v sredinu ceste!",
    signImage: "parking"
  },
  {
    id: 85,
    question: "Kako se približavaš pješačkom prijelazu?",
    options: [
      "Ubrzavaš",
      "Smanjenom brzinom i s povećanim oprezom",
      "Istom brzinom",
      "Nije bitno"
    ],
    correctAnswer: 1,
    explanation: "Pješačkom prijelazu se približavaš smanjenom brzinom i s povećanim oprezom.",
    medimurskaIzreka: "Polahko priko zebr, pešaki su sveti!",
    signImage: "crosswalk"
  },
  {
    id: 86,
    question: "Kako prelaziš željezničku prugu?",
    options: [
      "Samo ako vidiš vlak",
      "Nikada ne moraš stati",
      "Zaustaviš se ako se pale crvena svjetla ili spuštaju branici",
      "Samo ako čuješ vlak"
    ],
    correctAnswer: 2,
    explanation: "Zaustavljaš se ako se na svjetlosnom znaku pale crvena svjetla ili ako se branici spuštaju.",
    medimurskaIzreka: "Vlak ne čeka - stani dok je crveno!",
    signImage: "railway"
  },
  {
    id: 87,
    question: "Koliko širok smije biti teret na biciklu sa svake strane?",
    options: [
      "30 cm",
      "50 cm",
      "1 metar",
      "Nema ograničenja"
    ],
    correctAnswer: 1,
    explanation: "Teret na nosaču bicikla ne smije biti širi od 50 cm sa svake strane bicikla.",
    medimurskaIzreka: "Ne tovaruj kak magarec - 50 cm je max!",
    signImage: "cargo"
  },
  {
    id: 88,
    question: "Što znači žuto treptavo svjetlo na semaforu?",
    options: [
      "Možeš proći bez gledanja",
      "Moraš stati",
      "Povećani oprez",
      "Zeleno će uskoro biti"
    ],
    correctAnswer: 2,
    explanation: "Žuto treptavo svjetlo na semaforu znači povećani oprez.",
    medimurskaIzreka: "Žuto trepta - pazi, nekaj se događa!",
    signImage: "traffic-light"
  },
  {
    id: 89,
    question: "Što znači kombinacija crvenog i žutog svjetla na semaforu?",
    options: [
      "Moraš stati",
      "Uskoro će biti zeleno - pripremi se",
      "Povećani oprez",
      "Slobodan prolaz"
    ],
    correctAnswer: 1,
    explanation: "Crveno + žuto svjetlo znači da će uskoro biti zeleno - pripremi se za kretanje.",
    medimurskaIzreka: "Crleno i žuto - pripravaj se za vožnju!",
    signImage: "traffic-light"
  },
  {
    id: 90,
    question: "Koja je maksimalna snaga elektromotora na OPS-u?",
    options: [
      "0,25 kW",
      "0,6 kW",
      "1 kW",
      "2 kW"
    ],
    correctAnswer: 1,
    explanation: "Maksimalna trajna snaga elektromotora OPS-a je 0,6 kW.",
    medimurskaIzreka: "OPS ima max 0,6 kW - ne vuče kak traktor!",
    signImage: "scooter"
  },
  {
    id: 91,
    question: "Ima li OPS (romobil) sjedeće mjesto?",
    options: [
      "Da, jedno",
      "Da, dva",
      "NE - OPS je vozilo bez sjedećeg mjesta",
      "Ovisi o modelu"
    ],
    correctAnswer: 2,
    explanation: "OPS je vozilo BEZ sjedećeg mjesta. Ako ima sjedalo, to više nije OPS.",
    medimurskaIzreka: "Romobil je za stajanje, ne za sedenje!",
    signImage: "scooter"
  },
  {
    id: 92,
    question: "Smije li vozač OPS-a voziti po pješačkoj zoni?",
    options: [
      "Da, uvijek",
      "Samo ako nema biciklističke staze, brzinom hoda i uz oprez",
      "Nikada",
      "Samo noću"
    ],
    correctAnswer: 1,
    explanation: "OPS se smije kretati po površinama za pješake samo ako ne postoji biciklistička staza ili traka i uz vođenje računa o sigurnosti.",
    medimurskaIzreka: "V pješačkoj zoni polahko i pazi na pešake!",
    signImage: "pedestrian-zone"
  },
  {
    id: 93,
    question: "Tko je VOZAČ prema prometnim propisima?",
    options: [
      "Samo vozač automobila",
      "Osoba koja upravlja vozilom",
      "Samo punoljetna osoba",
      "Samo osoba s vozačkom dozvolom"
    ],
    correctAnswer: 1,
    explanation: "Vozač je osoba koja upravlja vozilom - uključujući bicikl i OPS!",
    medimurskaIzreka: "Na biciklinu si vozač - tak te zakon gleda!",
    signImage: "driver"
  },
  {
    id: 94,
    question: "Tko je PJEŠAK prema prometnim propisima?",
    options: [
      "Samo osoba koja hoda",
      "Osoba koja sudjeluje u prometu, a ne upravlja vozilom niti se prevozi",
      "Samo dijete",
      "Samo osoba na nogostupu"
    ],
    correctAnswer: 1,
    explanation: "Pješak je osoba koja sudjeluje u prometu, a ne upravlja vozilom niti se prevozi vozilom.",
    medimurskaIzreka: "Kad sjahneš z biciklina - postaneš pešak!",
    signImage: "pedestrian"
  },
  {
    id: 95,
    question: "Što je RASKRIŽJE?",
    options: [
      "Ravni dio ceste",
      "Površina na kojoj se križaju ili spajaju dvije ili više cesta",
      "Parkiralište",
      "Biciklistička staza"
    ],
    correctAnswer: 1,
    explanation: "Raskrižje je površina na kojoj se križaju ili spajaju dvije ili više cesta.",
    medimurskaIzreka: "Raskrižje - tam se ceste križaju, pazi!",
    signImage: "intersection"
  }
];

export const getRandomQuestions = (count: number = 5): QuizQuestion[] => {
  const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};
