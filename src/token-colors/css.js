const css = colors => [
  {
    name: "CSS Class and Support",
    scope: [
      "source.css support.type.property-name",
      "source.sass support.type.property-name",
      "source.scss support.type.property-name",
      "source.less support.type.property-name",
      "source.stylus support.type.property-name",
      "source.postcss support.type.property-name"
    ],
    settings: {
      foreground: colors.blue
    }
  },
  {
    name: "CSS Classes",
    scope: ["entity.other.attribute-name.class"],
    settings: {
      foreground: "#FFCB6B"
    }
  },
  {
    name: "CSS ID's",
    scope: ["source.sass keyword.control"],
    settings: {
      foreground: "#82AAFF"
    }
  }
];

module.exports = css;
