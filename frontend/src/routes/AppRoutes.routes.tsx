import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import MainView from "../pages/MainView";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<MainView />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRoutes;
