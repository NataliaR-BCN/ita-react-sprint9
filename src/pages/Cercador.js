import { useEffect, useState } from "react";
import { readAllLostPetsInDatabase } from "./../services/pets";
import { Container, Titol, CardsContainer } from "../styles/styles";
import FiltresCerca from "../components/FiltresCerca/FiltresCerca";
import PetCard from "./../components/PetCard/PetCard";


const Cercador = ( ) => {

    const [allLostPets, setAllLostPets] = useState([]);
    const [petList, setPetList] = useState([]);

    const [cercadorText, setCercadorText] = useState("");
    const [petSex, setPetSex] = useState("dos");
    const [petAge, setPetAge] = useState("");
    const [petWeight, setPetWeight] = useState("");
    const [petLostArea, setPetLostArea] = useState("");
    const [colorSelected, setColorSelected] = useState([]);
    const [colorMessage, setColorMessage] = useState(false);
    const [colorClothesSelected, setColorClothesSelected] = useState([]);
    const [colorClothesMessage, setColorClothesMessage] = useState(false);

    const [petListOrder, setPetListOrder] = useState("dataRecent");

    //Get data from Firebase and send it to be sorted before render:  
    useEffect(() => {

        async function getAllPetsToShow() {
            try {
                const arrayAllLostPets = await readAllLostPetsInDatabase();
                setAllLostPets(arrayAllLostPets);
                sortByListOrder(arrayAllLostPets)
            } catch (error) {
                console.log(error.message);
            }
        } 
        getAllPetsToShow();

    }, []);


    //Filters
    useEffect(() => {

        if (cercadorText !== "" || petSex !== "dos" || petAge !== "" || petWeight !== "" || petLostArea !== "" || colorSelected.length > 0 || (colorClothesSelected && colorClothesSelected.length > 0)) {
            let result = allLostPets.filter(pet => {
                if (cercadorText !== "" && (!pet.petName.toLowerCase().includes(cercadorText) && !pet.petAge.toLowerCase().includes(cercadorText) && !pet.petBreed.toLowerCase().includes(cercadorText) && !pet.petLostDescription.toLowerCase().includes(cercadorText) ) ) { return false }
                    pet.petBreed.includes(cercadorText)
                if (petSex !== "dos" && pet.petSex !== petSex) { return false }
                if (petAge !== "" && pet.petAge !== petAge) { return false }
                if (petWeight !== "" && pet.petWeight !== petWeight) { return false }
                if (petLostArea !== "" && pet.petLostArea !== petLostArea) { return false } 
                
                return true
        
            })

            if ( colorSelected.length > 0 ) {
                result = filterColor(result, colorSelected, 'petColor') 
            }

            if (colorClothesSelected && colorClothesSelected.length > 0 ) {
                result = filterColor(result, colorClothesSelected, 'clothesColor')         
            }
            
            setPetList(result);
        
        } else {
        
            setPetList(allLostPets);
        
        }
    }, [cercadorText, petSex, petAge, petWeight, petLostArea, colorSelected, colorClothesSelected]);


    function filterColor(result, colorTypeSelected, colorTypeArray) {

        const resultFiltered =  result.filter(pet => {
            return colorTypeSelected.every(filterColor => {
                return pet[colorTypeArray].some(colorInPetArray => {
                    return colorInPetArray.colorName === filterColor.colorName});
            });
        }) 

        return resultFiltered;
    }

    function resetFilters() {
        setPetSex("dos");
        setCercadorText("");
        setPetAge("");
        setPetWeight("");
        setPetLostArea(""); 
        setColorSelected([]);
        setColorMessage(false);
        setColorClothesSelected([]);
        setColorClothesMessage(false);
        setPetListOrder("dataRecent"); 
        setPetList(allLostPets);
    }

    //Sort data before render (order buttons): 
    function sortByListOrder(sortedPetList, orderValue) {

        if (orderValue === "alfabetic") {
            sortedPetList.sort((a, b) => a.petName.toLowerCase() > b.petName.toLowerCase() ? 1 : -1 ) 
        
        } else if (orderValue === "dataAntiga") {
            sortedPetList.sort((a,b) => {
                const anyDataA = a.petLostDate.slice(6)
                const anyDataB = b.petLostDate.slice(6)
                const mesDataA = a.petLostDate.slice(3, 5)
                const mesDataB = b.petLostDate.slice(3, 5)
                const diaDataA = a.petLostDate.slice(0, 2)
                const diaDataB = b.petLostDate.slice(0, 2)

                if (anyDataB !== anyDataA) {
                return anyDataA - anyDataB
                } else if (mesDataB !== mesDataA) {
                return mesDataA - mesDataB 
                } else { 
                return diaDataA - diaDataB
                }
            })
        } else {
            sortedPetList.sort((a,b) => {
                const anyDataA = a.petLostDate.slice(6)
                const anyDataB = b.petLostDate.slice(6)
                const mesDataA = a.petLostDate.slice(3, 5)
                const mesDataB = b.petLostDate.slice(3, 5)
                const diaDataA = a.petLostDate.slice(0, 2)
                const diaDataB = b.petLostDate.slice(0, 2)

                if (anyDataB !== anyDataA) {
                    return anyDataB - anyDataA
                } else if (mesDataB !== mesDataA) {
                    return mesDataB - mesDataA 
                } else { 
                    return diaDataB - diaDataA
                }
            })
        }

            setPetList(sortedPetList);
    }

    //User events:
    function handlePetSex(event) {
        setPetSex(event.target.value);
    }
    
    function handlePetAge(event) {
        setPetAge(event.target.value);
    }

    function handlePetWeight(event) {
        setPetWeight(event.target.value);
    }
    
    function handlePetLostArea(event) {
        setPetLostArea(event.target.value);
    } 

    function handleCercadorText(event) {
        const textLowerCase = event.target.value.toLowerCase();
        setCercadorText(textLowerCase);
    }

    function handlePetListOrder(value) {
        setPetListOrder(value);
        sortByListOrder(petList, value)
    }


    return (    
        <Container>
            <Titol>Cercador</Titol>
            <h2>Has trobat un animal perdut? <br />Comprova si hi ha cap anunci de la seva desaparició.</h2>

            <FiltresCerca cercadorText={cercadorText} handleCercadorText={handleCercadorText} petSex={petSex} handlePetSex={handlePetSex} petAge={petAge} handlePetAge={handlePetAge} petWeight={petWeight} handlePetWeight={handlePetWeight} petLostArea={petLostArea} handlePetLostArea={handlePetLostArea} colorSelected={colorSelected} setColorSelected={setColorSelected} colorMessage={colorMessage} setColorMessage={setColorMessage} colorClothesSelected={colorClothesSelected} setColorClothesSelected={setColorClothesSelected} resetFilters={resetFilters} colorClothesMessage={colorClothesMessage} setColorClothesMessage={setColorClothesMessage} petListOrder={petListOrder} handlePetListOrder={handlePetListOrder} />

            <CardsContainer>

                {petList && petList.length > 0 ? 
                    petList.map(pet =>                                     
                    <PetCard petData={pet} key={pet.userOwnerId+pet.petName}> </PetCard>) 
                    : <>No hi ha cap resultat que concordi amb els criteris de cerca introduïts, si us plau reviseu els filtres seleccionats.</>
                }
            
            </CardsContainer>
        </Container>
    )
};


export default Cercador;