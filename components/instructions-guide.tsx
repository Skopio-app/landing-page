import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { ArrowLeft, ArrowUpRight, Check, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  type Integration,
  JETBRAINS_MARKETPLACE_URL,
  JETBRAINS_REPOSITORY_URL,
  SKOPIO_DOWNLOAD_URL,
  VSCODE_MARKETPLACE_URL,
  VSCODE_REPOSITORY_URL,
} from "@/lib/integrations";

interface InstructionStep {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageClassName?: string;
}

interface InstructionsGuideProps {
  integration: Integration;
}

const getGuideContent = (integration: Integration) => {
  const { name, installationType } = integration;

  if (installationType === "jetbrains") {
    return {
      eyebrow: "JetBrains extension",
      description: `Install the Skopio extension in ${name} to capture coding, debugging, compiling, documentation, testing, and review activity.`,
      actionLabel: "Find the JetBrains extension",
      actionHref: JETBRAINS_MARKETPLACE_URL,
      repositoryHref: JETBRAINS_REPOSITORY_URL,
      steps: [
        {
          title: "Open the Plugins settings",
          description: `In ${name}, open Settings or Preferences, select Plugins, then choose the Marketplace tab.`,
        },
        {
          title: "Search for Skopio",
          description:
            "Search for “Skopio”, select the extension published by Skopio, and click Install.",
          image: "/instructions/jetbrains.png",
          imageAlt:
            "Skopio extension selected in a JetBrains IDE plugin window",
          imageWidth: 1312,
          imageHeight: 1096,
          imageClassName: "max-w-190",
        },
        {
          title: `Restart ${name}`,
          description:
            "Restart the IDE if prompted. Keep the Skopio desktop app running so your local events can sync to the dashboard.",
        },
      ] satisfies InstructionStep[],
    };
  }

  if (installationType === "vscode") {
    return {
      eyebrow: "VS Code extension",
      description: `Install the Skopio VS Code extension in ${name} to capture detailed coding activity and sync it with your local dashboard.`,
      actionLabel: "Open the VS Code Marketplace",
      actionHref: VSCODE_MARKETPLACE_URL,
      repositoryHref: VSCODE_REPOSITORY_URL,
      steps: [
        {
          title: "Open Extensions",
          description:
            "Open the Command Palette with ⇧⌘P, type “install”, then choose Extensions: Install Extensions.",
          image: "/instructions/vscode-search.png",
          imageAlt:
            "VS Code Command Palette showing Extensions: Install Extensions",
          imageWidth: 1304,
          imageHeight: 210,
          imageClassName: "max-w-210",
        },
        {
          title: "Install Skopio",
          description:
            "Search the Extensions Marketplace for “Skopio”, select the extension published by Skopio, and click Install.",
          image: "/instructions/vs-code.png",
          imageAlt: "Skopio extension in the VS Code Extensions Marketplace",
          imageWidth: 628,
          imageHeight: 324,
          imageClassName: "max-w-130",
        },
        {
          title: `Start using ${name}`,
          description:
            "The extension starts automatically. Keep the Skopio desktop app running to sync categorized activity to your dashboard.",
        },
      ] satisfies InstructionStep[],
    };
  }

  return {
    eyebrow: "Skopio desktop app",
    description: `Skopio tracks time spent in ${name} directly from the macOS app, so there is no separate extension to install.`,
    actionLabel: "Download Skopio for macOS",
    actionHref: SKOPIO_DOWNLOAD_URL,
    repositoryHref: undefined,
    steps: [
      {
        title: "Install and open Skopio",
        description:
          "Download the latest macOS app, move Skopio into your Applications folder, then launch it and complete the setup prompts.",
      },
      {
        title: "Open Settings",
        description:
          "Click the gear icon in the top-left corner of Skopio, or press ⌘, to open Settings.",
        image: "/instructions/open-settings.png",
        imageAlt:
          "Skopio dashboard with the Settings gear in the top-left corner",
        imageWidth: 3160,
        imageHeight: 860,
        imageClassName: "max-w-230",
      },
      {
        title: `Add ${name} to Tracked apps`,
        description: `${name} must be running so it appears in the selector. In General settings, find Tracked apps, open the selector, then choose ${name}.`,
        image: "/instructions/tracked-apps.png",
        imageAlt: `Skopio Settings showing the Tracked apps selector with running applications`,
        imageWidth: 1674,
        imageHeight: 1258,
        imageClassName: "max-w-190",
      },
      {
        title: `Use ${name} normally`,
        description: `That’s it—Skopio will recognize ${name} and include the time you spend in it on your dashboard.`,
      },
    ] satisfies InstructionStep[],
  };
};

