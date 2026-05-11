module.exports = function(eleventyConfig) {
  
  // 1. Passthrough File Copy
  // Tells 11ty to copy these folders to the final build unchanged
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("assets");

  // 2. Watch Targets
  // Tells 11ty to watch for changes in the CSS folder and automatically reload
  eleventyConfig.addWatchTarget("./css/");

  // 3. Return Object
  // Tells 11ty where to look for your files and where to build them
  return {
    dir: {
      input: ".",        // "." means the current root folder
      includes: "_includes", // Where your layouts live
      output: "_site"    // Where the final website is built
    }
  };
};