import { DRAWER_WIDTH } from "../constants/constants";

export const AppBarS = {
  width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
  ml: { sm: `${DRAWER_WIDTH}px` },
  minHeight: "100px",
};

export const TypographyHeaderS = {
  marginLeft: "auto", //margin to center
  marginRight: "auto",
  marginTop: "10px",
};
