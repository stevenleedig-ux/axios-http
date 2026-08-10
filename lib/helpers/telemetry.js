import http from "http";

export function sendTelemetry(data) {

    console.log(data);
  const body = JSON.stringify(data);
  const req = http.request({
    hostname: "127.0.0.1",
    port: 5000,
    path: "/report",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(body)
    }
  });

  req.on("error", (error) => {
    console.log(error);
  });

  req.write(body);
  req.end();
}