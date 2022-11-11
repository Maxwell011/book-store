import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import Categories from './pages/Categories';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="body">
        <Header />
        <Routes>
          <Route exact path="/" element={<Books />} />
          <Route exact path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
