import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import "./Portfolio.css";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import CommentReplys from "../Comments/CommentReplys";
import { Typography } from "@mui/material";
import TextareaValidator from "../Comments/Comments";
import ArticleIcon from "@mui/icons-material/Article";
//import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import CommentInput from "../Comments/CommentInput";

const style = {
  maxWidth: 600, // set the maximum width of the modal to 600px
  height: "80%",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "lightpink",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflowY: "scroll",
};

const Portfolio = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const articleDetails = useSelector((store) => store.articleDetails);
  // console.log("inside portfolio", user);
  const { id } = useParams();
  console.log("article details", articleDetails);
  const [modalOpen, setModalOpen] = useState(
    Array(articleDetails.length).fill(false)
  ); // create an array of states for each article
  const [commentReplysOpen, setCommentReplysOpen] = useState(
    Array(articleDetails.length).fill(false)
  );
  const [openCommentId, setOpenCommentId] = useState(null); // new state to keep track of the open comments

  // const handleOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };

  const getArticleDetails = () => {
    dispatch({
      type: "FETCH_ARTICLE_DETAILS",
      payload: id,
    });
  };

  useEffect(() => {
    getArticleDetails();
  }, []);

  const handleOpen = (index) => {
    // use the index to set the correct state value
    const newModalOpen = [...modalOpen];
    newModalOpen[index] = true;
    setModalOpen(newModalOpen);

    // close CommentReplys for all articles except the current one
    const newCommentReplysOpen = Array(articleDetails.length).fill(false);
    newCommentReplysOpen[index] = true;
    setCommentReplysOpen(newCommentReplysOpen);
  };

  const handleClose = (index) => {
    // use the index to set the correct state value
    const newModalOpen = [...modalOpen];
    newModalOpen[index] = false;
    setModalOpen(newModalOpen);

    // close CommentReplys for the current article
    const newCommentReplysOpen = [...commentReplysOpen];
    newCommentReplysOpen[index] = !newCommentReplysOpen[index];
    setCommentReplysOpen(newCommentReplysOpen);
  };

  const toggleCommentReplys = (index) => {
    const newCommentReplysOpen = [...commentReplysOpen];
    newCommentReplysOpen[index] = !newCommentReplysOpen[index];
    setCommentReplysOpen(newCommentReplysOpen);
  };

  const handleOpenComment = (commentId) => {
    setOpenCommentId(commentId);
  };

  const handleCloseComment = () => {
    setOpenCommentId(null);
  };

  return (
    <>
      <h1>Portfolio</h1>
      <div className="grid">
        {" "}
        {articleDetails.length > 0 ? (
          articleDetails.map((article, index) => (
            <div key={article.id} className="card">
              <div className="article-image" onClick={() => handleOpen(index)}>
                <OpenInFullIcon />
              </div>
              <Modal
                open={modalOpen[index]}
                onClose={() => handleClose(index)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    {article.title}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {article.content}
                  </Typography>
                  <a href={article.link}>Link to Full Article</a>
                  <TextareaValidator articleId={article.id} />
                  <div style={{ marginTop: "1rem" }}>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => toggleCommentReplys(index)}
                    >
                      {commentReplysOpen[index]
                        ? "Hide Replies"
                        : "Show Replies"}
                    </Button>
                  </div>
                  {/* {commentReplysOpen[index] && (
                  <CommentReplys
                    open={commentReplysOpen[index]}
                    onClose={() => handleClose(index)}
                    sx={{ maxHeight: 100 }} // set the maximum height of the CommentReplys to 400px
                  />
                )} */}
                </Box>
              </Modal>
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
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
//
