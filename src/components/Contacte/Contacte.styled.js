import styled from "styled-components";
import { HomeButton } from "./../../styles/styles";

export const ContactButton = styled(HomeButton)`
    margin: 1rem 0 0 0;
    align-self: center;
    width: 100%;
`;

export const ContactDiv = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--normal-teal);
    border-radius: 15px;
    padding: 0.5rem 1rem;
    color: var(--dark-gray);
    font-size: 1.2rem;
    font-weight: 500;
    background-color: var(--trans-teal);
    text-align: left;
    margin: 0.5rem 0;
`;


