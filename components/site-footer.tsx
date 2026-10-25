import Image from "next/image";
import { CodeXml } from "lucide-react";

import FooterLinks, { FooterLink } from "@/components/footer-links";

interface SiteFooterProps {
  privacyHref?: string;
  sourceCodeHref?: string;
}

const SiteFooter: React.FC<SiteFooterProps> = ({
  privacyHref = "/privacy",
  sourceCodeHref = "https://github.com/Skopio-app/skopio",
}) => {
  const links: FooterLink[] = [
    { href: privacyHref, label: "Privacy Policy" },
    { href: sourceCodeHref, label: "Source code", external: true },
  ];

  return (
    <footer className="border-t border-black/30 bg-white">
      <div className="mx-auto w-full max-w-290 px-5 sm:px-8 lg:px-0">
        <div className="flex flex-col gap-10 py-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex max-w-83.75 flex-col items-start gap-5.25">
            <Image
              src="/assets/skopio-app-icon.png"
              alt="Skopio app icon"
              width={50}
              height={50}
              className="size-12.5"
            />
            <p className="text-base leading-[normal] text-black">
              Skopio is a macOS app to help you track where your time is spent.
            </p>
          </div>

          <FooterLinks links={links} />
        </div>

        <div className="border-t border-black/30 py-10">
          <p className="flex items-center gap-4.75 text-base leading-[normal] text-black">
            <CodeXml aria-hidden="true" className="size-7.5 shrink-0" />
            <span>
              Made by{" "}
              <a
                href="https://samwahome.com"
                target="_blank"
                rel="noreferrer"
                className="footer-link rounded-sm transition-colors hover:text-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4"
              >
                Samuel Wahome
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
