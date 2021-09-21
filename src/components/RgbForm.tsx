import React from 'react';

const styles = {
    rgbDisplay: {
        width: '300px',
        height: '300px',
        margin: '0 auto'
    },
}

const initialColors = {
    red: 0,
    green: 0,
    blue: 0
}

type Color = keyof typeof initialColors;

const RgbForm: React.FC = () => {
    const [colors, setColors] = React.useState(initialColors)

    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const key = e.target.id as Color
        const value = +e.target.value
        setColors({...colors, [key]: value})
    }

    const boxDisplay = {
        ...styles.rgbDisplay,
        background: `rgb(${colors.red},${colors.green},${colors.blue})`
    }

    return (
        <div>
            <h1 style={{
                textAlign: 'center',
            }}>
                Pick the color
            </h1>
            <div style={boxDisplay}></div>
            <section >
                {
                    (Object.keys(initialColors) as Color[]).map((colorKey)=> (
                        <div key={colorKey} style={{ textAlign: 'center'}}>
                            <label style={{textAlign: 'center'}} htmlFor={colorKey}>
                                {colorKey[0].toUpperCase()+colorKey.slice(1)}: {colors[colorKey]}
                            </label>
                            <br/>
                            <input onChange={handleColorChange} type="range"
                                   id={colorKey}
                                   max="255"
                                   value={colors[colorKey]}/>
                        </div>
                    ))
                }

            </section>
        </div>
    );
};

export default RgbForm
