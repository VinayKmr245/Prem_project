import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

export default function FormSelect(props){
    const {inputName,values}=props
    return (
        <div className="m-2 p-2">
             <h1 className="my-2 text-xl font-bold">{inputName} :</h1>
        <TextField
        name={inputName}
        className=" text-gray-400 border-2 w-10/12 rounded-sm"
          id="outlined-select-currency"
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