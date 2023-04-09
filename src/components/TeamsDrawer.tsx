import { Divider, Toolbar } from "@mui/material";
import { ReactComponent as Logo } from "../assets/alveno-logo.svg";
import { TeamsButtons } from "./TeamsButtons";
import { TemporaryDrawer } from "./TemporaryDrawer";
import { PermanentDrawer } from "./PermanentDrawer";


interface TeamsDrawerI {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  setTeamId: (value: string ) => void;
  setTeamName: (value: string | null) => void;
  teamName: string | null;
}

export const TeamsDrawer = ({
  mobileOpen,
  teamName,
  handleDrawerToggle,
  setTeamId,
  setTeamName,
}: TeamsDrawerI) => {

  //misto height 100px doplnit height podle vysky appbaru
  const drawerButtons = (
    <>
      <Toolbar sx={{ height: "100px" }}> 
        <Logo />
      </Toolbar>
      <Divider />
      <TeamsButtons
        setTeamId={setTeamId}
        setTeamName={setTeamName}
        teamName={teamName}
      />
    </>
  );

  return (
    <>
      <PermanentDrawer
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        drawerButtons={drawerButtons}
      />
      <TemporaryDrawer
        drawerButtons={drawerButtons}
      />
    </>
  );
};
