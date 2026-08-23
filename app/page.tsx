import SiteNavbar from "@/components/site-navbar";
import SiteHeader from "@/components/site-header";
import FeaturesSection from "@/components/features-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNavbar />
      <main>
        <SiteHeader />
        <FeaturesSection />
      </main>
    </div>
  );
}
