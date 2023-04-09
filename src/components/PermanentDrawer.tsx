import { Drawer } from "@mui/material";
import { DRAWER_WIDTH } from "../constants/constants";

interface PermanentDrawerI {
  mobileOpen: boolean;
  drawerButtons: JSX.Element;
  handleDrawerToggle: () => void;
}

export const PermanentDrawer = ({
  mobileOpen,
  handleDrawerToggle,
  drawerButtons,
}: PermanentDrawerI) => {
  return (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: DRAWER_WIDTH,
        },
      }}
    >
      {drawerButtons}
    </Drawer>
  );
};
