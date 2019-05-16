const generateTheme = (themeName, colors) => ({
  name: "Neon Night",
  type: "dark",
  colors: {
    ...require("./colors/sidebar")(colors),
    ...require("./colors/base")(colors),
    ...require("./colors/text")(colors),
    ...require("./colors/button")(colors),
    ...require("./colors/dropdown")(colors),
    ...require("./colors/input")(colors),
    ...require("./colors/scrollbar")(colors),
    ...require("./colors/badge")(colors),
    ...require("./colors/progress-bar")(colors),
    ...require("./colors/list")(colors),
    ...require("./colors/activity-bar")(colors),
    ...require("./colors/editor-groups-tabs")(colors),
    ...require("./colors/editor")(colors),
    ...require("./colors/diff-editor")(colors),
    ...require("./colors/editor-widget")(colors),
    ...require("./colors/peek-view")(colors),
    ...require("./colors/merge-conflicts")(colors),
    ...require("./colors/panel")(colors),
    ...require("./colors/status-bar")(colors),
    ...require("./colors/title-bar")(colors),
    ...require("./colors/menu-bar")(colors),
    ...require("./colors/notification")(colors),
    ...require("./colors/quick-picker")(colors),
    ...require("./colors/integrated-terminal")(colors),
    ...require("./colors/debug")(colors),
    ...require("./colors/git")(colors),
    ...require("./colors/breadcrumbs")(colors)
  },
  tokenColors: [
    ...require("./token-colors/base")(colors),
    ...require("./token-colors/markdown")(colors),
    ...require("./token-colors/json")(colors),
    ...require("./token-colors/clojure")(colors),
    ...require("./token-colors/go")(colors),
    {
      name: "Operator, Misc",
      scope: [
        "constant.other.color",
        "meta.tag",
        "punctuation.definition.tag",
        "punctuation.separator.inheritance.php",
        "punctuation.definition.tag.html",
        "punctuation.definition.tag.begin.html",
        "punctuation.definition.tag.end.html",
        "punctuation.section.embedded",
        "keyword.other.template",
        "keyword.other.substitution"
      ],
      settings: {
        foreground: colors.white
      }
    },
    {
      name:
        "Support Constant, `new` keyword, Special Method Keyword, `debugger`, other keywords",
      scope: [
        "support.constant",
        "keyword.other.special-method",
        "keyword.other.new",
        "keyword.other.debugger",
        "keyword.control"
      ],
      settings: {
        foreground: colors.magenta
      }
    },

    {
      name: "JS - Import/Require",
      scope: ["keyword.control.module.js"],
      settings: {
        foreground: colors.magenta
      }
    },
    {
      name: "JS  - Object Property Keys",
      scope: "string.unquoted.js",
      settings: {
        foreground: colors.white
      }
    },
    {
      name: "JS - Object Property Strings",
      scope: [
        "constant.other.object.key.js string.quoted.double.js",
        "constant.other.object.key.js string.quoted punctuation"
      ],
      settings: {
        foreground: colors.magenta
      }
    },
    {
      name: "Tag",
      scope: ["meta.tag.sgml", "markup.deleted.git_gutter"],
      settings: {
        foreground: colors.red
      }
    },

    {
      name: "Entity Tag",
      scope: "entity.name.tag",
      settings: {
        foreground: colors.magenta
      }
    },
    {
      name: "Function Call",
      scope: ["meta.function-call"],
      settings: {
        foreground: colors.white
      }
    },
    {
      name: "Function, Special Method",
      scope: [
        "entity.name.function",
        "variable.function",
        "support.function",
        "keyword.other.special-method"
      ],
      settings: {
        foreground: colors.blue
      }
    },
    {
      name: "Block Level Variables",
      scope: ["meta.block variable.other"],
      settings: {
        foreground: colors.white
      }
    },
    {
      name: "Other Variable, String Link",
      scope: ["support.other.variable", "string.other.link"],
      settings: {
        foreground: colors.magenta
      }
    },
    {
      name: "Number, Constant, Function Argument, Tag Attribute, Embedded",
      scope: [
        "constant.numeric",
        "constant.language",
        "support.constant",
        "constant.character",
        "constant.escape",
        "variable.parameter",
        "keyword.other.unit",
        "keyword.other"
      ],
      settings: {
        foreground: colors.magenta
      }
    },
    {
      name: "String, Symbols, Inherited Class, Markup Heading",
      scope: [
        "string.quoted",
        "string.quoted punctuation",
        "constant.other.symbol",
        "constant.other.key",
        "entity.other.inherited-class",
        "markup.heading",
        "markup.inserted.git_gutter",
        "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js"
      ],
      settings: {
        foreground: colors.green
      }
    },
    {
      name: "Class, Support",
      scope: [
        "entity.name",
        "support.type",
        "support.class",
        "support.orther.namespace.use.php",
        "meta.use.php",
        "support.other.namespace.php",
        "markup.changed.git_gutter",
        "support.type.sys-types"
      ],
      settings: {
        foreground: colors.magenta
      }
    },
    {
      name: "Entity Types",
      scope: ["support.type"],
      settings: {
        foreground: colors.magenta
      }
    },
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
      name: "Sub-methods",
      scope: [
        "entity.name.module.js",
        "variable.import.parameter.js",
        "variable.other.class.js"
      ],
      settings: {
        foreground: colors.magenta
      }
    },
    {
      name: "Language methods",
      scope: ["variable.language"],
      settings: {
        fontStyle: "bold",
        foreground: colors.white
      }
    },
    {
      name: "entity.name.method.js",
      scope: ["entity.name.method.js"],
      settings: {
        fontStyle: "italic",
        foreground: colors.magenta
      }
    },
    {
      name: "meta.method.js",
      scope: [
        "meta.class-method.js entity.name.function.js",
        "variable.function.constructor"
      ],
      settings: {
        foreground: colors.magenta
      }
    },
    {
      name: "Attributes",
      scope: ["entity.other.attribute-name"],
      settings: {
        foreground: "#C792EA"
      }
    },
    {
      name: "HTML Attributes",
      scope: [
        "text.html.basic entity.other.attribute-name.html",
        "text.html.basic entity.other.attribute-name"
      ],
      settings: {
        fontStyle: "italic",
        foreground: "#FFCB6B"
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
    },
    {
      name: "Inserted",
      scope: ["markup.inserted"],
      settings: {
        foreground: "#C3E88D"
      }
    },
    {
      name: "Deleted",
      scope: ["markup.deleted"],
      settings: {
        foreground: "#FF5370"
      }
    },
    {
      name: "Changed",
      scope: ["markup.changed"],
      settings: {
        foreground: "#C792EA"
      }
    },
    {
      name: "Regular Expressions",
      scope: ["string.regexp"],
      settings: {
        foreground: "#89DDFF"
      }
    },
    {
      name: "Escape Characters",
      scope: ["constant.character.escape"],
      settings: {
        foreground: "#89DDFF"
      }
    },
    {
      name: "URL",
      scope: ["*url*", "*link*", "*uri*"],
      settings: {
        fontStyle: "underline"
      }
    },
    {
      name: "Decorators",
      scope: [
        "tag.decorator.js entity.name.tag.js",
        "tag.decorator.js punctuation.definition.tag.js"
      ],
      settings: {
        fontStyle: "italic",
        foreground: "#82AAFF"
      }
    },
    {
      name: "ES7 Bind Operator",
      scope: [
        "source.js constant.other.object.key.js string.unquoted.label.js"
      ],
      settings: {
        fontStyle: "italic",
        foreground: "#FF5370"
      }
    },
    {
      name: "Makefile - Target Name",
      scope: "entity.name.function.target.makefile",
      settings: {
        foreground: colors.magenta
      }
    }
  ]
});

module.exports = generateTheme;
