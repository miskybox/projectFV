// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Header from './components/Header';
import Register from './components/Register';
import TripPlanner from './components/pages/TripPlanner';
import Forum from './components/Forum';
import ProtectedRoute from './ProtectedRoute';
import FooterSection from './components/footer/FooterSection';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/trip-planner" element={<TripPlanner />} />
          <Route
            path="/forum"
            element={
              <ProtectedRoute>
                <Forum />
              </ProtectedRoute>
            }
          />
          <Route path="/footer" element={<FooterSection />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;



