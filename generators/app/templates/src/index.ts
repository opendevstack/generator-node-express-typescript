import * as bodyParser from "body-parser";
import * as express from "express";
import {Application} from "express";
import weatherRouter from "./routes/weather";

export * from "./greeter";

const app: Application = express();
app.use(bodyParser.json({type: "application/json"}));

// register routes to listen to and expose
app.use("/api/weather", weatherRouter);

export default app;
