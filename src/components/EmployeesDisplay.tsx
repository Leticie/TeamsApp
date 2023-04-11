import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { EmployeesRowT } from "../types/apiTypes";
import { Grid, Toolbar } from "@mui/material";
import { CardEmployee } from "./CardEmployee";
import { SelectedTeamHeader } from "./EmployeeDisplayHeaders";

import AddEmployeeForm from "./AddEmployeeForm";
import { CONFIG, EMPLOYEES_URL } from "../constants/constants";
interface EmployeesDisplayI {
  teamId: string;
  teamName: string;
}

export const EmployeesDisplay = ({ teamId, teamName }: EmployeesDisplayI) => {
  const [employees, setEmployees] = useState<EmployeesRowT>();

  useEffect(() => {
    axios
      .get(EMPLOYEES_URL, CONFIG)
      .then((response: AxiosResponse<EmployeesRowT>) =>
        setEmployees(response.data)
      )
      .catch((err) => console.error(err));
  }, []);

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
      <AddEmployeeForm teamId={teamId} setEmployees={setEmployees} />
    </>
  );
};