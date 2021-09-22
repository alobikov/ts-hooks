import React, {RefObject} from 'react';
import {useHover} from "../hooks/useHover";

const HoverOver = () => {
    const ref = React.useRef(null)
    const isHover = useHover(ref)
    return (
        <div ref={ref}>
            {isHover ? 'Hovered': 'Not hovered'}
        </div>
    );
};

export default HoverOver;
