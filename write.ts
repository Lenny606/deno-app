let mess: string = "Hello World";

Deno.writeFile("./tmp/test.txt", new TextEncoder().encode(mess)).then(() => {
    console.log("File written");   
});
console.log(mess);