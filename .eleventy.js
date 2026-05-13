module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addWatchTarget("./css/");

  eleventyConfig.addFilter("dateToRfc822", function(date) {
    return new Date(date).toUTCString();
  });

  return {
    dir: {
      input: ".",        
      includes: "_includes", 
      output: "_site"    
    }
  };
};