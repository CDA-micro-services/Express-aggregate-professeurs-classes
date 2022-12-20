import express from "express";
import "dotenv/config";
import router from "./aggregate/Aggregate.router";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded());
app.use(router);

app.listen(port, () => {
  console.log("connection sur le port ", port);
});
