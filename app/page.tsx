import SiteNavbar from "@/components/site-navbar";
import SiteHeader from "@/components/site-header";
import FeaturesSection from "@/components/features-section";
import DataSection from "@/components/data-section";
import PluginsSection from "@/components/plugins-section";
import SiteFooter from "@/components/site-footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNavbar />
      <main>
        <SiteHeader />
        <FeaturesSection />
        <DataSection />
        <PluginsSection />
      </main>
      <SiteFooter />
    </div>
  );
}
