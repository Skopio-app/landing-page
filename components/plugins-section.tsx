import PluginItem from "@/components/plugin-item";
import { integrations } from "@/lib/integrations";

const PluginsSection = () => (
  <section
    id="plugins"
    aria-labelledby="plugins-title"
    className="page-section mx-auto w-full max-w-360 px-5 py-24 sm:px-8 sm:py-32 lg:px-10"
  >
    <div className="mx-auto text-center text-black">
      <h2
        id="plugins-title"
        className="text-3xl leading-normal font-semibold sm:text-4xl"
      >
        Plugins
      </h2>
      <p className="mx-auto mt-6.25 max-w-298.75 text-xl leading-normal font-light sm:text-3xl">
        Install the open source plugins to view coding and activity metrics on
        your dashboard
      </p>
    </div>

    <div className="mx-auto mt-16.75 grid w-full max-w-332 grid-cols-2 justify-items-center gap-x-5.5 gap-y-16 sm:grid-cols-3 sm:gap-y-21.5 lg:grid-cols-5">
      {integrations.map((plugin) => (
        <PluginItem key={plugin.name} {...plugin} />
      ))}
    </div>
  </section>
);

export default PluginsSection;
