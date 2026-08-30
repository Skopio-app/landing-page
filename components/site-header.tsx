import Image from "next/image";

import DownloadAction from "@/components/download-action";

interface SiteHeaderProps {
  appleSiliconHref?: string;
  macIntelHref?: string;
}

const SiteHeader: React.FC<SiteHeaderProps> = ({
  appleSiliconHref = "#download-apple-silicon",
  macIntelHref = "#download-mac-intel",
}) => {
  return (
    <header className="page-section site-header-section mx-auto w-full max-w-203.75 items-center gap-12 px-5 py-16 sm:gap-14.25 sm:px-8 sm:py-20">
      <div className="flex w-full max-w-172.5 flex-col items-center gap-3 text-center">
        <Image
          src="/assets/skopio-app-icon.png"
          alt="Skopio app icon"
          width={100}
          height={100}
          priority
          className="size-21.25 sm:size-25"
        />

        <h1 className="text-4xl leading-normal font-extrabold text-black sm:text-[40px]">
          Skopio
        </h1>

        <p className="max-w-159.5 text-lg leading-normal font-normal text-black sm:text-2xl">
          A productivity tool designed to help you track your general app usage
          and coding stats efficiently.
        </p>

        <p className="max-w-172.5 text-base leading-normal font-normal text-black/70 sm:text-2xl">
          “You can&apos;t improve what you don&apos;t measure.” - Peter Drucker.
        </p>
      </div>

      <div className="flex w-full flex-col items-center gap-3.75">
        <DownloadAction
          href={appleSiliconHref}
          label="Download for Apple Silicon"
          platform="apple-silicon"
        />
        <DownloadAction
          href={macIntelHref}
          label="Mac Intel Download"
          platform="mac-intel"
        />
      </div>
    </header>
  );
};

export default SiteHeader;
