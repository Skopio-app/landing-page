import type { LucideIcon } from "lucide-react";

export interface DataBenefitProps {
  description: string;
  icon: LucideIcon;
}

const DataBenefit: React.FC<DataBenefitProps> = ({
  description,
  icon: Icon,
}) => (
  <div className="flex flex-col items-center gap-6.25 text-center">
    <Icon
      aria-hidden="true"
      className="size-9 text-black sm:size-10"
      strokeWidth={1.5}
    />
    <p className="text-xl leading-[1.2] font-light text-black sm:text-2xl max-w-62">
      {description}
    </p>
  </div>
);

export default DataBenefit;
