import { SiApple, SiGithub } from "@icons-pack/react-simple-icons";

import { Button } from "@/components/ui/button";

interface SiteNavbarProps {
  downloadHref?: string;
  githubHref?: string;
}

const SiteNavbar: React.FC<SiteNavbarProps> = ({
  downloadHref = "#download",
  githubHref = "https://github.com/Skopio-app/skopio",
}) => {
  return (
    <header className="h-27.25 w-full bg-white" id="top">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-full w-full max-w-360 items-start px-5 pt-6.5 sm:px-8 lg:pr-57.75 lg:pl-17.5"
      >
        <div className="flex h-14.5 w-full items-center justify-between">
          <a
            href="#top"
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
              variant="secondary"
              className="h-11 gap-3 rounded-lg bg-[#d9d9d9] px-4 text-base font-semibold text-black hover:bg-[#cfcfcf] focus-visible:ring-black/30 sm:h-[58px] sm:w-[187px] sm:px-6"
            >
              <a href={downloadHref}>
                <SiApple className="size-6 text-white sm:size-7" />
                <span>Download</span>
              </a>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default SiteNavbar;
