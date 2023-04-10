import { Card, CardContent, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import {
  CardEmployeeActiveS,
  CardEmployeePassiveS,
} from "../styles/CardEmployee.styles";

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

export const CardEmployee = ({ employee }: CardEmployeeI) => {
  if (employee.endDate) {
    return (
      <Card sx={CardEmployeePassiveS}>
        <CardEmployeeContent employee={employee}></CardEmployeeContent>
      </Card>
    );
  }
  return (
    <Card sx={CardEmployeeActiveS}>
      <CardEmployeeContent employee={employee}></CardEmployeeContent>
    </Card>
  );
};

const CardEmployeeContent = ({ employee }: CardEmployeeI) => (
  <CardContent>
    <PersonIcon sx={{ fontSize: "11rem", justifyContent: "center" }} />
    <Typography
      variant="h5"
      textAlign="center"
      fontSize="20px"
    >{`${employee.name} ${employee.surname}`}</Typography>
    <Typography
      variant="overline"
      textAlign="center"
      component="div"
    >{`${employee.position}`}</Typography>
  </CardContent>
);
