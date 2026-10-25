export const SKOPIO_DOWNLOAD_URL =
  "https://github.com/Skopio-app/desktop-releases/releases/download/v0.1.19/Skopio_0.1.19_aarch64.dmg";

export const VSCODE_MARKETPLACE_URL =
  "https://marketplace.visualstudio.com/items?itemName=Skopio.skopio-vscode";

export const JETBRAINS_MARKETPLACE_URL =
  "https://plugins.jetbrains.com/search?search=Skopio";

export const JETBRAINS_REPOSITORY_URL =
  "https://github.com/Skopio-app/skopio-jetbrains";

export const VSCODE_REPOSITORY_URL =
  "https://github.com/Skopio-app/skopio-vscode";

export type InstallationType = "app" | "jetbrains" | "vscode" | "pending";

export interface Integration {
  slug: string;
  image: string;
  name: string;
  installationType: InstallationType;
}

export const integrations: Integration[] = [
  {
    slug: "android-studio",
    image: "android-studio.png",
    name: "Android Studio",
    installationType: "jetbrains",
  },
  {
    slug: "antigravity",
    image: "antigravity.png",
    name: "Antigravity",
    installationType: "vscode",
  },
  {
    slug: "appcode",
    image: "appcode.png",
    name: "AppCode",
    installationType: "jetbrains",
  },
  {
    slug: "brave",
    image: "brave.png",
    name: "Brave",
    installationType: "app",
  },
  {
    slug: "chrome",
    image: "chrome.png",
    name: "Chrome",
    installationType: "app",
  },
  {
    slug: "clion",
    image: "clion.png",
    name: "CLion",
    installationType: "jetbrains",
  },
  {
    slug: "cursor",
    image: "cursor.png",
    name: "Cursor",
    installationType: "vscode",
  },
  {
    slug: "datagrip",
    image: "datagrip.png",
    name: "DataGrip",
    installationType: "jetbrains",
  },
  {
    slug: "dataspell",
    image: "dataspell.png",
    name: "DataSpell",
    installationType: "jetbrains",
  },
  {
    slug: "dia",
    image: "dia.png",
    name: "Dia",
    installationType: "app",
  },
  {
    slug: "figma",
    image: "figma.png",
    name: "Figma",
    installationType: "app",
  },
  {
    slug: "firefox",
    image: "firefox.png",
    name: "Firefox",
    installationType: "app",
  },
  {
    slug: "goland",
    image: "goland.png",
    name: "GoLand",
    installationType: "jetbrains",
  },
  {
    slug: "intellij-idea",
    image: "intellij-idea.png",
    name: "IntelliJ IDEA",
    installationType: "jetbrains",
  },
  {
    slug: "phpstorm",
    image: "phpstorm.png",
    name: "PhpStorm",
    installationType: "jetbrains",
  },
  {
    slug: "postman",
    image: "postman.png",
    name: "Postman",
    installationType: "app",
  },
  {
    slug: "pycharm",
    image: "pycharm.png",
    name: "PyCharm",
    installationType: "jetbrains",
  },
  {
    slug: "rider",
    image: "rider.png",
    name: "Rider",
    installationType: "jetbrains",
  },
  {
    slug: "rubymine",
    image: "rubymine.png",
    name: "RubyMine",
    installationType: "jetbrains",
  },
  {
    slug: "rustrover",
    image: "rustrover.png",
    name: "RustRover",
    installationType: "jetbrains",
  },
  {
    slug: "safari",
    image: "safari.png",
    name: "Safari",
    installationType: "app",
  },
  {
    slug: "terminal",
    image: "terminal.png",
    name: "Terminal",
    installationType: "app",
  },
  {
    slug: "vs-code",
    image: "vs-code.png",
    name: "VS Code",
    installationType: "vscode",
  },
  {
    slug: "warp",
    image: "warp.png",
    name: "Warp",
    installationType: "app",
  },
  {
    slug: "webstorm",
    image: "webstorm.png",
    name: "WebStorm",
    installationType: "jetbrains",
  },
  {
    slug: "xcode",
    image: "xcode.png",
    name: "Xcode",
    installationType: "app",
  },
  {
    slug: "zed",
    image: "zed.png",
    name: "Zed",
    installationType: "pending",
  },
];

export const getIntegration = (slug: string) =>
  integrations.find((integration) => integration.slug === slug);
