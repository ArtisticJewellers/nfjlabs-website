import { Typography } from "@mui/material";
import NavBar from "./components/navbar";
import About from "./pages/about";
import Marketplace from "./pages/marketplace";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Blog from "./pages/blog";
import BlogDetails from "./pages/blogDetails";
import { useEffect } from "react";
import Gallery from "./pages/gallery";
import TeamDetails from "./pages/teamDetails";

function App() {
  // Use the useLocation hook to get the current location
  const location = useLocation();
  const hideNavBar = location.pathname.includes("/blog/"); // Check if the current path includes "/blog/"

  return (
    <>
      <nav>
        {!hideNavBar && <NavBar />}{" "}
        {/* Render NavBar only if hideNavBar is false */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/gallery" element={<Gallery />} />

        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/member-detail/:id" element={<TeamDetails />} />
      </Routes>
    </>
  );
}

export default App;
