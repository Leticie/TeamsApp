import { Button, ButtonGroup } from "@mui/material"
import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { TeamsRowT } from "./types/apiTypes";

export const TeamsButtons = () => {
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
        .then((response:AxiosResponse<TeamsRowT>) => {
          setTeams(response.data);
        });
    }, []);

    console.log(teams)
  

    return (
        <ButtonGroup variant="contained">
            {teams&&teams.map(team => 
                <Button key={team.name}>{team.name}</Button>)}
        </ButtonGroup>

    )
    
}