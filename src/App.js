import { Typography } from "@mui/material";
import "./index.css";
import NavBar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Marketplace from "./pages/marketplace";
import Blog from "./pages/blog";
import { Route, Routes } from "react-router-dom";

function App() {
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
      </Routes>
    </>
  );
}

export default App;
