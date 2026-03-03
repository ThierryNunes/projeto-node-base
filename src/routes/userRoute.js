const { Router } = require("express");
const UserController = require("../controllers/UserController.js");

const userController = new UserController();

const router = Router();

router
  .get("/users", (req, res) => userController.getAll(req, res))
  .get("/users/:id")
  .post("/users")
  .patch("/users/:id");

module.exports = router;
