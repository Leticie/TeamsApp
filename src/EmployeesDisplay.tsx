import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { EmployeesRowT } from "./types/apiTypes";
import { Button, Grid, Paper } from "@mui/material";

export const EmployeesDisplay = () => {
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
        .then((response:AxiosResponse<EmployeesRowT>) => {
          setEmployees(response.data);
        });
    }, []);

    console.log(employees)
  
    
    return (
        <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={1} justifyContent="center">
            {employees&&employees.map(employee =>
                <Grid item key={employee.id}> 
                    <Paper sx={{padding:5}}>{`${employee.name} ${employee.surname} ${employee.position}`}</Paper>
                </Grid>
            )}
        </Grid>
    )
}