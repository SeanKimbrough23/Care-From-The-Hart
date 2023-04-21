import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import Button from "@mui/material/Button";
import { useState } from "react";

const ChildModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Open Child Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

const Portfolio = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button onClick={handleOpen}>
        What it’s like to specialize in psychiatry: Shadowing Dr. Hart
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ width: 400 }}>
          <h2 id="parent-modal-title">Text in a modal</h2>
          <p id="parent-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          <ChildModal />
        </Box>
      </Modal>
      <Button>Leave A Comment</Button>
    </div>
  );
};

export default Portfolio;
