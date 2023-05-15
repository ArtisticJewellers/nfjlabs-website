import { Typography } from "@mui/material";
import NavBar from "./components/navbar";
import About from "./pages/about";
import Marketplace from "./pages/marketplace";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Blog from "./pages/blog";
import BlogDetails from "./pages/blogDetails";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("the windo object is------->", window);
    // window.location.href = "rgregregerre";
  }, []);

  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
    </>
  );
}

export default App;
