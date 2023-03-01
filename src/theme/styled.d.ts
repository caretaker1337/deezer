import { TColors, TDevices, TFonts } from "./variables/types";

declare module "styled-components" {
  interface TRem<P = number> {
    (px: P): string;
  }

  interface TPlaceholder {
    (css: CSSObject): CSSObject;
  }

  export interface DefaultTheme {
    colors: TColors;
    devices: TDevices;
    fonts: TFonts;
    placeholder: TPlaceholder;
    rem: TRem;
  }
}
