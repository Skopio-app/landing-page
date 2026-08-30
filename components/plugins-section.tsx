import PluginItem, { PluginItemProps } from "@/components/plugin-item";

const plugins: PluginItemProps[] = [
  { image: "android-studio.png", name: "Android Studio" },
  { image: "antigravity.png", name: "Antigravity" },
  { image: "appcode.png", name: "AppCode" },
  { image: "brave.png", name: "Brave" },
  { image: "chrome.png", name: "Chrome" },
  { image: "clion.png", name: "CLion" },
  { image: "cursor.png", name: "Cursor" },
  { image: "datagrip.png", name: "DataGrip" },
  { image: "dataspell.png", name: "DataSpell" },
  { image: "dia.png", name: "Dia" },
  { image: "figma.png", name: "Figma" },
  { image: "firefox.png", name: "Firefox" },
  { image: "goland.png", name: "GoLand" },
  { image: "intellij-idea.png", name: "IntelliJ IDEA" },
  { image: "phpstorm.png", name: "PhpStorm" },
  { image: "postman.png", name: "Postman" },
  { image: "pycharm.png", name: "PyCharm" },
  { image: "rider.png", name: "Rider" },
  { image: "rubymine.png", name: "RubyMine" },
  { image: "rustrover.png", name: "RustRover" },
  { image: "safari.png", name: "Safari" },
  { image: "terminal.png", name: "Terminal" },
  { image: "vs-code.png", name: "VS Code" },
  { image: "warp.png", name: "Warp" },
  { image: "webstorm.png", name: "WebStorm" },
  { image: "xcode.png", name: "Xcode" },
  { image: "zed.png", name: "Zed" },
];

const PluginsSection = () => (
  <section
    id="plugins"
    aria-labelledby="plugins-title"
    className="mx-auto w-full max-w-360 px-5 py-24 sm:px-8 sm:py-32 lg:px-10"
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
      {plugins.map((plugin) => (
        <PluginItem key={plugin.name} {...plugin} />
      ))}
    </div>
  </section>
);

export default PluginsSection;
