import styled from "styled-components";


export const PetBoardFileCard = styled.div`
    width: 100%;
    display: flex;
    margin: 1rem;

`;


export const PetFile = styled.div`
    width: 100%;
    color: var(--normal-gray);
    font-size: 1.1rem;
    font-weight: 400;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin: 0.3rem 0.2rem;
    padding: 1rem;
    border-radius: 15px;
    box-shadow: 1px 1px 3px var(--trans-teal), 
                -1px -1px 3px var(--trans-teal),
                10px 10px 60px rgba(254, 254, 254, 0.4),
                1px 1px 6px rgba(170, 170, 170, 0.4);
          
`;

export const PetAvatar = styled.img`
    width: 10rem;
    height: 10rem;
    object-fit: cover;
    border-radius: 15px;
    border: 1px solid var(--dark-teal);    

`;

export const DashboardButton = styled.button`
    
    background-color: var(--normal-teal);
    color: #FEFEFE;
    font-size: 1.1rem;
    font-weight: 500; 
    margin: 0.5rem 0;
    padding: 0.8rem;
    width: 100%;
    border: none;
    border-radius: 8px;
    cursor: pointer;
                                                                           
        &:hover {
            background-color: var(--light-teal);
        }

        &:active {
            background-color: var(--dark-teal);
        } 

`;

export const DeleteButton = styled.button`
    
    background-color: var(--normal-gray);
    color: #FEFEFE;
    font-size: 1.1rem;
    font-weight: 500; 
    margin: 0.5rem 0;
    padding: 0.8rem;
    width: 100%;
    border: none;
    border-radius: 8px;
    cursor: pointer;
                                                                           
        &:hover {
            background-color: var(--dark-gray);
        }

        &:active {
            background-color: var(--dark-gray);
        } 

`;

