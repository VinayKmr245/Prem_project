import { useContext, useState } from "react";
import { FormDataContext } from "./context/FormDataContext";
import { TextField } from "@mui/material";

export default function FormInput(props){
    const {inputName}=props;

    const [name,setName]=useState('');
    const formDataContext=useContext(FormDataContext);

    const handleBlur=(e)=>{
        formDataContext[inputName]=e.target.value;
    }
    const handleChange=(e)=>{
        setName(e.target.value)
    }
    const validate=(e)=>{
        return new RegExp("[^A-Za-z]").test(e.target.value)
    }
    return(
        <div className="p-2">
            <h1 className="text-xl font-bold">{inputName} :</h1>
             <div className="p-2">
             <TextField 
            className='w-10/12 rounded-sm'
            name={inputName}
            placeholder={inputName}
            value={name}
            error={name.length!=0 && validate}
            onChange={handleChange}
            onBlur={handleBlur}
            />
             </div>
            
        </div>
    )
}