import type { LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  active: boolean;
  description: string;
  icon: LucideIcon;
  iconClassName?: string;
  index: number;
  onSelect: () => void;
  title: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  active,
  description,
  icon: Icon,
  iconClassName,
  index,
  onSelect,
  title,
}) => {
  const itemNumber = String(index + 1).padStart(2, "0");

  return (
    <Card
      className={cn(
        "min-h-40.5 w-full gap-0 overflow-hidden rounded-[10px] border-[3px] border-transparent bg-black/50 py-0 text-white shadow-none transition-colors",
        active && "border-[#bf40bf] bg-black/90",
      )}
    >
      <CardContent className="h-full p-0">
        <button
          type="button"
          aria-controls="feature-preview"
          aria-pressed={active}
          onClick={onSelect}
          className="grid min-h-39 w-full grid-cols-[46px_minmax(0,1fr)] items-center gap-4 px-4 py-3 text-left outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-white/35 sm:grid-cols-[54px_minmax(0,1fr)] sm:gap-9.25 sm:px-6.75 sm:py-2.75"
        >
          <span className="flex size-11.5 shrink-0 items-center justify-center rounded-full bg-[#545b60] text-xl leading-none font-semibold sm:size-13.5 sm:text-[32px]">
            {itemNumber}
          </span>

          <span className="flex min-w-0 flex-col gap-2.75">
            <span className="flex items-start gap-2.75">
              <Icon
                aria-hidden="true"
                className={cn("size-9 shrink-0 sm:size-11.25", iconClassName)}
                strokeWidth={1.8}
              />
              <span className="text-xl leading-normal font-semibold sm:text-2xl">
                {title}
              </span>
            </span>
            <span className="text-base leading-normal font-medium text-white/80 sm:text-lg">
              {description}
            </span>
          </span>
        </button>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
