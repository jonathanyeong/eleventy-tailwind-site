module.exports = config => {
  return {
    templateFormats: [
      "md",
      "njk",
      "html"
    ],
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};