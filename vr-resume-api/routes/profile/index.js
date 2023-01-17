const express = require("express");
const router = express.Router();
const { uploadFile } = require("../../services/fileService");
const {
  PROFILE_IMAGES,
  PROFILE_IMAGES_PATH,
  PROFILE_IMAGES_STATIC,
} = require("../../constants");

router.use(PROFILE_IMAGES_STATIC, express.static(PROFILE_IMAGES));

router.get("/", (req, res) => {
  res.send("OK");
});

router.post("/upload", (req, res) => {
  if (req.files) {
    uploadFile(req, res, PROFILE_IMAGES_PATH);
  }
});

module.exports = router;
