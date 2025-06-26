import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import ServicesPage from "./pages/Service";
import BlogsPage from "./pages/Blog";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage/>} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />}/>
          {/* Add more routes */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
