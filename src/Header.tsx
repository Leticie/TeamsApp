import { AppBar, Box, Grid, Toolbar, Typography } from "@mui/material";
import { ReactComponent as Logo } from "./assets/alveno-logo.svg";
import GroupsIcon from "@mui/icons-material/Groups";

export const Header = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>

          <Grid
            container
            spacing={3}
            justifyContent="center"
          >
            <Grid item xs={3}>
              <Logo />
            </Grid>
            <Grid item xs={6} >
              <Typography variant="h1" component="h1">
                Teams
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <GroupsIcon color="primary" ></GroupsIcon>
            </Grid>
          </Grid>

        </Toolbar>
      </AppBar>
    </>
  );
};
