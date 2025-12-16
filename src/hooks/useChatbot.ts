import { useState, useCallback } from "react";
import { trafficKnowledge, getRandomMedimurskaIzreka, getRandomDuhovitoPitanje } from "@/data/trafficKnowledge";

export interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

// Normalizacija teksta za usporedbu (uklanja dijakritike, mala slova)
const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9\s]/g, "")
    .trim();
};

// Levenshtein udaljenost za toleranciju tipfelera
const levenshteinDistance = (a: string, b: string): number => {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const matrix = Array(b.length + 1).fill(null).map(() => Array(a.length + 1).fill(null));

  for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
  for (let j = 0; j <= b.length; j++) matrix[j][0] = j;

  for (let j = 1; j <= b.length; j++) {
    for (let i = 1; i <= a.length; i++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1,
        matrix[j - 1][i] + 1,
        matrix[j - 1][i - 1] + cost
      );
    }
  }

  return matrix[b.length][a.length];
};

// Provjera sličnosti riječi
const isSimilarWord = (word: string, target: string, threshold: number = 2): boolean => {
  if (word.includes(target) || target.includes(word)) return true;
  return levenshteinDistance(word, target) <= threshold;
};

// Provjera sadrži li tekst ključne riječi (s tolerancijom na tipfelere)
const containsKeyword = (text: string, keywords: string[]): boolean => {
  const normalizedText = normalizeText(text);
  const words = normalizedText.split(/\s+/);
  
  return keywords.some(keyword => {
    const normalizedKeyword = normalizeText(keyword);
    // Direktna podudarnost (cijele fraze)
    if (normalizedText.includes(normalizedKeyword)) return true;
    // Pojedinačne riječi unutar fraze
    const keywordWords = normalizedKeyword.split(/\s+/);
    if (keywordWords.length > 1) {
      // Za višeriječne ključne riječi, provjeri sadrži li sve riječi
      return keywordWords.every(kw => normalizedText.includes(kw));
    }
    // Podudarnost s tolerancijom za pojedinačne riječi
    return words.some(word => isSimilarWord(word, normalizedKeyword));
  });
};

// Definicije tema s ključnim riječima (prošireno za bolje prepoznavanje)
const topicKeywords = {
  oprema: ["oprema mora", "koja oprema", "oprema bicikl", "obavezna oprema", "mora biti na bicikl", "oprema", "opreme", "treba imati", "sto treba", "sta treba"],
  kaciga: ["nositi kacigu", "vazno nositi", "zasto kaciga", "kaciga", "kacige", "zastita glave", "helmet"],
  prometni_znakovi: ["vrste prometnih", "prometnih znakova", "prometni znakovi", "znakovi postoje", "prometni znak", "znakovi", "znak opasnosti", "znak naredbe", "znak obavijesti"],
  pravila: ["pravila voznje", "osnovna pravila", "pravila bicikl", "kako voziti", "pravila", "voznje biciklom", "voziti bicikl"],
  nocna_voznja: ["voznju nocu", "voznja nocu", "moram imati za voznju", "nocna voznja", "nocu", "nocna", "mrak", "svjetl", "svjetlo"],
  raskrizje: ["ponasam na raskrizju", "na raskrizju", "raskrizje", "raskrizj", "prednost prolaska", "pravilo desne"],
  pojmovi: ["sto je", "sta je", "definicija", "pojam", "pojmovi", "znaci", "znacenje"],
  zabranjeno: ["zabranjen", "ne smije", "sto ne smijem", "sta ne smijem", "nesmije", "ne mogu", "zabranjuje"],
  staza_traka: ["staza", "traka", "biciklisticka", "biciklistick", "biciklistic"],
  signalizacija: ["signal", "ruka", "rukom", "pokazivanje", "skretanje", "skrecem", "lijevo", "desno"],
  statistika: ["statistik", "nesrec", "stradava", "podaci", "brojke", "postotak"]
};

