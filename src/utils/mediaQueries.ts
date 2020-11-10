import { theme } from "twin.macro";

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
