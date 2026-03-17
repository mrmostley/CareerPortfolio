module.exports = function(eleventyConfig) {
  // Pass through static assets unchanged
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");

  // Dashboard stays as static passthrough (too complex for CMS)
  eleventyConfig.addPassthroughCopy({ "src/dashboard.html": "dashboard.html" });
  eleventyConfig.ignores.add("src/dashboard.html");

  // Standalone pages (not in nav, access by direct link only)
  eleventyConfig.addPassthroughCopy({ "src/nari-guide.html": "nari-guide.html" });
  eleventyConfig.ignores.add("src/nari-guide.html");

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
