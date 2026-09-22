import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import { SITE } from "@/config/site";
import { DailyRitualTimeline } from "@/components/home/DailyRitualTimeline";
import { LeafOutline } from "@/components/graphics/Botanicals";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { whatsappLinkGeneral } from "@/utils/whatsapp";

type Lang = "en" | "te";

const CONTENT: Record<
  Lang,
  {
    eyebrow: string;
    heroLine1: string;
    heroLine2: string;
    heroEmphasis: string;
    story: string[];
    historyEyebrow: string;
    historyTitle: string;
    history: string[];
    visitHeading: string;
  }
> = {
  en: {
    eyebrow: "Our Story",
    heroLine1: "From kashayam,",
    heroLine2: "to a cup kids ask for",
    heroEmphasis: "again.",
    story: [
      "It began during the pandemic. Like most Indian households, we turned to kashayam — the herbal decoctions our grandmothers swore by — to keep immunity strong when the world felt uncertain.",
      "The trouble was the children. A bitter cup of kashayam is easy enough to serve an adult and almost impossible to get a child to finish. So we started experimenting — keeping the same herbs, the same intent, but brewing them into something aromatic and flavorful enough that a child would ask for a second cup.",
      "That is how Ourva began. Not as a tea brand first, but as a search — for which leaves, barks and roots actually support the body's immunity, and how to bring them into a daily cup the whole family could enjoy.",
      "Ourva Herbal Teas continues that practice from Visakhapatnam: whole botanicals, brewed simply, without shortcuts or extracts. Six infusions, each carrying a single tradition — Bilva, Arjuna, Aswattha, Lemongrass, Pudina, and Amrood.",
      "The idea is a small one: that a daily cup, chosen with intent, is enough to build a ritual worth keeping.",
    ],
    historyEyebrow: "Where It All Comes From",
    historyTitle: "History Behind Ourva",
    history: [
      "Tea, as most of us drink it today, isn't originally Indian. Along with buffalo milk, it was introduced during British rule — brought in as a colonial crop and, over generations, folded into what we now think of as an everyday Indian habit.",
      "As the story is told, the British were curious about something else too: why Indians, through famine, disease and hardship, stayed remarkably resilient. What they traced it back to was ordinary — food and water stored and cooked in clay, milk from the cow, and a daily cup of kashayam, the herbal decoction passed down through the household.",
      "Ourva is our attempt to bring that older, quieter tradition back into daily life — not as a borrowed tea culture, but as kashayam, reimagined as tea: whole herbs, honestly brewed, made easy enough for a family to return to every single day.",
    ],
    visitHeading: "Visit Us",
  },
  te: {
    eyebrow: "మా కథ",
    heroLine1: "కషాయం నుండి,",
    heroLine2: "పిల్లలు మళ్ళీ అడిగి తాగే",
    heroEmphasis: "కప్పు వరకు.",
    story: [
      "ఇది మహమ్మారి సమయంలో మొదలైంది. చాలా భారతీయ కుటుంబాల్లానే, రోగనిరోధక శక్తిని కాపాడుకోవడానికి మా అమ్మమ్మలు నమ్మిన కషాయాల వైపు మేమూ మళ్లాం.",
      "సమస్య పిల్లలతోనే. చేదైన కషాయాన్ని పెద్దవాళ్లకు తాగించడం సులభమే, కానీ పిల్లలతో పూర్తిగా తాగించడం దాదాపు అసాధ్యం. అందుకే అదే మూలికలు, అదే ఉద్దేశ్యంతో — పిల్లలు మరోసారి అడిగి తాగేంత సువాసనగా, రుచిగా వాటిని టీలుగా మార్చే ప్రయోగం మొదలుపెట్టాం.",
      "అలా ఔర్వ మొదలైంది. మొదట ఇదొక టీ బ్రాండ్‌గా కాదు — శరీర రోగనిరోధక శక్తికి నిజంగా తోడ్పడే ఆకులు, బెరళ్లు, వేర్లు ఏవో తెలుసుకోవాలన్న అన్వేషణగా, వాటిని కుటుంబం మొత్తం రోజూ ఇష్టంగా తాగగలిగే కప్పులోకి తీసుకురావాలన్న ప్రయత్నంగా మొదలైంది.",
      "ఔర్వ హెర్బల్ టీస్ ఆ సంప్రదాయాన్ని విశాఖపట్నం నుండి కొనసాగిస్తోంది: పూర్తి మూలికలు, ఎలాంటి షార్ట్‌కట్‌లు, ఎక్స్‌ట్రాక్ట్‌లు లేకుండా సాదాసీదాగా మరిగించినవి. ఆరు ఇన్ఫ్యూజన్లు, ఒక్కొక్కటి ఒక్కో సంప్రదాయాన్ని మోసుకొస్తాయి — బిల్వ, అర్జున, అశ్వత్థ, లెమన్‌గ్రాస్, పుదీన, మరియు అమ్రూద్.",
      "ఆలోచన చిన్నదే: ఉద్దేశ్యంతో ఎంచుకున్న రోజువారీ కప్పు, కొనసాగించదగ్గ ఒక ఆచారాన్ని నిర్మించడానికి సరిపోతుంది.",
    ],
    historyEyebrow: "ఇదంతా ఎక్కడ నుండి వచ్చిందంటే",
    historyTitle: "ఔర్వ వెనుక చరిత్ర",
    history: [
      "ఈరోజు మనం తాగుతున్న టీ మొదటి నుండి భారతీయమైనది కాదు. గేదె పాలతో పాటు, బ్రిటిష్ పాలనలో ఇది ఒక వలస పంటగా ప్రవేశపెట్టబడింది — తరతరాలుగా అది మన నిత్య అలవాటులో భాగమైపోయింది.",
      "చెప్పుకునే కథనం ప్రకారం, బ్రిటిష్ వారికి ఇంకో విషయం మీద కూడా ఆసక్తి ఉండేది: కరువులు, వ్యాధులు, కష్టాలు ఎదురైనా భారతీయులు ఎందుకు ఇంత దృఢంగా నిలబడగలిగారు అని. దానికి కారణం మామూలు విషయాల్లోనే దొరికింది — మట్టి పాత్రల్లో నిల్వ చేసి వండుకునే ఆహారం, నీళ్లు, ఆవు పాలు, మరియు ఇంట్లో తరతరాలుగా వస్తున్న కషాయం రోజువారీ తాగడం.",
      "ఆ పాత, నిశ్శబ్దమైన సంప్రదాయాన్ని మళ్ళీ నిత్య జీవితంలోకి తీసుకురావాలన్నదే ఔర్వ ప్రయత్నం — అరువు తెచ్చుకున్న టీ సంస్కృతిగా కాదు, కషాయాన్నే టీగా కొత్తగా ఆవిష్కరించి: పూర్తి మూలికలు, నిజాయితీగా మరిగించినవి, ప్రతిరోజూ కుటుంబం సులభంగా అలవాటు చేసుకోగలిగేలా.",
    ],
    visitHeading: "మమ్మల్ని కలవండి",
  },
};

