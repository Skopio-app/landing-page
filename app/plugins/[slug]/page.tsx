import type { Metadata } from "next";
import { notFound } from "next/navigation";

import InstructionsGuide from "@/components/instructions-guide";
import SiteFooter from "@/components/site-footer";
import SiteNavbar from "@/components/site-navbar";
import { getIntegration, integrations } from "@/lib/integrations";

interface InstructionsPageProps {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = () =>
  integrations
    .filter((integration) => integration.installationType !== "pending")
    .map(({ slug }) => ({ slug }));

export async function generateMetadata({
  params,
}: InstructionsPageProps): Promise<Metadata> {
  const integration = getIntegration((await params).slug);

  if (!integration || integration.installationType === "pending") {
    return {};
  }

  return {
    title: `${integration.name} setup | Skopio`,
    description: `Learn how to connect ${integration.name} to Skopio.`,
  };
}

const InstructionsPage: React.FC<InstructionsPageProps> = async ({
  params,
}) => {
  const integration = getIntegration((await params).slug);

  if (!integration || integration.installationType === "pending") {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <SiteNavbar />
      <InstructionsGuide integration={integration} />
      <SiteFooter />
    </div>
  );
};

export default InstructionsPage;
