if (process.env.NODE_ENV === "development") {
  /**
   * this polyfill allows next.js to display runtime errors in IE11
   */
  require("@webcomponents/shadydom");
}
