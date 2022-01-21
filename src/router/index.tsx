import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// home page
import Index from "../pages/Index";

// error page
import Error from "../pages/error/Error";

export default function Routere() {
  return (
    <Router>
      <Routes>
        {/* error page */}
        <Route path="*" element={<Error />} />

        {/* home page */}
        <Route path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}
