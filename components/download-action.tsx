import { SiApple } from "@icons-pack/react-simple-icons";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DownloadActionProps {
  href: string;
  label: string;
  platform: "apple-silicon" | "mac-intel";
}

const platformStyles = {
  "apple-silicon":
    "border-black bg-black text-white hover:bg-zinc-800 focus-visible:ring-black/30",
  "mac-intel":
    "border-black/70 bg-[rgba(113,121,126,0.7)] text-white hover:bg-[rgba(99,107,112,0.82)] focus-visible:ring-zinc-500/30",
};

const DownloadAction: React.FC<DownloadActionProps> = ({
  href,
  label,
  platform,
}) => {
  return (
    <Button
      asChild
      className={cn(
        "h-17.5 w-full max-w-115.75 rounded-[10px] border px-5 text-lg font-normal sm:h-20.75 sm:text-2xl",
        platformStyles[platform],
      )}
    >
      <a href={href} aria-label={label}>
        {platform === "apple-silicon" ? (
          <SiApple aria-hidden="true" className="size-6.75 shrink-0" />
        ) : null}
        <span>{label}</span>
      </a>
    </Button>
  );
};

export default DownloadAction;
