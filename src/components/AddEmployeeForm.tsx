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
import axios, { AxiosResponse } from "axios";
import {
  ADD_EMPLOYEES_URL,
  CONFIG,
  EMPLOYEES_URL,
} from "../constants/constants";
import { EmployeesRowT } from "../types/apiTypes";

interface AddEmployeeFormI {
  teamId: string;
  setEmployees: React.Dispatch<React.SetStateAction<EmployeesRowT | undefined>>;
}
interface dataI {
  name: string;
  surname: string;
  position: string;
}

const addEmployee = async (
  setEmployees: React.Dispatch<React.SetStateAction<EmployeesRowT | undefined>>,
  data: dataI,
  teamId: string
) => {
  await axios
    .post(
      ADD_EMPLOYEES_URL,
      { ...data, team: teamId }, // add selected team to request
      CONFIG
    )
    .catch((err) => console.error(err));

  await axios
    .get(EMPLOYEES_URL, CONFIG)
    .then((response: AxiosResponse<EmployeesRowT>) =>
      setEmployees(response.data)
    )
    .catch((err) => console.error(err));
};

export default function AddEmployeeForm({
  teamId,
  setEmployees,
}: AddEmployeeFormI) {
  const [open, setOpen] = useState<boolean>(false);
  const [data, setData] = useState<dataI>({
    name: "",
    surname: "",
    position: "",
  });

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addEmployee(setEmployees, data, teamId);
    setOpen(false);
  };

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
