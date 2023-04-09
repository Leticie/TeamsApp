import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import { DRAWER_WIDTH } from "../constants/constants";

interface HeaderI {
  handleDrawerToggle: () => void;
}

export const Header = ({ handleDrawerToggle }: HeaderI) => (
  <AppBar
    position="fixed"
    sx={{
      width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
      ml: { sm: `${DRAWER_WIDTH}px` },
      minHeight: "100px",
    }}
  >
    <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <Typography
        variant="h2"
        component="h1"
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "10px",
        }}
      >
        Teams
      </Typography>
      <WorkspacesIcon
        color="secondary"
        sx={{ marginTop: "20px", marginLeft: "0px" }}
      />
    </Toolbar>
  </AppBar>
);
