const express = require("express");
const userController = require("../controller/userController");
const router = express.Router();

// user  C R U D operations
router
  .get("/", userController.getAllUser)
  .post("/", userController.postUser)
  .get("/:id", userController.getUser)
  .put("/:id", userController.replaceUser)
  .delete("/:id", userController.deleteUser);

exports.router = router;
