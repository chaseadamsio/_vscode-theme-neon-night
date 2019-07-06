// @flow

export type Palette = {|
  blackest: string,
  black: string,
  blacklight: string,
  blackout: string,
  white: string,
  white77: string,
  white33: string,
  cyan: string,
  blue: string,
  blue77: string,
  blue33: string,
  magenta: string,
  magenta22: string,
  magenta33: string,
  magenta77: string,
  magentaMuted: string,
  red: string,
  green: string,
  green77: string,
  green33: string,
  yellow: string
|};

export type Theme = {|
  displayName: string,
  fontStyleEnabled: FontStyles,
  palette: Palette
|};

export type FontStyles = {|
  italic: boolean,
  bold: boolean
|};
