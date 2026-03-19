import type { Configuration } from "electron-builder"

const channel = (() => {
  const raw = process.env.OPENSTUDIER_CHANNEL
  if (raw === "dev" || raw === "beta" || raw === "prod") return raw
  return "dev"
})()

const getBase = (): Configuration => ({
  artifactName: "openstudier-electron-${os}-${arch}.${ext}",
  directories: {
    output: "dist",
    buildResources: "resources",
  },
  files: ["out/**/*", "resources/**/*"],
  extraResources: [
    {
      from: "resources/",
      to: "",
      filter: ["openstudier-cli*"],
    },
    {
      from: "native/",
      to: "native/",
      filter: ["index.js", "index.d.ts", "build/Release/mac_window.node", "swift-build/**"],
    },
  ],
  mac: {
    category: "public.app-category.developer-tools",
    icon: `resources/icons/icon.icns`,
    hardenedRuntime: true,
    gatekeeperAssess: false,
    entitlements: "resources/entitlements.plist",
    entitlementsInherit: "resources/entitlements.plist",
    notarize: true,
    target: ["dmg", "zip"],
  },
  dmg: {
    sign: true,
  },
  protocols: {
    name: "OpenStudier",
    schemes: ["openstudier"],
  },
  win: {
    icon: `resources/icons/icon.ico`,
    target: ["nsis"],
  },
  nsis: {
    oneClick: false,
    allowToChangeInstallationDirectory: true,
    installerIcon: `resources/icons/icon.ico`,
    installerHeaderIcon: `resources/icons/icon.ico`,
  },
  linux: {
    icon: `resources/icons`,
    category: "Development",
    target: ["AppImage", "deb", "rpm"],
  },
})

function getConfig() {
  const base = getBase()

  switch (channel) {
    case "dev": {
      return {
        ...base,
        appId: "ai.openstudier.desktop.dev",
        productName: "OpenStudier Dev",
        rpm: { packageName: "openstudier-dev" },
      }
    }
    case "beta": {
      return {
        ...base,
        appId: "ai.openstudier.desktop.beta",
        productName: "OpenStudier Beta",
        protocols: { name: "OpenStudier Beta", schemes: ["openstudier"] },
        publish: { provider: "github", owner: "anomalyco", repo: "openstudier-beta", channel: "latest" },
        rpm: { packageName: "openstudier-beta" },
      }
    }
    case "prod": {
      return {
        ...base,
        appId: "ai.openstudier.desktop",
        productName: "OpenStudier",
        protocols: { name: "OpenStudier", schemes: ["openstudier"] },
        publish: { provider: "github", owner: "anomalyco", repo: "openstudier", channel: "latest" },
        rpm: { packageName: "openstudier" },
      }
    }
  }
}

export default getConfig()
