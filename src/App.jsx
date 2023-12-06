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

function App() {
  return (
    <UserProvider>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/qrGenerator" element={<QrComponent />} />
          <Route path="/qrReader" element={<QRReaderComponent />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard2" element={<Dashboard2 />} />
          <Route path="/homeUser" element={<HomeUser />} />
          <Route path="/homeAdmin" element={<HomeAdmin />} />
          <Route path="/homeGuardia" element={<HomeGuardia />} />
          <Route path="/reservar" element={<ReservarEstacionamiento />} />
          <Route path="/registerGuardia" element={<RegisterGuardia />} />
        </Routes>
        {/* <Footer/> */}
      </div>
    </UserProvider>
  );
}

export default App;
