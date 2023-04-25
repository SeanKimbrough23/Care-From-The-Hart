const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

router.get("/", rejectUnauthenticated, (req, res) => {
  const query = `SELECT * FROM "comments" ORDER BY "id"`;
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
  console.log("inside comment router.post");
  const insertCommentQuery = `INSERT INTO "comments" ("comment") VALUES ($1) RETURNING "id";`;
  pool
    .query(insertCommentQuery, [req.body.comment])
    .then((result) => {
      console.log("Comment", result.rows[0].id);

      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(error);
      res.semdStatus(500);
    });
});

module.exports = router;
