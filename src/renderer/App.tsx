import React from "react";
import { Link } from "react-router-dom";
import AppRoutes from "./routes";

export default function App() {
  return (
    <div style={{ fontFamily: "system-ui", padding: 16 }}>
      <h1>Electron + React 19 + Redux + Router (TS)</h1>
      <nav style={{ display: "flex", gap: 12, marginBottom: 16 }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/pingtool">Ping Tool</Link>
      </nav>
      <AppRoutes />
    </div>
  );
}
