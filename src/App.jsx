import  FormInput  from "./FormInput"
import FormSelect from './FormSelect'
import FormNumberInput  from "./FormNumberInput"
import { LOCATIONS,PROPERTY_TYPE } from "./index"
import { useContext } from "react"
import { FormDataContext } from "./context/FormDataContext"

function App() {

  const handleSubmit=()=>{
    console.log("Submitted")
  }

  const formData=useContext(FormDataContext);
  console.log("formdata",formData);
  return (
    <>
      <div className="drop-shadow-lg flex 
      flex-col p-12 items-center justify-center 
      ">
        <h1 className="text-3xl font-bold align-center py-6">Field Property Information</h1>
        <div className="bg-white w-1/2 p-2 rounded-lg">
          <form method="post" onSubmit={handleSubmit}>
          <FormNumberInput inputName={"Phone Number"}/>
          <FormInput inputName={"Name"}/>
          <FormInput inputName={"Employee Code"}/>
          <FormInput inputName={"Flat No"}/>
          <FormInput inputName={"Address"}/>
          <FormSelect inputName={"Area"} values={LOCATIONS}/>
          <FormNumberInput inputName={"Alternative Number"}/>
          <FormInput inputName={"Location Pin"}/>
          <FormSelect inputName={"Property Type"} values={PROPERTY_TYPE}/>
          <button className="bg-green-600 text-white rounded-md m-4 p-2">Submit</button>
          </form>
        </div>
      </div>
    </>
        )
}

export default App
