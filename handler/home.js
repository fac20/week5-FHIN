const fs = require("fs");
const path = require("path");
const missingHandler = require("./missing");

function homeHandler(request, response) {
  
    const filePath = path.join(__dirname, "..", "public", "index.html");

    fs.readFile(filePath, "utf-8", (error, data) => {
        if (error) {
            console.log(error);
            response.end(data);
        } else {
            response.writeHead(200, { "content-type": "text/html" });
            response.end(data);
        }
    });

}

module.exports = homeHandler;