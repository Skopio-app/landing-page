import type { LucideIcon } from "lucide-react";

export interface DataBenefitProps {
  description: string;
  icon: LucideIcon;
  iconAnimation: "check" | "cloud" | "lock";
}

const DataBenefit: React.FC<DataBenefitProps> = ({
  description,
  icon: Icon,
  iconAnimation,
}) => (
  <div className="flex flex-col items-center gap-6.25 text-center">
    <Icon
      aria-hidden="true"
      data-animation={iconAnimation}
      className="data-benefit__icon size-9 text-black sm:size-10"
      strokeWidth={1.5}
    />
    <p className="text-xl leading-[1.2] font-light text-black sm:text-2xl max-w-62">
      {description}
    </p>
  </div>
);

export default DataBenefit;
