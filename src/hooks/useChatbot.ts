import { useState, useCallback } from "react";
import { trafficKnowledge, getRandomMedimurskaIzreka, getRandomDuhovitoPitanje } from "@/data/trafficKnowledge";

export interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const generateResponse = (question: string): string => {
  const q = question.toLowerCase();
  const izreka = getRandomMedimurskaIzreka();
  
  // Oprema bicikla
  if (q.includes("oprema") || q.includes("mora biti na biciklu") || q.includes("obavezna oprema")) {
    const oprema = trafficKnowledge.oprema_bicikla;
    return `🚲 OBAVEZNA OPREMA BICIKLA:\n\n${oprema.obavezna.map((o, i) => `${i + 1}. ${o}`).join("\n")}\n\n⭐ PREPORUČENA OPREMA:\n${oprema.preporucena.map(o => `• ${o}`).join("\n")}\n\n📊 STATISTIKA: ${trafficKnowledge.statistika.kaciga}\n\n🗣️ ${izreka}`;
  }

  // Kaciga
  if (q.includes("kaciga") || q.includes("zaštita glave")) {
    return `🪖 KACIGA - TVOJ NAJBOLJI PRIJATELJ!\n\nKaciga je OBAVEZNA za sve bicikliste mlađe od 16 godina!\n\nZašto je važna?\n• Štiti tvoju glavu od ozljeda\n• Smanjuje rizik od ozljede glave za čak 85%!\n• Može ti spasiti život\n\nKako odabrati kacigu?\n• Mora dobro prianjati uz glavu\n• Ne smije biti prevelika ni premala\n• Remen mora biti dobro zategnut\n\n📊 STATISTIKA: ${trafficKnowledge.statistika.kaciga}\n\n🗣️ ${izreka}`;
  }

  // Prometni znakovi
  if (q.includes("prometni znak") || q.includes("znakovi")) {
    const znakovi = trafficKnowledge.prometni_znakovi;
    return `🚸 PROMETNI ZNAKOVI - 3 GLAVNE VRSTE:\n\n⚠️ ZNAKOVI OPASNOSTI:\n${znakovi.znakovi_opasnosti.opis}\nPrimjeri: ${znakovi.znakovi_opasnosti.primjeri.join(", ")}\n\n🛑 ZNAKOVI IZRIČITE NAREDBE:\n${znakovi.znakovi_izricite_naredbe.opis}\nPrimjeri: ${znakovi.znakovi_izricite_naredbe.primjeri.join(", ")}\n\nℹ️ ZNAKOVI OBAVIJESTI:\n${znakovi.znakovi_obavijesti.opis}\nPrimjeri: ${znakovi.znakovi_obavijesti.primjeri.join(", ")}\n\n🗣️ ${izreka}`;
  }

  // Pravila vožnje
  if (q.includes("pravila") || q.includes("kako voziti") || q.includes("osnovna pravila")) {
    const pravila = trafficKnowledge.pravila_voznje;
    return `📋 OSNOVNA PRAVILA VOŽNJE BICIKLOM:\n\n✅ MORAŠ:\n${pravila.osnovna.map(p => `• ${p}`).join("\n")}\n\n❌ ZABRANJENO JE:\n${pravila.zabranjeno.slice(0, 4).map(p => `• ${p}`).join("\n")}\n\n📊 STATISTIKA: ${trafficKnowledge.statistika.opce}\n\n🗣️ ${izreka}`;
  }

  // Noćna vožnja
  if (q.includes("noć") || q.includes("mrak") || q.includes("svjetl") || q.includes("tama")) {
    return `🌙 VOŽNJA NOĆU I U MRAKU:\n\nOBAVEZNO moraš imati:\n• PREDNJE svjetlo BIJELE boje\n• STRAŽNJE svjetlo CRVENE boje\n• Reflektore (katadioptere) na biciklu\n\nSAVJET: Nosi reflektirajući prsluk - tako te vozači bolje vide!\n\n📊 STATISTIKA: ${trafficKnowledge.statistika.nocna_voznja}\n\n⚠️ Bez svjetala noću si NEVIDLJIV - a to je jako opasno!\n\n🗣️ ${izreka}`;
  }

  // Raskrižje
  if (q.includes("raskrižj") || q.includes("križanj") || q.includes("raskršć")) {
    const raskrizje = trafficKnowledge.raskrizje;
    return `🔀 PONAŠANJE NA RASKRIŽJU:\n\n⭐ PRAVILO DESNE STRANE:\n${raskrizje.pravilo_desne_strane}\n\n📝 REDOSLIJED PROLASKA:\n${raskrizje.redoslijed_prolaska.join("\n")}\n\n⚠️ VAŽNO: ${raskrizje.skretanje_lijevo}\n\nNe zaboravi signalizirati rukom kada skrećeš!\n\n🗣️ ${izreka}`;
  }

  // Pojmovi
  if (q.includes("što je") || q.includes("šta je") || q.includes("definicija") || q.includes("pojam")) {
    const pojmovi = trafficKnowledge.pojmovi;
    if (q.includes("cesta")) return `📖 CESTA: ${pojmovi.cesta}\n\n🗣️ ${izreka}`;
    if (q.includes("kolnik")) return `📖 KOLNIK: ${pojmovi.kolnik}\n\n🗣️ ${izreka}`;
    if (q.includes("nogostup")) return `📖 NOGOSTUP: ${pojmovi.nogostup}\n\n🗣️ ${izreka}`;
    if (q.includes("bicikl")) return `📖 BICIKL: ${pojmovi.bicikl}\n\n🗣️ ${izreka}`;
    if (q.includes("vozač")) return `📖 VOZAČ: ${pojmovi.vozac}\n\n🗣️ ${izreka}`;
    if (q.includes("pješak")) return `📖 PJEŠAK: ${pojmovi.pjesak}\n\n🗣️ ${izreka}`;
  }

  // Zabranjeno
  if (q.includes("zabranjen") || q.includes("ne smije") || q.includes("što ne smijem")) {
    const zabranjeno = trafficKnowledge.pravila_voznje.zabranjeno;
    return `🚫 ŠTO JE ZABRANJENO BICIKLISTIMA:\n\n${zabranjeno.map(z => `❌ ${z}`).join("\n")}\n\n📊 STATISTIKA: ${trafficKnowledge.statistika.alkohol}\n\n🗣️ ${izreka}`;
  }

  // Biciklistička staza/traka
  if (q.includes("staza") || q.includes("traka") || q.includes("biciklistička")) {
    const pojmovi = trafficKnowledge.pojmovi;
    return `🛤️ BICIKLISTIČKA STAZA vs TRAKA:\n\n🟦 BICIKLISTIČKA STAZA:\n${pojmovi.biciklisticka_staza}\n\n🟨 BICIKLISTIČKA TRAKA:\n${pojmovi.biciklisticka_traka}\n\n✅ Ako postoji biciklistička staza ili traka - OBAVEZNO ju koristi!\n\n🗣️ ${izreka}`;
  }

  // Signalizacija
  if (q.includes("signal") || q.includes("ruk") || q.includes("pokazivanje") || q.includes("skretanje")) {
    return `✋ SIGNALIZACIJA RUKOM:\n\n➡️ SKRETANJE DESNO:\nIspruži DESNU ruku u stranu\n\n⬅️ SKRETANJE LIJEVO:\nIspruži LIJEVU ruku u stranu\n\n🛑 KOČENJE/STAJANJE:\nPodigni LIJEVU ruku gore\n\n⚠️ VAŽNO:\n• Signaliziraj PRIJE nego što skreneš\n• Drži ruku ispruženu dok ne skreneš\n• Vrati obje ruke na upravljač za skretanje\n\n🗣️ ${izreka}`;
  }

  // Statistika
  if (q.includes("statistik") || q.includes("nesreć") || q.includes("stradava")) {
    const stat = trafficKnowledge.statistika;
    return `📊 STATISTIKA SIGURNOSTI:\n\n• ${stat.opce}\n• ${stat.kaciga}\n• ${stat.nocna_voznja}\n• ${stat.alkohol}\n• ${stat.djeca}\n\n⚠️ Zato su pravila tako važna!\n\n🗣️ ${izreka}`;
  }

  // Default odgovor
  return `🤔 Hmm, nisam siguran da razumijem tvoje pitanje.\n\nMogu ti pomoći s temama kao što su:\n• Oprema bicikla\n• Prometni znakovi\n• Pravila vožnje\n• Ponašanje na raskrižju\n• Noćna vožnja\n• Definicije pojmova iz prometa\n\nProbaj me pitati nešto konkretno o tim temama!\n\n🗣️ ${izreka}\n\n💡 TIP: Klikni na neku od brzih tema ispod ili pritisni ✨ za nasumično pitanje!`;
};

export const useChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: `Bok! Ja sam LUKAS 🚴, tvoj virtualni pomoćnik za učenje prometnih pravila!\n\nPomognut ću ti da se pripremiš za biciklistički ispit. Pitaj me bilo što o:\n• Opremi bicikla\n• Prometnim znakovima\n• Pravilima vožnje\n• Sigurnosti u prometu\n\n${getRandomDuhovitoPitanje()}\n\n🗣️ ${getRandomMedimurskaIzreka()}`,
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