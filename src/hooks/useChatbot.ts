import { useState, useCallback, useRef } from "react";
import { trafficKnowledge, getRandomMedimurskaIzreka, getRandomDuhovitoPitanje } from "@/data/trafficKnowledge";
import { findBestMatch, suggestedQuestions } from "@/data/chatbotKeywords";

export interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const QUICK_TOPIC_PREFIX = "__qt__:";

// Render funkcije za brze teme (ostaju iste)
const renderOprema = (izreka: string) => {
  const oprema = trafficKnowledge.oprema_bicikla;
  return `🚲 OBAVEZNA OPREMA BICIKLA:\n\n${oprema.obavezna.map((o, i) => `${i + 1}. ${o}`).join("\n")}\n\n⭐ PREPORUČENA OPREMA:\n${oprema.preporucena.map(o => `• ${o}`).join("\n")}\n\n🛴 OBAVEZNA OPREMA ZA OPS (romobil):\n${oprema.ops_obavezna.map(o => `• ${o}`).join("\n")}\n\n📊 STATISTIKA: ${trafficKnowledge.statistika.kaciga}\n\n🗣️ ${izreka}`;
};

const renderKaciga = (izreka: string) => {
  return `🪖 KACIGA - TVOJ NAJBOLJI PRIJATELJ!\n\nKaciga je OBAVEZNA za:\n• Sve bicikliste mlađe od 16 godina!\n• SVE vozače osobnih prijevoznih sredstava (OPS - romobili)!\n\nZašto je važna?\n• Štiti tvoju glavu od ozljeda\n• Smanjuje rizik od ozljede glave za čak 85%!\n• Može ti spasiti život\n\nKako odabrati kacigu?\n• Mora biti homologirana i propisana\n• Mora dobro prianjati uz glavu\n• Ne smije biti prevelika ni premala\n• Remen mora biti dobro zategnut\n\n📊 STATISTIKA: ${trafficKnowledge.statistika.kaciga}\n\n🗣️ ${izreka}`;
};

const renderPrometniZnakovi = (izreka: string) => {
  const znakovi = trafficKnowledge.prometni_znakovi;
  return `🚸 PROMETNI ZNAKOVI - 3 GLAVNE VRSTE:\n\n⚠️ ZNAKOVI OPASNOSTI:\n${znakovi.znakovi_opasnosti.opis}\nPrimjeri: ${znakovi.znakovi_opasnosti.primjeri.join(", ")}\n\n🛑 ZNAKOVI IZRIČITE NAREDBE:\n${znakovi.znakovi_izricite_naredbe.opis}\nPrimjeri: ${znakovi.znakovi_izricite_naredbe.primjeri.join(", ")}\n\nℹ️ ZNAKOVI OBAVIJESTI:\n${znakovi.znakovi_obavijesti.opis}\nPrimjeri: ${znakovi.znakovi_obavijesti.primjeri.join(", ")}\n\n🗣️ ${izreka}`;
};

const renderPravila = (izreka: string) => {
  const pravila = trafficKnowledge.pravila_voznje;
  return `📋 OSNOVNA PRAVILA VOŽNJE BICIKLOM:\n\n✅ MORAŠ:\n${pravila.osnovna.map(p => `• ${p}`).join("\n")}\n\n❌ ZABRANJENO JE:\n${pravila.zabranjeno.slice(0, 6).map(p => `• ${p}`).join("\n")}\n\n📌 Minimalna dob: ${pravila.minimalna_dob}\n\n📊 STATISTIKA: ${trafficKnowledge.statistika.opce}\n\n🗣️ ${izreka}`;
};

const renderNocnaVoznja = (izreka: string) => {
  return `🌙 VOŽNJA NOĆU I U MRAKU:\n\nOBAVEZNA OPREMA ZA NOĆNU VOŽNJU:\n• Prednje svjetlo BIJELE boje\n• Stražnje svjetlo CRVENE boje\n• Stražnji reflektor (katadiopter) crvene boje\n• Prednji reflektor bijele ili žute boje\n• Bočni reflektori na kotačima (bijeli ili žuti)\n• Reflektori na pedalama (žute ili narančaste boje)\n\n👕 OBAVEZNO NOĆU:\n• Reflektirajući prsluk ili reflektirajuća odjeća ili druga reflektirajuća oznaka\n\n📊 STATISTIKA: ${trafficKnowledge.statistika.nocna_voznja}\n\n⚠️ Bez svjetala noću si teško uočljiv - a to je jako opasno!\n\n🗣️ ${izreka}`;
};

