import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home'
import LoginSign from './pages/LoginSign'
import Games from './pages/Games'
import Notifications from './pages/Notifications'

import './styles.css'

export default function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginSign />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/games" element={<Games />} />
        <Route exact path="/notifications" element={<Notifications />} />
      </Routes>
    </Router>
  )
}


