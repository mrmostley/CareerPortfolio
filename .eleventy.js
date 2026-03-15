module.exports = function(eleventyConfig) {
  // Pass through static assets unchanged
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");

  // These static HTML pages should be copied as-is, not processed as templates
  // Using rename to keep flat URLs (dashboard.html not dashboard/index.html)
  eleventyConfig.addPassthroughCopy({ "src/dashboard.html": "dashboard.html" });
  eleventyConfig.addPassthroughCopy({ "src/ondc.html": "ondc.html" });
  eleventyConfig.addPassthroughCopy({ "src/lit-tech.html": "lit-tech.html" });

  // Ignore these files so 11ty doesn't also try to process them as templates
  eleventyConfig.ignores.add("src/dashboard.html");
  eleventyConfig.ignores.add("src/ondc.html");
  eleventyConfig.ignores.add("src/lit-tech.html");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
