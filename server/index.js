import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(
  cors({
    origin: ["https://tes-kuki.vercel.app"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("HOME");
});

app.post("/set", (req, res) => {
  const text = req.body.text;
  res
    .cookie("/the_text", text, {
      path: "/", // Ensure the cookie is available on all routes
      expires: new Date(Date.now() + 999999 * 1000), // Set to a future date
      maxAge: 999999 * 1000, // Set to a future date in milliseconds
      secure: true,
      sameSite: "none",
    })
    .send("success");
});

app.listen(4000, () => {
  console.log("running");
});
