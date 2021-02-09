module.exports = {
  webpack(config) {
    /**
     * Add the polyfill.js file to our entries
     */
    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();

      if (
        entries["main.js"] &&
        !entries["main.js"].includes("./polyfills.js")
      ) {
        entries["main.js"].unshift("./polyfills.js");
      }
      return entries;
    };

    return config;
  },
};
