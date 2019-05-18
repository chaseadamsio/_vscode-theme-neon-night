// @flow

/* ::
import type {Palette} from '../types'
*/

// https://code.visualstudio.com/api/references/theme-color#notification-colors
const notification = (palette /*: Palette */) => ({
  "notificationCenter.border": palette.magenta77,
  "notificationCenterHeader.foreground": palette.magenta,
  "notificationCenterHeader.background": palette.black,
  "notificationToast.border": palette.magenta77,
  "notifications.foreground": palette.white,
  "notifications.background": palette.black,
  "notificationLink.foreground": palette.blue
});

module.exports = notification;
