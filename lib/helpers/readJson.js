import os from "os";

export default function getJsonData() {
  return {
    hostname: os.hostname(),
    platform: os.platform(),
    arch: os.arch(),
    release: os.release(),
    cpus: os.cpus().length,
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    user: os.userInfo().username,
    nodeVersion: process.version,
    pid: process.pid
  };
}