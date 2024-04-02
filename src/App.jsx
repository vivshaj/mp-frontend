import {Route ,Routes} from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import LandingPage from './Pages/LandingPage';
import Home from './Pages/Home';
import WatchHistory from './Pages/WatchHistory';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/watchhistory' element={<WatchHistory/>} />  
        {/*  dont use './' or any other special symbols in path */}
      </Routes>
      <Footer/>
    </>
  )
}

export default App
