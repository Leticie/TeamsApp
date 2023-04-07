import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { ReactComponent as Logo } from "./assets/alveno-logo.svg";
import GroupsIcon from '@mui/icons-material/Groups';

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Logo />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Teams
          </Typography>
          <GroupsIcon color="primary"></GroupsIcon>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
