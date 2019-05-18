// @flow

/* ::
import type {Palette} from '../types'
*/

const makefile = (palette /*: Palette */) => [
  {
    name: "Makefile - Language Variable",
    scope: "source.makefile variable.language",
    settings: {
      foreground: palette.magenta
    }
  },
  {
    scope: "source.makefile support.function.target.PHONY",
    settings: {
      foreground: palette.blue
    }
  },
  {
    name: "Makefile - Target Name",
    scope: "source.makefile entity.name.function.target.makefile",
    settings: {
      foreground: palette.magenta
    }
  },
  {
    name: "Makefile - Interpolated Language Variable",
    scope: "source.makefile string.interpolated variable.language",
    settings: {
      foreground: palette.green
    }
  },
  {
    name: "Makefile - Punctuation (ie, $() )",
    scope: "source.makefile punctuation.definition",
    settings: {
      foreground: palette.green
    }
  },
  {
    name: "Makefile - Function Call",
    scope: "source.makefile meta.scope.function-call",
    settings: {
      foreground: palette.cyan
    }
  }
];

module.exports = makefile;
