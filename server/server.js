const express = require("express");

const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

const sessionMiddleware = require("./modules/session-middleware");
const passport = require("./strategies/user.strategy");

// Route includes
const userRouter = require("./routes/user.router");
const articlesRouter = require("./routes/articles.router");
const commentsRouter = require("./routes/comments.router");
const bookingRouter = require("./routes/booking.router");

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use("/api/user", userRouter);
app.use("/api/comment", commentsRouter);
app.use("/api/articles", articlesRouter);
app.use("/api/comment/new", commentsRouter);
app.use("/api/booking", bookingRouter);
app.use("/api/booking/new", bookingRouter);
//app.use("/api/booking/requests", bookingRouter);
// Serve static files
app.use(express.static("build"));

// App Set //
const PORT = process.env.PORT || 8000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
