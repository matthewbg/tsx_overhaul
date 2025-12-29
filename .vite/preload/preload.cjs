"use strict";
const electron = require("electron");
const api = {
  ping: () => "pong"
};
electron.contextBridge.exposeInMainWorld("api", api);
