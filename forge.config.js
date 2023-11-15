module.exports = {
  packagerConfig: {
    executableName: "Discord Custom Rich Presence",
    icon: "./assets/icon",
    junk: true,
    appCategoryType: "public.app-category.utilities",
  },
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        title: "Discord Custom Rich Presence",
      },
    },
    {
      name: "@electron-forge/maker-dmg",
      config: {
        name: "Discord Custom Rich Presence",
      },
    },
    {
      name: "@electron-forge/maker-deb",
      config: {
        options: {
          categories: ["Utility"],
          icon: "./assets/icon.png",
          name: "Discord Custom Rich Presence",
        },
      },
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {
        options: {
          categories: ["Utility"],
          icon: "./assets/icon.png",
          name: "Discord Custom Rich Presence",
        },
      },
    },
  ],
};
