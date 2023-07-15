import app from "./app";
import "./utils/mongoose";
import { PORT } from "./config";
require('text-encoding-utf-8');


app.listen(app.get("port"));
console.log(`server on port ${app.get("port")}`); 
