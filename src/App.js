import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./page/Login";
import RegisterPage from "./components/RegisterPage";
import NotFoundPage from "./components/NotFoundPage";
import Home from "./page/Home";
import Admin from "./page/Admin";
import Footer from "./page/Footer";
import GuestPost from "./components/GuestPost";
import LowCatagory from "./page/LowCatagory" 
import Baracts from "./components/Baracts";
import Artical from "./page/Artical";
import Acts from "./page/Acts";

function App() {
  return (
    <Router>
      <Navbar />
      <LowCatagory />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/guest-post" element={<GuestPost />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/articles" element={<Artical />} />
        <Route path="/bar-acts" element={<Acts />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