const renderRaskrizje = (izreka: string) => {
  const raskrizje = trafficKnowledge.raskrizje;
  return `🔀 PONAŠANJE NA RASKRIŽJU:\n\n⭐ PRAVILO DESNE STRANE:\n${raskrizje.pravilo_desne_strane}\n\n📝 REDOSLIJED PROLASKA:\n${raskrizje.redoslijed_prolaska.join("\n")}\n\n⚠️ VAŽNO: ${raskrizje.skretanje_lijevo}\n\n📋 RADNJE NA RASKRIŽJU:\n1. Uspori vožnju\n2. Po potrebi se zaustavi\n3. Dobro pogledaj lijevo i desno\n4. Propusti sva vozila i pješake kada treba\n\n🚦 SEMAFOR:\n• Žuto treptavo svjetlo = povećani oprez\n• Crveno + žuto = uskoro zeleno\n\nNe zaboravi signalizirati rukom kada skrećeš!\n\n🗣️ ${izreka}`;
};

const generateResponse = (question: string): string => {
  const izreka = getRandomMedimurskaIzreka();

  // Brze teme: uvijek otvori točno zadanu temu
  if (question.startsWith(QUICK_TOPIC_PREFIX)) {
    const topic = question.slice(QUICK_TOPIC_PREFIX.length);
    switch (topic) {
      case "oprema": return renderOprema(izreka);
      case "kaciga": return renderKaciga(izreka);
      case "prometni_znakovi": return renderPrometniZnakovi(izreka);
      case "pravila": return renderPravila(izreka);
      case "nocna_voznja": return renderNocnaVoznja(izreka);
      case "raskrizje": return renderRaskrizje(izreka);
    }
  }

  // Koristi novu bazu ključnih riječi za prepoznavanje teme
  const match = findBestMatch(question);
  
  if (match && match.id !== "nepoznato") {
    // Dodaj follow-up pitanja ako postoje
    let response = match.response;
    if (match.followUp && match.followUp.length > 0) {
      response += `\n\n💡 MOŽDA TE ZANIMA:\n${match.followUp.map(q => `• ${q}`).join("\n")}`;
    }
    response += `\n\n🗣️ ${izreka}`;
    return response;
  }

  // Fallback - predloži pitanja
  const randomSuggestions = suggestedQuestions
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);
  
  return `🤔 Nisam baš razumio tvoje pitanje. Pokušaj pitati na drugi način!\n\n💡 Možeš me pitati npr.:\n${randomSuggestions.map(q => `• "${q}"`).join("\n")}\n\nIli klikni na neku od brzih tema iznad! ✨\n\n🗣️ ${izreka}`;
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

  // Nasumična pitanja bez ponavljanja (dok se cijela lista ne potroši)
  const randomQuestionBagRef = useRef<string[]>([]);
  const getNextRandomQuestion = useCallback(() => {
    if (randomQuestionBagRef.current.length === 0) {
      randomQuestionBagRef.current = [...trafficKnowledge.duhovita_pitanja].sort(
        () => Math.random() - 0.5
      );
    }
    return randomQuestionBagRef.current.pop() as string;
  }, []);

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
    const randomQ = getNextRandomQuestion();
    const botMessage: Message = {
      id: Date.now().toString(),
      text: `🎲 EVO TI JEDNO PITANJE ZA RAZMIŠLJANJE:\n\n${randomQ}\n\n🗣️ ${getRandomMedimurskaIzreka()}`,
      isBot: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, botMessage]);
  }, [getNextRandomQuestion]);

  return {
    messages,
    isTyping,
    sendMessage,
    askRandomQuestion,
  };
};
