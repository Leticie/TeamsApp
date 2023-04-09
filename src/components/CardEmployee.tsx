import { Card, CardContent, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

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

//checks if employee has an end date and if so, changes color
export const CardEmployee = ({ employee }: CardEmployeeI) => {
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