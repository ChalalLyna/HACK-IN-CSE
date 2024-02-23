import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import './styles.css'
import LoginSign from './pages/LoginSign';

export default function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginSign />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}


