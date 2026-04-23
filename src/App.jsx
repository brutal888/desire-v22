import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import FocusAreas from "./pages/FocusAreas";
import Projects from "./pages/Projects";
import Programs from "./pages/Programs";
import Impact from "./pages/Impact";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/focus-areas" element={<FocusAreas />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
