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
      className="feature-card relative min-h-40.5 w-full gap-0 overflow-hidden rounded-[10px] border-2 py-0 shadow-none"
    >
      <CardContent className="h-full p-0">
        <button
          type="button"
          aria-controls="feature-preview"
          aria-pressed={active}
          onClick={onSelect}
          className="feature-card__button grid min-h-39 w-full grid-cols-[46px_minmax(0,1fr)] items-center gap-4 px-4 py-3 text-left outline-none sm:grid-cols-[54px_minmax(0,1fr)] sm:gap-9.25 sm:px-6.75 sm:py-2.75"
        >
          <span aria-hidden="true" className="feature-card__marker" />

          <span className="feature-card__number flex size-11.5 shrink-0 items-center justify-center rounded-full text-xl leading-none font-semibold sm:size-13.5 sm:text-[32px]">
            {itemNumber}
          </span>

          <span className="flex min-w-0 flex-col gap-2.75">
            <span className="flex items-center gap-2.75">
              <Icon
                aria-hidden="true"
                className="feature-card__icon size-6.5 shrink-0 sm:size-9"
                strokeWidth={1.8}
              />
              <span className="feature-card__title text-xl leading-normal font-semibold sm:text-2xl">
                {title}
              </span>
            </span>
            <span className="feature-card__description text-base leading-normal font-medium sm:text-lg">
              {description}
            </span>
          </span>
        </button>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
