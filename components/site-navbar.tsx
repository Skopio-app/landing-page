import { SiApple, SiGithub } from "@icons-pack/react-simple-icons";
import { ArrowDownToLine } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SKOPIO_APPLE_SILICON_DOWNLOAD_URL } from "@/lib/integrations";

interface SiteNavbarProps {
  downloadHref?: string;
  githubHref?: string;
  homeHref?: string;
}

const SiteNavbar: React.FC<SiteNavbarProps> = ({
  downloadHref = SKOPIO_APPLE_SILICON_DOWNLOAD_URL,
  githubHref = "https://github.com/Skopio-app/skopio",
  homeHref = "/",
}) => {
  return (
    <header className="site-navbar sticky top-0 z-50 h-27.25 w-full" id="top">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-full w-full max-w-360 items-start px-5 pt-6.5 sm:px-8 lg:pr-57.75 lg:pl-17.5"
      >
        <div className="flex h-14.5 w-full items-center justify-between">
          <a
            href={homeHref}
            className="rounded-sm text-[28px] font-bold leading-none tracking-normal text-black outline-none focus-visible:ring-4 focus-visible:ring-black/20 sm:text-[32px]"
            aria-label="Skopio home"
          >
            Skopio
          </a>

          <div className="flex items-center gap-3 sm:gap-6 lg:gap-10">
            <Button
              asChild
              size="icon"
              className="size-11 rounded-lg bg-black text-white hover:bg-zinc-800 focus-visible:ring-black/30 sm:size-12.5"
            >
              <a
                href={githubHref}
                target="_blank"
                rel="noreferrer"
                aria-label="View Skopio on GitHub"
              >
                <SiGithub className="size-7 sm:size-8" />
              </a>
            </Button>

            <Button
              asChild
              className="group size-11 gap-2.5 rounded-xl border border-black bg-black p-0 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(0,0,0,0.16)] transition-[transform,background-color,box-shadow] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-zinc-900 hover:shadow-[0_11px_28px_rgba(0,0,0,0.22)] focus-visible:ring-black/30 active:scale-[0.97] min-[380px]:h-11 min-[380px]:w-auto min-[380px]:px-4 sm:h-14.5 sm:rounded-2xl sm:px-5 sm:text-base motion-reduce:transform-none motion-reduce:transition-none"
            >
              <a href={downloadHref} aria-label="Download Skopio">
                <SiApple className="size-5.5 sm:size-6" />
                <span className="hidden min-[380px]:inline">Download</span>
                <ArrowDownToLine className="hidden size-4 text-white/60 transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0.5 sm:block motion-reduce:transform-none motion-reduce:transition-none" />
              </a>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default SiteNavbar;
