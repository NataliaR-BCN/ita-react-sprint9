import { Outlet } from "react-router-dom";
import { Footer } from "./../styles/styles";
import Header from "../components/Menu/Menu";


const Layout = () => {

    return (
        <>
            <Header/>
            <Outlet />
            <Footer>
                &copy; Web developed with React
            </Footer>
        </>
    )
};


export default Layout;