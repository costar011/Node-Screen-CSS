import express from "express";
import dotenv from "dotenv";
import path from "path";

console.log(path.resolve(__dirname));

const app = express();

dotenv.config();

// 1. 확장자를  .pug 로 검색한다.
// 2. "views" 폴더를 default 경로로 자동인식 한다.
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "/assets")));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/post", (req, res) => {
  res.header("post");
});

app.listen(process.env.PORT, () => console.log("server start"));
