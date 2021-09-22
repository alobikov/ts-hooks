import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDebounce} from "../hooks/useDebounce";

const Debouncer = () => {
    const [value, setValue] = useState('');
    const debouncedValue = useDebounce<string>(value, 500)

    const handleChange =(e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

   useEffect(() => {}, [debouncedValue])

    return (
        <div>
           <p>Value real-time: {value}</p>
            <p>Value debounced: {debouncedValue}</p>
            <input type="text" value={value} onChange={handleChange}/>
        </div>
    );
};

export default Debouncer;
