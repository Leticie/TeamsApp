import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Container, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import axios from "axios";

interface AddEmployeeFormI {
  teamId: string;
}

export default function AddEmployeeForm({ teamId }: AddEmployeeFormI) {
  const [open, setOpen] = useState<boolean>(false);
  const [data, setData] = useState({
    name: "",
    surname: "",
    position: "",
  });

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInput = (event: any) => {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const config = {
    headers: {
      apikey: import.meta.env.VITE_API_KEY,
    },
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    axios
      .post(
        "https://nktebdhspzvpwguqcksn.supabase.co/rest/v1/employees",
        { ...data, team: teamId }, // add selected team to request
        config
      )
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
    setOpen(false);
  };

  console.log(data);

  return (
    <>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Fab
          onClick={handleClickOpen}
          color="primary"
          sx={{ marginTop: "20px" }}
        >
          <AddIcon />
        </Fab>
      </Container>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add new member</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <TextField
              margin="dense"
              label="Name"
              fullWidth
              variant="standard"
              name="name"
              onChange={handleInput}
            />
            <TextField
              margin="dense"
              label="Surname"
              fullWidth
              variant="standard"
              name="surname"
              onChange={handleInput}
            />
            <TextField
              margin="dense"
              label="Position"
              fullWidth
              variant="standard"
              name="position"
              onChange={handleInput}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Submit</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
