import { DRAWER_WIDTH } from "../constants/constants";

export const PermanentDrawerS = {
  display: { xs: "block", sm: "none" },
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    width: DRAWER_WIDTH,
  },
};
