import { BrowserRouter,Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Categories from './pages/Categories'
import Mens from './pages/Mens'
import AppointmentPage from './pages/ApointmentPage'

function App() {
  return (
    <BrowserRouter>
    <Banner/>
    <Navbar />
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/categories' element={<Categories/>}/>
      <Route path='/mens' element={<Mens/>}/>
      <Route path='/womens' element={<Home/>}/>
      <Route path='/kids' element={<Home/>}/>
      <Route path='/appointment' element={<AppointmentPage/>}/>
      <Route path='*' element={<div className='text-center mt-20 text-3xl font-bold'>404 Not Found</div>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
