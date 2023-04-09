import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { EmployeesRowT } from "../types/apiTypes";
import { Grid, Toolbar } from "@mui/material";
import { CardEmployee } from "./CardEmployee";
import { SelectedTeamHeader } from "./EmployeeDisplayHeaders";

import AddEmployeeForm from "./AddEmployeeForm";
interface EmployeesDisplayI {
  teamId: string;
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

  return (
    <>
      <Toolbar />
      <SelectedTeamHeader teamName={teamName} />
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
      <AddEmployeeForm teamId={teamId}/>
    </>
  );
};

/*
const getSelectedTeamEmployees = (employees: EmployeesRowT, teamId: string) => {
  const selectedTeamEmployees:EmployeesRowT = [];
  employees.map((employee) => {
    if (teamId === employee.team) {
      selectedTeamEmployees.push(employee);
    }
  })
  return selectedTeamEmployees;
};

const getEndDateEmployees = (employees: EmployeesRowT, teamId: string) => {
  const selectedTeamEmployees = getSelectedTeamEmployees(employees, teamId)
  const endDateEmployees:EmployeesRowT = []
  selectedTeamEmployees.map((employee) => {
    if (employee.endDate) {
      endDateEmployees.push(employee);
    }
  })
  return endDateEmployees;
}
*/