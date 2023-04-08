import { ButtonGroup, Button } from "@mui/material"
import axios, { AxiosResponse } from "axios";
import { TeamsRowT } from "./types/apiTypes";
import { useState, useEffect } from "react";

interface TeamsButtonsI {
    setTeamId: (value: string) => void
    setTeamName: (value: string) => void
}    

export const TeamsButtons = ({setTeamId, setTeamName}:TeamsButtonsI) => {
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
        
        <ButtonGroup
        orientation="vertical"
        variant="contained"
        sx={{ width: "239px" }} //1px smaller than drawer width
      >
        {teams &&
          teams.map((team) => (
            <Button
              key={team.id}
              sx={{ fontSize: "20px", height: "70px", justifyContent: "left" }}
              onClick={() => {
                setTeamId(`${team.id}`);
                setTeamName(`${team.name}`);
              }}
              
            >
              {team.name}
            </Button>
          ))}
      </ButtonGroup>
      </>
    )
}
