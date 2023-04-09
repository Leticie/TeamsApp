import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { EmployeesRowT } from "../types/apiTypes";
import { Card, CardContent, Grid, Toolbar, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

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
      <Card
        sx={{ padding: 4, bgcolor: "grey", width: "200px", heigth: "200px" }}
      >
        <CardEmployeeContent employee={employee}></CardEmployeeContent>
      </Card>
    );
  }
  return (
    <Card
      sx={{
        padding: 4,
        bgcolor: "primary.dark",
        minWidth: "200px",
        minHeigth: "200px",
      }}
    >
      <CardEmployeeContent employee={employee}></CardEmployeeContent>
    </Card>
  );
};

const CardEmployeeContent = ({ employee }: CardEmployeeI) => (
  <CardContent>
    <PersonIcon sx={{ fontSize: "11rem", justifyContent: "center" }} />
    <Typography
      variant="h5"
      component="div"
      textAlign="center"
      fontSize="20px"
    >{`${employee.name} ${employee.surname}`}</Typography>
    <Typography
      variant="overline"
      component="div"
      textAlign="center"
    >{`${employee.position}`}</Typography>
  </CardContent>
);
