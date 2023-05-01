const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

router.post("/", rejectUnauthenticated, (req, res) => {
  console.log("inside of the booking router.post", req.body);

  const insertBookingQuery = `INSERT INTO "booking" ("user_id","date","email","request", "isApproved") VALUES ($1,$2,$3,$4,$5) RETURNING "id"`;
  pool
    .query(insertBookingQuery, [
      req.body.user_id,
      req.body.date,
      req.body.email,
      req.body.request,
      false,
    ])
    .then((result) => {
      console.log("Booking", result.rows[0].id);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

// router.get("/", rejectUnauthenticated, (req, res) => {
//   const pendingRequestsQuery = `SELECT * FROM booking ORDER BY "id"`;
//   pool
//     .query(query)
//     .then((results) => {
//       res.send(result.rows);
//     })
//     .catch((error) => {
//       console.log("Error with pending router", error);
//       res.sendStatus(500);
//     });
// });

router.get("/", rejectUnauthenticated, (req, res) => {
  console.log("inside booking router.get");
  const query = `SELECT * FROM booking ORDER BY "id"`;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get all bookings", err);
      res.sendStatus(500);
    });
});

module.exports = router;
