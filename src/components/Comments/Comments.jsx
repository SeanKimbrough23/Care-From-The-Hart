import * as React from "react";
import Box from "@mui/joy/Box";
import { useParams, useHistory } from "react-router-dom";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Textarea from "@mui/joy/Textarea";
import IconButton from "@mui/joy/IconButton";
import { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector, useDispatch } from "react-redux";
import Menu from "@mui/joy/Menu";
import { Typography } from "@mui/material";
import CommentReplys from "./CommentReplys";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Comments.css";
import MenuItem from "@mui/joy/MenuItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import FormatBold from "@mui/icons-material/FormatBold";
import FormatItalic from "@mui/icons-material/FormatItalic";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Check from "@mui/icons-material/Check";

function TextareaValidator({ articleId }) {
  //destructured to grab prop key that we passed in Portfolio.jsx
  const dispatch = useDispatch();
  const history = useHistory();
  const [comment, setComment] = useState("");
  const commentDetails = useSelector((store) => store.commentDetails);
  const [italic, setItalic] = React.useState(false);
  const [fontWeight, setFontWeight] = React.useState("normal");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const getCommentDetails = () => {
    dispatch({
      type: "FETCH_COMMENTS",
    });
  };
  const updateComment = (commentId) => {
    dispatch({
      type: "UPDATE_COMMENT",
      // using payload to tell route which comment id to target and it is apart of the body and URL
      payload: {
        comment: comment,
        commentId: commentDetails.id,
        userId: commentDetails.user_id,
        articleId: articleId,
      },
    });
  };

  const deleteComment = (commentId) => {
    dispatch({
      type: "DELETE_COMMENT",
      payload: commentDetails.id,
      articleId,
      // using payload to tell route which comment id to target and it is apart of the URL
    });
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (articleId) => {
    event.preventDefault();
    setComment("");
    let articleComment = {
      articles_id: articleId,
      comment: comment,
    };
    console.log("🥰", articleComment);
    dispatch({ type: "POST_NEW_COMMENT", payload: articleComment });
  };

  useEffect(() => {
    getCommentDetails();
  }, []);

  // This effect will run whenever `commentDetails` changes
  useEffect(() => {
    if (commentDetails.length > 0) {
      console.log("comment details changed: ", commentDetails);
    }
  }, [commentDetails]);

  return (
    <>
      <FormControl>
        <FormLabel>Your comment</FormLabel>
        <Textarea
          value={comment}
          onChange={(event) => setComment(event.target.value)} //() telling my code to pause
          placeholder="Comments… "
          minRows={3}
          endDecorator={
            <Box
              sx={{
                display: "flex",
                gap: "var(--Textarea-paddingBlock)",
                pt: "var(--Textarea-paddingBlock)",
                borderTop: "1px solid",
                borderColor: "divider",
                flex: "auto",
              }}
            >
              <IconButton
                variant="plain"
                color="neutral"
                onClick={(event) => setAnchorEl(event.currentTarget)}
              >
                <FormatBold />
                <KeyboardArrowDown fontSize="md" />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
                size="sm"
                placement="bottom-start"
                sx={{ "--ListItemDecorator-size": "24px" }}
              >
                {["200", "normal", "bold"].map((weight) => (
                  <MenuItem
                    key={weight}
                    selected={fontWeight === weight}
                    onClick={() => {
                      setFontWeight(weight);
                      setAnchorEl(null);
                    }}
                    sx={{ fontWeight: weight }}
                  >
                    <ListItemDecorator>
                      {fontWeight === weight && <Check fontSize="sm" />}
                    </ListItemDecorator>
                    {weight === "200" ? "lighter" : weight}
                  </MenuItem>
                ))}
              </Menu>
              <IconButton
                variant={italic ? "soft" : "plain"}
                color={italic ? "primary" : "neutral"}
                aria-pressed={italic}
                onClick={() => setItalic((bool) => !bool)}
              >
                <FormatItalic />
              </IconButton>
              <Button onClick={() => handleSubmit(articleId)}>Submit</Button>
            </Box>
          }
          sx={{
            minWidth: 300,
            fontWeight,
            fontStyle: italic ? "italic" : "initial",
          }}
        />
      </FormControl>

      {commentDetails.map((commentDetail) => {
        return (
          <div key={commentDetail.id}>
            <img id="comment-placeholder" src="https://picsum.photos/50/50" />
            <p className="comment-tag">{commentDetail.comment}</p>
            <IconButton
              className="primary"
              onClick={() =>
                dispatch({
                  type: "UPDATE_COMMENT",
                  payload: {
                    commentId: commentDetail.id,
                    newLikeCount: commentDetail.likes + 1,
                  },
                })
              }
            >
              <FavoriteIcon color="primary" /> ({commentDetail.likes})
            </IconButton>
            <IconButton
              className="inherit"
              onClick={() =>
                dispatch({ type: "DELETE_COMMENT", payload: commentDetail.id })
              }
            >
              <DeleteIcon color="inherit" />
            </IconButton>
          </div>
        );
      })}
    </>
  );
}

export default TextareaValidator;
