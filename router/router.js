import express from "express";
import axios from "axios";
const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.json({
      status: "success",
      message: "server is running well router",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const { username } = req.body;
    const response = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: "your_secret_here",
        first_name: "your_first_name_here",
      },
      { headers: { "Private-Key": "e74f9d14-5910-47ee-b7c8-fe195a97ca87" } }
    );

    return res.status(response.status).json(response.data);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
