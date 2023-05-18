import "./App.css";
import LatestNewsList from "./components/LatestNewsList/LatestNewsList";
function App() {
  return (
    <div className="App">
      <LatestNewsList />
      <Sales/>
      <LoveWorking />
import MainCareer from "./components/MainCareer/MainCareer";
import AboutPage from "./pages/AboutPage";
import ListPage from './pages/ListPage'
import CustomerFeedback from "./components/CustomerFeedback/CustomerFeedback";
import LatestNews from "./components/LatestNews/LatestNews";
import GlobalConnections from "./components/GlobalConnections/GlobalConnections";
function App() {
  return (
    <div className="App">
      <AboutPage />
      <MainCareer />
      <ListPage/>
      <GlobalConnections />
      {/* <LatestNews /> */}
    </div>
   );
  }
export default App;
