const express = require("express");
const router = express.Router();
const { uploadFile } = require("../../services/fileService");
const {
  PROJECTS_IMAGES,
  PROJECTS_IMAGES_PATH,
  PROJECTS_IMAGES_STATIC,
} = require("../../constants");

router.use(PROJECTS_IMAGES_STATIC, express.static(PROJECTS_IMAGES));

router.get("/", (req, res) => {
  res.send("OK");
});

router.post("/upload", (req, res) => {
  if (req.files) {
    uploadFile(req, res, PROJECTS_IMAGES_PATH);
  }
});

module.exports = router;
