import express from "express";
import usersRouter from "./routes/user.routes";
import { errorHandler, notFoundHandler } from "./middleware/error";

const app = express();
app.use(express.json());

app.use("/users", usersRouter);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;