import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App/App";

const container = document.getElementById("container");

if (!container) throw new Error("Failed to find root element.");

ReactDOM.createRoot(container).render(<App />);
