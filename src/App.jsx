import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import OS from './pages/OS';
import DMJ from './pages/DMJ';
import SBD from './pages/SBD';

function App() {
  return (
    <Router>
      <Header />
      <main className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/os" element={<OS />} />
          <Route path="/dmj" element={<DMJ />} />
          <Route path="/sbd" element={<SBD />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;