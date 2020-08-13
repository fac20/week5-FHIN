const fs = require("fs");
const path = require("path");
const missingHandler = require("./missing");
const db = require("../model");

function homeHandler(request, response) {
    
    const filePath = path.join(__dirname, "..", "public", "index.html");

    fs.readFile(filePath, "utf-8", (error, data) => {
        if (error) {
            console.log(error);
            response.end(missingHandler);
        } else {
            const listItem = db;
            console.log("List Items: ", listItem);
            // const list = listItem.map((object) => `<li>${object}</li>`);
            // const html = data.replace(`<!-- recipe-placeholder -->`, list.join("\n"));

            response.writeHead(200, { "content-type": "text/html" });
            response.end(data);
        }
    });
}

module.exports = homeHandler;