export function OurStory() {
  const [lang, setLang] = useState<Lang>("en");
  const c = CONTENT[lang];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className="relative overflow-hidden pt-32 sm:pt-44 pb-10 sm:pb-14">
        <motion.div
          initial={{ opacity: 0, rotate: -8 }}
          animate={{ opacity: 1, rotate: -4 }}
          transition={{ duration: 1 }}
          className="pointer-events-none absolute left-[4%] top-[20%] w-24 sm:w-36 text-rust-400/25"
        >
          <LeafOutline className="w-full" />
        </motion.div>
        <div className="relative mx-auto max-w-2xl px-5 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-rust-600 font-semibold mb-5">{c.eyebrow}</p>
          <AnimatePresence mode="wait">
            <motion.h1
              key={lang}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="font-display text-4xl sm:text-6xl leading-[1.08] text-ink"
            >
              {c.heroLine1}
              <br />
              {c.heroLine2} <span className="italic text-rust-600">{c.heroEmphasis}</span>
            </motion.h1>
          </AnimatePresence>
        </div>
      </section>

      <div className="flex items-center justify-center gap-2 pb-2 sm:pb-4">
        {(["en", "te"] as Lang[]).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide border transition-colors ${
              lang === l ? "bg-ink text-cream border-ink" : "border-ink/20 text-ink-soft hover:border-ink/50"
            }`}
          >
            {l === "en" ? "English" : "తెలుగు"}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={lang}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <section className="py-6 sm:py-10">
            <div className="mx-auto max-w-3xl px-5 sm:px-8 space-y-8 text-center">
              {c.story.map((para, i) => (
                <p key={i} className="text-base sm:text-lg text-ink-soft/75 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </section>

          <section className="py-20 sm:py-28 bg-cream-light">
            <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
              <p className="text-xs tracking-[0.3em] uppercase text-rust-600 font-semibold mb-5">
                {c.historyEyebrow}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] text-ink mb-8">
                {c.historyTitle}
              </h2>
              <div className="space-y-6 text-left sm:text-center">
                {c.history.map((para, i) => (
                  <p key={i} className="text-base sm:text-lg text-ink-soft/75 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </motion.div>
      </AnimatePresence>

      <DailyRitualTimeline />

      <section className="py-20 sm:py-28 bg-bark text-cream">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl">{c.visitHeading}</h2>
          <div className="mt-6 flex items-start justify-center gap-2 text-cream/70 text-sm max-w-md mx-auto">
            <MapPin size={16} className="mt-0.5 shrink-0" />
            <span>{SITE.address.full}</span>
          </div>
          <div className="mt-3 flex items-center justify-center gap-2 text-cream/70 text-sm">
            <Clock size={16} className="shrink-0" />
            <span>{SITE.hours.map((h) => `${h.label}: ${h.time}`).join(" · ")}</span>
          </div>
          <div className="mt-8">
            <WhatsAppButton href={whatsappLinkGeneral()} variant="light" size="lg" />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
