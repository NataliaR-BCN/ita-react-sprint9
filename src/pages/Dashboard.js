import { useState } from "react";
import UserDashboard from "../components/UserDashboard/UserDashboard";
import { Navigate, useLocation } from "react-router-dom"; 
import { useAuth } from "../contexts/AuthContext";
import { Container, Titol } from "../styles/styles";
import PetsBoard from "../components/PetsBoard/PetsBoard";


const Dashboard = () => {

    const { currentUser } = useAuth();
    const location = useLocation();
    
    const [userNameExists, setUserNameExists] = useState(false);

    const { from } = location.state || {};

    if (!currentUser || (currentUser && currentUser.email === '')) {
        return <Navigate to="/login" replace />;
    }


    return (
        <Container>
            <Titol>
                Àrea privada d'usuari     
            </Titol>
            <UserDashboard from={from} setUserNameExists={setUserNameExists} />
            {userNameExists && <PetsBoard></PetsBoard>}
        </Container>
    )

};


export default Dashboard;

