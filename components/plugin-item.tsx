import Image from "next/image";

export interface PluginItemProps {
  image: string;
  name: string;
}

const PluginItem: React.FC<PluginItemProps> = ({ image, name }) => (
  <figure className="flex w-full max-w-62 flex-col items-center gap-3.25 text-center">
    <div className="relative size-17.5 shrink-0 overflow-hidden rounded-[10px]">
      <Image
        src={`/plugins/${image}`}
        alt=""
        fill
        sizes="70px"
        className="object-contain"
      />
    </div>
    <figcaption className="text-lg leading-normal font-light text-black sm:text-xl">
      {name}
    </figcaption>
  </figure>
);

export default PluginItem;
