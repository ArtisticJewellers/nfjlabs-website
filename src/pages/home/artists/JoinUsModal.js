import React from "react";
import Modal from "../../../components/common/Modal";
import { Button, Typography, TextField, Box } from "@mui/material";
import getScreenSize from "../../../helpers/getScreenSize";
import RadioButtons from "../../../components/common/RadioButtons";
import Centered from "../../../components/common/Centered";

const JoinUsModal = ({ open, setOpen }) => {
  const onClose = () => {
    setOpen(false);
  };

  const size = getScreenSize() == "xs" ? "small" : "medium";

  return (
    <Modal title="Collaborate" open={open} onClose={onClose}>
      <TextField
        size={size}
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        size={size}
        label="Email ID"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <Box marginY={2} marginBottom={4}>
        <RadioButtons
          onChange={() => {}}
          buttons={["Artist", "Designer", "Other"]}
          initialActiveBtn={1}
        />
      </Box>
      <Centered>
        <Button variant="contained">Submit</Button>
      </Centered>
    </Modal>
  );
};

export default JoinUsModal;
