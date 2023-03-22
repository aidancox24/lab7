const http = require("http");
const fs = require("fs");

const port = 1337;

function serveStaticFile(response, path, contentType, responseCode) {
    if (!responseCode) {
        responseCode = 200;
    }

    fs.readFile(`${__dirname}${path}`, (error, data) => {
        if (error) {
            response.writeHead(500, {
                "Content-Type": "text/plain"
            });

            response.end("500 - Internal Error");
        } else {
            response.writeHead(responseCode, { "Content-Type": contentType });

            response.end(data);
        }
    });
}

http.createServer((request, response) => {
    const path = request.url.replace(/\/?(?:\?)?$/, "").toLowerCase();

    switch (path) {
        case "":
            serveStaticFile(response, "/public/index.html", "text/html");
            break;

        case "/posts":
            serveStaticFile(response, "/public/posts.html", "text/html");
            break;

        case "/contact":
            serveStaticFile(response, "/public/contact.html", "text/html");
            break;

        case "/css/style.css":
            serveStaticFile(response, "/public/css/style.css", "text/css");
            break;

        case "/images/404bottom.jpg":
            serveStaticFile(response, "/public/images/404bottom.jpg", "image/jpg");
            break;

        case "/images/404mid.gif":
            serveStaticFile(response, "/public/images/404mid.gif", "image/gif");
            break;

        case "/images/404top_w.jpg":
            serveStaticFile(response, "/public/images/404top_w.jpg", "image/jpg");
            break;

        case "/images/blogging.png":
            serveStaticFile(response, "/public/images/blogging.png", "image/png");
            break;

        case "/images/computer-typing.jpeg":
            serveStaticFile(response, "/public/images/computer-typing.jpeg", "image/jpeg");
            break;

        case "/images/construction.png":
            serveStaticFile(response, "/public/images/construction.png", "image/png");
            break;

        case "/images/logo.png":
            serveStaticFile(response, "/public/images/logo.png", "image/png");
            break;

        case "/images/merch.png":
            serveStaticFile(response, "/public/images/merch.png", "image/png");
            break;

        case "/images/x.png":
            serveStaticFile(response, "/public/images/x.png", "image/png");
            break;

        default:
            serveStaticFile(response, "/public/404.html", "text/html");
            break;
    }
}).listen(port);

console.log(`Server started on http://localhost:${port}`);

