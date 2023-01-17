const express = require("express");
const cors = require("cors");
//const upload = require("express-fileupload");
// const career = require("./routes/career");
// const education = require("./routes/education");
// const login = require("./routes/login");
// const profile = require("./routes/profile");
// const projects = require("./routes/projects");
// const register = require("./routes/register");
// const resume = require("./routes/resume");
// const sections = require("./routes/sections");
// const selfPresentation = require("./routes/selfPresentation");

const app = express();

const PORT = process.env.PORT | 3001;

app.use(cors);
//app.use(upload);
// app.use("/career", career);
// app.use("/education", education);
// app.use("/login", login);
// app.use("/profile", profile);
// app.use("/projects", projects);
// app.use("/register", register);
// app.use("/resume", resume);
// app.use("/sections", sections);
// app.use("/selfPresentation", selfPresentation);

app.get("/", (req, res) => {
  res.send("OK");
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
