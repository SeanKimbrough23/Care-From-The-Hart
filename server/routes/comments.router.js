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

// put request
router.put("/:id", rejectUnauthenticated, (req, res) => {
  console.log("inside PUT request", req.body);
  const updatedComment = req.body;
  const queryText = `UPDATE "comments" SET "comment" = $1 WHERE "id" = $2 AND "user_id" = $3 AND "articles_id" = $4;`;
  const userId = req.user.id;
  console.log("checking query", queryText);
  pool
    .query(queryText, [
      updatedComment.comment,
      //req.params.id,
      userId,
      articlesId,
    ])
    .then((result) => {
      //Now that both are done, send back success!
      res.sendStatus(201);
    })
    .catch((error) => {
      // catch for query
      console.log("error in  update request", error);
      res.sendStatus(500);
    });
});

router.delete("/:id", rejectUnauthenticated, (req, res) => {
  const queryText = `DELETE FROM "comments" WHERE "id" = $1 AND "user_id" = $2;`;
  const userId = req.user.id;
  const commentId = req.params.id;
  console.log("router.delete", commentId);
  pool
    .query(queryText, [commentId, userId])
    .then(() => {
      res.sendStatus(204);
    })
    .catch((error) => {
      console.log("Error deleting comment", error);
      res.sendStatus(500);
    });
});

module.exports = router;
