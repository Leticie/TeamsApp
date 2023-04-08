import * as React from "react";
import Box from "@mui/material/Box";

import { useState } from "react";
import { EmployeesDisplay } from "./EmployeesDisplay";
import { TeamsDrawer } from "./TeamsDrawer";
import { Header } from "./Header";

const drawerWidth = 240;

export default function AppContent() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [teamId, setTeamId] = useState<string>();
  const [teamName, setTeamName] = useState<string>();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleTeamId = (value: string) => {
    setTeamId(value);
  };

  const handleTeamName = (value: string) => {
    setTeamName(value);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Header
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="teams"
      >
        <TeamsDrawer
          drawerWidth={drawerWidth}
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
          setTeamId={handleTeamId}
          setTeamName={handleTeamName}
        />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          padding: 3,
          width: `calc(100% - ${drawerWidth}px)`,
        }}
      >
        <EmployeesDisplay teamName={teamName} teamId={teamId} />
      </Box>
    </Box>
  );
}
