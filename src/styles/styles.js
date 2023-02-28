import styled from "styled-components";


export const Container = styled.main`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    text-align: center;

        @media (max-width: 600px) {
            padding: 0.5rem;
            justify-content: center;
        }

`;

export const BasicContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
`;


export const HomeLayout = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    align-items: center;
    gap: 3rem;
    padding: 2rem;

        @media (max-width: 1200px) {
            width: 100%;
        }

        @media (max-width: 768px) {
            padding: 1rem;
            gap: 1rem;
        }

        @media (max-width: 600px) {
            grid-template-rows: 1fr 1fr;
        }

`;


export const BasicLayout = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
`;


export const CenteredLayout = styled.div`
    width: 100%;
    display: flex;
    text-align: center;
    flex-direction: column;

`;


const basicDivObject = {
    display: 'flex',
    'justify-content': 'space-between',
    'align-items': 'center'
};


const divWithMoreObj = {
    ...basicDivObject,
    padding: '2.5rem',
    'text-align': 'center'
};

export const DivWithMore = styled.div(divWithMoreObj);


export const BasicInput = styled.input`
    font-size: 1rem;
    color: var(--dark-gray);
    padding-left: 0.3rem;
    width: 100%;
    border: 1px solid;
    border-color: var(--normal-gray);
    border-radius: 5px;
    height: 2rem;
    margin:  0.5rem 0 1rem 0;

        &:focus {
            outline: none;
            border-color: var(--light-teal);
        }
`;

export const BasicButton = styled.button`    
    background-color: var(--normal-teal);
    color: #FEFEFE;
    font-size: 1rem;
    font-weight: 500; 
    margin: 0.5rem 0 1rem 0.5rem;
    padding: 0.3rem 0;
    width: 50%;
    border: none;
    border-radius: 8px;
    cursor: pointer;
                              
        &:hover {
            background-color: var(--light-teal);
        }

`;

const CardLayoutObj = {
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'center',
    'align-items': 'center',
    margin: '1rem',
    padding: '1.5rem',
    'border-radius': '15px',
    'text-align': 'center'
    
};


const HomeCardObj = {
    ...CardLayoutObj,
    'min-width': '10rem',
    'min-height': '22rem',
    margin: '0.2rem',
    padding: '1rem',
    height: '100%',
    'box-shadow': '1px 1px 5px rgba(254, 254, 254, 0.4), -1px -1px 10px var(--trans-teal), 1px 1px 15px rgba(170, 170, 170, 0.4)'
};


export const HomeCard = styled.div(HomeCardObj);

const FormCardObj = {
    ...CardLayoutObj,
    padding: '2rem 4rem',
    'align-items': 'flex-start',
    'min-width': '18rem',
    'min-height': '22rem',
    'box-shadow': '1px 1px 15px rgba(254, 254, 254, 0.4), 1px 1px 10px rgba(170, 170, 170, 0.4)',
    gap: '5px',

};

export const FormCard = styled.form(FormCardObj);


const LogFormCardObj = {
    ...FormCardObj,
    padding: '2rem 4rem',
    'align-items': 'flex-start',
    'min-width': '22rem',
    'max-width': '26rem',
    'box-shadow': '1px 1px 15px rgba(254, 254, 254, 0.4), 1px 1px 10px rgba(170, 170, 170, 0.4)',
    gap: '5px',
    'margin-top' : '4rem'
};


export const LogFormCard = styled.form(LogFormCardObj);


export const Titol = styled.h2`
    font-size: 2.2rem;
    color: var(--normal-teal);
    margin-bottom: 1rem;

`;

export const Subtitol = styled.h2`
    font-size: 1.7rem;
    padding: 0rem;
    color: var(--light-teal);

`;

export const TxtDestacat = styled.h4`
    font-size: 1.5rem;
    line-height: 1.2em;;
    color: var(--normal-teal);
    margin: 0.5rem 0;
