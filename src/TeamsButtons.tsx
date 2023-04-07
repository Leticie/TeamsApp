import { Button, Grid} from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { TeamsRowT } from "./types/apiTypes";

interface TeamsButtonsI {
  setTeam: (value: string) => void;
}

export const TeamsButtons = ({ setTeam }: TeamsButtonsI) => {
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

  return (
    <>
      <Grid
        container
        rowSpacing={{ xs: 1, sm: 2, md: 3 }}
        columnSpacing={3}
        justifyContent="center"
      >
        {teams &&
          teams.map((team) => (
            <Grid item key={team.id}>
              <Button
                style={{ fontSize: "50px" }}
                size="large"
                variant="contained"
                onClick={() => setTeam(`${team.id}`)}
              >
                {team.name}
              </Button>
            </Grid>
          ))}
      </Grid>
    </>
  );
};
