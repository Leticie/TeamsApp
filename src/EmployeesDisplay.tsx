import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { EmployeesRowT } from "./types/apiTypes";
import { Card, CardContent, Grid, Toolbar, Typography } from "@mui/material";

interface EmployeesDisplayI {
  teamId: string | undefined;
  teamName: string | undefined;
}

interface CardEmployeeI {
  employee: {
    createdAt: string;
    endDate: string | null;
    id: string;
    name: string;
    position: string;
    startDate: string | null;
    surname: string;
    team: string | null;
  };
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

  return (
    <>
      <Toolbar />
      <Typography
        variant="h4"
        component="h3"
        noWrap
        sx={{ display: "flex", justifyContent: "center", margin: "20px" }}
      >
        {teamName}
      </Typography>
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
                  <CardEmployee employee={employee}></CardEmployee>
                </Grid>
              );
            }
          })}
      </Grid>
    </>
  );
};

//checks if employee has an end date and if so, changes color
const CardEmployee = ({ employee }: CardEmployeeI) => {
  if (employee.endDate) {
    return (
      <Card sx={{ padding: 5, bgcolor: "primary.light"}}>
        <CardEmployeeContent employee={employee}></CardEmployeeContent>
      </Card>
    );
  }
  return (
    <Card sx={{ padding: 5, bgcolor: "primary.dark" }}>
      <CardEmployeeContent employee={employee}></CardEmployeeContent>
    </Card>
  );
};

const CardEmployeeContent = ({ employee }: CardEmployeeI) => (
  <CardContent>
    <Typography variant="h5" component="div" textAlign="center">{`${employee.name} ${employee.surname}`}</Typography>
    <Typography variant="h6" component="div" textAlign="center">{`${employee.position}`.toUpperCase()}</Typography>
  </CardContent>
);
