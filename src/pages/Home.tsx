import { motion } from "framer-motion";
import { BrandIntro } from "@/components/home/BrandIntro";
import { Hero } from "@/components/home/Hero";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { MoodDiscovery } from "@/components/home/MoodDiscovery";
import { Collections } from "@/components/home/Collections";
import { ScrollStory } from "@/components/home/ScrollStory";
import { DarkRitual } from "@/components/home/DarkRitual";
import { DailyRitualTimeline } from "@/components/home/DailyRitualTimeline";
import { BotanicalLibrary } from "@/components/home/BotanicalLibrary";
import { RitualFinderTeaser } from "@/components/home/RitualFinderTeaser";
import { JournalPreview } from "@/components/home/JournalPreview";
import { TrustSection } from "@/components/home/TrustSection";
import { SocialStrip } from "@/components/home/SocialStrip";
import { FinalCTA } from "@/components/home/FinalCTA";

export function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="-mt-8"
    >
      <BrandIntro />
      <Hero />
      <ProductShowcase />
      <MoodDiscovery />
      <Collections />
      <ScrollStory />
      <DarkRitual />
      <DailyRitualTimeline />
      <BotanicalLibrary limit={6} />
      <RitualFinderTeaser />
      <JournalPreview />
      <TrustSection />
      <SocialStrip />
      <FinalCTA />
    </motion.div>
  );
}
