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
    "Ne budi tokmak, drži se pravil!",
    "Kaciga ti je kak prijatel - čuva ti glavu!",
    "Bez svetla noćum - to je glupost kaj nema meje!",
    "Pazi na cesti, ne budi bedast!",
    "Kaj praviš bez ruk na rulju? Si normalen?",
    "Desna stran je tvoja stran, ne pozabi!",
    "Telefon v žep dok voziš, jel kapči?",
    "Nejdi kak muha bez glave, razmisli!",
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
    "Ne seri se med aute - ostani na svoji strani!",
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
    "Znaš li zašto bicikl ne može sam stajati? Jer je pre-umoran! 🚲 Ali ozbiljno - znaš li koja oprema mora biti na biciklu?",
    "Što kaže prometni znak biciklistu? 'Stani malo i pogledaj me!' Znaš li prepoznati znakove opasnosti?",
    "Zašto je bicikl bez svjetla kao ninja? Jer ga nitko ne vidi! A to NIJE dobro. Znaš li kada moraš imati upaljena svjetla?",
    "Što je zajedničko biciklu i dobrom učeniku? Oboje idu pravim putem! Znaš li kojom stranom ceste moraš voziti?",
    "Kaciga i glava su best frendovi - jedna čuva drugu! Znaš li do koje dobi je kaciga OBAVEZNA?",
    "Što kaže prometni policajac biciklistu bez kacige? 'Glava ti je previše vrijedna za takve gluposti!'",
    "Zašto je pametno signalizirati rukom? Jer drugi vozači ne čitaju misli!",
    "Što je OPS? Ne, nije operativni prometni sustav - to je osobno prijevozno sredstvo, kao romobil!"
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