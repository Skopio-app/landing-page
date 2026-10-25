import { SiApple } from "@icons-pack/react-simple-icons";
import { ArrowDownToLine, Cpu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DownloadActionProps {
  href: string;
  label: string;
  platform: "apple-silicon" | "mac-intel";
}

const platformStyles = {
  "apple-silicon":
    "border-black bg-black text-white shadow-[0_12px_32px_rgba(0,0,0,0.18)] hover:bg-zinc-900 hover:shadow-[0_16px_38px_rgba(0,0,0,0.24)] focus-visible:ring-black/30",
  "mac-intel":
    "border-black/15 bg-white/90 text-black shadow-[0_10px_28px_rgba(0,0,0,0.08)] backdrop-blur-sm hover:border-black/25 hover:bg-white hover:shadow-[0_14px_34px_rgba(0,0,0,0.12)] focus-visible:ring-black/20",
};

const platformDetails = {
  "apple-silicon": {
    title: "Apple Silicon",
  },
  "mac-intel": {
    title: "Intel",
  },
} as const;

const DownloadAction: React.FC<DownloadActionProps> = ({
  href,
  label,
  platform,
}) => {
  const { title } = platformDetails[platform];
  const isAppleSilicon = platform === "apple-silicon";

  return (
    <Button
      asChild
      className={cn(
        "group h-18 w-full justify-start gap-3 rounded-2xl border px-3.5 text-base transition-[transform,background-color,border-color,box-shadow] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.98] sm:h-20 sm:px-4 motion-reduce:transform-none motion-reduce:transition-none",
        platformStyles[platform],
      )}
    >
      <a href={href} aria-label={label}>
        <span
          className={cn(
            "flex size-11 shrink-0 items-center justify-center rounded-xl border sm:size-12",
            isAppleSilicon
              ? "border-white/15 bg-white/10"
              : "border-black/10 bg-zinc-100",
          )}
        >
          {isAppleSilicon ? (
            <SiApple aria-hidden="true" className="size-5.5 sm:size-6" />
          ) : (
            <Cpu aria-hidden="true" className="size-5.5 sm:size-6" />
          )}
        </span>

        <span className="min-w-0 flex-1 text-left leading-tight">
          <span
            className={cn(
              "block text-[11px] font-medium tracking-[0.11em] uppercase",
              isAppleSilicon ? "text-white/55" : "text-black/45",
            )}
          >
            Download for
          </span>
          <span className="mt-0.5 block font-semibold tracking-[-0.01em] sm:text-lg">
            {title}
          </span>
        </span>

        <ArrowDownToLine
          aria-hidden="true"
          className={cn(
            "size-4.5 shrink-0 transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none",
            isAppleSilicon ? "text-white/70" : "text-black/45",
          )}
        />
      </a>
    </Button>
  );
};

export default DownloadAction;
