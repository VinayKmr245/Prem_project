import TextField from '@mui/material/TextField';
import { useState } from 'react';


export default function FormNumberInput(props){
    const {inputName}=props;
    
    const [number,setNumber]= useState('')

    const handleChange=(e)=>{
        setNumber(e.target.value)
    }

    const validate=(e)=>{
        return new RegExp("[0-9]").test(e.target.value)&& e.target.value.length!=0 && e.target.value.length!=10 
    }
    
    return (
        <div className='p-2'>
            <h1 className="text-xl font-bold">{inputName} :</h1>
            <div className="m-2 ">
            <TextField 
            className='w-10/12 rounded-sm'
            name={inputName}
            placeholder={inputName}
            value={number}
            helperText="Enter 10 Digit Mobile Number"
            error={validate}
            onChange={handleChange}
            />
            </div>
        </div>
    )
}
