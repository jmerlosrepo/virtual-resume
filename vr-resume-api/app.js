const express = require("express");
const cors = require("cors");
const upload = require("express-fileupload");

const app = express();

app.use("/assets/profiles", express.static("assets/profiles"));
app.use(cors);
app.use(upload);

app.post("/upload-images", (req, res) => {
  if (req.files) {
    let file = req.files.file;
    let filename = file.name;
    file.mv("./uploads/profiles/" + filename, (error) => {
      if (error) {
        res.send(error);
      } else {
        res.send("file uploaded");
      }
    });
  }
});

app.listen(3001, () => {
  console.log("Listening to port 3001");
});
