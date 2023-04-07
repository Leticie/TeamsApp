import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import { ReactComponent as Logo } from "./assets/alveno-logo.svg";
import GroupsIcon from "@mui/icons-material/Groups";

export const Header = () => {
  return (
    <>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Grid
            container
            columnSpacing={3}
            justifyContent="center"
          >
            <Grid item>
              <Logo />
            </Grid>
            <Grid item>
              <Typography variant="h1" component="h1">
                Teams
              </Typography>
            </Grid>
            <Grid item>
              <GroupsIcon color="primary" ></GroupsIcon>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};
