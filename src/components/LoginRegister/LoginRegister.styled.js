import styled from "styled-components";
import { HomeButton } from "./../../styles/styles";


export const LoginFormInput = styled.input`
    font-size: 1rem;
    color: var(--dark-gray);
    padding-left: 0.3rem;
    width: 100%;
    border: 1px solid var(--normal-gray);
    border-radius: 5px;
    height: 2rem;
    margin-bottom: 1rem;

        &:focus {
            outline: none;
            border-color: var(--light-teal);
        }
`;



export const LoginFormButton = styled(HomeButton)`
    margin-top: 2rem;
    align-self: center;
    width: 60%;
`;