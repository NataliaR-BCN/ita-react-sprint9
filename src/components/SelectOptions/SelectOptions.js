import { Label } from "./../../styles/styles";
import { Select, SelectLayout } from "./Select.Options.styled"

const SelectOptions = ({options, label, value, handleChange}) => {

    return (
        <SelectLayout>
            <Label>{label}</Label>
            <Select value={value} onChange={handleChange} >
            {options.map((option, index) => {
                return <option value={option.value} key={index}>{option.label}</option>
            })}        
            </Select>
        </SelectLayout>
    )
};


export default SelectOptions;
