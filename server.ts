import { serve } from "https://deno.land/std/http/server.ts"
import { Application } from "jsr:@oak/oak/application";
import {router} from "routes/router.ts"
// Create a server instance listening on port 3000
// Deno.serve({port: 3000}, (_req) => {
//     return new Response("Hello, World!");
// });

//USING OAK FRAMEWORK
const app = new Application();
//ROUTER - register these MW
app.use(router.routes());
app.use(router.allowedMethods());

//MW - all needs to be async !!!!
app.use(async (ctx, next) => {
    await next();
})



await app.listen({ port: 3000 });

