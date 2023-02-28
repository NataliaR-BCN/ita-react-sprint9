import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const Header = styled.header`
    width: 100%;
    display: flex;
    padding: 1rem 0;
    align-items: center;
    border-bottom: 1px solid var(--normal-teal);
    box-shadow: 0 1px 5px rgba(254, 254, 254, 0.4), 0px 1px 10px rgba(170, 170, 170, 0.4);
    background-color: white;
 
`;


export const Nav = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 3rem;
    gap: 1rem;

        @media (max-width: 879px) {
            padding: 0.5rem 1rem;
            gap: 0.5rem;
        }
    
        @media (max-width: 600px) {
            padding: 0rem 0.2rem 0 0.5rem;
            flex-direction: column;
            gap: 0.2rem;
            align-items: flex-start;
        }

`;


export const MenuLink = styled(NavLink)`
    color: var(--normal-teal);
    font-size: 1rem;
    font-weight: 700;
    line-height: 1rem;
`;


export const Logo = styled.span`
    color: var(--normal-teal);
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.5rem;

       @media (max-width: 600px) {
            line-height: 2.5rem;
        }

`;


export const MainSections = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
        
        @media (max-width: 768px) {
            flex-direction: column;
            gap: 0.5rem;
        }

        @media (max-width: 600px) {
            flex-direction: row;
            gap: 0.5rem;
        }

        @media (max-width: 301px) {
            gap: 0.3rem;
        }
`;


export const MainSectionsSeparator = styled.div`
    color: var(--normal-teal);
    font-size: 1.2rem;
    font-weight: 700;
        
        @media (max-width: 768px) {
           display: none;
        }

        @media (max-width: 600px) {
            display: block;
        }
`;


export const UserArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    
        @media (max-width: 879px) {
            flex-direction: column;
        }

        @media (max-width: 600px) {
            flex-direction: row;
        }
`;


export const UserAreaSeparator = styled.div`
    color: var(--normal-teal);
    font-size: 1.2rem;
    font-weight: 700;
        
        @media (max-width: 879px) {
            display: none;
        }

        @media (max-width: 600px) {
            display: block;
        }
`;