import { Typography } from "@mui/material";

interface SelectedTeamNameI {
    teamName: string;
  }

export const DefaultMessageHeader = () => {
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

export const SelectedTeamNameHeader = ({ teamName }: SelectedTeamNameI) => {
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