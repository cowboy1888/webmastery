module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addWatchTarget("./css/");

  eleventyConfig.addFilter("dateToRfc822", function(date) {
    return new Date(date).toUTCString();
  });

  // 2. NEW FILTER: Formats date to YY/MM/DD
  eleventyConfig.addFilter("mdy", function(date) {
    const d = new Date(date);
    const year = d.getUTCFullYear().toString(); 
    const month = String(d.getUTCMonth() + 1).padStart(2, '0'); // Adds leading zero
    const day = String(d.getUTCDate()).padStart(2, '0');
    return `${month}/${day}/${year}`;
  });

  return {
    dir: {
      input: ".",        
      includes: "_includes", 
      output: "_site"    
    }
  };
};