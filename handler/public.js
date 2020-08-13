const fs = require("fs");
const path = require("path");
const missingHandler = require("./missing");

const fileType = {
    html: "text/html",
    css: "text/css",
    png: "image/png",
    js: "application/javascript"
}

function publicHandler(request, response) {
    const file = request.url;
    const array = file.split(".");
    console.log(request.url)
    // console.log("file-----" + request);
    // console.log(arrayOfurl);
    const extension = array[1];
    // console.log(extension);
    const type = fileType[extension];
    // console.log(type);


    const filePath = path.join(__dirname, "..", file);
    fs.readFile(filePath, (error, data) => {
        if (error) {
            console.log(error);
            response.end(missingHandler);
        } else {
            response.writeHead(200, {"content-type": type})
            response.end(data);
        }

    })
}

module.exports = publicHandler;