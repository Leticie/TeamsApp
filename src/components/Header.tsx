import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import { AppBarS, TypographyHeaderS } from "../styles/Header.styles";

interface HeaderI {
  handleDrawerToggle: () => void;
}

export const Header = ({ handleDrawerToggle }: HeaderI) => (
  <AppBar position="fixed" sx={AppBarS}>
    <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
      <IconButton
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h2" sx={TypographyHeaderS}>
        Teams
      </Typography>
      <WorkspacesIcon
        color="secondary"
        sx={{ marginTop: "20px", marginLeft: "0px" }}
      />
    </Toolbar>
  </AppBar>
);
