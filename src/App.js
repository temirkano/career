import "./App.css";
import MainCareer from "./components/MainCareer/MainCareer";
import AboutPage from "./pages/AboutPage";
import ListPage from './pages/ListPage'
function App() {
  return (
    <div className="App">
      <AboutPage />
      <MainCareer />
      <ListPage/>
    </div>
  );
}

export default App;
