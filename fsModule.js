const fs = require("fs");
fs.writeFileSync("mahesh", "codewithharry videos are very much begginer friendly");
let text = fs.readFileSync("mahesh", "utf-8");
text = text.replace("codewithharry", "kunal");
console.log(text);
fs.writeFileSync("rohan", text);
fs.readFile("mahesh", "utf-8", (error, data) => {
    console.log(data);
})