import './App.css';
import HomePage from './Pages/home';
import PortfolioPage from './Pages/porf';
import EventOrganizer from './Pages/EventOrganizer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServicesPage from './Pages/Services';


function App() {
  return (
    <div className="App">
    <Router>
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Porfolio" element={<PortfolioPage />} />
        <Route path="/EventOrganizer" element={<EventOrganizer />} />
        <Route path="/Services" element={<ServicesPage />} />
      </Routes>
  </Router>
  </div>
  );
}

export default App;
