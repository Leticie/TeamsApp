import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { EmployeesDisplay } from "./EmployeesDisplay";
import { TeamsDrawer } from "./TeamsDrawer";

const drawerWidth = 240;


export default function ResponsiveDrawer() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [teamId, setTeamId] = useState<string>();
  const [teamName, setTeamName] = useState<string>();


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleTeamId = (value:string) => {
    setTeamId(value)
  }

  const handleTeamName = (value:string) => {
    setTeamName(value)
  }




  return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
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
              noWrap
              sx={{
                marginLeft: "auto",
                marginRight: "auto",
                paddingTop: "10px",
              }}
            >
              Teams
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="teams"
        >
          <TeamsDrawer drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} setTeamId={handleTeamId} setTeamName={handleTeamName}/>
          
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <EmployeesDisplay teamName={teamName} teamId={teamId} />
        </Box>
      </Box>
  );
}
