import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import TextareaValidator from "../Comments/Comments";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Portfolio = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const articleDetails = useSelector((store) => store.articleDetails);
  // console.log("inside portfolio", user);
  const { id } = useParams();
  console.log("article details", articleDetails);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const getArticleDetails = () => {
    dispatch({
      type: "FETCH_ARTICLE_DETAILS",
      payload: id,
    });
  };

  useEffect(() => {
    getArticleDetails();
  }, []);
  console.log(articleDetails);
  return (
    <div className="grid">
      {articleDetails.length > 0 ? (
        articleDetails.map((articleDetails) => (
          <div key={articleDetails.id}>
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
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  What it’s like to specialize in psychiatry: Shadowing Dr. Hart
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {articleDetails.content}
                </Typography>
                <a href="https://www.startribune.com/inspired-s-race-and-equity-series-explores-mental-health-disparities-with-psychiatrist-dr-dionne-ha/600046918/?refresh=true">
                  Link to Full Article
                </a>
                <TextareaValidator />
              </Box>
            </Modal>
            {/* <Button>Leave A Comment </Button> */}
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
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
