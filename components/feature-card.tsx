import { ChevronRight, type LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  active: boolean;
  description: string;
  icon: LucideIcon;
  index: number;
  onSelect: () => void;
  title: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  active,
  description,
  icon: Icon,
  index,
  onSelect,
  title,
}) => {
  const itemNumber = String(index + 1).padStart(2, "0");
  const iconMotion = ["target", "rise", "timeline", "sparkle"][index];

  return (
    <Card
      data-active={active}
      className="feature-card relative h-full min-h-32 w-full gap-0 overflow-hidden rounded-2xl py-0"
    >
      <CardContent className="h-full p-0">
        <button
          type="button"
          aria-controls="feature-preview"
          aria-pressed={active}
          onClick={onSelect}
          className="feature-card__button grid h-full min-h-30 w-full grid-cols-[40px_minmax(0,1fr)_28px] items-center gap-3 px-4 py-3 text-left outline-none sm:grid-cols-[44px_minmax(0,1fr)_32px] sm:gap-5 sm:px-5 sm:py-4"
        >
          <span aria-hidden="true" className="feature-card__marker" />

          <span className="feature-card__number flex size-10 shrink-0 items-center justify-center rounded-xl border text-sm leading-none font-semibold tabular-nums sm:size-11 sm:text-base">
            {itemNumber}
          </span>

          <span className="flex min-w-0 flex-col gap-2">
            <span className="flex items-center gap-2.5">
              <span className="feature-card__icon-frame flex size-7.5 shrink-0 items-center justify-center rounded-lg sm:size-8.5">
                <Icon
                  aria-hidden="true"
                  className="feature-card__icon size-4.5 sm:size-5"
                  data-motion={iconMotion}
                  strokeWidth={1.8}
                />
              </span>
              <span className="feature-card__title text-lg leading-normal font-semibold sm:text-xl">
                {title}
              </span>
            </span>
            <span className="feature-card__description text-sm leading-normal font-medium sm:text-base">
              {description}
            </span>
          </span>

          <span className="feature-card__chevron flex size-7 items-center justify-center rounded-full sm:size-8">
            <ChevronRight
              aria-hidden="true"
              className="size-4 sm:size-4.5"
              strokeWidth={2}
            />
          </span>
        </button>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
