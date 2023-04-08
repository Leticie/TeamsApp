import { Button, ButtonGroup, Divider, Drawer, Toolbar } from "@mui/material";
import { ReactComponent as Logo } from "./assets/alveno-logo.svg";
import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { TeamsRowT } from "./types/apiTypes";

interface TeamsDrawerI {
    drawerWidth: number
    mobileOpen: boolean
    handleDrawerToggle: () => void
    setTeamId: (value: string) => void
    setTeamName: (value: string) => void
}

export const TeamsDrawer = ({drawerWidth, mobileOpen, handleDrawerToggle, setTeamId, setTeamName}: TeamsDrawerI) => {
    const [teams, setTeams] = useState<TeamsRowT>();

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

    const drawerButtons = (
        <div>
          <Toolbar sx={{ height: "100px" }}>
            <Logo />
          </Toolbar>
          <Divider />
          <ButtonGroup
            orientation="vertical"
            variant="contained"
            sx={{ width: "239px" }} //1px smaller than drawer width
          >
            {teams &&
              teams.map((team) => (
                <Button
                  key={team.id}
                  sx={{ fontSize: "20px", height: "70px" }}
                  onClick={() => {
                    setTeamId(`${team.id}`);
                    setTeamName(`${team.name}`);
                  }}
                >
                  {team.name}
                </Button>
              ))}
          </ButtonGroup>
        </div>
      );

    return (
        <>
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
        </>
    )  
}