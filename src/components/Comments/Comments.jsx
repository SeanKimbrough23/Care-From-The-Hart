import * as React from "react";
import Box from "@mui/joy/Box";
import { useParams, useHistory } from "react-router-dom";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Textarea from "@mui/joy/Textarea";
import IconButton from "@mui/joy/IconButton";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Menu from "@mui/joy/Menu";
import { Typography } from "@mui/material";
import MenuItem from "@mui/joy/MenuItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import FormatBold from "@mui/icons-material/FormatBold";
import FormatItalic from "@mui/icons-material/FormatItalic";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Check from "@mui/icons-material/Check";

function TextareaValidator() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [comment, setComment] = useState("");
  const commentDetails = useSelector((store) => store.commentDetails);
  const { id } = useParams();
  const [italic, setItalic] = React.useState(false);
  const [fontWeight, setFontWeight] = React.useState("normal");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const getCommentDetails = () => {
    dispatch({
      type: "FETCH_COMMENTS",
      payload: id,
    });
  };
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(comment); // Replace with your own logic to submit the comment
    setComment("");
  };

  useEffect(() => {
    getCommentDetails();
    console.log(getCommentDetails);
  }, []);
  return (
    <FormControl>
      <FormLabel>Your comment</FormLabel>
      <Textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Request Details Here… "
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
            <Button onClick={handleSubmit}>Submit</Button>
          </Box>
        }
        sx={{
          minWidth: 300,
          fontWeight,
          fontStyle: italic ? "italic" : "initial",
        }}
      />
    </FormControl>
  );
}

export default TextareaValidator;