const InstructionsGuide: React.FC<InstructionsGuideProps> = ({
  integration,
}) => {
  const content = getGuideContent(integration);
  const usesExtension = integration.installationType !== "app";

  return (
    <main>
      <section className="mx-auto flex w-full max-w-290 flex-col items-center px-5 pt-14 pb-20 text-center sm:px-8 sm:pt-20 sm:pb-28">
        <Link
          href="/#plugins"
          className="group mb-12 inline-flex items-center gap-2 self-start rounded-md text-sm font-medium text-black/60 outline-none transition-colors hover:text-black focus-visible:ring-4 focus-visible:ring-black/15 sm:mb-16"
        >
          <ArrowLeft
            aria-hidden="true"
            className="size-4 transition-transform group-hover:-translate-x-0.5"
          />
          All integrations
        </Link>

        <div className="relative size-22 overflow-hidden rounded-2xl sm:size-25">
          <Image
            src={`/plugins/${integration.image}`}
            alt={`${integration.name} icon`}
            fill
            sizes="100px"
            priority
            className="object-contain"
          />
        </div>

        <p className="mt-6 text-sm font-semibold tracking-[0.16em] text-black/50 uppercase">
          {content.eyebrow}
        </p>
        <h1 className="mt-3 max-w-230 text-4xl leading-tight font-semibold tracking-tight text-black sm:text-6xl">
          Connect {integration.name} to Skopio
        </h1>
        <p className="mt-6 max-w-190 text-lg leading-8 text-black/60 sm:text-xl">
          {content.description}
        </p>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-13 rounded-lg px-6 text-base font-semibold"
          >
            <a href={content.actionHref} target="_blank" rel="noreferrer">
              {integration.installationType === "app" ? (
                <Download aria-hidden="true" />
              ) : (
                <ArrowUpRight aria-hidden="true" />
              )}
              {content.actionLabel}
            </a>
          </Button>

          {usesExtension ? (
            <>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-13 rounded-lg border-black/15 px-6 text-base font-semibold shadow-none"
              >
                <a href={SKOPIO_DOWNLOAD_URL}>Get the desktop app</a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-13 rounded-lg border-black/15 px-6 text-base font-semibold shadow-none"
              >
                <a
                  href={content.repositoryHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiGithub aria-hidden="true" />
                  View source
                </a>
              </Button>
            </>
          ) : null}
        </div>
      </section>

      <section className="border-y border-black/10 bg-zinc-50/80 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto w-full max-w-230">
          <div className="max-w-160">
            <p className="text-sm font-semibold tracking-[0.16em] text-black/50 uppercase">
              Installation
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-black sm:text-5xl">
              Up and running in {content.steps.length} steps
            </h2>
          </div>

          <ol className="mt-12 flex flex-col gap-6 sm:mt-16 sm:gap-8">
            {content.steps.map((step, index) => (
              <li
                key={step.title}
                className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_16px_50px_rgba(0,0,0,0.05)]"
              >
                <div className="grid gap-6 p-6 sm:p-9 md:grid-cols-[64px_1fr]">
                  <span className="flex size-12 items-center justify-center rounded-full bg-black text-base font-semibold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-black sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-175 text-base leading-7 text-black/60 sm:text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>

                {step.image ? (
                  <div className="border-t border-black/10 bg-[#171918] p-3 sm:p-5">
                    <Image
                      src={step.image}
                      alt={step.imageAlt ?? ""}
                      width={step.imageWidth}
                      height={step.imageHeight}
                      className={`mx-auto h-auto w-full rounded-xl object-contain ${step.imageClassName ?? "max-w-210"}`}
                    />
                  </div>
                ) : null}
              </li>
            ))}
          </ol>

          <div className="mt-10 flex items-start gap-3 rounded-2xl bg-black p-5 text-white sm:p-6">
            <Check aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
            <p className="text-sm leading-6 text-white/85 sm:text-base">
              {usesExtension
                ? "Your data stays local on your Mac. The extension sends activity events only to the Skopio desktop app running on your device."
                : "Your data stays local on your Mac. Skopio only records activity from the apps you choose under Tracked apps."}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default InstructionsGuide;
