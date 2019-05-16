const markdown = colors => [
  {
    name: "Markup - Bold-Italic",
    scope: [
      "markup.bold markup.italic",
      "markup.italic markup.bold",
      "markup.quote markup.bold",
      "markup.bold markup.italic string",
      "markup.italic markup.bold string",
      "markup.quote markup.bold string"
    ],
    settings: {
      fontStyle: "bold",
      foreground: colors.white
    }
  },
  {
    name: "Markdown - Plain",
    scope: ["text.html.markdown", "punctuation.definition.list_item.markdown"],
    settings: {
      foreground: colors.white
    }
  },
  {
    name: "Markdown - Markup Raw Inline",
    scope: ["text.html.markdown markup.inline.raw.markdown"],
    settings: {
      foreground: colors.magenta
    }
  },
  {
    name: "Markdown - Markup Raw Inline Punctuation",
    scope: [
      "text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown"
    ],
    settings: {
      foreground: colors.white
    }
  },
  {
    name: "Markdown - Heading",
    scope: "markup.heading",
    settings: {
      foreground: colors.magenta
    }
  },
  {
    name: "Markup - Italic",
    scope: ["markup.italic"],
    settings: {
      fontStyle: "italic",
      foreground: colors.white
    }
  },
  {
    name: "Markup - Bold",
    scope: ["markup.bold", "markup.bold string"],
    settings: {
      fontStyle: "bold",
      foreground: colors.white
    }
  },
  {
    name: "Markup - Underline",
    scope: ["markup.underline"],
    settings: {
      fontStyle: "underline",
      foreground: colors.white
    }
  },
  {
    name: "Markdown - Blockquote",
    scope: ["markup.quote punctuation.definition.blockquote.markdown"],
    settings: {
      foreground: colors.magenta
    }
  },
  {
    name: "Markup - Quote",
    scope: ["markup.quote"],
    settings: {
      fontStyle: "italic"
    }
  },
  {
    name: "Markdown - Link",
    scope: ["string.other.link.title.markdown"],
    settings: {
      foreground: colors.blue
    }
  },
  {
    name: "Markdown - Link Description",
    scope: ["string.other.link.description.title.markdown"],
    settings: {
      foreground: colors.white
    }
  },
  {
    name: "Markdown - Link Anchor",
    scope: ["constant.other.reference.link.markdown"],
    settings: {
      foreground: colors.white
    }
  },
  {
    name: "Markup - Raw Block",
    scope: ["markup.raw.block"],
    settings: {
      foreground: colors.white
    }
  },
  {
    name: "Markdown - Raw Block Fenced",
    scope: ["markup.raw.block.fenced.markdown"],
    settings: {
      foreground: colors.white
    }
  },
  {
    name: "Markdown - Fenced Bode Block",
    scope: ["punctuation.definition.fenced.markdown"],
    settings: {
      foreground: colors.white
    }
  },
  {
    name: "Markdown - Fenced Bode Block Variable",
    scope: [
      "markup.raw.block.fenced.markdown",
      "variable.language.fenced.markdown",
      "punctuation.section.class.end"
    ],
    settings: {
      foreground: colors.white
    }
  },
  {
    name: "Markdown - Fenced Language",
    scope: ["variable.language.fenced.markdown"],
    settings: {
      foreground: colors.white
    }
  },
  {
    name: "Markdown - Separator",
    scope: ["meta.separator"],
    settings: {
      fontStyle: "bold",
      foreground: colors.white
    }
  },
  {
    name: "Markup - Table",
    scope: ["markup.table"],
    settings: {
      foreground: colors.white
    }
  }
];

module.exports = markdown;
