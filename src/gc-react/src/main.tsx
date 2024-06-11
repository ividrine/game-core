import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/main";
import Home from "./views/home";
import "./index.css";
import "@fortawesome/fontawesome-free/js/all";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainLayout>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </MainLayout>
  </React.StrictMode>
);
