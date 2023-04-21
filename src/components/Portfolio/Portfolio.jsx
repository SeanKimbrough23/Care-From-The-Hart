import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";

const Portfolio = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const post = useSelector((store) => store.post);

  return (
    <div className="grid">
      <div></div>
      {post &&
        post.map((articles) => (
          <div key={articles.id}>
            <div>{articles.content}</div>
            <img src={articles.image_url} alt={articles.title} />
          </div>
        ))}
      <Button
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={handleOpen}
      >
        What it’s like to specialize in psychiatry: Shadowing Dr. Hart
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 400,
          }}
        >
          <h2 id="parent-modal-title">Text in a modal</h2>
          <p id="parent-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>

          {/* <ChildModal /> */}
        </Box>
      </Modal>
      <Button>Leave A Comment</Button>
    </div>
  );
};

export default Portfolio;

// const ChildModal = () => {
//   const dispatch = useDispatch();
//   const post = useSelector((store) => store.post);

//   useEffect(() => {
//     dispatch({ type: "FETCH_ARTICLE_DETAILS" });
//   }, []);

//   const [open, setOpen] = useState(false);
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };
//   return (
//     <>
//       <Button onClick={handleOpen}>Open Child Modal</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="child-modal-title"
//         aria-describedby="child-modal-description"
//       >
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             width: 200,
//           }}
//         >
//           <h2 id="child-modal-title">Text in a child modal</h2>
//           <p id="child-modal-description">
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//           </p>
//           <Button onClick={handleClose}>Close Child Modal</Button>
//         </Box>
//       </Modal>
//     </>
//   );
// };
