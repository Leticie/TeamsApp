import * as React from "react";
import Box from "@mui/material/Box";
import { DRAWER_WIDTH } from "../constants/constants";
import { useState } from "react";
import { EmployeesDisplay } from "./EmployeesDisplay";
import { TeamsDrawer } from "./TeamsDrawer";
import { Header } from "./Header";
import { WelcomeMessageHeader } from "./EmployeeDisplayHeaders";
import { BoxEmployeeDisplayS } from "../styles/AppContent.styles";

export const AppContent = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [teamName, setTeamName] = useState<string | null>("");
  const [teamId, setTeamId] = useState<string>("");

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleTeamName = (teamName: string | null) => setTeamName(teamName);
  const handleTeamId = (teamId: string) => setTeamId(teamId);

  return (
    <Box sx={{ display: "flex" }}>
      <Header handleDrawerToggle={handleDrawerToggle} />
      <Box sx={{ width: { sm: DRAWER_WIDTH } }}>
        <TeamsDrawer
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
          setTeamId={handleTeamId}
          setTeamName={handleTeamName}
          teamName={teamName}
        />
      </Box>
      <Box sx={BoxEmployeeDisplayS}>
        {teamName ? <EmployeesDisplay teamName={teamName} teamId={teamId} /> : <WelcomeMessageHeader />}
      </Box>
    </Box>
  );
};
