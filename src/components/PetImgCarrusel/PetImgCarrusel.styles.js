import styled from "styled-components";


export const CarruselContainer = styled.div`
    position: relative;
    display: inline-flex;
    justify-content: center;
    max-width: ${({pageShown}) => pageShown === 'Detail' ? '34rem' : '20rem'}; 
    max-height: ${({pageShown}) => pageShown === 'Detail' ? '34rem' : '18rem'}; 
    padding: 1.2rem;

      @media (max-width: 600px) {
        max-width: ${({pageShown}) => pageShown === 'Detail' ? '20rem' : '18rem'}; 
        max-height: ${({pageShown}) => pageShown === 'Detail' ? '20rem' : '16rem'}; 
      }
    
`;

export const DivImage = styled.div`
    display: flex;
    border-radius: 15px;
    box-shadow: 1px 1px 3px var(--trans-teal), 
                  -1px -1px 3px var(--trans-teal);
    overflow: hidden;
    height: auto;
    align-content: center;
    justify-content: center;
    background-color: var(--trans-teal);

`;


export const Image = styled.img`
    display: inline-block;
    width: auto;
    max-width: ${({pageShown}) => pageShown === 'Detail' ? '34rem' : '20rem'}; 
    height: 100%;
    object-fit: cover;
    border-radius: 15px;

`;


export const ArrowsContainer = styled.div`
    position: absolute;
    width: 100%;
    top: 40%;
    display: flex;
    justify-content: space-between;

`;


export const ArrowLeft = styled.div`
    width: 0; 
    height: 0;
    border-top: ${({pageShown}) => pageShown === 'Detail' ? '60px' : '40px'}  solid transparent;
    border-bottom: ${({pageShown}) => pageShown === 'Detail' ? '60px' : '40px'} solid transparent;
    border-right: ${({pageShown}) => pageShown === 'Detail' ? '35px' : '30px'}  solid var(--normal-trans-teal);
    cursor: pointer;

        :hover {
            border-right: ${({pageShown}) => pageShown === 'Detail' ? '35px' : '30px'} solid var(--light-teal);
        }

`;


export const ArrowRight = styled.div`
    width: 0; 
    height: 0; 
    border-top: ${({pageShown}) => pageShown === 'Detail' ? '60px' : '40px'}  solid transparent;
    border-bottom: ${({pageShown}) => pageShown === 'Detail' ? '60px' : '40px'}  solid transparent;
    border-left: ${({pageShown}) => pageShown === 'Detail' ? '35px' : '30px'} solid var(--normal-trans-teal);
    cursor: pointer;
    
        :hover {
            border-left: ${({pageShown}) => pageShown === 'Detail' ? '35px' : '30px'} solid var(--light-teal);
        }

`;

