import Image from "next/image";
import Link from "next/link";

import type { InstallationType } from "@/lib/integrations";

export interface PluginItemProps {
  image: string;
  name: string;
  slug: string;
  installationType: InstallationType;
}

const PluginItem: React.FC<PluginItemProps> = ({
  image,
  name,
  slug,
  installationType,
}) => {
  const content = (
    <>
      <span
        className={`plugin-item__icon relative size-17.5 shrink-0 overflow-hidden rounded-[10px] ${
          installationType === "pending" ? "grayscale" : ""
        }`}
      >
        <Image
          src={`/plugins/${image}`}
          alt=""
          fill
          sizes="70px"
          className="object-contain"
        />
      </span>
      <span className="text-lg leading-normal font-light text-black sm:text-xl">
        {name}
      </span>
      {installationType === "pending" ? (
        <span className="rounded-full bg-zinc-200 px-2.5 py-1 text-xs font-medium text-zinc-600">
          In review
        </span>
      ) : null}
    </>
  );

  if (installationType === "pending") {
    return (
      <div
        aria-disabled="true"
        className="flex w-full max-w-62 cursor-not-allowed flex-col items-center gap-3.25 text-center opacity-45"
        title="The Zed extension is awaiting marketplace review"
      >
        {content}
      </div>
    );
  }

  return (
    <Link
      href={`/plugins/${slug}`}
      className="plugin-item flex w-full max-w-62 flex-col items-center gap-3.25 rounded-2xl px-3 py-4 text-center outline-none focus-visible:ring-4 focus-visible:ring-black/15"
      aria-label={`View ${name} installation instructions`}
    >
      {content}
    </Link>
  );
};

export default PluginItem;
