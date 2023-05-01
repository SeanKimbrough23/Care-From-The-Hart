import React from "react";
import { styled } from "@mui/material/styles";
import firstPicture from "../Images/Dr_Hart.jpg";
import secondPicture from "../Images/Dr.Hart white coat.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { HashRouter as Router, Link } from "react-router-dom";
import CardHeader from "@mui/material/CardHeader";
import thirdPicture from "../Images/06f633ce-4467-4631-8006-3d756237d7c5.jpg";
import fourthPicture from "../Images/Dr.Hart arms folded.jpeg";
import Card from "@mui/material/Card";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import CardMedia from "@mui/material/CardMedia";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./AboutPage.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function AboutPage() {
  const [cardStates, setCardStates] = React.useState({
    card1: false,
    card2: false,
    card3: false,
    card4: false,
  });
  //const [expanded, setExpanded] = React.useState(false); // the id of the thing youre expanding
  const [likeCount, setLikeCount] = React.useState(0);
  const handleExpandClick = (cardId) => {
    setCardStates({ ...cardStates, [cardId]: !cardStates[cardId] }); // setExpanded(id of thing)
  };
  const handleLikeClick = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <div
      className="card-container"
      style={{ overflowY: "scroll", height: "100vh", scrollTop: 0 }}
    >
      <Card
        id="card1"
        sx={{
          backgroundColor: "lightpink",
          maxWidth: 200,
          padding: 10,
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="Dr.Hart">
              D
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Dr.Hart"
          subheader="About Me"
        />
        <CardMedia
          component="img"
          height="500"
          alt="Dr Hart"
          image={firstPicture}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Dionne Hart, MD, a specialist in addiction medicine and psychiatry
            who advocates for people with mental illnesses.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" onClick={handleLikeClick}>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={cardStates["card1"]} // should be expanded === 'card1'
            onClick={() => handleExpandClick("card1")}
            aria-expanded={cardStates["card1"]}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={cardStates["card1"]} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Biography:</Typography>
            <Typography paragraph>
              I remember the toy doctor’s bag my dad gave me for my fifth
              birthday. He grew up during the Jim Crow era so being a physician
              wasn’t a dream he was able to pursue. He inspired and encouraged
              me to pursue my dream to become a physician.
            </Typography>
            <Typography paragraph>
              I didn’t have a straight path to medicine. At 20, I was divorced
              with three small children. In the African-American community,
              elders often say, “God doesn’t give you more than you can handle.”
              In my opinion, God doesn't give more than a community can handle.
              I earned a degree at the University of Chicago and completed a
              residency at Mayo Clinic by accepting help from others and
              persisting even when told that my goals were impossible. All of
              three of my children earned college degrees as well as two
              graduate degrees. My personal motto: Let your haters be your
              motivators! Persist!
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card
        id="card2"
        sx={{
          backgroundColor: "lightgreen",
          maxWidth: 200,
          padding: 10,
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="Dr.Hart">
              D
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Dr.Hart"
          subheader="About Me"
        />
        <CardMedia
          component="img"
          height="500"
          alt="Dr Hart"
          image={secondPicture}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Dr. Dionne Hart is a lifelong resident of Illinois. She received her
            undergradute degree in psychology from the University of Chicago.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={cardStates["card2"]}
            onClick={() => handleExpandClick("card2")}
            aria-expanded={cardStates["card2"]}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={cardStates["card2"]} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Biography:</Typography>

            <Typography paragraph>
              After working as a social worker on Chicago's west side, Dr. Hart
              earned a medical degree. In 2003, she completed a residency in
              psychiatry at the Mayo Clinic in Rochester, MN. She is
              board-certified in psychiatry and addiction medicine. After
              residency, she chose the Federal Medical Center, Rochester as her
              site to fulfill a service commitment to the National Health
              Service Corps. She elected to remain on staff. She is an adjunct
              assistant professor of psychiatry at Mayo Clinic College of
              Medicine and Science
            </Typography>
            <Typography paragraph>
              Becoming director of Care From the Hart, an organization that
              provides patient advocacy and psychiatric services in Chicago and
              Rochester, Minnesota. I was elected as the first chair of the AMA
              Minority Affairs Section and was the first African-American woman
              to be elected to the Minnesota Medical Association’s board of
              trustees. She was also named the Minnesota Psychiatric Society
              Psychiatrist of the Year.
            </Typography>
            <Typography paragraph></Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card
        id="card3"
        sx={{
          backgroundColor: "lightpink",
          maxWidth: 200,
          padding: 10,
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500] }}
              aria-label="Dr.Hart"
              alt="Heart"
              src="../Images/heartlogo.jpeg"
            >
              D
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Dr.Hart"
          subheader="About Me"
        />
        <CardMedia
          component="img"
          height="500"
          alt="Dr Hart"
          image={thirdPicture}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Throughout her career, Dr. Hart has earned multiple awards and
            recognitions, including recognition by Governor Tim Walz.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={cardStates["card3"]}
            onClick={() => handleExpandClick("card3")}
            aria-expanded={cardStates["card3"]}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={cardStates["card3"]} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Biography:</Typography>
            <Typography paragraph>
              In 2014, Dr. Hart was named Minnesota Psychiatrist of the Year. In
              2017, she received the National Alliance on Mental Illness
              Exemplary Psychiatrist Award. In 2020, Minnesota Physician journal
              named her one of the 100 most influential healthcare leaders in
              Minnesota. In 2022, Dr. Hart was recognized by the Minnesota
              African American Heritage Calendar Committee and Minnesota
              Governor Tim Walz. Awardees were visionary women who have gifts,
              talents, and span of service in Minnesota. In 2023, Dr. Hart was
              selected at the Chief of Psychiatry at FMC Rochester.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card
        id="card4"
        sx={{
          backgroundColor: "lightgreen",
          maxWidth: 200,
          padding: 10,
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="Dr.Hart">
              D
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Dr.Hart"
          subheader="About Me"
        />
        <CardMedia
          component="img"
          height="500"
          alt="Dr Hart"
          image={fourthPicture}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Dionne Hart, MD, has held and currently holds multiple positions on
            several professional committees in the medical community.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={cardStates["card4"]} // should be expanded === 'card1'
            onClick={() => handleExpandClick("card4")}
            aria-expanded={cardStates["card4"]}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={cardStates["card4"]} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Biography:</Typography>
            <Typography paragraph>
              Dr. Hart holds local, state, and national leadership positions.
              Dr. Hart is the Region 4 chairperson of the National Medical
              Association and President of the Minnesota Association of African
              American Physicians. She was the inaugural chair of the AMA’s
              Minority Affairs Section. She currently serves as an APA delegate
              to the AMA House of Delegates, and the AMA liaison to the National
              Commission on Correctional Health Care Board of Representatives.
              In 2020, Minnesota Physician journal named her one of the 100 most
              influential health care leaders in Minnesota.
            </Typography>
            <Typography paragraph></Typography>
            <Typography paragraph></Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Link
        to="/Portfolio"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          color: "#FF91a4",
        }}
      >
        <Button
          style={{
            position: "fixed",
            bottom: 0,
            right: 40,
            margin: 2,

            fontWeight: "bold",
            fontSize: "20px",
            variant: "text",
            color: "green",
            p: 5,
          }}
        >
          Portfolio{""}
          <FontAwesomeIcon icon={faArrowRight} color="green" />
        </Button>
      </Link>
    </div>
  );
}
export default AboutPage;

//  To Do List:
// 1. fix the background color
// 2. Space out images
// 3. Make it so they all don't open when you click the carrot down arrow
