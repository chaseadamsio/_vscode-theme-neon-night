const html = colors => [
  {
    name: "HTML - Tag",
    scope: "text.html entity.name.tag",
    settings: {
      foreground: colors.magenta
    }
  },
  {
    name: "HTML - Attribute",
    scope: "text.html entity.other.attribute-name",
    settings: {
      foreground: colors.blue
    }
  },
  {
    name: "HTML - Doctype",
    scope: "text.html meta.tag.metadata.doctype",
    settings: {
      fontStyle: "bold"
    }
  }
];

module.exports = html;
