import * as React from "react";
import Box from "@mui/material/Box";
import { DRAWER_WIDTH } from "../constants/constants";
import { useState } from "react";
import { EmployeesDisplay } from "./EmployeesDisplay";
import { TeamsDrawer } from "./TeamsDrawer";
import { Header } from "./Header";

export default function AppContent() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [teamId, setTeamId] = useState<string>("");
  const [teamName, setTeamName] = useState<string>("");

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleTeamId = (value: string) => setTeamId(value);
  const handleTeamName = (value: string) => setTeamName(value);

  return (
    <Box sx={{ display: "flex" }}>
      <Header handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="nav"
        sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
        aria-label="teams"
      >
        <TeamsDrawer
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
          setTeamId={handleTeamId}
          setTeamName={handleTeamName}
          teamName={teamName}
        />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          padding: 3,
          width: `calc(100% - ${DRAWER_WIDTH}px)`,
        }}
      >
        <EmployeesDisplay teamName={teamName} teamId={teamId} />
      </Box>
    </Box>
  );
}
