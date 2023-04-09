import { AppBar, Toolbar, IconButton, Typography } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu";
import WorkspacesIcon from '@mui/icons-material/Workspaces';

interface HeaderI {
    drawerWidth: number
    handleDrawerToggle: () => void
}

export const Header = ({drawerWidth, handleDrawerToggle}:HeaderI) => {
    return (
        <>
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
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
            <WorkspacesIcon color="secondary" sx={{marginTop: "20px", marginLeft: "0px"}}/>
          </Toolbar>
        </AppBar>
        </>
    )
}