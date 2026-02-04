import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import Apps from "./pages/LearnMore";
import LearnMore from "./pages/LearnMore";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/learnmore" element={<LearnMore />} />
      </Routes>
    </Router>
  );

   // return <h1 style={{ color: 'black', textAlign: 'center' }}>React Berhasil Jalan ✅</h1>;
}

export default App;
