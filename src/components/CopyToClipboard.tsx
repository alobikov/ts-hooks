import React from 'react';
import {useCopyToClipboard} from '../hooks/useCopyToClipboard'

const CopyToClipboard: React.FC = () => {
    const [value, copy] = useCopyToClipboard()
    return (
        <>
            <div>
                <button onClick={() => copy("A")}>A</button>
                <button onClick={() => copy("B")}>B</button>
            </div>
            <span>Copied value: {value ? value : 'nothin copied yet'}</span>
        </>
    );
};

export default CopyToClipboard
