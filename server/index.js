import express from "express";
import cors from "cors";
const app = express();

app.use(
  cors({
    origin: ["https://tes-kuki.vercel.app"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("HOME");
});

app.post("/set", (req, res) => {
  const text = req.body.text;
  res
    .cookie("/the_text", text, {
      expires: 999999,
      maxAge: 999999,
      secure: true,
    })
    .send("success");
});

app.listen(4000, () => {
  console.log("running");
});
