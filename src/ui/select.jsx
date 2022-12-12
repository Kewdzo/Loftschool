import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';


/*const CustomSelect = (props) => {
    const { list, select, lable } = props;

    const [labels, setLabels] = useState([]);
    const [activeData, setActiveData] = useState('');


    useEffect(() => { setLabels(list); }, [list])

    function clickItem(event) {
        setActiveData(event.target.value);
        props.onChange(event.target.value);
    } 




    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{lable}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                isSearchable={true}
                id={select}
                value={activeData}
                label={lable}
                onChange={(event) => clickItem(event)}
            >
                {labels.map((element, i) => (
                    <MenuItem
                        value={element}
                        key={i}
                    >
                        {element}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default CustomSelect;*/

export default function CustomSelect(props) {
    const { list, select, lable } = props;

    const [labels, setLabels] = useState([]);
    const [activeData, setActiveData] = useState('');


    useEffect(() => { setLabels(list); }, [list])

    function clickItem(event) {
        setActiveData(event.target.textContent);
        props.onChange(event.target.textContent);
    } 
    return (
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={labels}
        onChange={(event) => clickItem(event)}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={lable} />}
      />
    );
  }