import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { EmployeesRowT } from "../types/apiTypes";
import { Grid, Toolbar, Typography } from "@mui/material";
import { CardEmployee } from "./CardEmpoloyee";


interface EmployeesDisplayI {
  teamId: string | undefined;
  teamName: string | undefined;
}

interface SelectedTeamNameI {
  teamName: string;
}

export const EmployeesDisplay = ({ teamId, teamName }: EmployeesDisplayI) => {
  const [employees, setEmployees] = useState<EmployeesRowT>();

  const config = {
    headers: {
      apikey: import.meta.env.VITE_API_KEY,
    },
  };

  useEffect(() => {
    axios
      .get(
        `https://nktebdhspzvpwguqcksn.supabase.co/rest/v1/employees?select=*`,
        config
      )
      .then((response: AxiosResponse<EmployeesRowT>) => {
        setEmployees(response.data);
      });
  }, []);

  console.log(employees);

  const DefaultMessage = () => {
    return (
      <>
        <Typography
          variant="h3"
          component="h3"
          sx={{ textAlign: "center", marginTop: "150px", width: "100%" }}
        >
          Welcome to Teams
        </Typography>
        <Typography
          variant="overline"
          component="h4"
          color="secondary"
          sx={{ textAlign: "center", width: "100%" }}
        >
          Please select a team
        </Typography>
      </>
    );
  };

  const SelectedTeamName = ({ teamName }: SelectedTeamNameI) => {
    return (
      <Typography
        variant="overline"
        component="h3"
        fontSize="40px"
        sx={{
          textAlign: "center",
          marginTop: "40px",
          marginBottom: "20px",
          width: "100%",
        }}
      >
        {teamName}
      </Typography>
    );
  };

  return (
    <>
      <Toolbar />
      {teamName ? <SelectedTeamName teamName={teamName} /> : <DefaultMessage />}
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {employees &&
          employees.map((employee) => {
            if (teamId === employee.team) {
              return (
                <Grid item key={employee.id}>
                  <CardEmployee employee={employee} />
                </Grid>
              );
            }
          })}
      </Grid>
    </>
  );
};


