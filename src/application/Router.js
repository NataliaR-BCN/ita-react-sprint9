import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cercador from "./../pages/Cercador";
import Home from "./../pages/Home";
import Layout from "./../pages/Layout";
import Login from "../components/LoginRegister/Login";
import Register from "../components/LoginRegister/Register";
import Dashboard from "./../pages/Dashboard";
import Formulari from "./../pages/Formulari";
import DetallMascota from "./../pages/DetallMascota";
import { Container, FeedbackCard } from "./../styles/styles";


const Router = () => (

    <BrowserRouter>

    <Routes>
        <Route element={<Layout/>} >
            <Route path="/" element={<Home />} />
            <Route path="/formulari_mascota" element={<Formulari />} />
            <Route path="/cercador" element={<Cercador />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registre" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/mascota/:id" element={<DetallMascota />} />
            <Route path="*" element={<Container><FeedbackCard>Error 404: Pàgina no trobada</FeedbackCard></Container> } />
        </Route>    
    </Routes>

    </BrowserRouter>

);

export default Router;



