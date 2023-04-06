import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { EmployeesRowT } from "./types/apiTypes";
import { Card, CardContent, Grid, Typography } from "@mui/material";

interface EmployeesDisplayI {
  teamSelected: string;
}

export const EmployeesDisplay = ({ teamSelected }: EmployeesDisplayI) => {
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
      <Typography variant="h1" component="h1">
        Employees
      </Typography>
      <Grid
        container
        rowSpacing={{ xs: 1, sm: 2, md: 3 }}
        columnSpacing={1}
        justifyContent="center"
      >
        {employees &&
          employees.map((employee) => {
            if (teamSelected === employee.team) {
              return (
                <Grid item key={employee.id}>
                  <Card sx={{ padding: 5 }}>
                    <CardContent>
                      <Typography>
                        {`${employee.name} ${employee.surname}`}
                      </Typography>
                      <Typography>{`${employee.position}`}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            }
          })}
      </Grid>
    </>
  );
};
