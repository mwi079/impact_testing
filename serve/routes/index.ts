import Router from "koa-router";
import * as Koa from "koa"
const {dummy}=require('../controllers/dummy.controllers')
const router=new Router();

router.get("/", dummy);


module.exports = { router };