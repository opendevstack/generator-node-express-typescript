// initialize the webserver
import app from "./index";

const host = process.env.YOUR_HOST || "0.0.0.0";
const port = parseInt(process.env.PORT || "8080", 10);
app.listen(port, host, () => {
  console.info(`App listening on port ${port}!`);
});
