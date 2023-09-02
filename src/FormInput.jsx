import { useContext, useState } from "react";
import { FormDataContext } from "./context/FormDataContext";
import { TextField } from "@mui/material";

export default function FormInput(props){
    const {inputName}=props;

    const [name,setName]=useState('');
    const [err,setErr]=useState(false)
    const formDataContext=useContext(FormDataContext);

    const handleBlur=(e)=>{
        validate()
        const {formData,setFormData}=formDataContext
        setFormData({...formData,[inputName]:e.target.value})
    }
    const handleChange=(e)=>{
        setName(e.target.value)
    }
    const validate=()=>{
        const res=!new RegExp("[^A-Za-z]").test(name);
        setErr(!res)
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
            error={err}
            onChange={handleChange}
            onBlur={handleBlur}
            />
             </div>
            
        </div>
    )
}