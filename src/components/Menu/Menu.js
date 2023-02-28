import { Header, Nav, MenuLink, Logo, MainSections, MainSectionsSeparator, UserArea, UserAreaSeparator } from "./Menu.styled";
import { useAuth } from "./../../contexts/AuthContext";


const Menu = () => {

     const { currentUser } = useAuth();

    return (
        <Header>
            <Nav>

                <MenuLink to="/"><Logo>Torna'm a casa</Logo></MenuLink>
                <MainSections>
                    <MenuLink to="/formulari_mascota">Publica un anunci</MenuLink>  
                    <MainSectionsSeparator>|</MainSectionsSeparator> 
                    <MenuLink to="/cercador">Cerca una mascota</MenuLink>
                </MainSections>
                <UserArea>
                    {!currentUser && 
                    <><MenuLink to="/registre">Registra't</MenuLink> 
                    <UserAreaSeparator>|</UserAreaSeparator> 
                    <MenuLink to="/login">Inicia sessió</MenuLink>
                    </>
                    }
                    {currentUser && 
                    <MenuLink to="/dashboard">Àrea privada</MenuLink>
                    }
                </UserArea>
            </Nav>
        </Header>
    )

};

export default Menu;