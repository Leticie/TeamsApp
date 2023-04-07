import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import axios, { AxiosResponse } from "axios";
import { TeamsRowT } from "./types/apiTypes";
import { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ButtonGroup, Button } from "@mui/material";
import { EmployeesDisplay } from "./EmployeesDisplay";


const drawerWidth = 240;

export default function ResponsiveDrawer() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [teamId, setTeamId] = useState<string>();
  const [teams, setTeams] = useState<TeamsRowT>();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const config = {
    headers: {
      apikey: import.meta.env.VITE_API_KEY,
    },
  };

  useEffect(() => {
    axios
      .get(
        `https://nktebdhspzvpwguqcksn.supabase.co/rest/v1/teams?select=*`,
        config
      )
      .then((response: AxiosResponse<TeamsRowT>) => {
        setTeams(response.data);
      });
  }, []);

  console.log(teams);

  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#02D076", //green
      },
      secondary: {
        main: "#10BFFC", //blue
      },
    },
  });

  const drawerButtons = (
    <div>
      <Toolbar />
      <Divider />
      <ButtonGroup
        orientation="vertical"
        size="large"
        variant="contained"
        style={{ fontSize: "50px", width: drawerWidth }}
      >
        {teams &&
          teams.map((team) => (
            <Button key={team.id} onClick={() => setTeamId(`${team.id}`)}>
              {team.name}
            </Button>
          ))}
      </ButtonGroup>
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Teams
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
          <EmployeesDisplay setTeam={setTeamId} teamSelected={teamId}/>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
