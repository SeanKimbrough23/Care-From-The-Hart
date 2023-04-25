const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

router.get("/", rejectUnauthenticated, (req, res) => {
  console.log("inside comment router.get");
  const query = `SELECT * FROM comments ORDER BY "id"`;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get all comments", err);
      res.sendStatus(500);
    });
});

router.post("/", rejectUnauthenticated, (req, res) => {
  //req.user
  console.log("inside comment router.post", req.body);
  const insertCommentQuery = `INSERT INTO "comments" ("articles_id","user_id","comment") VALUES ($1, $2, $3) RETURNING "id";`;
  pool
    .query(insertCommentQuery, [
      req.body.articles_id,
      req.user.id,
      req.body.comment,
    ])
    .then((result) => {
      console.log("Comment", result.rows[0].id);

      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;
