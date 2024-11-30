const express = require("express");
const router = express.Router();

const folderControllers = require('../controllers/folderController.js');

// real http addr is:
// http://localhost:PORT/folders
router.get("/get-folders/:USER_ID", folderControllers.DisplayFolders);

router.delete("/delete-folder/:FOLDER_ID", folderControllers.DeleteFolder);

module.exports = router;