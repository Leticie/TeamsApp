import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { EmployeesRowT } from "./types/apiTypes";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";

interface EmployeesDisplayI {
  teamSelected: string | undefined;
  setTeam: (value: string) => void;
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

export const EmployeesDisplay = ({
  teamSelected,
  setTeam,
}: EmployeesDisplayI) => {
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
        columnSpacing={3}
        justifyContent="center"
      >
        {employees &&
          employees.map((employee) => {
            if (teamSelected === employee.team) {
              return (
                <Grid item key={employee.id}>
                  <CardEmployee employee={employee}></CardEmployee>
                </Grid>
              );
            }
          })}
      </Grid>
      <Button onClick={() => setTeam("")}>Back</Button>
    </>
  );
};



//checks if employee has an end date and if so, changes color
const CardEmployee = ({ employee }: CardEmployeeI) => {
  if (employee.endDate) {
    return (
      <Card sx={{ padding: 5, bgcolor: "primary.light" }}>
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
    <Typography>{`${employee.name} ${employee.surname}`}</Typography>
    <Typography>{`${employee.position}`.toUpperCase()}</Typography>
  </CardContent>
);
