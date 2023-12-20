import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { Route, Routes } from "react-router-dom";
import QrComponent from "./Components/QrComponent";
import QRReaderComponent from "./Components/QrReaderComponent";
import Dashboard from "./Components/Dashboard";
import Dashboard2 from "./Components/Dashboard2";
import HomeUser from "./Components/HomeUser";
import HomeAdmin from "./Components/HomeAdmin";
import HomeGuardia from "./Components/HomeGuardia";
import ReservarEstacionamiento from "./Components/ReservarEstacionamiento";
import RegisterGuardia from "./Components/RegisterGuardia";
import { UserProvider } from "./Context";
import RequireAuth from './Components/RequireAuth'; // Importa tu componente RequireAuth

function App() {
  return (
    <UserProvider>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/qrGenerator" element={<QrComponent allowedUsers={['estudiante','administrador']} />} />
          <Route path="/qrReader" element={ <RequireAuth><QRReaderComponent allowedUsers={['guardia']} /></RequireAuth>} />
          <Route path="/dashboard" element={<RequireAuth><Dashboard allowedUsers={['administrador']} /></RequireAuth>} />
          <Route path="/dashboard2" element={<RequireAuth><Dashboard2 /></RequireAuth>} />
          <Route path="/homeUser" element={<RequireAuth><HomeUser /></RequireAuth>} />
          <Route path="/homeAdmin" element={<RequireAuth><HomeAdmin /></RequireAuth>} />
          <Route path="/homeGuardia" element={<RequireAuth allowedUsers={['guardia','administrador']}   ><HomeGuardia/></RequireAuth>} />
          <Route path="/reservar" element={<RequireAuth><ReservarEstacionamiento/></RequireAuth>} />
          {/* PROTEGER ESTA RUTA EXCEPTO AL ADMIN */}
          <Route path="/registerGuardia" element={<RequireAuth allowedUsers={['administrador']}><RegisterGuardia/> </RequireAuth>} />  
          
        </Routes>
        {/* <Footer/> */}
      </div>
    </UserProvider>
  );
}

export default App;
