import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import AppBody from './components/AppBody';
import '@fortawesome/fontawesome-free/js/all.js';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<AppBody />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
