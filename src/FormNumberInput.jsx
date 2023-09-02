import TextField from '@mui/material/TextField';
import { useState,useContext } from 'react';
import { FormDataContext } from './context/FormDataContext';

export default function FormNumberInput(props){
    const {inputName}=props;
    
    const [number,setNumber]= useState('')
    const [err,setErr]=useState(false)

    const formDataContext=useContext(FormDataContext);

    const handleChange=(e)=>{
        setNumber(e.target.value)
    }

    const validate=()=>{
        if(number.length===0)
        return false
        const res=new RegExp("^[0-9]{10}").test(number)
        console.log("chk",res)
        setErr(!res);
    }
    

    const handleBlur=(e)=>{
       validate()
        const {formData,setFormData}=formDataContext
        setFormData({...formData,[inputName]:e.target.value})
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
            error={err}
            onChange={handleChange}
            onBlur={handleBlur}
            />
            </div>
        </div>
    )
}
