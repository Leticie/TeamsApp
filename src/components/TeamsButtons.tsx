import { ButtonGroup, Button } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { TeamsRowT } from "../types/apiTypes";
import { useState, useEffect } from "react";
import { CONFIG, DRAWER_WIDTH, TEAMS_URL } from "../constants/constants";
import { TeamsButtonS } from "../styles/TeamsButton.styles";

interface TeamsButtonsI {
  setTeamId: (value: string) => void;
  setTeamName: (value: string | null) => void;
  teamName: string | null;
}

export const TeamsButtons = ({
  teamName,
  setTeamId,
  setTeamName,
}: TeamsButtonsI) => {
  const [teams, setTeams] = useState<TeamsRowT>();

  useEffect(() => {
    axios
      .get(TEAMS_URL, CONFIG)
      .then((response: AxiosResponse<TeamsRowT>) => setTeams(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <ButtonGroup
      orientation="vertical"
      variant="contained"
      sx={{ width: `calc(${DRAWER_WIDTH} - 1px)` }} //do not fit the drawer because of button border
      color="secondary"
    >
      {teams &&
        teams.map((team) => (
          <Button
            key={team.id}
            sx={{
              ...TeamsButtonS,
              backgroundColor:
                teamName === team.name ? "secondary.dark" : "secondary.light",
            }}
            onClick={() => {
              console.log(team.id, "mappedID");
              setTeamId(team.id);
              setTeamName(team.name);
            }}
          >
            {team.name}
          </Button>
        ))}
    </ButtonGroup>
  );
};
