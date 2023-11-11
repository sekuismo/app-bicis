import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import { Route, Routes } from 'react-router-dom'
import QrComponent from './Components/QrComponent'
import QRReaderComponent from './Components/QrReaderComponent'

function App() {


  return (
    < div   >
    

    <Navbar/>
    <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}  />
    <Route path='/register' element={<Register/>} />
    <Route path='/qrGenerator' element={<QrComponent/>}    />
    <Route path='/qrReader' element={<QRReaderComponent/>} />

    </Routes>
    {/* <Footer/> */}
    
    </ div>
  )
}

export default App
