import { ClipboardCheck, CloudOff, ShieldLock } from "lucide-react";

import DataBenefit, { DataBenefitProps } from "@/components/data-benefit";

const dataBenefits: DataBenefitProps[] = [
  {
    description: "Data captured stays fully on device",
    icon: ShieldLock,
  },
  {
    description: "Skopio is fully usable even when offline",
    icon: CloudOff,
  },
  {
    description: "Easily review your effort across projects",
    icon: ClipboardCheck,
  },
];

const DataSection = () => (
  <section
    id="data"
    aria-labelledby="data-title"
    className="page-section mx-auto w-full max-w-360 px-5 py-24 sm:px-8 sm:py-32 lg:px-17.5"
  >
    <div className="mx-auto flex w-full max-w-315 flex-col items-center">
      <div className="text-center text-black">
        <h2
          id="data-title"
          className="text-3xl leading-tight font-semibold sm:text-4xl"
        >
          Your data stays yours
        </h2>
        <p className="mt-1.75 text-2xl leading-tight font-light sm:text-4xl">
          Skopio is built around data you own
        </p>
      </div>

      <div className="mt-20 grid w-full max-w-284.5 gap-14 sm:mt-26 md:grid-cols-3 sm:items-start sm:justify-items-center sm:gap-10">
        {dataBenefits.map((benefit) => (
          <DataBenefit key={benefit.description} {...benefit} />
        ))}
      </div>
    </div>
  </section>
);

export default DataSection;
