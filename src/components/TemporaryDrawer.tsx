import { Drawer } from "@mui/material";

interface TemporaryDrawerI {
  drawerWidth: number;
  drawerButtons: JSX.Element;
}

export const TemporaryDrawer = ({
  drawerButtons,
  drawerWidth,
}: TemporaryDrawerI) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", sm: "block" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
      open
    >
      {drawerButtons}
    </Drawer>
  );
};
