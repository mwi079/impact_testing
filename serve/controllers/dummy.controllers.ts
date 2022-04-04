import * as Koa from "koa"


async function dummy(ctx:Koa.Context){
    try{
        ctx.body='Malcolm';
        ctx.status=200;
    }
    catch(error){
        ctx.status=400;
        ctx.body=error
    }   
}

module.exports={dummy}