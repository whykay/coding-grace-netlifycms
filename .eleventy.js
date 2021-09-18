const yaml = require("js-yaml");
const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const htmlmin = require("html-minifier");

// via https://11ty.rocks/eleventyjs/content/
const markdownIt = require("markdown-it");


module.exports = function (eleventyConfig) {
  // Disable automatic use of your .gitignore
  eleventyConfig.setUseGitIgnore(false);

  // Merge data instead of overriding
  eleventyConfig.setDataDeepMerge(true);

  // via https://11ty.rocks/eleventyjs/content/
  const md = new markdownIt({
    html: true,
  });
  eleventyConfig.addFilter("markdown", (content) => {
    return md.render(content);
  });

  eleventyConfig.addFilter("addYearToEvents", (objs) => {
    return objs.map((obj) => {
      obj.data.year = obj.data.start_datetime.getFullYear();
      return obj;
    });
  });

  // human readable date
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });

  // Wed Aug 6, 2014 (13:07)
  eleventyConfig.addFilter("readableDateTime", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "EEE DD (T)"
    );
  });
  
    // human readable year
    eleventyConfig.addFilter("getYear", (dateObj) => {
      return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
        "yyyy"
      );
    });

  // Filtered events including a given type
  eleventyConfig.addFilter("inclItemTypeList", (items, item_type) => {
    return items.filter(item => item.type == item_type 
    );
  });

  // Was returning list of items excluding the current day
  // Fix 1 day off, minus the day of local datetime before it gets compared
  eleventyConfig.addFilter("laterItemList", (items) => {
    return items.filter(item => DateTime.local().minus({days: 1}) <= DateTime.fromJSDate(item.data.start_datetime)
    );
  });

  // Was returning list of items excluding the current day
  // Fix 1 day off, minus the day of local datetime before it gets compared
  eleventyConfig.addFilter("OldItemList", (items) => {
    return items.filter(item => DateTime.local().minus({days: 1}) > DateTime.fromJSDate(item.data.start_datetime)
    );
  });

  // Syntax Highlighting for Code blocks
  eleventyConfig.addPlugin(syntaxHighlight);

  // To Support .yaml Extension in _data
  // You may remove this if you can use JSON
  eleventyConfig.addDataExtension("yaml", (contents) =>
    yaml.safeLoad(contents)
  );

  // Copy Static Files to /_Site
  eleventyConfig.addPassthroughCopy({
    "./src/admin/config.yml": "./admin/config.yml",
    "./node_modules/alpinejs/dist/alpine.js": "./static/js/alpine.js",
    "./node_modules/prismjs/themes/prism-tomorrow.css":
      "./static/css/prism-tomorrow.css",
  });

  // Copy Image Folder to /_site
  eleventyConfig.addPassthroughCopy("./src/static/img");

  // Copy favicon to route of /_site
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");

  // Minify HTML
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
  });

  // Let Eleventy transform HTML files as nunjucks
  // So that we can use .html instead of .njk
  return {
    dir: {
      input: "src",
    },
    htmlTemplateEngine: "njk",
  };
};
