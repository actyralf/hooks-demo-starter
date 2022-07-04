import { Button } from "./components/Button/Button";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ContactPage } from "./pages/ContactPage";
import { Navigation } from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <h1>Boilerplate</h1>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
