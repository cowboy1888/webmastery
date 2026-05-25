module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addWatchTarget("./css/");

  eleventyConfig.addFilter("dateToRfc822", function(date) {
    return new Date(date).toUTCString();
  });

  eleventyConfig.addFilter("mdy", function(date) {
    const d = new Date(date);
    const year = d.getUTCFullYear().toString(); 
    const month = String(d.getUTCMonth() + 1).padStart(2, '0');
    const day = String(d.getUTCDate()).padStart(2, '0');
    return `${month}/${day}/${year}`;
  });

  return {
    // 1. Explicitly tells Eleventy to watch, process, and compile these extensions
    templateFormats: ["md", "njk", "html"],

    // 2. Tells Eleventy to process HTML files using Nunjucks 
    // (This links your HTML files to your template engine so changes trigger a rebuild)
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",

    dir: {
      input: ".",        
      includes: "_includes", 
      output: "_site"    
    }
  };
};