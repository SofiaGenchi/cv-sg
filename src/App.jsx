import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import Portfolio from './components/Portfolio/Portfolio'
import SocialMedia from './components/SocialMedia/SocialMedia'
import About from './components/About/About';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <SocialMedia />
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/about' element={<About />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
