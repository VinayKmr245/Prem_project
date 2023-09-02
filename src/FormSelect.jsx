import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useState,useContext } from 'react';
import { FormDataContext } from './context/FormDataContext';

export default function FormSelect(props){
    
    const [name,setName]=useState('');
    const formDataContext=useContext(FormDataContext);

    const handleBlur=(e)=>{
        const {formData,setFormData}=formDataContext
        setFormData({...formData,[inputName]:e.target.value})
    }
    const handleChange=(e)=>{
        setName(e.target.value)
    }

    const {inputName,values}=props
    return (
        <div className="m-2 p-2">
             <h1 className="my-2 text-xl font-bold">{inputName} :</h1>
        <TextField
        name={inputName}
        className=" text-gray-400 border-2 w-10/12 rounded-sm"
        onChange={handleChange}
        onBlur={handleBlur}
        select
        >
          {values.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        </div>
    )
}