// Sugestije sličnih tema
const suggestSimilarTopics = (question: string): string[] => {
  const normalizedQ = normalizeText(question);
  const suggestions: string[] = [];
  
  const topicQuestions = [
    { topic: "oprema", question: "Koja oprema mora biti na biciklu?" },
    { topic: "kaciga", question: "Zašto je važno nositi kacigu?" },
    { topic: "prometni_znakovi", question: "Koje vrste prometnih znakova postoje?" },
    { topic: "pravila", question: "Koja su osnovna pravila vožnje biciklom?" },
    { topic: "nocna_voznja", question: "Što moram imati za vožnju noću?" },
    { topic: "raskrizje", question: "Kako se ponašam na raskrižju?" },
    { topic: "zabranjeno", question: "Što je zabranjeno biciklistima?" },
    { topic: "signalizacija", question: "Kako signaliziram skretanje?" },
    { topic: "staza_traka", question: "Koja je razlika između biciklističke staze i trake?" }
  ];

  // Pronađi teme koje djelomično odgovaraju
  for (const { topic, question: q } of topicQuestions) {
    const keywords = topicKeywords[topic as keyof typeof topicKeywords] || [];
    const hasPartialMatch = keywords.some(kw => {
      const normKw = normalizeText(kw);
      return normalizedQ.split(/\s+/).some(word => 
        word.length > 2 && (normKw.includes(word) || word.includes(normKw.slice(0, 3)))
      );
    });
    if (hasPartialMatch && suggestions.length < 3) {
      suggestions.push(q);
    }
  }

  return suggestions;
};

