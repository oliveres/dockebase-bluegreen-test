const http = require("http");

const VERSION = process.env.APP_VERSION || "v1";
const PORT = 3000;

const server = http.createServer((req, res) => {
  const hostname = require("os").hostname();
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
<!DOCTYPE html>
<html>
<head><title>Blue-Green Test</title></head>
<body style="font-family:system-ui;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;background:#111;color:#eee">
  <div style="text-align:center">
    <h1>Blue-Green Test App</h1>
    <p style="font-size:2em;color:#4ade80">${VERSION}</p>
    <p style="color:#888">Container: ${hostname}</p>
    <p style="color:#888">Time: ${new Date().toISOString()}</p>
  </div>
</body>
</html>
  `);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT} — version ${VERSION}`);
});
