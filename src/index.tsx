import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodosReducer from "./components/TodosReducer";
import RgbForm from "./components/RgbForm";
import Posts from "./components/Posts";
import CopyToClipboard from "./components/CopyToClipboard";
import HoverOver from "./components/HoverOver";
import WhyUpdated from "./components/WhyUpdated";
import LoadImage from "./components/LoadImage";
import Debouncer from "./components/Debounce";

ReactDOM.render(
    <Debouncer/>,
    document.getElementById('root')
);

