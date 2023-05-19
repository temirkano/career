import "./App.css";
import BlogPage from "./pages/BlogPage"
import AboutPage from "./pages/AboutPage";
import DetailsPage from "./pages/DetailsPage";
import ListPage from "./pages/ListPage";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/about" element={< AboutPage />} />
        <Route path="/details" element={< DetailsPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </div>
  );
}
export default App;
