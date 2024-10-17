import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FolioList from "./components/Folio/Folio";
import FolioDetail from "./components/Folio/FolioDetail";
import './styles/style.scss';
import AboutPage from './components/About/About';

const Layout: React.FC = () => {
  const location = useLocation();
  const isFolioPage = location.pathname.startsWith('/portfolio/');

  return (
    <div className="App">
      <Header isFolioPage={isFolioPage} />
      <main className="contents">
        <Routes>
          <Route path="/" element={<FolioList />} />
          <Route path="/portfolio/:id" element={<FolioDetail />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer isFolioPage={isFolioPage} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;