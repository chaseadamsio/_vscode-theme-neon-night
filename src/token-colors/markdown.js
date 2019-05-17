const markdown = colors => [
  {
    name: "Markdown - Plain",
    scope: ["text.html.markdown", "punctuation.definition.list_item.markdown"],
    settings: {
      foreground: colors.white
    }
  },
  {
    name: "Markdown - Markup Raw Inline",
    scope: [
      "text.html.markdown markup.inline.raw",
      "text.html.markdown markup.inline.raw punctuation.definition.raw.markdown"
    ],
    settings: {
      foreground: colors.blue,
      fontStyle: "bold"
    }
  },
  {
    name: "Markdown - Heading",
    scope: "text.html.markdown markup.heading",
    settings: {
      foreground: colors.magenta
    }
  },
  {
    name: "Markdown - Italic",
    scope: ["text.html.markdown markup.italic"],
    settings: {
      fontStyle: "italic",
      foreground: colors.cyan
    }
  },
  {
    name: "Markdown - Bold",
    scope: [
      "text.html.markdown markup.bold",
      "text.html.markdown markup.bold string"
    ],
    settings: {
      fontStyle: "bold",
      foreground: colors.cyan
    }
  },
  {
    name: "Markup - Underline",
    scope: ["text.html.markdown markup.underline"],
    settings: {
      fontStyle: "underline",
      foreground: colors.white
    }
  },
  {
    name: "Markdown - Blockquote",
    scope: [
      "text.html.markdown markup.quote punctuation.definition.blockquote.markdown"
    ],
    settings: {
      foreground: colors.magenta
    }
  },
  {
    name: "Markdown - Quote",
    scope: ["text.html.markdown markup.quote"],
    settings: {
      fontStyle: "italic",
      foreground: colors.blue
    }
  },
  {
    name: "Markdown - Link",
    scope: ["text.html.markdown string.other.link.title.markdown"],
    settings: {
      foreground: colors.blue
    }
  },
  {
    name: "Markdown - Link Description",
    scope: ["text.html.markdown string.other.link.description.title"],
    settings: {
      foreground: colors.white
    }
  },
  {
    name: "Markdown - Link Anchor",
    scope: ["text.html.markdown markup.underline.link"],
    settings: {
      foreground: colors.green
    }
  },
  {
    name: "Markdown - Raw Block",
    scope: ["text.html.markdown markup.raw.block"],
    settings: {
      foreground: colors.white
    }
  },
  {
    name: "Markdown - Raw Block Fenced",
    scope: ["text.html.markdown markup.raw.block.fenced"],
    settings: {
      foreground: colors.white
    }
  },
  {
    name: "Markdown - Fenced Bode Block",
    scope: [
      "text.html.markdown markup.fenced_code.block punctuation.definition"
    ],
    settings: {
      foreground: colors.blue
    }
  },
  {
    name: "Markdown - Separator",
    scope: ["text.html markdown meta.separator"],
    settings: {
      fontStyle: "bold",
      foreground: colors.white
    }
  }
];

module.exports = markdown;
