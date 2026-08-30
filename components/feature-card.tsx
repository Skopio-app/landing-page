import type { LucideIcon } from "lucide-react";

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

  return (
    <Card
      data-active={active}
      className="feature-card relative h-full min-h-32 w-full gap-0 overflow-hidden rounded-[10px] border-2 py-0 shadow-none"
    >
      <CardContent className="h-full p-0">
        <button
          type="button"
          aria-controls="feature-preview"
          aria-pressed={active}
          onClick={onSelect}
          className="feature-card__button grid h-full min-h-30 w-full grid-cols-[42px_minmax(0,1fr)] items-center gap-3 px-4 py-3 text-left outline-none sm:grid-cols-[46px_minmax(0,1fr)] sm:gap-6 sm:px-5.5 sm:py-3"
        >
          <span aria-hidden="true" className="feature-card__marker" />

          <span className="feature-card__number flex size-10.5 shrink-0 items-center justify-center rounded-full text-lg leading-none font-semibold sm:size-11.5 sm:text-2xl">
            {itemNumber}
          </span>

          <span className="flex min-w-0 flex-col gap-2.25">
            <span className="flex items-center gap-2.25">
              <Icon
                aria-hidden="true"
                className="feature-card__icon size-5.5 shrink-0 sm:size-7"
                strokeWidth={1.8}
              />
              <span className="feature-card__title text-lg leading-normal font-semibold sm:text-xl">
                {title}
              </span>
            </span>
            <span className="feature-card__description text-sm leading-normal font-medium sm:text-base">
              {description}
            </span>
          </span>
        </button>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
