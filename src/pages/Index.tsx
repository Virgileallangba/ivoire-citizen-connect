
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import RecensementDemo from "@/components/RecensementDemo";
import Dashboard from "@/components/Dashboard";
import Benefits from "@/components/Benefits";
import RoadmapSection from "@/components/RoadmapSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <RecensementDemo />
        <Dashboard />
        <Benefits />
        <RoadmapSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
