import styled from "styled-components";


export const ColorContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: ${({pageShown}) => pageShown === 'Filtres' ? 'flex-start' : 'space-between'};
    flex-wrap: wrap;
    row-gap: ${({pageShown}) => pageShown === 'Filtres' ? '0.2rem' : '0.2rem'};
    column-gap: ${({pageShown}) => pageShown === 'Filtres' ? '0.8rem' : '0.2rem'};
    margin-bottom: 0.5rem;

        @media (max-width: 600px) {
            justify-content: flex-start;
        }

`;


export const ColorButton = styled.button`
    cursor: pointer;
    background-color: ${({colorCode}) => colorCode};
    border: 1px solid black;
    border-color: ${({colorCode}) => colorCode === '#FFF' ? '#000' : 'transparent'};
    border-radius: 50px;
    width: 1.5rem;
    height: 1.5rem;
    margin: 0.5rem 0 0.3rem 0;
    box-shadow: ${({isActive}) => isActive ? '0 0 4px 3px var(--normal-teal)' : 'none'};

    &:hover {
        opacity: 0.9;
    }

`;