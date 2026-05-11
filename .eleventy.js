module.exports = function(eleventyConfig) {
  
  // 1. Passthrough File Copy
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("assets");

  // 2. Watch Targets
  eleventyConfig.addWatchTarget("./css/");

  // 3. Add a collection for blog posts
  eleventyConfig.addCollection("blogPosts", function(collectionApi) {
    // NOTE: Make sure to change this path to match your actual folder structure!
    return collectionApi.getFilteredByGlob("path/to/your/blog/posts/*.{html,md}").sort((a, b) => {
      return b.date - a.date; // Sort in reverse chronological order (newest first)
    });
  });

  // 4. Add date filter for RSS
  eleventyConfig.addFilter("dateToRfc822", function(date) {
    return new Date(date).toUTCString();
  });

  // 5. Return Object (MUST BE AT THE VERY BOTTOM)
  return {
    dir: {
      input: ".",        
      includes: "_includes", 
      output: "_site"    
    }
  };
  
};