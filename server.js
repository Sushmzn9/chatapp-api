import express from "express";
import cors from "cors";
import router from "./router/router.js";
import morgan from "morgan";
const app = express();

const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/authenticate", router);

app.get("/", (req, res) => {
  try {
    res.json({
      status: "success",
      message: "server is running well",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

app.listen(PORT, (error) => {
  error
    ? console.log(error.message)
    : console.log(
        `server is connected and running at http://localhost:${PORT}`
      );
});
