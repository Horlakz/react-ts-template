import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Index from "../pages/Index";

export default function Routere() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}
