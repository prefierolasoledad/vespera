import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage';
import ScrollToTop from './ScrollToTop';
import SpeakersPage from './components/speakersPage';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/speakers" element={<SpeakersPage />} />
      </Routes>
    </Router>
  );
}

export default App;
