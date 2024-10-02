import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage';
import ScrollToTop from './ScrollToTop';
import SpeakersPage from './components/speakers/speakersPage';
import EventsPage from './components/events/eventPage';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/speakers" element={<SpeakersPage />} />
        <Route path="/events" element={<EventsPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
