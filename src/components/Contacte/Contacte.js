import { ContactButton, ContactDiv } from "./Contacte.styled";

const Contacte = ({showContact, setShowContact, petContactName, petContactData}) => {


    function openContact() {
        setShowContact(true);
    }
    
    return (
        <>
            {!showContact && <ContactButton onClick={openContact}>Contacta amb la família!</ContactButton>}
  
            {showContact && 
            <ContactDiv>
                <p>Contacta amb: {petContactName}
                <br />A: {petContactData}</p>
            </ContactDiv>}

        
        </>
    )
}

export default Contacte;