import express from "express";
import cors from "cors";
import routes from "./modules/routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// ✅ USE YOUR ROUTES HERE
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Hello from server!");
});

export default app;
