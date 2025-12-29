import { contextBridge } from "electron";

export type Api = {
  ping: () => string;
};

const api: Api = {
  ping: () => "pong"
};

contextBridge.exposeInMainWorld("api", api);
