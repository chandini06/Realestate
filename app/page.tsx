import Header from './components/Header';
import Hero from './components/Hero';
import MarketingPlaceholder from './components/MarketingPlaceholder';
import Features from './components/Features';
import StatsSection from './components/StatsSection';
import InvestmentCalculator from './components/InvestmentCalculator';
import ComparisonTool from './components/ComparisonTool';
import InvestmentTimeline from './components/InvestmentTimeline';
import CashbackModel from './components/CashbackModel';
import ProcessSection from './components/ProcessSection';
import VisionMission from './components/VisionMission';
import Footer from './components/Footer';
import BottomBanner from './components/BottomBanner';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <MarketingPlaceholder />
        <StatsSection />
        <InvestmentCalculator />
        <ComparisonTool />
        <Features />
        <InvestmentTimeline />
        <CashbackModel />
        <ProcessSection />
        <VisionMission />
      </main>
      <Footer />
      <BottomBanner />
    </div>
  );
}
