import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { StarBackground } from "./components/StarBackground";

function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Global star + meteor background */}
      <StarBackground />

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
