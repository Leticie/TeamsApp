import { Drawer } from "@mui/material";
import { DRAWER_WIDTH } from "../constants/constants";

interface TemporaryDrawerI {
  drawerButtons: JSX.Element;
}

export const TemporaryDrawer = ({
  drawerButtons,
}: TemporaryDrawerI) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", sm: "block" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: DRAWER_WIDTH,
        },
      }}
      open
    >
      {drawerButtons}
    </Drawer>
  );
};
