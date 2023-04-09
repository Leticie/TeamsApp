import { DRAWER_WIDTH } from "../constants/constants";

export const TemporaryDrawerS = {
  display: { xs: "none", sm: "block" },
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    width: DRAWER_WIDTH,
  },
};
