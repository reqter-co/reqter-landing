import { theme } from "twin.macro";

enum DeviceSizes {
  phone = 37.5,
  tabPort = 56.25,
  tabLand = 75,
  largeDesktop = 112.5,
}

export const isPhone = () => {
  const windowWidth = window.innerWidth;
  var style = window.getComputedStyle(document.documentElement);
  const fontSize = style.fontSize;
  const width = windowWidth / parseFloat(fontSize);
  if (width < DeviceSizes.phone) return true;
  return false;
};
export const isTabPort = () => {
  const windowWidth = window.innerWidth;
  var style = window.getComputedStyle(document.documentElement);
  const fontSize = style.fontSize;
  const width = windowWidth / parseFloat(fontSize);
  if (width < DeviceSizes.tabPort) return true;
  return false;
};
export const isTabLand = () => {
  const windowWidth = window.innerWidth;
  var style = window.getComputedStyle(document.documentElement);
  const fontSize = style.fontSize;
  const width = windowWidth / parseFloat(fontSize);
  if (width < DeviceSizes.tabLand) return true;
  return false;
};
export const isLargeDesktop = () => {
  const windowWidth = window.innerWidth;
  var style = window.getComputedStyle(document.documentElement);
  const fontSize = style.fontSize;
  const width = windowWidth / parseFloat(fontSize);
  if (width < DeviceSizes.largeDesktop) return true;
  return false;
};

const breakpoints: { xs: number; sm: number; md: number; xl: number } = {
  xs: theme`screens.phone.max`,
  sm: theme`screens.tab-port.max`,
  md: theme`screens.tab-land.max`,
  xl: theme`screens.large.max`,
};
const sizes = {
  xs: `@media only screen and (max-width: ${breakpoints.xs})`,
  sm: `@media only screen and (max-width: ${breakpoints.sm})`,
  md: `@media only screen and (max-width: ${breakpoints.md})`,
  xl: `@media only screen and (max-width: ${breakpoints.xl})`,
};

const { xs, sm, md, xl } = sizes;
export { xs, sm, md, xl };
