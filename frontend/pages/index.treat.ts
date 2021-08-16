import { style } from "treat";
import { theme, themeUtils } from "@island.is/island-ui/theme";

export const sidebarWrapper = style({
  top: 80,
  maxWidth: "230px",
  minWidth: "230px",
  ...themeUtils.responsiveStyle({
    lg: {
      minWidth: "318px",
      maxWidth: "318px",
    },
  }),
});

export const sticky = style({
  position: "sticky",
  alignSelf: "flex-start",
});
