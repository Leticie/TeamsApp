import { Drawer } from "@mui/material";
import { TemporaryDrawerS } from "../styles/TemporaryDrawer.styles";

interface TemporaryDrawerI {
  drawerButtons: JSX.Element;
}

export const TemporaryDrawer = ({ drawerButtons }: TemporaryDrawerI) => (
  <Drawer variant="permanent" sx={TemporaryDrawerS} open>
    {drawerButtons}
  </Drawer>
);