`;


export const DivTxtPresentacio = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 18rem;

`;


export const Label = styled.label`
    margin: 0.2rem 0 0.0rem 0.1rem;
    text-align: left;
    line-height: 1rem;;

`;

export const UnitDiv = styled.div`
    display: flex;

        @media (max-width: 900px) {
            flex-direction: column;
        }
        
        @media (max-width: 600px) {
            flex-direction: row;
        }
    
`;


export const ContainDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem;

`;

export const NavigationButton = styled.button`
    align-self: flex-end;
    background-color: var(--light-gray);
    color: #FEFEFE;
    font-size: 1rem;
    font-weight: 500; 
    margin: 0 1rem 0 0;
    padding: 0.8rem;
    width: 12rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
                              
        &:hover {
            background-color: var(--normal-gray);
        }
`;


export const TxtAddicional = styled.span`
    align-self: flex-end;
    font-size: 0.8rem;
    color: ${({colorMessage}) => colorMessage ? 'tomato' : 'var(--normal-gray)'};
    padding-bottom: 0.25rem;
`;


export const TxtAddicionalInline = styled.span`
    align-self: flex-end;
    font-size: 0.8rem;
    color: ${({colorMessage}) => colorMessage ? 'tomato' : 'var(--normal-gray)'};
    padding-bottom: 0.25rem;
`;


export const FilaJustificada = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;

        @media (max-width: 600px) {
                flex-direction: column;
                gap: 0.1rem;
        }
`;


export const FilaCentrada = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
        
        @media (max-width: 600px) {
                flex-direction: column;
                gap: 0.1rem;
        }
`;


export const HomeButton = styled.button`    
    background-color: var(--normal-teal);
    color: #FEFEFE;
    font-size: 1.1rem;
    font-weight: 500; 
    margin: 1.5rem 0;
    padding: 0.8rem;
    width: 100%;
    border: none;
    border-radius: 8px;
    cursor: pointer;
                                                                                     
        &:hover {
            background-color: var(--light-teal);
        }

`;


export const CardsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
    grid-column-gap: 1.5rem;
    grid-row-gap: 2.2rem;

`;


export const Feedback = styled.div`
    color: var(--dark-gray);
    background-color: var(--trans-teal);
    font-weight: 500;
    margin: 0.5rem auto 0 auto;
    text-align: center;
    padding: 0.4rem 0.8rem;
    border-radius: 15px;
    
`;


export const FeedbackCard = styled.div`
    width: 100%;
    background-color: var(--light-trans-teal);
    font-size: 1rem;
    font-weight: 400;
    color: var(--dark-gray);
    margin: auto;
    align-self: center;
    text-align: center;
    padding: 1rem 1.5rem;
    border-radius: 15px;
    box-shadow: 1px 1px 15px rgba(254, 254, 254, 0.4), 1px 1px 10px rgba(170, 170, 170, 0.4);
`;


export const ConfirmButton = styled.button`    
    background-color: var(--normal-teal);
    color: #FEFEFE;
    font-size: 1rem;
    font-weight: 500; 
    margin: 1rem 0;
    padding: 0.8rem;
    width: 100%;
    border: none;
    border-radius: 8px;
    cursor: pointer;
                              
        &:hover {
            background-color: var(--light-teal);
        }

`;


export const RejectButton = styled.button`    
    background-color: var(--normal-gray);
    color: #FEFEFE;
    font-size: 1rem;
    font-weight: 500; 
    margin: 1rem 0;
    padding: 0.8rem;
    width: 100%;
    border: none;
    border-radius: 8px;
    cursor: pointer;
                              
        &:hover {
            background-color: var(--dark-teal);
        }

`;


export const Footer = styled.footer`
    color: var(--dark-teal);
    padding: 0 3rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 5rem;
       
        @media (max-width: 600px) {
            padding: 0 0.2rem;
        }

`;

