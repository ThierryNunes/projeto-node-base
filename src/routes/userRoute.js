const { Router } = require("express");

const router = Router();

router
  .get("/users", (req, res) => res.status(200).send("OK"))
  .get("/users/:id")
  .post("/users")
  .patch("/users/:id");

module.exports = router;
