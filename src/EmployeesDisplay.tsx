import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { EmployeesRowT } from "./types/apiTypes";

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
        <div>

        </div>
    )
}