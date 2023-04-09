import { ButtonGroup, Button } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { TeamsRowT } from "../types/apiTypes";
import { useState, useEffect } from "react";
import { TEAMS_URL } from "../constants/constants";
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

  const config = {
    headers: {
      apikey: import.meta.env.VITE_API_KEY,
    },
  };

  useEffect(() => {
    axios
      .get(TEAMS_URL, config)
      .then((response: AxiosResponse<TeamsRowT>) => setTeams(response.data))
      .catch(err => console.error(err))
  }, []);

  console.log(teams);

  return (
    <ButtonGroup
      orientation="vertical"
      variant="contained"
      sx={{ width: "239px" }} //1px smaller than drawer width, TODO change to calc
      color="secondary"
    >
      {teams &&
        teams.map((team) => (
          <Button
            key={team.id}
            sx={{
              ...TeamsButtonS,
              backgroundColor: teamName === team.name ? "secondary.dark" : "secondary.light",
            }}
            onClick={() => {
              console.log(team.id, "mappedID")
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
