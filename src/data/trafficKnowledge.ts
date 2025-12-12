// Baza znanja iz HAK priručnika "Biciklom sigurno u promet"

export const trafficKnowledge = {
  pojmovi: {
    cesta: "Svaka javna cesta, ulice u naselju i nerazvrstane ceste na kojima se obavlja promet.",
    kolnik: "Dio ceste namijenjen za promet vozila.",
    prometna_traka: "Uzdužni dio kolnika namijenjen za promet vozila u jednom smjeru.",
    nogostup: "Posebno uređena prometna površina namijenjena za kretanje pješaka.",
    biciklisticka_staza: "Izgrađena prometna površina namijenjena za promet bicikala, označena propisanim prometnim znakom.",
    biciklisticka_traka: "Dio kolnika namijenjen za promet bicikala, označen uzdužnom crtom na kolniku i propisanim prometnim znakom.",
    pjesacki_prijelaz: "Dio kolnika namijenjen za prelazak pješaka, označen propisanim prometnim znakom.",
    raskrizje: "Površina na kojoj se križaju ili spajaju dvije ili više cesta.",
    vozilo: "Prometno sredstvo namijenjeno za kretanje po cesti.",
    bicikl: "Vozilo koje ima najmanje dva kotača i koje se pokreće isključivo snagom vozača.",
    vozac: "Osoba koja upravlja vozilom.",
    pjesak: "Osoba koja sudjeluje u prometu, a ne upravlja vozilom niti se prevozi vozilom.",
  },

  oprema_bicikla: {
    obavezna: [
      "Prednje svjetlo bijele boje",
      "Stražnje svjetlo crvene boje", 
      "Stražnji reflektor (katadiopter) crvene boje",
      "Prednji reflektor bijele ili žute boje",
      "Bočni reflektori na kotačima (žute boje)",
      "Reflektori na pedalama (žute ili narančaste boje)",
      "Ispravna kočnica",
      "Zvono"
    ],
    preporucena: [
      "Kaciga (OBAVEZNA za djecu do 16 godina!)",
      "Reflektirajući prsluk",
      "Rukavice",
      "Bočna ogledala"
    ]
  },

  pravila_voznje: {
    osnovna: [
      "Biciklom se vozi desnom stranom kolnika",
      "Voziti što bliže desnom rubu kolnika",
      "Voziti jedan iza drugoga (ne usporedo!)",
      "Obavezno signalizirati skretanje rukom",
      "Ne puštati upravljač tijekom vožnje",
      "Ne držati se za drugo vozilo",
      "Ne prevoziti osobu na biciklu bez sjedala",
      "Koristiti biciklističku stazu ako postoji"
    ],
    zabranjeno: [
      "Voziti bez ruku na upravljaču",
      "Prevoziti drugu osobu bez posebnog sjedala",
      "Voziti s neispravnim kočnicama",
      "Voziti noću bez svjetala",
      "Držati se za drugo vozilo u pokretu",
      "Voziti pod utjecajem alkohola",
      "Koristiti mobitel tijekom vožnje"
    ]
  },

  prometni_znakovi: {
    znakovi_opasnosti: {
      opis: "Upozoravaju na opasnost - oblik trokuta s vrhom prema gore, crveni rub",
      primjeri: ["Opasan zavoj", "Raskršće", "Prijelaz biciklista", "Djeca na cesti"]
    },
    znakovi_izricite_naredbe: {
      opis: "Zabranjuju ili naređuju - okrugli oblik",
      primjeri: ["Zabranjeno za bicikle", "Biciklistička staza", "Stop", "Ograničenje brzine"]
    },
    znakovi_obavijesti: {
      opis: "Daju korisne obavijesti - pravokutni ili kvadratni oblik",
      primjeri: ["Pješački prijelaz", "Biciklistička staza", "Parkiralište"]
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

  statistika: {
    opce: "U Hrvatskoj godišnje strada više od 100 biciklista u prometnim nesrećama.",
    kaciga: "Nošenje kacige smanjuje rizik od ozljede glave za 85%!",
    nocna_voznja: "60% nesreća biciklista noću događa se zbog nepostojanja ili neispravne rasvjete.",
    alkohol: "Svaka peta nesreća biciklista povezana je s alkoholom.",
    djeca: "Djeca do 12 godina najčešće stradavaju kao pješaci ili biciklisti."
  },

  medimurske_izreke: [
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
    "Brez svetla noćum si kak crni mačak - nevidljiv!"
  ],

  duhovita_pitanja: [
    "Znaš li zašto bicikl ne može sam stajati? Jer je pre-umoran! 🚲 Ali ozbiljno - znaš li koja oprema mora biti na biciklu?",
    "Što kaže prometni znak biciklistu? 'Stani malo i pogledaj me!' Znaš li prepoznati znakove opasnosti?",
    "Zašto je bicikl bez svjetla kao ninja? Jer ga nitko ne vidi! A to NIJE dobro. Znaš li kada moraš imati upaljena svjetla?",
    "Što je zajedničko biciklu i dobrom učeniku? Oboje idu pravim putem! Znaš li kojom stranom ceste moraš voziti?",
    "Kaciga i glava su best frendovi - jedna čuva drugu! Znaš li do koje dobi je kaciga OBAVEZNA?"
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