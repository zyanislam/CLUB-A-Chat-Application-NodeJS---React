const express = require("express"); // Run HTTP server
const cors = require("cors"); // Run CORS server anyway

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001); // Port 3001