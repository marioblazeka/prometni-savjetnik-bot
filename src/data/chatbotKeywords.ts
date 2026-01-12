// Opsežna baza ključnih riječi za chatbot (1000+ ključnih riječi i varijacija)
// Temelji se na: Zakon o sigurnosti prometa na cestama, Program osposobljavanja za upravljanje biciklom

export interface TopicResponse {
  id: string;
  keywords: string[];
  title: string;
  response: string;
  followUp?: string[];
}

// Normalizacija teksta
export const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9\s]/g, "")
    .trim();
};

// Sve teme s ključnim riječima i odgovorima
export const chatbotTopics: TopicResponse[] = [
  // =================== OPREMA BICIKLA ===================
  {
    id: "oprema_obavezna",
    keywords: [
      "oprema", "opreme", "opremom", "opremu",
      "obavezna oprema", "obvezna oprema", "potrebna oprema",
      "sto mora biti", "sta mora biti", "što mora biti", "šta mora biti",
      "mora imati", "treba imati", "potrebno", "potrebna",
      "na biciklu", "za bicikl", "bicikla",
      "dijelovi", "dijelove", "dio", "komponente",
      "ispravnost", "ispravan bicikl", "ispravna oprema",
      "provjera bicikla", "provjeri bicikl", "provjera opreme",
      "prije voznje", "prije vožnje", "prije polaska",
      "sto provjerit", "što provjeriti", "sta provjeriti",
      "oprema bicikl", "oprema bicikla", "bicikl oprema"
    ],
    title: "🚲 OBAVEZNA OPREMA BICIKLA",
    response: `🚲 OBAVEZNA OPREMA BICIKLA:

1. ✅ Prednje svjetlo BIJELE boje
2. ✅ Stražnje svjetlo CRVENE boje
3. ✅ Stražnji reflektor (katadiopter) CRVENE boje
4. ✅ Prednji reflektor BIJELE ili ŽUTE boje
5. ✅ Bočni reflektori na kotačima (BIJELI ili ŽUTI)
6. ✅ Reflektori na pedalama (ŽUTE ili NARANČASTE boje)
7. ✅ Ispravna kočnica prednjeg kotača
8. ✅ Ispravna kočnica stražnjeg kotača
9. ✅ Zvono

⭐ PREPORUČENA OPREMA:
• Kaciga (OBAVEZNA za djecu do 16 godina!)
• Reflektirajući prsluk (OBAVEZAN noću!)
• Rukavice
• Štitnici za laktove i koljena

📋 PRIJE SVAKE VOŽNJE PROVJERI:
• Jesu li kočnice ispravne?
• Rade li svjetla?
• Je li zvono glasno?
• Jesu li gume napumpane?
• Je li lanac naoljen?

📊 VAŽNO: Bez ispravne opreme ne smiješ voziti bicikl u prometu!`,
    followUp: ["Što je katadiopter?", "Zašto su kočnice važne?", "Što ako nemam svu opremu?"]
  },

  {
    id: "katadiopter",
    keywords: [
      "katadiopter", "katadioptri", "katadiopteri", "katadioptera",
      "reflektor", "reflektori", "reflektora", "reflektorima",
      "odbojnik svjetla", "odbija svjetlo", "reflektira",
      "crveni reflektor", "bijeli reflektor", "zuti reflektor", "žuti reflektor",
      "narančasti reflektor", "narandzasti reflektor",
      "bocni reflektor", "bočni reflektor", "bocni reflektori",
      "reflektor na pedal", "reflektor pedala", "reflektori pedala",
      "reflektor na kotac", "reflektor kotača", "reflektori kotača",
      "svjetlece oznake", "svjetleće oznake", "reflektirajući",
      "sto je katadiopter", "što je katadiopter", "sta je katadiopter"
    ],
    title: "💡 KATADIOPTER (REFLEKTOR)",
    response: `💡 KATADIOPTER (REFLEKTOR):

Katadiopter je uređaj koji ODBIJA (reflektira) svjetlo natrag prema izvoru - npr. prema vozilu koje te osvjetljava.

📍 GDJE SE STAVLJAJU KATADIOPTERI:
• NAPRIJED - bijele ili žute boje
• STRAGA - crvene boje
• NA BOČNE STRANE KOTAČA - bijele ili žute boje
• NA PEDALAMA - žute ili narančaste boje

🔦 ZAŠTO SU VAŽNI:
• Čine te VIDLJIVIM u mraku
• Vozači automobila te mogu vidjeti i do 150 metara dalje!
• Rade čak i kad ti se pokvari svjetlo

⚠️ RAZLIKA OD SVJETLA:
• Svjetlo SAMO proizvodi svjetlost (treba bateriju)
• Katadiopter SAMO odbija tuđe svjetlo (ne treba bateriju)
• Potrebno je OBOJE za sigurnu vožnju noću!

📊 STATISTIKA: 60% nesreća biciklista noću događa se zbog loše vidljivosti!`,
    followUp: ["Što ako mi se pokvari svjetlo?", "Moraju li reflektori biti čisti?"]
  },

  {
    id: "kocnice",
    keywords: [
      "kocnica", "kočnica", "kocnice", "kočnice", "kočnicama",
      "kocenje", "kočenje", "koci", "koči", "zakociti", "zakočiti",
      "zaustavljanje", "zaustaviti", "zaustaviti se", "stani", "stoj",
      "put kocenja", "put kočenja", "zaustavni put",
      "prednja kocnica", "prednja kočnica", "straznja kocnica", "stražnja kočnica",
      "ispravne kocnice", "ispravne kočnice", "neispravne kocnice",
      "koliko kocnica", "koliko kočnica", "broj kočnica",
      "kako kociti", "kako kočiti", "pravilno kocenje", "pravilno kočenje"
    ],
    title: "🛑 KOČNICE",
    response: `🛑 KOČNICE NA BICIKLU:

✅ OBAVEZNO MORAŠ IMATI:
• Kočnicu PREDNJEG kotača
• Kočnicu STRAŽNJEG kotača
= Ukupno DVIJE ispravne kočnice!

🎯 KAKO PRAVILNO KOČITI:
1. Koristi OBJE kočnice istovremeno
2. Stražnju kočnicu pritisni MALO JAČE
3. Prednju kočnicu pritisni BLAŽE (da se ne prevrneš!)
4. Koči POSTEPENO, ne naglo

📏 PUT KOČENJA OVISI O:
• Brzini vožnje (brže voziš = duži put!)
• Stanju kolnika (mokro = duži put!)
• Stanju kočnica (istrošene = duži put!)
• Stanju guma (istrošene = duži put!)
• Tvojoj masi i masi tereta

⚠️ ZABRANJENO JE:
• Voziti s neispravnim kočnicama
• Voziti ako kočnice ne rade

🔧 PROVJERI KOČNICE:
• Prije svake vožnje stisni obje kočnice
• Kotač se mora potpuno zaustaviti
• Ne smije biti "praznog hoda"

📊 Neispravne kočnice uzrok su mnogih nesreća!`,
    followUp: ["Kako održavati kočnice?", "Što ako mi zakaže kočnica?"]
  },

  {
    id: "zvono",
    keywords: [
      "zvono", "zvona", "zvonce", "zvoncic", "zvončić",
      "zvoni", "zazvoni", "zazvoniti", "zvuk", "signal",
      "upozorenje", "upozorit", "upozoriti", "upozoravam",
      "truba", "sirena", "glasno", "cuje se", "čuje se"
    ],
    title: "🔔 ZVONO",
    response: `🔔 ZVONO NA BICIKLU:

✅ ZVONO JE OBAVEZNO!
Svaki bicikl MORA imati ispravno zvono.

🎯 KADA KORISTITI ZVONO:
• Kad želiš upozoriti pješake da se maknu
• Kad pretječeš drugog biciklista
• Kad ulaziš u nepregledni dio staze
• Kad se približavaš djeci ili životinjama
• U svim situacijama kada trebaš upozoriti druge

⚠️ VAŽNA PRAVILA:
• Zvono nije zamjena za oprez!
• Zvoni na vrijeme (ne pred sam nos!)
• Zvoni pristojno, ne agresivno
• Uspori čak i kad zvoniš

❌ KADA NE ZVONITI:
• Zvono NIJE za zabavu
• Ne zvoni bespotrebno
• Ne zvoni da bi nekoga uplašio

🔧 PROVJERI ZVONO:
• Mora biti GLASNO i JASNO
• Mora se čuti s udaljenosti
• Mehanizam mora raditi glatko`,
    followUp: ["Što ako mi se pokvari zvono?", "Mogu li umjesto zvona koristiti glas?"]
  },

  // =================== KACIGA ===================
  {
    id: "kaciga",
    keywords: [
      "kaciga", "kacige", "kacigom", "kacigu",
      "helmet", "helmeta", "zastitna kaciga", "zaštitna kaciga",
      "nositi kacigu", "nosenje kacige", "nošenje kacige",
      "obavezna kaciga", "obvezna kaciga", "mora kaciga",
      "glava", "zaštita glave", "zastita glave", "ozljeda glave",
      "do koliko godina", "do koje dobi", "kad je obavezna",
      "zasto kaciga", "zašto kaciga", "vaznost kacige", "važnost kacige",
      "kako odabrati kacigu", "kako namjestiti", "kako staviti kacigu",
      "velicina kacige", "veličina kacige"
    ],
    title: "🪖 KACIGA - ZAŠTITA GLAVE",
    response: `🪖 KACIGA - TVOJ NAJBOLJI PRIJATELJ!

✅ KACIGA JE OBAVEZNA ZA:
• Sve bicikliste MLAĐE od 16 godina
• SVE vozače OPS-a (romobila) - bez obzira na dob!

📊 ZAŠTO JE VAŽNA:
• Smanjuje rizik od ozljede glave za 85%!
• Može ti spasiti život
• Štiti mozak od udaraca

🎯 KAKO ODABRATI KACIGU:
1. Mora biti HOMOLOGIRANA (ima oznaku)
2. Mora DOBRO prianjati uz glavu
3. Ne smije biti prevelika ni premala
4. Mora biti udobna

👷 KAKO PRAVILNO NOSITI:
1. Stavi kacigu RAVNO na glavu
2. Ne smije biti previše naprijed ni nazad
3. Remen mora biti ispod brade
4. Remen mora biti DOBRO ZATEGNUT
5. Između remena i brade stane samo 1-2 prsta

⚠️ ZAMIJENI KACIGU AKO:
• Je pala i udarila
• Ima pukotine
• Je stara više od 5 godina
• Je prevelika ili premala

📊 STATISTIKA: Ozljede glave su najopasniji tip ozljeda kod biciklista!`,
    followUp: ["Kakvu kacigu odabrati?", "Što ako mi je kaciga neugodna?", "Koliko košta dobra kaciga?"]
  },

  {
    id: "reflektirajuca_odjeca",
    keywords: [
      "reflektirajuca", "reflektirajuća", "refleks", "reflektirajući",
      "prsluk", "reflektirajuci prsluk", "reflektirajući prsluk",
      "odjeca", "odjeća", "odjecom", "odjećom",
      "vidljivost", "vidljiv", "vidljiva", "nevidljiv",
      "sigurnosni prsluk", "neon", "fluorescentna",
      "jarke boje", "svijetla boja", "bijela odjeca", "žuta odjeća",
      "narancasta odjeca", "narančasta odjeća",
      "nocu nositi", "noću nositi", "sto nositi nocu", "što nositi noću"
    ],
    title: "👕 REFLEKTIRAJUĆA ODJEĆA",
    response: `👕 REFLEKTIRAJUĆA ODJEĆA:

✅ OBAVEZNO NOĆU:
• Reflektirajući prsluk ILI
• Reflektirajuća odjeća ILI
• Druga reflektirajuća oznaka

🎯 ZAŠTO JE VAŽNA:
• Čini te VIDLJIVIM u mraku
• Vozači te mogu vidjeti izdaleka
• Reflektira svjetlo automobila

👀 RAZLIKA:
• Danju: jarke boje (žuta, narančasta, bijela)
• Noću: MORA imati reflektirajuće trake!

📍 GDJE NOSITI:
• Prsluk preko odjeće
• Trake oko ruku i nogu
• Reflektori na ruksaku

⚠️ VAŽNO:
• Tamna odjeća noću = OPASNO!
• Čak i sa svjetlom na biciklu, budi dodatno vidljiv
• Reflektirajući materijal svijetli čak do 200 metara!

📊 STATISTIKA: 60% nesreća biciklista noću događa se zbog slabe vidljivosti!`,
    followUp: ["Gdje kupiti reflektirajući prsluk?", "Mogu li staviti reflektore na ruksak?"]
  },

  // =================== PROMETNI ZNAKOVI ===================
  {
    id: "prometni_znakovi_vrste",
    keywords: [
      "prometni znak", "prometni znakovi", "prometnih znakova",
      "vrste znakova", "vrste prometnih", "koliko vrsta", "tri vrste",
      "znakovi postoje", "koji znakovi", "kakvi znakovi",
      "znak opasnosti", "znak naredbe", "znak obavijesti",
      "trokutasti znak", "okrugli znak", "pravokutni znak",
      "znacenje znakova", "značenje znakova", "sto znaci znak", "što znači znak",
      "prepoznati znak", "nauciti znakove", "naučiti znakove"
    ],
    title: "🚸 PROMETNI ZNAKOVI - 3 VRSTE",
    response: `🚸 PROMETNI ZNAKOVI - 3 GLAVNE VRSTE:

⚠️ 1. ZNAKOVI OPASNOSTI
• Oblik: TROKUT s vrhom prema gore
• Rub: CRVENA boja
• Pozadina: BIJELA ili ŽUTA
• Značenje: UPOZORAVAJU na opasnost!
• Primjeri: Opasan zavoj, Djeca, Biciklisti, Klizav kolnik

🛑 2. ZNAKOVI IZRIČITIH NAREDBI
• Oblik: KRUG (okrugli)
• Rub: CRVENA boja (zabrane) ili PLAVA pozadina (obveze)
• Značenje: ZABRANJUJU ili NAREĐUJU!
• Primjeri: STOP, Zabranjeno za bicikle, Ograničenje brzine

ℹ️ 3. ZNAKOVI OBAVIJESTI
• Oblik: PRAVOKUTNIK ili KVADRAT
• Boja: najčešće PLAVA ili ZELENA pozadina
• Značenje: Daju KORISNE INFORMACIJE
• Primjeri: Pješački prijelaz, Parkiralište, Biciklistička staza

📝 KAKO ZAPAMTITI:
• TROKUT = OPASNOST (pazi!)
• KRUG = NAREDBA (moraš slušati!)
• PRAVOKUTNIK = OBAVIJEST (informacija)`,
    followUp: ["Pokaži primjere znakova opasnosti", "Što znači STOP znak?", "Što znači znak s biciklom?"]
  },

  {
    id: "znakovi_opasnosti",
    keywords: [
      "znak opasnosti", "znakovi opasnosti", "opasan", "opasnost",
      "trokut", "trokutasti", "trokut znak", "trokutasti znak",
      "crveni rub", "crveni trokut", "upozorenje", "upozorava",
      "opasan zavoj", "djeca", "klizav kolnik", "radovi",
      "prijelaz biciklista", "prijelaz pješaka", "životinje"
    ],
    title: "⚠️ ZNAKOVI OPASNOSTI",
    response: `⚠️ ZNAKOVI OPASNOSTI:

📐 OBLIK: Trokut s vrhom prema GORE
🔴 RUB: Crvene boje
⬜ POZADINA: Bijela ili žuta

🎯 ZNAČENJE:
UPOZORAVAJU da je na cesti ili pokraj nje neka OPASNOST!
Moraš biti OPREZAN i prilagoditi vožnju!

📋 PRIMJERI:
• ⚠️ Opasan zavoj (lijevo/desno)
• ⚠️ Opasne zavijutke
• ⚠️ Djeca na cesti
• ⚠️ Prijelaz biciklista
• ⚠️ Klizav kolnik
• ⚠️ Radovi na cesti
• ⚠️ Životinje na cesti
• ⚠️ Raskrižje
• ⚠️ Pad kamenja
• ⚠️ Pješaci na cesti

✅ KADA VIDIŠ ZNAK OPASNOSTI:
1. USPORI vožnju
2. Budi spreman na opasnost
3. Povećaj oprez
4. Prilagodi brzinu`,
    followUp: ["Što znači znak 'Djeca'?", "Kako se ponašati kod znaka 'Klizav kolnik'?"]
  },

  {
    id: "znakovi_naredbi",
    keywords: [
      "znak naredbe", "znakovi naredbe", "znakovi izricite naredbe", "znakovi izričite naredbe",
      "okrugli znak", "krug", "okrugli", "kruzan", "kružni",
      "zabrana", "zabranjeno", "zabranjuje", "naredba", "nareduje", "naređuje",
      "stop", "stop znak", "stani",
      "ogranicenje", "ograničenje", "ogranicenje brzine", "ograničenje brzine",
      "jednosmjerna", "jednosmjerno", "slijepa ulica",
      "zabranjeno za bicikle", "zabranjen prolaz"
    ],
    title: "🛑 ZNAKOVI IZRIČITIH NAREDBI",
    response: `🛑 ZNAKOVI IZRIČITIH NAREDBI:

⭕ OBLIK: KRUG (okrugli)
🔴 RUB: Crveni (znakovi zabrane)
🔵 POZADINA: Plava (znakovi obveze)

🎯 ZNAČENJE:
ZABRANJUJU ili NAREĐUJU nešto!
MORAŠ ih poštovati - to je ZAKON!

🚫 ZNAKOVI ZABRANE (crveni rub):
• 🛑 STOP - obavezno zaustavljanje
• 🚳 Zabranjeno za bicikle
• ⛔ Zabranjen prolaz u oba smjera
• 🚷 Zabranjen prolaz za pješake
• ⏱️ Ograničenje brzine (npr. 30 km/h)

✅ ZNAKOVI OBVEZE (plava pozadina):
• 🚴 Biciklistička staza (MORAŠ voziti tamo)
• ➡️ Obvezan smjer
• 🔄 Kružni tok

⚠️ STOP ZNAK - NAJVAŽNIJI:
1. MORAŠ se POTPUNO zaustaviti
2. Propusti SVA vozila
3. Tek onda nastavi

📊 Nepoštivanje STOP znaka čest je uzrok nesreća!`,
    followUp: ["Što ako nema STOP znaka?", "Kada smijem proći na STOP?"]
  },

  {
    id: "znakovi_obavijesti",
    keywords: [
      "znak obavijesti", "znakovi obavijesti", "obavijest",
      "pravokutni znak", "pravokutnik", "kvadratni", "kvadrat",
      "informacija", "informira", "pokazuje", "oznacava", "označava",
      "parkiraliste", "parkiralište", "parking",
      "pjesacki prijelaz znak", "pješački prijelaz znak",
      "zona smirenog prometa", "pješačka zona", "pesacka zona"
    ],
    title: "ℹ️ ZNAKOVI OBAVIJESTI",
    response: `ℹ️ ZNAKOVI OBAVIJESTI:

📐 OBLIK: Pravokutnik ili kvadrat
🔵 BOJA: Najčešće plava ili zelena pozadina
⬜ BIJELA pozadina za neke znakove

🎯 ZNAČENJE:
Daju KORISNE INFORMACIJE o cesti i okolini.
Pomažu ti se snalaziti u prometu.

📋 PRIMJERI:
• 🅿️ Parkiralište
• 🚶 Pješački prijelaz
• 🚴 Biciklistička staza
• 🏥 Bolnica u blizini
• ⛽ Benzinska postaja
• 🏨 Smještaj
• 📍 Smjer do grada/mjesta
• 🚸 Zona smirenog prometa
• 🚶 Pješačka zona

📌 ZONA SMIRENOG PROMETA:
• Voziš brzinom HODA
• Djeca se smiju igrati
• Maksimalno OPREZNO!

📌 PJEŠAČKA ZONA:
• Samo za pješake
• Biciklom NE SMIJEŠ voziti (osim ako je dopušteno)`,
    followUp: ["Što je zona smirenog prometa?", "Smijem li voziti biciklom u pješačkoj zoni?"]
  },

  // =================== PRAVILA VOŽNJE ===================
  {
    id: "pravila_osnovna",
    keywords: [
      "pravila", "pravilo", "pravilima", "pravilom",
      "pravila voznje", "pravila vožnje", "kako voziti",
      "osnovna pravila", "bitna pravila", "vazna pravila", "važna pravila",
      "voznja biciklom", "vožnja biciklom", "voziti bicikl",
      "kako se vozi", "kako da vozim", "kako vozim",
      "ponasanje", "ponašanje", "ponasanje u prometu", "ponašanje u prometu",
      "propisi", "prometni propisi", "zakon"
    ],
    title: "📋 OSNOVNA PRAVILA VOŽNJE",
    response: `📋 OSNOVNA PRAVILA VOŽNJE BICIKLOM:

✅ MORAŠ:
1. Voziti DESNOM stranom kolnika
2. Voziti što bliže DESNOM RUBU
3. Voziti JEDAN IZA DRUGOGA (ne usporedo!)
4. SIGNALIZIRATI skretanje rukom
5. Koristiti biciklističku stazu/traku ako postoji
6. Prije skretanja provjeriti preko RAMENA
7. Prilagoditi BRZINU uvjetima na cesti

❌ ZABRANJENO JE:
• Voziti bez ruku na upravljaču
• Prevoziti osobu bez posebnog sjedala
• Koristiti mobitel dok voziš
• Koristiti slušalice na OBA uha
• Držati se za drugo vozilo
• Krivudati po cesti
• Voziti noću bez svjetala
• Voziti pod utjecajem alkohola

📌 MINIMALNA DOB:
12 godina za samostalno upravljanje biciklom u prometu

📊 STATISTIKA: U Hrvatskoj godišnje strada više od 100 biciklista!`,
    followUp: ["Zašto jedan iza drugog?", "Što ako nema biciklističke staze?", "Kako signalizirati rukom?"]
  },

  {
    id: "desna_strana",
    keywords: [
      "desna strana", "desnom stranom", "desni rub",
      "kojom stranom", "koja strana", "po kojoj strani",
      "vozi desno", "drzi se desno", "drži se desno",
      "lijeva strana", "lijevom stranom", "voziti lijevo",
      "smjer voznje", "smjer vožnje", "kuda voziti"
    ],
    title: "➡️ VOŽNJA DESNOM STRANOM",
    response: `➡️ VOŽNJA DESNOM STRANOM:

✅ PRAVILO:
Biciklom UVIJEK voziš DESNOM stranom kolnika, što BLIŽE desnom rubu!

🎯 ZAŠTO DESNO?
• U Hrvatskoj se vozi DESNOM stranom
• Tako te vozila mogu sigurno prestići
• Manja je opasnost od sudara
• Vidiš vozila koja dolaze iz suprotnog smjera

📏 KOLIKO BLIZU RUBA?
• Dovoljno blizu da te mogu prestići
• Dovoljno daleko od ruba da ne padneš (rupice, šljunak)
• Otprilike 1 metar od ruba

⚠️ IZNIMKE:
• Kada obilaziš prepreku
• Kada skrećeš lijevo
• Na biciklističkoj stazi (tamo su posebna pravila)

❌ ZABRANJENO:
• Voziti lijevom stranom
• Voziti po sredini ceste
• Krivudati lijevo-desno

📊 Vožnja lijevom stranom je čest uzrok nesreća!`,
    followUp: ["Kako obići prepreku?", "Što ako nema mjesta desno?"]
  },

  {
    id: "jedan_iza_drugog",
    keywords: [
      "jedan iza drugoga", "jedan iza drugog", "jedan pored drugog",
      "usporedo", "dva bicikla", "dva biciklista", "više biciklista",
      "u koloni", "u nizu", "u redu", "formacija",
      "prijatelj", "s prijateljem", "voziti zajedno", "grupna voznja", "grupna vožnja"
    ],
    title: "👥 JEDAN IZA DRUGOGA",
    response: `👥 VOŽNJA JEDAN IZA DRUGOGA:

✅ PRAVILO:
Biciklisti MORAJU voziti JEDAN IZA DRUGOGA, nikako usporedo!

🎯 ZAŠTO?
• Da vas automobili mogu sigurno prestići
• Da ne zauzimate previše ceste
• Da imate dovoljno mjesta za manevriranje
• Da se izbjegnu sudari s drugim vozilima

❌ ZABRANJENO:
• Voziti JEDAN PORED DRUGOGA
• Voziti u više od jednog reda
• Blokirati promet drugim vozilima

⚠️ IZNIMKA:
Na širokoj biciklističkoj stazi možete voziti usporedo AKO ima dovoljno mjesta.

📏 RAZMAK:
• Drži razmak od biciklista ispred tebe
• Razmak mora biti dovoljan za sigurno kočenje
• Što brže voziš = veći razmak!

💬 KOMUNIKACIJA:
• Dogovorite signale s prijateljima
• Upozorite jedni druge na opasnosti
• Vozite istom brzinom`,
    followUp: ["Koliki razmak držati?", "Kako voziti u grupi?"]
  },

  {
    id: "zabranjeno",
    keywords: [
      "zabranjeno", "zabrana", "zabranjuje", "ne smije", "ne smijes", "ne smiješ",
      "sto ne smijem", "što ne smijem", "sta ne smijem", "šta ne smijem",
      "ne mozes", "ne možeš", "nije dozvoljeno", "nije dopusteno", "nije dopušteno",
      "kazna", "kazne", "kaznit", "kazniti",
      "prekrsaj", "prekršaj", "krsenje", "kršenje"
    ],
    title: "🚫 ŠTO JE ZABRANJENO",
    response: `🚫 ŠTO JE ZABRANJENO BICIKLISTIMA:

❌ ZABRANJENO JE:
1. Voziti BEZ RUKU na upravljaču
2. Skidati OBJE ruke s upravljača
3. Prevoziti osobu bez POSEBNOG SJEDALA
4. Voziti s NEISPRAVNIM kočnicama
5. Voziti NOĆU bez svjetala
6. DRŽATI SE za drugo vozilo u pokretu
7. Voziti pod utjecajem ALKOHOLA
8. Koristiti MOBITEL tijekom vožnje
9. Koristiti SLUŠALICE na OBA uha
10. KRIVUDATI po cesti
11. Voziti SLALOM između vozila
12. UGROŽAVATI druge sudionike u prometu

💰 KAZNE:
• Slušalice na oba uha: 30 EUR
• Korištenje mobitela: kazna
• Vožnja pod utjecajem alkohola: velika kazna!

⚠️ POSLJEDICE:
• Novčana kazna
• Oduzimanje bicikla
• Ozljede ili smrt!

📊 STATISTIKA: Svaka peta nesreća biciklista povezana je s alkoholom!`,
    followUp: ["Kolika je kazna za mobitel?", "Smijem li jednu slušalicu?"]
  },

  {
    id: "mobitel_slusalice",
    keywords: [
      "mobitel", "mobitela", "mobitelom", "telefon", "telefona",
      "slusalice", "slušalice", "slusalica", "slušalica",
      "koristiti mobitel", "pisati poruke", "tipkati",
      "glazba", "muzika", "slusati glazbu", "slušati glazbu",
      "razgovarati", "telefonirati", "zvati", "poziv",
      "jedna slusalica", "jedna slušalica", "oba uha"
    ],
    title: "📱 MOBITEL I SLUŠALICE",
    response: `📱 MOBITEL I SLUŠALICE:

❌ MOBITEL - ZABRANJENO:
• Držati mobitel u ruci dok voziš
• Tipkati poruke
• Gledati u ekran
• Bilo što što smanjuje pažnju

✅ DOPUŠTENO:
• Mobitel u džepu (isključen ili na vibri)
• Zaustaviti se pa koristiti mobitel

❌ SLUŠALICE - ZABRANJENO:
• Nositi slušalice NA OBA UHA
• Bežične slušalice u oba uha
• Bilo što što blokira oba uha

✅ DOPUŠTENO:
• JEDNA slušalica u JEDNOM uhu
• Drugo uho MORA čuti promet!

💰 KAZNA:
Slušalice na oba uha = 30 EUR

🎯 ZAŠTO JE OPASNO?
• Ne čuješ automobile iza sebe
• Ne čuješ trube i upozorenja
• Smanjena je koncentracija
• Sporije reagiraš

📊 STATISTIKA: Korištenje mobitela povećava rizik od nesreće 4 puta!`,
    followUp: ["Smijem li slušati navigaciju?", "Što ako me netko zove?"]
  },

  {
    id: "minimalna_dob",
    keywords: [
      "koliko godina", "godina", "dob", "starost",
      "minimalna dob", "minimalno godina", "najmanje godina",
      "kad smijem", "od kad smijem", "kada mogu",
      "djeca", "dijete", "djecji", "dječji",
      "samostalno", "sam voziti", "bez roditelja", "bez nadzora",
      "pratnja", "s odraslima", "odrasla osoba"
    ],
    title: "🎂 MINIMALNA DOB",
    response: `🎂 MINIMALNA DOB ZA VOŽNJU:

📌 BICIKL:
• SAMOSTALNO u prometu: 12 GODINA
• Mlađi od 12: SAMO uz pratnju odrasle osobe

📌 OPS (ROMOBIL):
• SAMOSTALNO: 12 GODINA
• Mlađi od 12: SAMO uz pratnju

👶 DJECA MLAĐA OD 12 GODINA:
• Mogu voziti samo UZ NADZOR odrasle osobe
• Odrasla osoba mora biti u blizini
• Preporučuje se vožnja na sigurnim mjestima

🎓 BICIKLISTIČKI ISPIT:
• Polaže se u školi (najčešće 5. razred)
• Teorijski i praktični dio
• Dokazuje da znaš pravila

⚠️ IZNIMKE:
• Na privatnom zemljištu - nema dobne granice
• U dvorištu - nema ograničenja
• Na dječjim igralištima - slobodno

📌 KACIGA:
• OBAVEZNA do 16 godina za bicikliste
• OBAVEZNA za SVE vozače OPS-a`,
    followUp: ["Što je biciklistički ispit?", "Mogu li voziti u dvorištu?"]
  },

  // =================== SIGNALIZACIJA ===================
  {
    id: "signalizacija_rukom",
    keywords: [
      "signalizacija", "signaliziraj", "signalizirati", "signaliziranje",
      "ruka", "rukom", "ruke", "rukama",
      "pokazati", "pokazivanje", "najaviti", "najava",
      "skretanje", "skrecem", "skrećem", "skrenuti",
      "lijevo", "desno", "zaustavljanje",
      "kako signalizirati", "kako pokazati", "kako najaviti"
    ],
    title: "✋ SIGNALIZACIJA RUKOM",
    response: `✋ SIGNALIZACIJA RUKOM:

➡️ SKRETANJE DESNO:
• Ispruži DESNU ruku u stranu
• Drži je vodoravno
• Signaliziraj PRIJE skretanja

⬅️ SKRETANJE LIJEVO:
• Ispruži LIJEVU ruku u stranu
• Drži je vodoravno
• Signaliziraj PRIJE skretanja

🛑 KOČENJE/ZAUSTAVLJANJE:
• Podigni LIJEVU ruku GORE
• Dlan okrenut naprijed
• To znači "stajem!"

📋 REDOSLIJED PRIJE SKRETANJA:
1. POGLEDAJ preko ramena (provjeri uvjete)
2. SIGNALIZIRAJ rukom
3. Drži ruku dok se ne približiš skretanju
4. Vrati obje ruke na upravljač
5. SKRENI

⚠️ VAŽNO:
• Signaliziraj DOVOLJNO RANO
• Drži ruku dok ne budeš siguran da su te vidjeli
• Ne skreći naglo bez signalizacije
• Za skretanje ti trebaju obje ruke na upravljaču

📊 Nesignaliziranje je čest uzrok nesreća!`,
    followUp: ["Kada početi signalizirati?", "Što ako me nitko ne vidi?"]
  },

  {
    id: "skretanje_lijevo",
    keywords: [
      "skretanje lijevo", "skrecem lijevo", "skrećem lijevo",
      "skrenuti lijevo", "skrenut lijevo",
      "lijevi skretanje", "na lijevo", "nalevo",
      "kako skrenuti lijevo", "pravila skretanja lijevo"
    ],
    title: "⬅️ SKRETANJE LIJEVO",
    response: `⬅️ SKRETANJE LIJEVO - NAJOPASNIJI MANEVAR:

⚠️ ZAŠTO JE OPASNO?
• Moraš prijeći preko prometne trake
• Vozila idu iz suprotnog smjera
• Vozila te mogu prestići dok skrećeš

📋 KORACI ZA SIGURNO SKRETANJE:
1. POGLEDAJ unatrag preko LIJEVOG ramena
2. SIGNALIZIRAJ lijevom rukom
3. Pomakni se prema SREDINI ceste (ako je sigurno!)
4. PROPUSTI sva vozila iz suprotnog smjera
5. PROPUSTI vozila koja idu ravno
6. Skreni kad je sigurno

🔄 NA RASKRIŽJU:
• Vozila koja skreću lijevo imaju ZADNJU prednost
• Prvo prolaze: vozila ravno, pa desno, pa lijevo

⚠️ VAŽNO:
• Nikad ne skreći naglo
• Uvjeri se da te vozila iza vide
• Ako nije sigurno - stani i čekaj

📌 ALTERNATIVA:
Na velikim raskrižjima možeš:
1. Prijeći ravno
2. Stati i okrenuti bicikl
3. Prijeći drugu cestu kao pješak`,
    followUp: ["Kako na velikom raskrižju?", "Što ako ima puno prometa?"]
  },

  // =================== NOĆNA VOŽNJA ===================
  {
    id: "nocna_voznja",
    keywords: [
      "noc", "noć", "nocu", "noću", "nocna", "noćna",
      "mrak", "mraka", "u mraku", "po mraku",
      "vece", "večer", "navecer", "navečer",
      "smanjena vidljivost", "slaba vidljivost",
      "svjetlo", "svjetla", "lampa", "lampe",
      "voznja nocu", "vožnja noću", "voziti nocu", "voziti noću",
      "sto trebam nocu", "što trebam noću"
    ],
    title: "🌙 NOĆNA VOŽNJA",
    response: `🌙 VOŽNJA NOĆU I U UVJETIMA SMANJENE VIDLJIVOSTI:

✅ OBAVEZNA OPREMA ZA NOĆNU VOŽNJU:

💡 SVJETLA:
• PREDNJE svjetlo BIJELE boje
• STRAŽNJE svjetlo CRVENE boje

🔴 REFLEKTORI (katadiopteri):
• Stražnji - CRVENE boje
• Prednji - BIJELE ili ŽUTE boje
• Bočni na kotačima - BIJELI ili ŽUTI
• Na pedalama - ŽUTE ili NARANČASTE

👕 ODJEĆA:
• Reflektirajući prsluk ILI
• Reflektirajuća odjeća ILI
• Druga reflektirajuća oznaka

⚠️ ZAŠTO JE VAŽNO?
• Noću te vozači TEŠKO vide
• Svjetla pokazuju gdje si i kamo ideš
• Reflektori "svijetle" kad ih obasja svjetlo

📊 STATISTIKA:
• 60% nesreća biciklista noću je zbog loše vidljivosti!
• S ispravnom opremom si vidljiv do 200 metara!

❌ BEZ SVJETALA NOĆU = ZABRANJENO!`,
    followUp: ["Mogu li koristiti lampicu s mobitela?", "Kako provjeriti rade li svjetla?"]
  },

  // =================== RASKRIŽJE ===================
  {
    id: "raskrizje",
    keywords: [
      "raskrizje", "raskrižje", "raskrizju", "raskrižju",
      "krizanje", "križanje", "krizanju", "križanju",
      "prednost", "prednost prolaska", "pravo prolaska",
      "tko ima prednost", "ko ima prednost", "koji ima prednost",
      "pravilo desne strane", "desna strana", "s desne strane",
      "prolazak", "prolaz", "redoslijed prolaska",
      "ponasanje na raskrizju", "ponašanje na raskrižju",
      "kako na raskrizje", "kako na raskrižje"
    ],
    title: "🔀 RASKRIŽJE I PREDNOST PROLASKA",
    response: `🔀 PONAŠANJE NA RASKRIŽJU:

⭐ PRAVILO DESNE STRANE:
Prednost ima vozilo koje dolazi S DESNE STRANE!
(osim ako znakovi ne određuju drugačije)

📋 REDOSLIJED PROLASKA:
1. Vozila na GLAVNOJ cesti (imaju prednost)
2. Vozila koja skreću DESNO
3. Vozila koja idu RAVNO
4. Vozila koja skreću LIJEVO (zadnji!)

🚦 AKO IMA SEMAFOR:
• CRVENO = stani
• ŽUTO = pripremi se (ne ulazi!)
• ZELENO = možeš proći (ali provjeri!)

📋 KORACI NA RASKRIŽJU:
1. USPORI vožnju
2. POGLEDAJ lijevo i desno
3. Po potrebi se ZAUSTAVI
4. PROPUSTI vozila koja imaju prednost
5. Nastavi kad je SIGURNO

⚠️ POSEBNE SITUACIJE:
• Žuto treptavo svjetlo = OPREZ, pravilo desne strane
• Crveno + žuto = uskoro zeleno, pripremi se
• Policajac regulira = slušaj njega, ne semafor!

📊 Nepoštivanje prednosti je čest uzrok nesreća!`,
    followUp: ["Što ako nema znakova?", "Kako prepoznati glavnu cestu?"]
  },

  {
    id: "semafor",
    keywords: [
      "semafor", "semafora", "semaforu", "semafori",
      "svjetlo", "svjetla na semaforu", "signalno",
      "crveno", "zuto", "žuto", "zeleno",
      "crveno svjetlo", "zeleno svjetlo", "zuto svjetlo", "žuto svjetlo",
      "treptanje", "trepce", "trepće", "treptavo",
      "sto znaci crveno", "što znači crveno",
      "sto znaci zeleno", "što znači zeleno"
    ],
    title: "🚦 SEMAFOR",
    response: `🚦 SEMAFOR - PROMETNA SVJETLA:

🔴 CRVENO SVJETLO:
• OBAVEZNO zaustavljanje!
• Čekaj dok ne upali zeleno
• Ne prelazi ni kad nema nikoga

🟡 ŽUTO SVJETLO:
• PRIPREMA - uskoro crveno
• Ako si već na raskrižju - prođi
• Ako nisi - STANI

🟢 ZELENO SVJETLO:
• SLOBODAN prolaz
• ALI: provjeri je li raskrižje slobodno!
• Pazi na pješake i druga vozila

⚠️ POSEBNA SVJETLA:

🟡 ŽUTO TREPTAVO:
• Semafor NE RADI normalno
• OPREZ - vrijedi pravilo DESNE STRANE
• Pogledaj lijevo-desno

🔴+🟡 CRVENO I ŽUTO ZAJEDNO:
• Uskoro će upaliti zeleno
• Pripremi se za kretanje
• Još uvijek NE kreni!

📌 SEMAFOR ZA BICIKLISTE:
Neki semafori imaju posebno svjetlo za bicikliste - tada slijedi SVOJE svjetlo!`,
    followUp: ["Što ako je semafor u kvaru?", "Mogu li proći na crveno ako nema nikoga?"]
  },

  // =================== BICIKLISTIČKA STAZA I TRAKA ===================
  {
    id: "biciklisticka_staza_traka",
    keywords: [
      "staza", "staze", "stazom", "stazu",
      "traka", "trake", "trakom", "traku",
      "biciklisticka staza", "biciklistička staza",
      "biciklisticka traka", "biciklistička traka",
      "razlika staza traka", "staza ili traka",
      "gdje voziti", "kuda voziti",
      "odvojena", "na kolniku", "posebna povrsina", "posebna površina"
    ],
    title: "🛤️ BICIKLISTIČKA STAZA vs TRAKA",
    response: `🛤️ BICIKLISTIČKA STAZA vs BICIKLISTIČKA TRAKA:

🟦 BICIKLISTIČKA STAZA:
• ODVOJENA od kolnika
• Može biti na razini nogostupa
• Ima fizičku prepreku (rubnik, travnjak...)
• SIGURNIJA je jer nema auta pokraj

🟨 BICIKLISTIČKA TRAKA:
• DIO KOLNIKA (na istoj razini)
• Odvojena samo CRTOM na cesti
• Auti voze pokraj tebe
• Treba biti OPREZNIJI

✅ AKO POSTOJI STAZA ILI TRAKA:
• MORAŠ ih koristiti!
• Zabranjeno voziti po kolniku ako postoji staza
• Zabranjeno voziti po nogostupu

📌 KAKO IH PREPOZNATI:
• Prometni znak s biciklom
• Plava boja znaka = biciklistička staza
• Crta na cesti = biciklistička traka
• Često obojene plavom ili crvenom bojom

🛴 OPS (ROMOBILI):
• Također koriste biciklističke staze i trake!
• Ista pravila kao za bicikliste`,
    followUp: ["Što ako nema staze?", "Smijem li voziti po nogostupu?"]
  },

  // =================== OPS (ROMOBILI) ===================
  {
    id: "ops_romobil",
    keywords: [
      "ops", "romobil", "romobila", "romobilom",
      "elektricni romobil", "električni romobil", "e-romobil",
      "osobno prijevozno sredstvo", "osobnog prijevoznog sredstva",
      "skuter", "skutera", "električni skuter", "elektricni skuter",
      "hoverboard", "segway",
      "pravila za romobil", "pravila za ops"
    ],
    title: "🛴 OPS - OSOBNO PRIJEVOZNO SREDSTVO",
    response: `🛴 OPS - OSOBNO PRIJEVOZNO SREDSTVO (ROMOBIL):

📌 ŠTO JE OPS?
• Vozilo BEZ sjedećeg mjesta
• Elektromotor do 0,6 kW
• Maksimalna brzina 25 km/h
• Npr. električni romobil, hoverboard

✅ OBAVEZNA OPREMA:
• KACIGA - za SVE vozače (bez obzira na dob!)
• Reflektirajuća odjeća NOĆU

📋 PRAVILA ZA OPS:
• PRVENSTVENO voziti biciklističkom stazom/trakom
• Ako nema staze - smije po nogostupu (OPREZNO!)
• Brzina prilagođena pješacima
• Minimalna dob: 12 GODINA

⚠️ RAZLIKA OD BICIKLA:
• Kaciga OBAVEZNA za SVE (ne samo do 16 god.)
• Može na nogostup ako nema biciklističke staze
• Maksimalna brzina 25 km/h

❌ ZABRANJENO:
• Voziti brže od 25 km/h
• Voziti bez kacige
• Voziti mlađi od 12 godina
• Ugrožavati pješake na nogostupu

📊 OPS je sve popularniji - ali i sve više nesreća!`,
    followUp: ["Gdje mogu voziti romobil?", "Treba li romobil imati svjetla?"]
  },

  // =================== PJEŠACI ===================
  {
    id: "pjesaci",
    keywords: [
      "pjesak", "pješak", "pjesaci", "pješaci",
      "pjesacki", "pješački", "pjesacki prijelaz", "pješački prijelaz",
      "zebra", "zebre", "prelazak", "prelaziti",
      "hodanje", "hodati", "setnja", "šetnja",
      "nogostup", "plocnik", "pločnik", "trotuar",
      "prednost pjesaka", "prednost pješaka"
    ],
    title: "🚶 PJEŠACI I PJEŠAČKI PRIJELAZ",
    response: `🚶 PJEŠACI I PJEŠAČKI PRIJELAZ:

📌 TKO JE PJEŠAK?
Osoba koja sudjeluje u prometu, a NE upravlja vozilom niti se prevozi.

🦓 PJEŠAČKI PRIJELAZ ("ZEBRA"):
• Mjesto za siguran prelazak pješaka
• Obilježen bijelim crtama ("zebre")
• Pješaci imaju PREDNOST na zebri!

✅ KAO BICIKLIST MORAŠ:
• USPORITI ispred pješačkog prijelaza
• PROPUSTITI pješake koji prelaze
• STATI ako pješak čeka da prijeđe
• Nikad ne voziti preko zebre kao biciklist!

🚴➡️🚶 PRELAZAK ZEBRE S BICIKLOM:
• SIĐI s bicikla
• GURAJ bicikl
• Prijeđi kao PJEŠAK
• Tek onda nastavi voziti

⚠️ PJEŠACI IZVAN NASELJA:
• Hodaju LIJEVOM stranom ceste
• Tako vide vozila koja dolaze
• Noću nose reflektirajuću oznaku

📊 Djeca do 12 godina najčešće stradavaju kao pješaci ili biciklisti!`,
    followUp: ["Smijem li voziti preko zebre?", "Što ako pješak ne gleda?"]
  },

  // =================== POJMOVI ===================
  {
    id: "pojmovi_cesta",
    keywords: [
      "cesta", "ceste", "cestom", "cestu",
      "ulica", "ulice", "ulicom",
      "sto je cesta", "što je cesta", "sta je cesta",
      "definicija ceste", "pojam cesta",
      "javna cesta", "nerazvrstana cesta"
    ],
    title: "🛣️ CESTA",
    response: `🛣️ CESTA - DEFINICIJA:

📖 CESTA je:
• Svaka JAVNA cesta
• ULICE u naselju
• NERAZVRSTANE ceste na kojima se obavlja promet

📌 DIJELOVI CESTE:
• KOLNIK - dio za vozila
• NOGOSTUP - dio za pješake
• BANKINA - rub ceste
• BICIKLISTIČKA STAZA - za bicikliste

🚗 NA CESTI SE ODVIJA:
• Promet vozila
• Promet pješaka
• Promet biciklista

⚠️ PRIVATNE CESTE:
• Na privatnom zemljištu
• Pravila prometa ne vrijede
• Ali: oprez je uvijek potreban!`,
    followUp: ["Što je kolnik?", "Što je nogostup?"]
  },

  {
    id: "pojmovi_kolnik",
    keywords: [
      "kolnik", "kolnika", "kolniku", "kolnikom",
      "sto je kolnik", "što je kolnik", "sta je kolnik",
      "definicija kolnika", "pojam kolnik",
      "prometna traka", "prometne trake", "trak"
    ],
    title: "🛣️ KOLNIK",
    response: `🛣️ KOLNIK - DEFINICIJA:

📖 KOLNIK je:
Dio cestovne površine namijenjen u PRVOM REDU za promet VOZILA.

📌 KOLNIK SE DIJELI NA:
• PROMETNE TRAKE - za svaki smjer vožnje
• RAZDJELNU CRTU - dijeli smjerove

🚗 KOLNIKOM SE KREĆU:
• Automobili
• Motocikli
• Bicikli (desnom stranom!)
• Ostala vozila

❌ KOLNIKOM SE NE KREĆU:
• Pješaci (koriste nogostup)
• Igrači (igra nije dozvoljena na kolniku!)

⚠️ BICIKL NA KOLNIKU:
• Voziš DESNOM stranom
• Što BLIŽE desnom rubu
• Ako postoji biciklistička staza - koristiš nju!`,
    followUp: ["Što je prometna traka?", "Smijem li voziti po sredini kolnika?"]
  },

  {
    id: "pojmovi_nogostup",
    keywords: [
      "nogostup", "nogostupa", "nogostupu", "nogostupom",
      "plocnik", "pločnik", "trotuar",
      "sto je nogostup", "što je nogostup", "sta je nogostup",
      "definicija nogostupa", "pojam nogostup",
      "hodnik za pjesake", "hodnik za pješake"
    ],
    title: "🚶 NOGOSTUP",
    response: `🚶 NOGOSTUP - DEFINICIJA:

📖 NOGOSTUP je:
Posebno uređena prometna površina namijenjena za kretanje PJEŠAKA, koja NIJE u razini s kolnikom ili je od kolnika ODVOJENA na drugi način.

📌 ZNAČAJKE:
• VIŠI od kolnika (ima rubnik)
• Ili ODVOJEN na drugi način
• Samo za PJEŠAKE

🚶 NOGOSTUPOM SE KREĆU:
• Pješaci
• Osobe u invalidskim kolicima
• Roditelji s dječjim kolicima

❌ NOGOSTUPOM SE NE SMIJU KRETATI:
• BICIKLI (osim ako gurate)
• Automobili
• Motocikli

⚠️ IZNIMKE ZA BICIKLISTE:
• Ako nema biciklističke staze - možeš GURATI bicikl
• Djeca do 10 godina SMIJU voziti nogostupom
• OPS (romobil) smije ako nema biciklističke staze

📌 PRAVILA:
Ne parkiraj bicikl tako da smeta pješacima!`,
    followUp: ["Smijem li voziti bicikl po nogostupu?", "Kako gurati bicikl po nogostupu?"]
  },

  {
    id: "pojmovi_bicikl",
    keywords: [
      "sto je bicikl", "što je bicikl", "sta je bicikl",
      "definicija bicikla", "pojam bicikl",
      "bicikl prema zakonu", "bicikl zakon"
    ],
    title: "🚲 BICIKL - DEFINICIJA",
    response: `🚲 BICIKL - DEFINICIJA:

📖 BICIKL je:
Vozilo koje ima NAJMANJE DVA KOTAČA i koje se pokreće ISKLJUČIVO snagom vozača.

📌 ZNAČAJKE:
• Minimalno 2 kotača
• Pogon: ljudska snaga (pedale)
• Nema motor (osim pomoćnog elektromotora)

🚴 VRSTE BICIKALA:
• Obični bicikl
• Električni bicikl (do 0,25 kW pomoćnog motora)
• Dječji bicikl
• Tandem (za dvije osobe)
• Tricikl (tri kotača)

⚠️ BICIKL JE VOZILO!
• Vrijede prometna pravila
• Moraš imati obaveznu opremu
• Moraš poštivati znakove
• Moraš imati 12 godina za samostalnu vožnju

📌 RAZLIKA OD OPS-a:
• OPS ima elektromotor
• OPS nema sjedeće mjesto
• OPS maksimalno 25 km/h`,
    followUp: ["Je li romobil bicikl?", "Je li električni bicikl bicikl?"]
  },

  // =================== ZONE ===================
  {
    id: "zona_smirenog_prometa",
    keywords: [
      "zona smirenog prometa", "smireni promet", "zona smirenog",
      "brzina hoda", "brzina pesaka", "brzina pješaka",
      "igra djece", "djeca se igraju", "igranje na cesti",
      "30 zona", "zona 30"
    ],
    title: "🏘️ ZONA SMIRENOG PROMETA",
    response: `🏘️ ZONA SMIRENOG PROMETA:

📖 DEFINICIJA:
Područje u naselju obilježeno prometnim znakom u kojem se vozila NE SMIJU kretati brzinom većom od BRZINE HODA PJEŠAKA.

📌 PRAVILA:
• Maksimalna brzina = brzina HODA
• DJEČJA IGRA je SVUGDJE dopuštena
• Pješaci imaju APSOLUTNU prednost
• Biciklisti voze VRLO POLAGANO

🎯 KARAKTERISTIKE:
• Najčešće u stambenim naseljima
• Blizu škola i vrtića
• Na dječjim igralištima u blizini
• Označeno posebnim znakom

⚠️ KAKO SE PONAŠATI:
• Vozi brzinom HODANJA (4-5 km/h)
• Budi spreman stati u bilo kojem trenutku
• Pazi na djecu koja se igraju
• Daj prednost SVIMA

📌 ZNAK:
Pravokutni znak s prikazom djece i kuća`,
    followUp: ["Kolika je brzina hoda?", "Smijem li voziti biciklom u zoni?"]
  },

  {
    id: "pjesacka_zona",
    keywords: [
      "pjesacka zona", "pješačka zona", "zona za pjesake", "zona za pješake",
      "samo za pjesake", "samo za pješake", "zabranjeno za vozila",
      "centar grada", "korzo"
    ],
    title: "🚶 PJEŠAČKA ZONA",
    response: `🚶 PJEŠAČKA ZONA:

📖 DEFINICIJA:
Područje u naselju koje je namijenjeno KRETANJU PJEŠAKA i obilježeno prometnim znakom.

❌ U PJEŠAČKOJ ZONI ZABRANJENO JE:
• Voziti bilo koje vozilo
• Voziti BICIKL
• Parkirati vozila
• Ometati pješake

✅ IZNIMKE (samo ako je dopušteno znakom):
• Dostavna vozila u određeno vrijeme
• Vozila hitnih službi
• Biciklisti AKO piše na znaku

🚴 S BICIKLOM U PJEŠAČKOJ ZONI:
• SIĐI s bicikla
• GURAJ bicikl
• Ponašaj se kao pješak

📌 GDJE SE NALAZE:
• Centar grada
• Trgovačke ulice
• Korzo
• Ispred škola i vrtića

⚠️ VAŽNO:
Prometni znak pokazuje je li iznimno dopušteno voziti biciklom!`,
    followUp: ["Mogu li gurati bicikl kroz pješačku zonu?", "Što ako žurim?"]
  },

  // =================== KAZNE ===================
  {
    id: "kazne",
    keywords: [
      "kazna", "kazne", "kaznit", "kazniti",
      "novčana kazna", "kolika kazna", "koliko kuna", "koliko eura",
      "prekrsaj", "prekršaj", "prekršaji",
      "sto ako me uhvate", "što ako me uhvate", "policija"
    ],
    title: "💰 KAZNE ZA PREKRŠAJE",
    response: `💰 KAZNE ZA PREKRŠAJE BICIKLISTA:

📋 PRIMJERI KAZNI:

🎧 SLUŠALICE NA OBA UHA:
• Kazna: 30 EUR

📱 KORIŠTENJE MOBITELA:
• Kazna prema zakonu

🌙 VOŽNJA BEZ SVJETALA NOĆU:
• Kazna + opasnost!

🍺 VOŽNJA POD UTJECAJEM ALKOHOLA:
• Visoka kazna
• Može se oduzeti bicikl

🛑 PROLAZAK NA CRVENO:
• Kazna + opasnost!

👷 VOŽNJA BEZ KACIGE (djeca do 16):
• Kazna za roditelje/skrbnike

⚠️ OSIM NOVČANE KAZNE:
• Možeš uzrokovati nesreću
• Možeš ozlijediti sebe ili druge
• Možeš odgovarati za štetu

📌 NAJBOLJA STRATEGIJA:
POŠTUJ PRAVILA = NEMA KAZNI = SIGURNA VOŽNJA!`,
    followUp: ["Može li me policija zaustaviti na biciklu?", "Što ako sam maloljetan?"]
  },

  // =================== STATISTIKA ===================
  {
    id: "statistika",
    keywords: [
      "statistika", "statistike", "podaci", "brojke",
      "nesreca", "nesreća", "nesrece", "nesreće",
      "stradavanje", "stradava", "stradali", "ozlijedeni", "ozlijeđeni",
      "koliko biciklista", "koliko nesreca", "koliko nesreća",
      "opasnost", "rizik", "smrtnost"
    ],
    title: "📊 STATISTIKA SIGURNOSTI",
    response: `📊 STATISTIKA SIGURNOSTI BICIKLISTA:

📈 OPĆI PODACI:
• U Hrvatskoj godišnje strada više od 100 biciklista
• Djeca do 12 godina najčešće stradavaju kao pješaci ili biciklisti

🪖 KACIGA:
• Kaciga smanjuje rizik od ozljede glave za 85%!
• Ozljede glave su najopasniji tip ozljeda

🌙 NOĆNA VOŽNJA:
• 60% nesreća biciklista noću događa se zbog nepostojanja ili neispravne rasvjete

🍺 ALKOHOL:
• Svaka PETA nesreća biciklista povezana je s alkoholom
• Alkohol usporava reakcije i smanjuje pažnju

📱 MOBITEL:
• Korištenje mobitela povećava rizik od nesreće 4 PUTA

🎯 NAJČEŠĆI UZROCI NESREĆA:
1. Nepoštivanje prednosti prolaska
2. Vožnja bez svjetala noću
3. Nepropisno skretanje
4. Alkohol
5. Korištenje mobitela

💡 ZAKLJUČAK:
Poštivanje pravila ZNAČAJNO smanjuje rizik od nesreće!`,
    followUp: ["Kako se zaštititi?", "Koja je najčešća ozljeda?"]
  },

  // =================== SIGURNOST ===================
  {
    id: "sigurnost_savjeti",
    keywords: [
      "sigurnost", "siguran", "sigurno", "sigurna voznja", "sigurna vožnja",
      "savjet", "savjeti", "preporuke", "preporuka",
      "kako biti siguran", "kako voziti sigurno",
      "izbjeci nesrecu", "izbjeći nesreću", "prevencija"
    ],
    title: "🛡️ SAVJETI ZA SIGURNU VOŽNJU",
    response: `🛡️ SAVJETI ZA SIGURNU VOŽNJU:

✅ PRIJE VOŽNJE:
1. Provjeri kočnice
2. Provjeri svjetla i reflektore
3. Provjeri gume (napumpane?)
4. Stavi kacigu
5. Obuci vidljivu odjeću

🚴 TIJEKOM VOŽNJE:
1. Vozi DESNOM stranom
2. SIGNALIZIRAJ rukom
3. POŠTUJ prometne znakove
4. NE koristi mobitel
5. NE koristi slušalice na oba uha
6. Drži razmak od vozila
7. Prilagodi brzinu uvjetima

👀 BUDI OPREZAN:
• Na raskrižjima
• Kod parkiranih vozila (vrata!)
• Na klizavom kolniku
• U blizini djece
• Noću i u sumrak

⚠️ PRETPOSTAVI DA TE NE VIDE:
• Uspostavi kontakt očima s vozačima
• Ne pretpostavljaj da će ti dati prednost
• Budi spreman reagirati

📌 ZLATNO PRAVILO:
Bolje stići živ nego brz!`,
    followUp: ["Što učiniti nakon nesreće?", "Kako voziti po kiši?"]
  },

  {
    id: "vremenski_uvjeti",
    keywords: [
      "kisa", "kiša", "kisno", "kišno", "mokro",
      "snijeg", "snježno", "led", "ledeno", "zima",
      "klizavo", "sklisko", "klizav kolnik",
      "vjetar", "oluja", "nevrijeme",
      "vrucina", "vrućina", "sunce", "vruce", "vruće",
      "voznja po kisi", "vožnja po kiši", "losi uvjeti", "loši uvjeti"
    ],
    title: "🌧️ VOŽNJA U LOŠIM VREMENSKIM UVJETIMA",
    response: `🌧️ VOŽNJA U LOŠIM VREMENSKIM UVJETIMA:

🌧️ KIŠA:
• Kolnik je KLIZAV - duži put kočenja!
• Smanji brzinu
• Koči RANIJE i BLAŽE
• Izbjegavaj bijele crte (klizave!)
• Pazi na lokve (mogu skrivati rupe)

❄️ SNIJEG I LED:
• IZBJEGAVAJ vožnju ako možeš
• Ekstremno klizavo!
• Gume slabo drže
• Put kočenja jako produžen

💨 VJETAR:
• Bočni vjetar te može izbaciti iz smjera
• Drži čvrsto upravljač
• Smanji brzinu

☀️ VRUĆINA:
• Pij dovoljno vode
• Izbjegavaj vožnju u najtoplijem dijelu dana
• Nosi laganu, prozračnu odjeću
• Koristi kremu za sunčanje

⚠️ OPĆA PRAVILA:
• SMANJI BRZINU u lošim uvjetima
• POVEĆAJ RAZMAK od drugih vozila
• KOČI BLAŽE i RANIJE
• Ako je preopasno - NE VOZI!`,
    followUp: ["Kako kočiti na mokrom?", "Mogu li voziti po snijegu?"]
  },

  // =================== PRAKTIČNI DIO ===================
  {
    id: "prakticni_ispit",
    keywords: [
      "prakticni", "praktični", "prakticni ispit", "praktični ispit",
      "voznja na poligonu", "vožnja na poligonu", "poligon",
      "vjezba", "vježba", "vjezbe", "vježbe",
      "zadaci", "elementi", "prepreke",
      "osmica", "slalom", "krug"
    ],
    title: "🏁 PRAKTIČNI ISPIT",
    response: `🏁 PRAKTIČNI ISPIT - VOŽNJA NA POLIGONU:

📋 ELEMENTI PRAKTIČNOG ISPITA:

1️⃣ RAVNOTEŽA:
• Vožnja u ravnoj liniji
• Vožnja jednom rukom (signalizacija)

2️⃣ SLALOM:
• Vožnja između čunjeva
• Testira kontrolu upravljača

3️⃣ OSMICA:
• Vožnja u obliku osmice
• Testira okretanje i ravnotežu

4️⃣ ZAUSTAVLJANJE:
• Pravilno kočenje
• Zaustavljanje na označenom mjestu

5️⃣ SIGNALIZACIJA:
• Pokazivanje skretanja rukom
• Lijevo i desno

6️⃣ PREPOZNAVANJE ZNAKOVA:
• Pravilno reagiranje na znakove
• Poznavanje prometnih pravila

⚠️ SAVJETI:
• Vježbaj prije ispita
• Budi opušten
• Drži pogled naprijed
• Pedale koristi glatko

📌 CILJ:
Pokazati da sigurno vladaš biciklom!`,
    followUp: ["Kako vježbati slalom?", "Što ako padnem na ispitu?"]
  },

  // =================== HITNE SITUACIJE ===================
  {
    id: "nesreca_postupak",
    keywords: [
      "nesreca", "nesreća", "nezgoda", "sudar",
      "sto napraviti", "što napraviti", "sta napraviti",
      "ako se dogodi", "u slucaju", "u slučaju",
      "ozljeda", "ozljeden", "ozlijeđen", "povrijeden", "povrijeđen",
      "prva pomoc", "prva pomoć", "pomoc", "pomoć",
      "hitna", "policija", "112", "194"
    ],
    title: "🚨 ŠTO UČINITI U SLUČAJU NESREĆE",
    response: `🚨 ŠTO UČINITI U SLUČAJU NESREĆE:

📞 VAŽNI BROJEVI:
• HITNA POMOĆ: 194
• POLICIJA: 192
• VATROGASCI: 193
• EUROPSKI BROJ: 112

📋 KORACI:

1️⃣ OSTANI MIRAN
• Ne paniciraj
• Procijeni situaciju

2️⃣ OSIGURAJ MJESTO
• Makni se s kolnika ako možeš
• Upozori druge sudionike

3️⃣ PROVJERI OZLJEDE
• Provjeri jesi li ozlijeđen
• Provjeri jesu li drugi ozlijeđeni

4️⃣ POZOVI POMOĆ
• Nazovi 112 ako je potrebno
• Javi gdje se nalazite
• Javi što se dogodilo

5️⃣ POMOZI DRUGIMA
• Ako možeš - pruži prvu pomoć
• Ne pomiči teško ozlijeđene!

6️⃣ ČEKAJ POMOĆ
• Ostani na mjestu
• Sačekaj policiju ako je potrebno

⚠️ PAMTI:
Nikad ne bježi s mjesta nesreće!`,
    followUp: ["Kako pružiti prvu pomoć?", "Što ako netko nije pri svijesti?"]
  },

  // =================== VOZILO ODOSTRAGA ===================
  {
    id: "razmak_pretjecanje",
    keywords: [
      "razmak", "razmaka", "udaljenost", "distanca",
      "pretjecanje", "pretjeci", "prestići", "pretice", "pretiče",
      "vozilo odostraga", "auto iza", "auto iza mene",
      "bocni razmak", "bočni razmak", "sigurnosni razmak",
      "koliko daleko", "koliko blizu"
    ],
    title: "📏 RAZMAK I PRETJECANJE",
    response: `📏 RAZMAK I PRETJECANJE:

🚗 RAZMAK OD VOZILA ISPRED:
• Drži dovoljan razmak za SIGURNO kočenje
• Što brže voziš = veći razmak
• Minimalno 2 sekunde vožnje iza vozila

📐 BOČNI RAZMAK:
• Automobili moraju držati min. 1,5 m od biciklista!
• Ti drži razmak od parkiranih vozila (vrata!)
• Minimum 1 metar od ruba ceste

🚴 PRETJECANJE BICIKLISTA:
• Automobil te mora prestići na sigurnoj udaljenosti
• Ti ne možeš prestići automobile!
• Možeš prestići drugog biciklistu (oprezno!)

⚠️ OPASNOSTI:
• VRATA parkiranih automobila
• Vozila koja skreću (možda te ne vide)
• Kamioni (mrtvi kut!)

📌 SAVJETI:
• Pretpostavi da te ne vide
• Uspostavi kontakt očima
• Budi spreman reagirati
• Koristi zvono ako trebaš`,
    followUp: ["Što ako me auto pritisne?", "Kako se zaštititi od otvaranja vrata?"]
  },

  // =================== BICIKL KAO PJEŠAK ===================
  {
    id: "guranje_bicikla",
    keywords: [
      "gurati bicikl", "gurati", "guranje", "guranje bicikla",
      "nositi bicikl", "nosenje", "nošenje",
      "pjesak s biciklom", "pješak s biciklom",
      "s biciklom", "neispravan bicikl",
      "kad moram gurati", "kada gurati"
    ],
    title: "🚶‍♂️ GURANJE BICIKLA",
    response: `🚶‍♂️ GURANJE BICIKLA - KADA I KAKO:

📌 KADA MORAŠ GURATI BICIKL:
• Na pješačkom prijelazu (zebri)
• U pješačkoj zoni
• Na nogostupu
• Kada bicikl nije ispravan
• Kada je preopasno voziti

🚶 PRAVILA KAD GURAŠ:
• Ponašaš se kao PJEŠAK
• Ideš po nogostupu ili desnom rubu ceste
• Imaš prednost na zebri (ako čekaš)
• Vodiš bicikl POKRAJ sebe

✅ KAKO PRAVILNO GURATI:
1. Drži bicikl s DESNE strane
2. Drži upravljač jednom rukom
3. Koristi kočnicu ako treba
4. Pazi da bicikl ne smeta drugima

⚠️ NEISPRAVAN BICIKL:
• Ako ti se pokvare kočnice - GURAJ
• Ako ti se pokvari svjetlo noću - GURAJ
• Ako ti pukne guma - GURAJ

📌 PAMTI:
Gurajući bicikl si PJEŠAK sa svim pravima i obvezama!`,
    followUp: ["Smijem li gurati po zebri?", "Što ako mi se pokvari bicikl daleko od kuće?"]
  },

  // =================== DODATNA PITANJA ===================
  {
    id: "teret_prikolica",
    keywords: [
      "teret", "tereta", "teretom", "nositi teret",
      "prikolica", "prikolice", "prikolicom",
      "torba", "torbe", "ruksak", "ruksaka",
      "kosara", "košara", "nosac", "nosač",
      "koliko tezak", "koliko težak", "maksimalna tezina", "maksimalna težina",
      "koliko sirok", "koliko širok"
    ],
    title: "📦 TERET I PRIKOLICA",
    response: `📦 PRIJEVOZ TERETA NA BICIKLU:

📏 PRAVILA ZA TERET:
• Teret smije prelaziti max. 20 cm sa svake strane
• Ne smije ometati upravljanje
• Ne smije zakrivati svjetla i reflektore
• Mora biti dobro pričvršćen

🎒 GDJE STAVITI TERET:
• U košaru na upravljaču
• Na stražnji nosač
• U bisage (torbe sa strane)
• U ruksak na leđima

🚲 PRIKOLICA ZA BICIKL:
• Širina max. 80 cm
• Mora imati reflektor straga
• Mora imati bočne reflektore
• Mora biti sigurno pričvršćena

⚠️ OPASNOSTI:
• Preteški teret utječe na kočenje
• Preširok teret može zapeti
• Nesiguran teret može pasti

📌 SAVJETI:
• Rasporedi težinu ravnomjerno
• Vozi sporije s teretom
• Koči ranije (duži put kočenja!)
• Pazi na ravnotežu`,
    followUp: ["Kako pričvrstiti teret?", "Mogu li voziti s ruksakom?"]
  },

  {
    id: "parkiranje",
    keywords: [
      "parkiranje", "parkirati", "parkira", "ostaviti bicikl",
      "stalak", "stalak za bicikl", "drzac", "držač",
      "zakljucati", "zaključati", "katanac", "brava", "lokot",
      "gdje ostaviti", "gdje parkirati", "smije parkirati"
    ],
    title: "🅿️ PARKIRANJE BICIKLA",
    response: `🅿️ PARKIRANJE BICIKLA:

✅ GDJE PARKIRATI:
• Na stalcima za bicikle
• Uz stupove (ako ne smeta pješacima)
• Na za to predviđenim mjestima

❌ GDJE NE PARKIRATI:
• Na nogostupu da smeta pješacima
• Na prilazu zgradama
• Na pješačkom prijelazu
• Na biciklističkoj stazi
• Uz znakove tako da ih zakloni

🔒 KAKO OSIGURATI BICIKL:
• Koristi KVALITETAN lokot
• Zaključaj i okvir i kotač
• Zaključaj za čvrst predmet
• U-lokot je najsigurniji

📌 SAVJETI:
• Parkiraj na vidljivom mjestu
• Parkiraj gdje ima svjetla noću
• Skini skupu opremu (lampice, računalo)
• Slikaj bicikl za slučaj krađe

⚠️ KRAĐA:
• Bicikli se često kradu!
• Nikad ne ostavljaj otključan bicikl
• Registriraj bicikl kod policije`,
    followUp: ["Koji lokot je najbolji?", "Što ako mi ukradu bicikl?"]
  },

  // =================== FALLBACK ===================
  {
    id: "nepoznato",
    keywords: [],
    title: "🤔 NISAM RAZUMIO",
    response: `🤔 Nisam baš razumio tvoje pitanje. Pokušaj pitati na drugi način!

Mogu ti pomoći s temama kao što su:
• 🚲 Oprema bicikla
• 🪖 Kaciga i zaštita
• 🚸 Prometni znakovi
• 📋 Pravila vožnje
• ✋ Signalizacija rukom
• 🔀 Ponašanje na raskrižju
• 🌙 Noćna vožnja
• 🛴 OPS (romobili)
• 📊 Statistika sigurnosti
• 💰 Kazne za prekršaje

Klikni na neku od brzih tema iznad ili pritisni ✨ za nasumično pitanje!`,
    followUp: []
  }
];

