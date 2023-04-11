import { Typography } from "@mui/material";
import {
  SelectedTeamHeaderS,
  SelectionMessageS,
  WelcomeMessageS,
} from "../styles/EmployeeDisplayHeaders.style";

interface SelectedTeamI {
  teamName: string;
}

export const WelcomeMessageHeader = () => (
  <>
    <Typography variant="h3" component="h3" sx={WelcomeMessageS}>
      Welcome to Teams
    </Typography>
    <Typography
      variant="overline"
      component="h4"
      color="secondary"
      sx={SelectionMessageS}
    >
      Please select a team
    </Typography>
  </>
);

export const SelectedTeamHeader = ({ teamName }: SelectedTeamI) => (
  <Typography
    variant="overline"
    component="h3"
    fontSize="40px"
    sx={SelectedTeamHeaderS}
  >
    {teamName}
  </Typography>
);
