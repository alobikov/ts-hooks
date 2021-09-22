import React, {CSSProperties} from 'react';
import {useWhyDidYouUpdate} from "../hooks/whyDidYouUpdate";

type CounterProps = { style: CSSProperties, count: number }

const Count :React.FC<CounterProps> = (props) => {
    useWhyDidYouUpdate<CounterProps>('Count', props)
    return <div style={props.style}>{props.count}</div>
}

const Counter = React.memo(Count)

// Our console output tells use that the style prop for <Counter> ...
// ... changes on every render, even when we only change userId state by ...
// ... clicking the "switch user" button. Oh of course! That's because the
// ... counterStyle object is being re-created on every render.
// Thanks to our hook we figured this out and realized we should probably ...
// ... move this object outside of the component body.
const counterStyle = {
    fontSize: "3rem",
    color: "red",
};

function WhyUpdated() {
    const [count, setCount] = React.useState(0);
    const [userId, setUserId] = React.useState(0);

    return (
        <div>
            <div className="counter"
            style={{textAlign: "center", paddingBottom: '4px'}}>
                <Counter count={count} style={counterStyle}/>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
            <div className="user" style={{textAlign: "center"}}>
                <img src={`http://i.pravatar.cc/80?img=${userId}`}/>
                <br/>
                <button onClick={() => setUserId(userId + 1)}>Switch User
                </button>
            </div>
        </div>
    );
};

export default WhyUpdated;
