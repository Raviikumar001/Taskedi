const express = require("express");
const router = express.Router();
const { getBoard, createBoard, updateBoard, deleteBoard } = require("../controller/board-controller");
const AuthMiddleware = require("../middleware/jwtMiddleware");

router.post("/create-board", AuthMiddleware, createBoard);
router.get("/get-boards", AuthMiddleware, getBoard);
router.patch("/update-board", AuthMiddleware, updateBoard);
router.delete("/delete-board", AuthMiddleware, deleteBoard);

module.exports = router;
