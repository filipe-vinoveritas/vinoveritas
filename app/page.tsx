import HeroSection from '@/components/sections/hero-section';
import FeaturedCollection from '@/components/sections/featured-collection';
import WineCategories from '@/components/sections/wine-categories';
import WineStory from '@/components/sections/wine-story';
import SommelierPicks from '@/components/sections/sommelier-picks';
import Newsletter from '@/components/sections/newsletter';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturedCollection />
      <WineCategories />
      <WineStory />
      <SommelierPicks />
      <Newsletter />
    </div>
  );
}