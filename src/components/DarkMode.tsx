import React from 'react';
import {useDarkMode} from "../hooks/useDarkMode";

const DarkMode = () => {
    const {toggle, enable, disable, isDarkMode} = useDarkMode()
    return (
        <div>
            <div>{isDarkMode ? 'This is Dark Mode': 'This is Light Mode'}</div>
            <button onClick={toggle}>Toggle</button>
            <button onClick={disable}>Go Light</button>
            <button onClick={enable}>Go Dark</button>

        </div>
    );
};

export default DarkMode;
