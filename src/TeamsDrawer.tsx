import { Button, ButtonGroup, Divider, Drawer, Toolbar } from "@mui/material";
import { ReactComponent as Logo } from "./assets/alveno-logo.svg";
import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { TeamsRowT } from "./types/apiTypes";
import { TeamsButtons } from "./TeamsButtons";

interface TeamsDrawerI {
    drawerWidth: number
    mobileOpen: boolean
    handleDrawerToggle: () => void
    setTeamId: (value: string) => void
    setTeamName: (value: string) => void
}

export const TeamsDrawer = ({drawerWidth, mobileOpen, handleDrawerToggle, setTeamId, setTeamName}: TeamsDrawerI) => {

    const drawerButtons = (
        <div>
          <Toolbar sx={{ height: "100px" }}>
            <Logo />
          </Toolbar>
          <Divider />
          <TeamsButtons setTeamId={setTeamId} setTeamName={setTeamName}/>
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