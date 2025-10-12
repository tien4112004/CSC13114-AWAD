import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PhotoList } from './pages/PhotoList';
import { PhotoDetail } from './pages/PhotoDetail';

/**
 * Main App component with routing configuration
 */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PhotoList />} />
        <Route path="/photos/:id" element={<PhotoDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
