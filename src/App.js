import logo from './logo.svg';
import './App.css';
import './assets/fonts/fonts.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './pages/Search';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/login';
import Register from './components/register';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          {/* <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