const generateResponse = (question: string): string => {
  const izreka = getRandomMedimurskaIzreka();
  
  // Oprema bicikla
  if (containsKeyword(question, topicKeywords.oprema)) {
    const oprema = trafficKnowledge.oprema_bicikla;
    return `🚲 OBAVEZNA OPREMA BICIKLA:\n\n${oprema.obavezna.map((o, i) => `${i + 1}. ${o}`).join("\n")}\n\n⭐ PREPORUČENA OPREMA:\n${oprema.preporucena.map(o => `• ${o}`).join("\n")}\n\n🛴 OBAVEZNA OPREMA ZA OPS (romobil):\n${oprema.ops_obavezna.map(o => `• ${o}`).join("\n")}\n\n📊 STATISTIKA: ${trafficKnowledge.statistika.kaciga}\n\n🗣️ ${izreka}`;
  }

  // Kaciga
  if (containsKeyword(question, topicKeywords.kaciga)) {
    return `🪖 KACIGA - TVOJ NAJBOLJI PRIJATELJ!\n\nKaciga je OBAVEZNA za:\n• Sve bicikliste mlađe od 16 godina!\n• SVE vozače osobnih prijevoznih sredstava (OPS - romobili)!\n\nZašto je važna?\n• Štiti tvoju glavu od ozljeda\n• Smanjuje rizik od ozljede glave za čak 85%!\n• Može ti spasiti život\n\nKako odabrati kacigu?\n• Mora biti homologirana i propisana\n• Mora dobro prianjati uz glavu\n• Ne smije biti prevelika ni premala\n• Remen mora biti dobro zategnut\n\n📊 STATISTIKA: ${trafficKnowledge.statistika.kaciga}\n\n🗣️ ${izreka}`;
  }

  // Prometni znakovi
  if (containsKeyword(question, topicKeywords.prometni_znakovi)) {
    const znakovi = trafficKnowledge.prometni_znakovi;
    return `🚸 PROMETNI ZNAKOVI - 3 GLAVNE VRSTE:\n\n⚠️ ZNAKOVI OPASNOSTI:\n${znakovi.znakovi_opasnosti.opis}\nPrimjeri: ${znakovi.znakovi_opasnosti.primjeri.join(", ")}\n\n🛑 ZNAKOVI IZRIČITE NAREDBE:\n${znakovi.znakovi_izricite_naredbe.opis}\nPrimjeri: ${znakovi.znakovi_izricite_naredbe.primjeri.join(", ")}\n\nℹ️ ZNAKOVI OBAVIJESTI:\n${znakovi.znakovi_obavijesti.opis}\nPrimjeri: ${znakovi.znakovi_obavijesti.primjeri.join(", ")}\n\n🗣️ ${izreka}`;
  }

  // Pravila vožnje
  if (containsKeyword(question, topicKeywords.pravila)) {
    const pravila = trafficKnowledge.pravila_voznje;
    return `📋 OSNOVNA PRAVILA VOŽNJE BICIKLOM:\n\n✅ MORAŠ:\n${pravila.osnovna.map(p => `• ${p}`).join("\n")}\n\n❌ ZABRANJENO JE:\n${pravila.zabranjeno.slice(0, 6).map(p => `• ${p}`).join("\n")}\n\n📌 Minimalna dob: ${pravila.minimalna_dob}\n\n📊 STATISTIKA: ${trafficKnowledge.statistika.opce}\n\n🗣️ ${izreka}`;
  }

  // Noćna vožnja
  if (containsKeyword(question, topicKeywords.nocna_voznja)) {
    const oprema = trafficKnowledge.oprema_bicikla;
    return `🌙 VOŽNJA NOĆU I U MRAKU:\n\nOBAVEZNA OPREMA ZA NOĆNU VOŽNJU:\n• Prednje svjetlo BIJELE boje\n• Stražnje svjetlo CRVENE boje\n• Stražnji reflektor (katadiopter) crvene boje\n• Prednji reflektor bijele ili žute boje\n• Bočni reflektori na kotačima (bijeli ili žuti)\n• Reflektori na pedalama (žute ili narančaste boje)\n\n👕 OBAVEZNO NOĆU:\n• Reflektirajući prsluk ili reflektirajuća odjeća ili druga reflektirajuća oznaka\n\n📊 STATISTIKA: ${trafficKnowledge.statistika.nocna_voznja}\n\n⚠️ Bez svjetala noću si NEVIDLJIV - a to je jako opasno!\n\n🗣️ ${izreka}`;
  }

  // Raskrižje
  if (containsKeyword(question, topicKeywords.raskrizje)) {
    const raskrizje = trafficKnowledge.raskrizje;
    return `🔀 PONAŠANJE NA RASKRIŽJU:\n\n⭐ PRAVILO DESNE STRANE:\n${raskrizje.pravilo_desne_strane}\n\n📝 REDOSLIJED PROLASKA:\n${raskrizje.redoslijed_prolaska.join("\n")}\n\n⚠️ VAŽNO: ${raskrizje.skretanje_lijevo}\n\n📋 RADNJE NA RASKRIŽJU:\n1. Uspori vožnju\n2. Obvezno se zaustavi\n3. Spusti jednu nogu na kolnik\n4. Propusti sva vozila na cesti na koju se uključuješ\n\n🚦 SEMAFOR:\n• Žuto treptavo svjetlo = povećani oprez\n• Crveno + žuto = uskoro zeleno\n\nNe zaboravi signalizirati rukom kada skrećeš!\n\n🗣️ ${izreka}`;
  }

  // Pojmovi
  if (containsKeyword(question, topicKeywords.pojmovi)) {
    const pojmovi = trafficKnowledge.pojmovi;
    const normalizedQ = normalizeText(question);
    if (normalizedQ.includes("cest")) return `📖 CESTA: ${pojmovi.cesta}\n\n🗣️ ${izreka}`;
    if (normalizedQ.includes("kolnik")) return `📖 KOLNIK: ${pojmovi.kolnik}\n\n🗣️ ${izreka}`;
    if (normalizedQ.includes("nogostup") || normalizedQ.includes("plocnik")) return `📖 NOGOSTUP: ${pojmovi.nogostup}\n\n🗣️ ${izreka}`;
    if (normalizedQ.includes("bicikl")) return `📖 BICIKL: ${pojmovi.bicikl}\n\n🗣️ ${izreka}`;
    if (normalizedQ.includes("vozac")) return `📖 VOZAČ: ${pojmovi.vozac}\n\n🗣️ ${izreka}`;
    if (normalizedQ.includes("pjesak") || normalizedQ.includes("pesak")) return `📖 PJEŠAK: ${pojmovi.pjesak}\n\n🗣️ ${izreka}`;
    if (normalizedQ.includes("ops") || normalizedQ.includes("romobil")) return `📖 OSOBNO PRIJEVOZNO SREDSTVO (OPS): ${pojmovi.ops}\n\n🗣️ ${izreka}`;
  }

  // Zabranjeno
  if (containsKeyword(question, topicKeywords.zabranjeno)) {
    const zabranjeno = trafficKnowledge.pravila_voznje.zabranjeno;
    return `🚫 ŠTO JE ZABRANJENO BICIKLISTIMA:\n\n${zabranjeno.map(z => `❌ ${z}`).join("\n")}\n\n💰 KAZNE:\n• ${trafficKnowledge.kazne.slusalice}\n• ${trafficKnowledge.kazne.mobitel}\n\n📊 STATISTIKA: ${trafficKnowledge.statistika.alkohol}\n\n🗣️ ${izreka}`;
  }

  // Biciklistička staza/traka
  if (containsKeyword(question, topicKeywords.staza_traka)) {
    const pojmovi = trafficKnowledge.pojmovi;
    return `🛤️ BICIKLISTIČKA STAZA vs TRAKA:\n\n🟦 BICIKLISTIČKA STAZA:\n${pojmovi.biciklisticka_staza}\n\n🟨 BICIKLISTIČKA TRAKA:\n${pojmovi.biciklisticka_traka}\n\n✅ Ako postoji biciklistička staza ili traka - OBAVEZNO ju koristi!\n\n🛴 OPS (romobili) se također kreću po biciklističkim stazama i trakama!\n\n🗣️ ${izreka}`;
  }

  // Signalizacija
  if (containsKeyword(question, topicKeywords.signalizacija)) {
    return `✋ SIGNALIZACIJA RUKOM:\n\n➡️ SKRETANJE DESNO:\nIspruži DESNU ruku u stranu\n\n⬅️ SKRETANJE LIJEVO:\nIspruži LIJEVU ruku u stranu\n\n🛑 KOČENJE/STAJANJE:\nPodigni LIJEVU ruku gore\n\n⚠️ VAŽNO:\n• Signaliziraj PRIJE nego što skreneš\n• Drži ruku ispruženu dok ne skreneš\n• Vrati obje ruke na upravljač za skretanje\n\n📋 REDOSLIJED PRIJE SKRETANJA:\n1. Provjera uvjeta preko ramena\n2. Najava uključivanja odručenjem ruke\n3. Skretanje\n\n🗣️ ${izreka}`;
  }

  // Statistika
  if (containsKeyword(question, topicKeywords.statistika)) {
    const stat = trafficKnowledge.statistika;
    return `📊 STATISTIKA SIGURNOSTI:\n\n• ${stat.opce}\n• ${stat.kaciga}\n• ${stat.nocna_voznja}\n• ${stat.alkohol}\n• ${stat.djeca}\n\n⚠️ Zato su pravila tako važna!\n\n🗣️ ${izreka}`;
  }

  // Ako nema direktnog podudaranja, predloži slične teme
  const suggestions = suggestSimilarTopics(question);
  if (suggestions.length > 0) {
    return `🤔 Hmm, nisam baš siguren što točno pitaš, ali možda te zanima nešto od ovoga?\n\n${suggestions.map((s, i) => `${i + 1}. "${s}"`).join("\n")}\n\nProbaj kliknuti na jednu od brzih tema ili mi postavi pitanje na drugi način!\n\n🗣️ ${izreka}`;
  }

  // Default odgovor s pomoćnim temama
  return `🤔 Ej, nisam te baš skužil! Fala kaj pitaš, ali probaj malo drukčije.\n\nMogu ti pomoći s temama kao što su:\n• 🚲 Oprema bicikla\n• 🚸 Prometni znakovi\n• 📋 Pravila vožnje\n• 🔀 Ponašanje na raskrižju\n• 🌙 Noćna vožnja\n• 📖 Definicije pojmova iz prometa\n\nKlikni na neku od brzih tema gore ili pritisni ✨ za nasumično pitanje!\n\n🗣️ ${izreka}`;
};

export const useChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: `Bok! Ja sam LUKAS 🚴, tvoj virtualni pomoćnik za učenje prometnih pravila!\n\nPomognut ću ti da se pripremiš za biciklistički ispit. Pitaj me bilo što o:\n• Opremi bicikla\n• Prometnim znakovima\n• Pravilima vožnje\n• Sigurnosti u prometu\n• OPS (osobna prijevozna sredstva - romobili)\n\n${getRandomDuhovitoPitanje()}\n\n🗣️ ${getRandomMedimurskaIzreka()}`,
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = useCallback((text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = generateResponse(text);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 800 + Math.random() * 700);
  }, []);

  const askRandomQuestion = useCallback(() => {
    const randomQ = getRandomDuhovitoPitanje();
    const botMessage: Message = {
      id: Date.now().toString(),
      text: `🎲 EVO TI JEDNO PITANJE ZA RAZMIŠLJANJE:\n\n${randomQ}\n\n🗣️ ${getRandomMedimurskaIzreka()}`,
      isBot: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, botMessage]);
  }, []);

  return {
    messages,
    isTyping,
    sendMessage,
    askRandomQuestion,
  };
};
