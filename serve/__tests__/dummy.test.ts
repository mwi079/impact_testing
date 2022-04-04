import {dummy} from '../controllers/dummy.controllers'
const ctx={body:'Phil', status:1}
const result={body:'Malcolm', status:200}

describe ('Dummy Test',()=>{
    test('that controller works',async ()=>{
        await dummy(ctx)
        expect(ctx.body).toBe(result.body)
        expect(ctx.status).toBe(result.status)
    })
})