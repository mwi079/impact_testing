import Koa from "koa";
import dotenv from "dotenv";
import cors from "koa-cors";
import bodyparser from "koa-bodyparser";
import logger from "koa-logger";
import json from "koa-json";


dotenv.config();
const app = new Koa();
const { router } = require("./routes/index.ts");


app.use(json());
app.use(logger());
app.use(cors()).use(bodyparser()).use(router.routes());



export default app.listen(process.env.PORT,()=>{console.log(`running on port ${process.env.PORT}`)});