import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Cta from "./components/home/Cta";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Cta />
      <Footer />
    </>
  );
}

export default App;
