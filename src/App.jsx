import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Routes>
        <Route 
          path="/" 
          element={<Home searchTerm={searchTerm} />} 
        />
        <Route 
          path="/property/:id" 
          element={<PropertyDetails />} 
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
