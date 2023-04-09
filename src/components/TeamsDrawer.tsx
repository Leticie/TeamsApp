import { Divider, Toolbar } from "@mui/material";
import { ReactComponent as Logo } from "../assets/alveno-logo.svg";
import { TeamsButtons } from "./TeamsButtons";
import { TemporaryDrawer } from "./TemporaryDrawer";
import { PermanentDrawer } from "./PermanentDrawer";

interface TeamsDrawerI {
  drawerWidth: number;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  setTeamId: (value: string) => void;
  setTeamName: (value: string) => void;
  teamName: string;
}

export const TeamsDrawer = ({
  drawerWidth,
  mobileOpen,
  teamName,
  handleDrawerToggle,
  setTeamId,
  setTeamName,
}: TeamsDrawerI) => {

  //misto height 100px doplnit height podle vysky appbaru
  const drawerButtons = (
    <div>
      <Toolbar sx={{ height: "100px" }}> 
        <Logo />
      </Toolbar>
      <Divider />
      <TeamsButtons
        setTeamId={setTeamId}
        setTeamName={setTeamName}
        teamName={teamName}
      />
    </div>
  );

  return (
    <>
      <PermanentDrawer
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        drawerButtons={drawerButtons}
        drawerWidth={drawerWidth}
      />
      <TemporaryDrawer
        drawerButtons={drawerButtons}
        drawerWidth={drawerWidth}
      />
    </>
  );
};
