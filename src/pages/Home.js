import { Container, HomeLayout, HomeCard, Titol, DivTxtPresentacio, HomeButton } from "../styles/styles";
import { Link } from "react-router-dom";

const Home = ( ) => 
    
    <Container>
        <h1>Ajudem les mascotes perdudes a tornar a casa</h1> 
        <HomeLayout>
            <HomeCard>
                <Titol>Has perdut la mascota?</Titol>
                <DivTxtPresentacio><h3>Multiplica les opcions de localitzar-la ràpidament!</h3></DivTxtPresentacio>
                <Link to="/formulari_mascota"><HomeButton>Publica un anunci</HomeButton></Link>
            </HomeCard>
            <HomeCard>
                <Titol>Has trobat una mascota?</Titol>
                <DivTxtPresentacio><h3>Segur que algú l'està buscant! Ajuda-la a tornar a casa!</h3></DivTxtPresentacio>
                <Link to="/cercador">
                <HomeButton>Cerca-la en els anuncis</HomeButton></Link>
            </HomeCard>
        </HomeLayout>
    </Container>;

export default Home;