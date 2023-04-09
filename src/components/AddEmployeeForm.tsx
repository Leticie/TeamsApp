import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Container, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function AddEmployeeForm() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Fab
          onClick={handleClickOpen}
          color="primary"
          aria-label="add"
          sx={{ marginTop: "20px" }}
        >
          <AddIcon />
        </Fab>
      </Container>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add new member</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            label="Surname"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            label="Position"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            label="Start date"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
