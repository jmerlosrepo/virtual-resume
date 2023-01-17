const uploadFile = (req, res, src) => {
  let file = req.files.file;
  let filename = file.name;
  file.mv(src + filename, (error) => {
    if (error) {
      res.send(error);
    } else {
      res.send("file uploaded");
    }
  });
};
module.exports = uploadFile;
