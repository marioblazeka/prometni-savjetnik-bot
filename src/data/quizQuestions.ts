// Kviz pitanja za biciklistički ispit

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
  {
    id: 1,
    question: "Koja oprema MORA biti na biciklu za vožnju noću?",
    options: [
      "Samo zvono",
      "Prednje i stražnje svjetlo te reflektori",
      "Samo kaciga",
      "Bočna ogledala"
    ],
    correctAnswer: 1,
    explanation: "Za noćnu vožnju obavezna su prednje bijelo svjetlo, stražnje crveno svjetlo i reflektori (katadiopteri).",
    medimurskaIzreka: "Bez svetla noćum - to je glupost kaj nema meje!",
    signImage: "lights"
  },
  {
    id: 2,
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
    id: 3,
    question: "Kojom stranom ceste moraš voziti bicikl?",
    options: [
      "Lijevom stranom",
      "Sredinom ceste",
      "Desnom stranom, što bliže rubu",
      "Bilo kojom stranom"
    ],
    correctAnswer: 2,
    explanation: "Biciklom se uvijek vozi desnom stranom kolnika, što bliže desnom rubu.",
    medimurskaIzreka: "Desna stran je tvoja stran, ne pozabi!",
    signImage: "right-side"
  },
  {
    id: 4,
    question: "Što moraš napraviti prije skretanja?",
    options: [
      "Samo pogledati unatrag",
      "Signalizirati rukom i pogledati",
      "Samo se zaustaviti",
      "Ništa posebno"
    ],
    correctAnswer: 1,
    explanation: "Prije skretanja OBAVEZNO signaliziraj rukom i provjeri promet iza sebe!",
    medimurskaIzreka: "Ruka van - i svi znaju kam ideš, kapči?",
    signImage: "hand-signal"
  },
  {
    id: 5,
    question: "Što označava ovaj prometni znak? (trokut s crvenim rubom)",
    options: [
      "Znak obavijesti",
      "Znak opasnosti",
      "Znak zabrane",
      "Znak naredbe"
    ],
    correctAnswer: 1,
    explanation: "Trokut s crvenim rubom i vrhom prema gore označava znak opasnosti - upozorava te na nešto opasno na cesti!",
    medimurskaIzreka: "Pazi na cesti, ne budi bedast!",
    signImage: "warning"
  },
  {
    id: 6,
    question: "Smiješ li koristiti mobitel dok voziš bicikl?",
    options: [
      "Da, ako voziš polako",
      "Da, ali samo za poruke",
      "NE, nikada",
      "Da, ako imaš slušalice"
    ],
    correctAnswer: 2,
    explanation: "Korištenje mobitela tijekom vožnje je ZABRANJENO! Odvlači pažnju i uzrokuje nesreće.",
    medimurskaIzreka: "Telefon v žep dok voziš, jel kapči?",
    signImage: "no-phone"
  },
  {
    id: 7,
    question: "Tko ima prednost na raskrižju bez prometnih znakova?",
    options: [
      "Vozilo koje ide brže",
      "Vozilo s lijeve strane",
      "Vozilo s desne strane",
      "Bicikl uvijek"
    ],
    correctAnswer: 2,
    explanation: "Na raskrižju bez znakova vrijedi pravilo DESNE STRANE - prednost ima vozilo koje dolazi s desne strane.",
    medimurskaIzreka: "Ne budi tokmak, drži se pravil!",
    signImage: "intersection"
  },
  {
    id: 8,
    question: "Smiješ li voziti bicikl držeći se za drugo vozilo?",
    options: [
      "Da, ako je to bicikl",
      "Da, ako ideš uzbrdo",
      "NE, nikada",
      "Da, ako vozilo vozi polako"
    ],
    correctAnswer: 2,
    explanation: "Držanje za drugo vozilo u pokretu je STROGO ZABRANJENO - vrlo je opasno!",
    medimurskaIzreka: "Kaj praviš bez ruk na rulju? Si normalen?",
    signImage: "no-holding"
  },
  {
    id: 9,
    question: "Kako se PRAVILNO vozi više biciklista zajedno?",
    options: [
      "Jedan pored drugoga",
      "Jedan iza drugoga",
      "U troje usporedno",
      "Kako žele"
    ],
    correctAnswer: 1,
    explanation: "Biciklisti moraju voziti JEDAN IZA DRUGOGA, nikada usporedno!",
    medimurskaIzreka: "Kaj se vuriš? Polahko, živeti buš duže!",
    signImage: "single-file"
  },
  {
    id: 10,
    question: "Što znači okrugli prometni znak s crvenim rubom?",
    options: [
      "Znak opasnosti",
      "Znak obavijesti",
      "Znak zabrane ili naredbe",
      "Znak smjera"
    ],
    correctAnswer: 2,
    explanation: "Okrugli znakovi s crvenim rubom su znakovi izričitih naredbi - zabranjuju ili naređuju nešto!",
    medimurskaIzreka: "Bum ti rekel kak je: znak ti nekaj govori, poslušaj!",
    signImage: "prohibition"
  }
];

export const getRandomQuestions = (count: number = 5): QuizQuestion[] => {
  const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};
