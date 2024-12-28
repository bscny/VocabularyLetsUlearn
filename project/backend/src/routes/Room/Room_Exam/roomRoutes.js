const express = require("express");
const router = express.Router();

const roomController = require('@/controllers/Room/Room_Exam/roomController.js');

// real http addr is:
// http://localhost:PORT/room

router.get("/test-sheet/:ROOM_ID", roomController.GetTestSheet);

module.exports = router;