// Funkcija za pronalaženje najboljeg podudaranja
export const findBestMatch = (userInput: string): TopicResponse | null => {
  const normalized = normalizeText(userInput);
  const words = normalized.split(/\s+/).filter(w => w.length > 2);
  
  let bestMatch: TopicResponse | null = null;
  let bestScore = 0;
  
  for (const topic of chatbotTopics) {
    if (topic.id === "nepoznato") continue;
    
    let score = 0;
    
    for (const keyword of topic.keywords) {
      const normalizedKeyword = normalizeText(keyword);
      
      // Točno podudaranje fraze - najviši prioritet
      if (normalized.includes(normalizedKeyword)) {
        score += normalizedKeyword.split(/\s+/).length * 10;
      }
      
      // Podudaranje pojedinačnih riječi
      const keywordWords = normalizedKeyword.split(/\s+/);
      for (const kw of keywordWords) {
        if (kw.length > 2) {
          // Točno podudaranje riječi
          if (words.includes(kw)) {
            score += 5;
          }
          // Djelomično podudaranje (počinje s)
          else if (words.some(w => w.startsWith(kw.slice(0, 4)) || kw.startsWith(w.slice(0, 4)))) {
            score += 2;
          }
        }
      }
    }
    
    if (score > bestScore) {
      bestScore = score;
      bestMatch = topic;
    }
  }
  
  // Minimalni prag za podudaranje
  if (bestScore < 5) {
    return chatbotTopics.find(t => t.id === "nepoznato") || null;
  }
  
  return bestMatch;
};

// Lista predloženih pitanja za prikaz
export const suggestedQuestions = [
  "Koja oprema mora biti na biciklu?",
  "Zašto moram nositi kacigu?",
  "Koje vrste prometnih znakova postoje?",
  "Kako signalizirati skretanje rukom?",
  "Tko ima prednost na raskrižju?",
  "Što moram imati za vožnju noću?",
  "Što je OPS (romobil)?",
  "Koja su osnovna pravila vožnje biciklom?",
  "Što je zabranjeno biciklistima?",
  "Smijem li koristiti mobitel dok vozim?",
  "Koja je minimalna dob za vožnju bicikla?",
  "Kako se ponašam na semaforu?",
  "Što je biciklistička staza?",
  "Što napraviti u slučaju nesreće?",
  "Kako parkirati bicikl?"
];
