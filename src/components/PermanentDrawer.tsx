import { Drawer } from "@mui/material";
import { PermanentDrawerS } from "../styles/PermanentDrawer.styles";

interface PermanentDrawerI {
  mobileOpen: boolean;
  drawerButtons: JSX.Element;
  handleDrawerToggle: () => void;
}

export const PermanentDrawer = ({
  mobileOpen,
  handleDrawerToggle,
  drawerButtons,
}: PermanentDrawerI) => (
  <Drawer
    variant="temporary"
    open={mobileOpen}
    onClose={handleDrawerToggle}
    ModalProps={{
      keepMounted: true, // Better open performance on mobile.
    }}
    sx={PermanentDrawerS}
  >
    {drawerButtons}
  </Drawer>
);
