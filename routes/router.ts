import { Router } from "jsr:@oak/oak/application";

const router = new Router();

router.get("/", (ctx) => {
    //stringifies automaticaly
    ctx.response.body = { status: "ok", data: "Hello World"}
});

router.post("/", async (ctx) => {
   //parses body automaticaly, gives promise
    const body = await ctx.request.body();
    const name = body.value.name;
});
router.put("/:id", (ctx) => {

    const params = ctx.params.id;

});

export default router;