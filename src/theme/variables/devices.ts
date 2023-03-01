import { TDevices } from "./types";

const sizes: TDevices = {
  desktop: "1279px",
  tablet: "1023px",
  mobile: "767px",
};

const devices: TDevices = {
  desktop: `@media screen and (max-width: ${sizes.desktop})`,
  tablet: `@media screen and (max-width: ${sizes.tablet})`,
  mobile: `@media screen and (max-width: ${sizes.mobile})`,
};

export { devices };
