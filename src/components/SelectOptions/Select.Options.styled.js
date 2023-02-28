import styled from "styled-components";


export const SelectLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    width: 100%;
`;


export const Select = styled.select`
   font-size: 1rem;
    color: var(--dark-gray);
    padding-left: 0.3rem;
    width: 100%;
    border: 1px solid var(--normal-gray);
    border-radius: 5px;
    height: 2.2rem;
    margin: 0.2rem 0 1rem 0;

    &:focus {
            outline: none;
            border-color: var(--light-teal);
        }

`;