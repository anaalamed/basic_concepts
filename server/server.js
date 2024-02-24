import serverRouter from "./routes/index.js";
import express from "express";

const app = express();
const port = process.env.PORT || 8000;

app.use(serverRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
