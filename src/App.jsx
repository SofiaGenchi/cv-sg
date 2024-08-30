import './App.css'
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import SocialMedia from './components/SocialMedia/SocialMedia'

function App() {
  return (
    <>
      <div className='App'>
        <NavBar/>
        <div>
        <Header/>
        <SocialMedia/>
        </div>
      </div>
    </>
  )
}

export default App
