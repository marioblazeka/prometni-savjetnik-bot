// Baza znanja iz Zakona o sigurnosti prometa na cestama (NN 145/24)

export const trafficKnowledge = {
  pojmovi: {
    cesta: "Svaka javna cesta, ulice u naselju i nerazvrstane ceste na kojima se obavlja promet.",
    kolnik: "Dio cestovne površine namijenjen u prvom redu za promet vozila.",
    prometna_traka: "Obilježeni ili neobilježeni uzdužni dio kolnika čija je širina dovoljna za nesmetan promet jednog reda motornih vozila u jednom smjeru.",
    nogostup: "Posebno uređena prometna površina namijenjena za kretanje pješaka, koja nije u razini s kolnikom ceste ili je od kolnika odvojena na drugi način.",
    biciklisticka_staza: "Izgrađena prometna površina namijenjena za promet bicikala, koja je odvojena od kolnika i obilježena propisanim prometnim znakom.",
    biciklisticka_traka: "Dio kolnika namijenjen za promet bicikla koja se prostire uzduž kolnika i koja je obilježena uzdužnom crtom na kolniku i propisanim prometnim znakom.",
    pjesacki_prijelaz: "Dio kolničke površine namijenjen za prelaženje pješaka preko kolnika, obilježen oznakama na kolniku i prometnim znakom obavijesti.",
    raskrizje: "Površina na kojoj se križaju ili spajaju dvije ili više cesta.",
    vozilo: "Svako prijevozno sredstvo namijenjeno za kretanje po cesti, osim dječjih prijevoznih sredstava i prijevoznih sredstava za osobe s invaliditetom ako se pri tom ne kreću brzinom većom od brzine čovječjeg hoda.",
    bicikl: "Vozilo koje ima najmanje dva kotača i koje se pokreće isključivo snagom vozača.",
    vozac: "Osoba koja upravlja vozilom.",
    pjesak: "Osoba koja sudjeluje u prometu, a ne upravlja vozilom niti se prevozi vozilom.",
    zona_smirenog_prometa: "Područje u naselju obilježeno propisanim prometnim znakom, u kojem se vozila ne smiju kretati brzinom većom od brzine hoda pješaka i u kojem je dječja igra svugdje dopuštena.",
    pjesacka_zona: "Područje u naselju koje je namijenjeno kretanju pješaka i koje je obilježeno propisanim prometnim znakom.",
    ops: "Osobno prijevozno sredstvo - vozilo bez sjedećeg mjesta, čija trajna snaga elektromotora nije jača od 0,6 kW i koje ne može razviti brzinu veću od 25 km/h (npr. električni romobil)."
  },

  oprema_bicikla: {
    obavezna: [
      "Prednje svjetlo bijele boje",
      "Stražnje svjetlo crvene boje", 
      "Stražnji reflektor (katadiopter) crvene boje",
      "Prednji reflektor bijele ili žute boje",
      "Bočni reflektori na kotačima (bijeli ili žuti)",
      "Reflektori na pedalama (žute ili narančaste boje)",
      "Ispravna kočnica prednjeg i zadnjeg kotača",
      "Zvono"
    ],
    preporucena: [
      "Kaciga (OBAVEZNA za djecu do 16 godina!)",
      "Reflektirajući prsluk ili reflektirajuća odjeća (obavezno noću!)",
      "Rukavice",
      "Štitnici za laktove i koljena"
    ],
    ops_obavezna: [
      "Zaštitna kaciga (obavezna za sve vozače OPS-a)",
      "Reflektirajući prsluk ili odjeća noću"
    ]
  },

  pravila_voznje: {
    osnovna: [
      "Biciklom se vozi desnom stranom kolnika, što bliže desnom rubu",
      "Voziti jedan iza drugoga (ne usporedo!)",
      "Obavezno signalizirati skretanje rukom",
      "Koristiti biciklističku stazu ili traku ako postoji",
      "Prije skretanja provjeriti uvjete preko ramena",
      "Brzina vožnje mora biti prilagođena uvjetima na cesti"
    ],
    zabranjeno: [
      "Voziti bez ruku na upravljaču",
      "Skidati obje ruke s upravljača",
      "Prevoziti drugu osobu bez posebnog sjedala",
      "Voziti s neispravnim kočnicama",
      "Voziti noću bez svjetala",
      "Držati se za drugo vozilo u pokretu",
      "Voziti pod utjecajem alkohola",
      "Koristiti mobitel tijekom vožnje",
      "Koristiti slušalice na ili u oba uha",
      "Krivudati po cesti",
      "Slalom vožnja između vozila",
      "Ugrožavati druge sudionike u prometu"
    ],
    minimalna_dob: "12 godina za samostalno upravljanje biciklom i OPS-om u prometu"
  },

  prometni_znakovi: {
    znakovi_opasnosti: {
      opis: "Upozoravaju na opasnost - oblik trokuta s vrhom prema gore, crveni rub",
      primjeri: ["Opasan zavoj", "Raskrižje", "Prijelaz biciklista", "Djeca na cesti", "Klizav kolnik"]
    },
    znakovi_izricite_naredbe: {
      opis: "Zabranjuju ili naređuju - okrugli oblik s crvenim rubom",
      primjeri: ["Zabranjeno za bicikle", "Biciklistička staza", "Stop", "Ograničenje brzine", "Zabranjeno za sva vozila"]
    },
    znakovi_obavijesti: {
      opis: "Daju korisne obavijesti - pravokutni ili kvadratni oblik",
      primjeri: ["Pješački prijelaz", "Biciklistička staza", "Parkiralište", "Zona smirenog prometa"]
    }
  },

  raskrizje: {
    pravilo_desne_strane: "Prednost ima vozilo koje dolazi s desne strane, osim ako prometni znakovi ne određuju drugačije.",
    redoslijed_prolaska: [
      "1. Vozila iz smjera označenog glavnom cestom",
      "2. Vozila koja skreću desno",
      "3. Vozila koja idu ravno",
      "4. Vozila koja skreću lijevo"
    ],
    skretanje_lijevo: "Pri skretanju lijevo propusti vozila iz suprotnog smjera!"
  },

  ops_pravila: {
    kretanje: "Vozači OPS-a se prvenstveno moraju kretati biciklističkom stazom ili biciklističkom trakom u smjeru kretanja.",
    povrsine_za_pjesake: "OPS se smije kretati po površinama namijenjenim za kretanje pješaka samo ako ne postoji biciklistička staza ili traka i ako se vodi računa o sigurnosti drugih sudionika.",
    oprema: "Vozači OPS-a moraju nositi zaštitnu kacigu za vrijeme vožnje.",
    brzina: "Maksimalna brzina OPS-a je 25 km/h."
  },

  kazne: {
    slusalice: "30 eura za korištenje slušalica na ili u oba uha tijekom vožnje bicikla ili OPS-a",
    mobitel: "Zabranjeno korištenje mobitela na način koji umanjuje mogućnost reagiranja"
  },

  statistika: {
    opce: "U Hrvatskoj godišnje strada više od 100 biciklista u prometnim nesrećama.",
    kaciga: "Nošenje kacige smanjuje rizik od ozljede glave za 85%!",
    nocna_voznja: "60% nesreća biciklista noću događa se zbog nepostojanja ili neispravne rasvjete.",
    alkohol: "Svaka peta nesreća biciklista povezana je s alkoholom.",
    djeca: "Djeca do 12 godina najčešće stradavaju kao pješaci ili biciklisti."
  },

  // Međimurske/kajkavske izreke i komentari
  // Temeljem kajkavskog narječja i međimurskog govora
  medimurske_izreke: [
    // Opće izreke za sigurnost
    "Bum ti rekel kak je: bez kacige si kak buča bez poklopca!",
    "Kaj se vuriš? Polahko, živeti buš duže!",
    "Ruka van - i svi znaju kam ideš, kapči?",
    "Budi pažljiv i drži se pravila!",
    "Kaciga ti je kak prijatel - čuva ti glavu!",
    "Bez svjetla noću - to je jako opasno!",
    "Pazi na cesti i vozi polako!",
    "Drži obje ruke na upravljaču, tako je sigurnije!",
    "Desna stran je tvoja stran, ne pozabi!",
    "Mobitel spremi u džep dok voziš, dogovoreno?",
    "Ne boj se pravil, pravila te čuvaju!",
    "Biciklin je fajn, al samo ak si pameten!",
    "Gle levo, gle desno - pak pojdi!",
    "Kak veliš na Međimurski: pazi na kožu!",
    "Ne boj se pravil, pravila te čuvaju!",
    "Kaj ti je teško ruku dignuti? Daj signaliziraj!",
    "Polahko priko zebr, pešaki su sveti!",
    "Brez svetla noćum si kak crni mačak - nevidljiv!",
    // Dodatne kajkavske izreke temeljene na literaturi
    "Pesma je pesma, gda je zresma - tak i vožnja mora biti prava!",
    "Nažgi svetlo na ganjku - i na biciklinu!",
    "Lehka srca voziš ak praviš kak treba!",
    "Ne budi škrebetljiv - vozi tiho i sigurno!",
    "Kam se vuriš? Doma buš došel i polahko!",
    "Kak bi rekel moj deda: pazi se, sinko!",
    "V prometu budi pažljiv kak miš v štali!",
    "Ne rivli se med aute - ostani na svoji strani!",
    "Bolje polahko dojti neg brzo v bolnicu!",
    "Prometni znaki ti govore - slušaj ih!",
    "Ak nemaš svetla, bolje doma ostani!",
    "Refleks ti je kak anđel čuvar - štiti te!",
    "Ne vuriš se kak da te vrag goni!",
    "Pravilo desne strane - to si zapamti!",
    "Bicikl bez kočnic je kak auto bez volana!",
    "Kaciga na glavu - to je zakon, ne šala!",
    "Signaliziraj rukom - nisi sam na cesti!",
    "V zoni smirenoj voziš kak da hodiš!",
    "Pešaki imaju prednost - to je sveto!",
    "Slušalice van z vušesa - moraš čuti promet!"
  ],

  duhovita_pitanja: [
    // Oprema bicikla
    "Znaš li koja oprema MORA biti na biciklu? Ajde, nabroji!",
    "Koliko kočnica mora imati ispravan bicikl?",
    "Koje boje mora biti prednje svjetlo na biciklu?",
    "Koje boje mora biti stražnje svjetlo na biciklu?",
    "Zašto su reflektori (katadiopteri) važni na biciklu?",
    "Mora li bicikl imati zvono?",
    "Što je katadiopter i gdje se stavlja na bicikl?",
    "Koje boje moraju biti bočni reflektori na kotačima?",
    "Gdje se stavlja crveni katadiopter na bicikl?",
    "Na pedalama bicikla moraju biti reflektori koje boje?",
    "Kada moraš pregledati ispravnost bicikla?",
    "Što sve moraš provjeriti prije vožnje biciklom?",
    "Koliko širok smije biti teret na biciklu sa svake strane?",
    "Koliko široka smije biti prikolica za bicikl?",
    "O čemu ovisi duljina puta kočenja?",
    
    // Kaciga i zaštita
    "Do koje dobi je kaciga OBAVEZNA za bicikliste?",
    "Je li kaciga obavezna za vozače romobila (OPS)?",
    "Zašto je važno nositi kacigu tijekom vožnje?",
    "Kako pravilno namjestiti kacigu na glavu?",
    "Za koliko posto kaciga smanjuje rizik od ozljede glave?",
    "Što koristiš za osobnu zaštitu osim kacige?",
    "Kako postupaš ako si umoran nakon treninga?",
    "Zašto je bitno nositi reflektirajuću odjeću noću?",
    
    // Prometni znakovi
    "Koje tri vrste prometnih znakova postoje?",
    "Kakav oblik imaju znakovi opasnosti?",
    "Kakav oblik imaju znakovi izričite naredbe?",
    "Kakav oblik imaju znakovi obavijesti?",
    "Koje boje je rub znakova opasnosti?",
    "Što znači prometni znak STOP?",
    "Što znači trokutasti prometni znak?",
    "Što znači okrugli prometni znak?",
    "Što znači pravokutni prometni znak?",
    "Kako postupaš na znak 'Zona smirenog prometa'?",
    "Što označava prometni znak s biciklom?",
    
    // Pravila vožnje
    "Kojom stranom ceste voziš bicikl?",
    "Smiju li dva biciklista voziti jedan pored drugoga?",
    "Kako signaliziraš skretanje lijevo?",
    "Kako signaliziraš skretanje desno?",
    "Kako signaliziraš zaustavljanje bicikla?",
    "S koliko godina smiješ samostalno voziti bicikl u prometu?",
    "Smiješ li voziti bicikl bez ruku na upravljaču?",
    "Smiješ li koristiti mobitel dok voziš bicikl?",
    "Smiješ li koristiti slušalice na OBA uha dok voziš?",
    "Smiješ li prevoziti drugu osobu na biciklu bez posebnog sjedala?",
    "Smiješ li se držati za drugo vozilo dok voziš bicikl?",
    "Smiješ li krivudati biciklom po cesti?",
    "Smiješ li voziti slalom između vozila?",
    "Gdje bicikl NE smiješ voziti?",
    "Koje površine možeš koristiti za vožnju biciklom?",
    "Kako prelaziš nogostup s biciklom?",
    "Kako se ponašaš kada pješaci hodaju biciklističkom stazom?",
    "Koji je redoslijed radnji prije uključivanja u promet?",
    "Što moraš napraviti prije skretanja?",
    "Kako voziš po šljunku i pijesku?",
    "Gdje parkiraš bicikl?",
    
    // Noćna vožnja
    "Što moraš imati za vožnju biciklom noću?",
    "Je li reflektirajući prsluk obavezan noću?",
    "Zašto je noćna vožnja bez svjetala opasna?",
    "Koliko posto nesreća biciklista noću događa se zbog neispravne rasvjete?",
    "Koje boje mora biti svjetlo naprijed noću?",
    "Koje boje mora biti svjetlo straga noću?",
    
    // Raskrižje i prednost
    "Tko ima prednost na raskrižju bez znakova?",
    "Što je pravilo desne strane?",
    "Kako se ponašaš na raskrižju s prometnim znakovima?",
    "Što moraš napraviti prije skretanja lijevo?",
    "Kako se pravilno uključuješ u promet?",
    "Koji je redoslijed prolaska na raskrižju?",
    "Kako postupaš na pješačkom prijelazu?",
    "Kako prelaziš željezničku prugu?",
    "Na što paziš prilikom obilaženja?",
    "Što znači žuto treptavo svjetlo na semaforu?",
    
    // OPS (romobili)
    "Što je OPS - osobno prijevozno sredstvo?",
    "Koja je maksimalna brzina OPS-a?",
    "Gdje se vozač OPS-a prvenstveno mora kretati?",
    "Je li kaciga obavezna za vozače OPS-a?",
    "Smije li OPS voziti po nogostupu?",
    "Koja je maksimalna snaga elektromotora OPS-a?",
    "Ima li OPS sjedeće mjesto?",
    
    // Pojmovi
    "Što je kolnik?",
    "Što je nogostup?",
    "Što je prometna traka?",
    "Koja je razlika između biciklističke staze i trake?",
    "Što je zona smirenog prometa?",
    "Što je pješačka zona?",
    "Što je pješački prijelaz?",
    "Što je raskrižje?",
    "Što je vozilo prema zakonu?",
    "Tko je vozač?",
    "Tko je pješak?",
    
    // Zabrane i kazne
    "Koja je kazna za korištenje slušalica na oba uha?",
    "Što je sve zabranjeno biciklistima?",
    "Smiješ li voziti bicikl pod utjecajem alkohola?",
    "Smiješ li voziti bicikl s neispravnim kočnicama?",
    
    // Pješaci
    "Kojom stranom ceste hodaš kao pješak izvan naselja?",
    "Kako prelaziš kolnik kao pješak?",
    "Što koristiš za prijelaz preko kolnika?",
    "Što radiš s neispravnim biciklom?",
    
    // Sigurnost
    "Zašto su pravila prometa važna?",
    "Koliko biciklista godišnje strada u Hrvatskoj?",
    "Koji postotak nesreća biciklista je povezan s alkoholom?",
    "Što je najvažnije za sigurnu vožnju?",
    "Zašto je bitan bočni razmak?",
    "Zašto je bitan razmak od vozila ispred tebe?"
  ]
};

export const getRandomMedimurskaIzreka = () => {
  const izreke = trafficKnowledge.medimurske_izreke;
  return izreke[Math.floor(Math.random() * izreke.length)];
};

export const getRandomDuhovitoPitanje = () => {
  const pitanja = trafficKnowledge.duhovita_pitanja;
  return pitanja[Math.floor(Math.random() * pitanja.length)];
};
