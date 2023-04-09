import { Drawer } from "@mui/material";

interface PermanentDrawerI {
  drawerWidth: number;
  mobileOpen: boolean;
  drawerButtons: JSX.Element;
  handleDrawerToggle: () => void;
}

export const PermanentDrawer = ({
  mobileOpen,
  handleDrawerToggle,
  drawerWidth,
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
          width: drawerWidth,
        },
      }}
    >
      {drawerButtons}
    </Drawer>
  );
};
