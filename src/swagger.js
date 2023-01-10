"user strict";

const { readFileSync } = require("fs");
const path = require("path")

const applicationName = "My Serverless Users App";

exports.getYml = async (event) => {

  return {
    statusCode: 200,
    headers: {
      "content-type": "application/json",
    },
    body: readFileSync(path.join(__dirname,'..','openapi.yml'), "utf8"),
  };
};

exports.getUi = async (event) => {
  const body = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>${applicationName}</title>
            <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui.css">
        </head>
        <body>
            <div id="swagger"></div>
            <script src="https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui-bundle.js"></script>
            <script>
              SwaggerUIBundle({
                dom_id: '#swagger',
                url: '/dev/swagger.yml'
            });
            </script>
        </body>
        </html>`;

  return {
    statusCode: 200,
    headers: {
      ["Content-Type"]: "text/html",
    },
    body,
  };
};
