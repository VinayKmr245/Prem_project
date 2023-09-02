import { createContext, useState } from "react";

export const FormDataContext = createContext();

export function FormDataProvider(props){
    const [formData,setFormData]=useState({
        "Name":"",
        "Employee Code":"",
        "Phone Number":"",
        "Alternative Number":"",
        "Flat No":"",
        "Address":"",
        "Area":"",
        "Location Pin":"",
        "Property Type":""
    })
    return(
        <FormDataContext.Provider value={{formData ,setFormData}}>
            {props.children}
        </FormDataContext.Provider>
    )
}