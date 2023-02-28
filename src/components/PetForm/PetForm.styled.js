import styled from "styled-components";
import { HomeButton } from "./../../styles/styles";


export const Input = styled.input`
    font-size: 1rem;
    color: var(--dark-gray);
    padding-left: 0.3rem;
    width: 100%;
    border: 1px solid;
    border-color: var(--normal-gray);
    border-radius: 5px;
    height: 2rem;
    margin-bottom: 1.2rem;

        &:focus {
            outline: none;
            border-color: var(--light-teal);
        }
`;


export const FormButton = styled(HomeButton)`
    margin-top: 1rem;
    align-self: center;
    width: 60%;
`;


export const DeleteButton = styled(HomeButton)`
    margin-top: 1rem;
    align-self: center;
    width: 60%;
    background-color: var(--dark-gray);

        &:hover {
            background-color: var(--normal-gray);
        }
`;


export const Fieldset = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.5rem;
    flex-wrap: wrap;
    text-align: left;
`;


export const JustificatDreta = styled.div`
    align-self: flex-end;
    flex-wrap: nowrap;
`;


export const Textarea = styled.textarea`
    font-size: 1rem;
    color: var(--dark-gray);
    padding-left: 0.3rem;
    width: 100%;
    height: 5rem;
    border: 1px solid var(--normal-gray);
    border-radius: 5px;
    margin-bottom: 1rem;

        &:focus {
            outline: none;
            border-color: var(--light-teal);
        }
`;


export const Image = styled.img`
    width: 22rem;
    height: 20rem;
    object-fit: cover;
    border-radius: 15px;
    border: 1px solid var(--dark-teal);    

`;