import React, {CSSProperties} from 'react';
import {useImageOnLoad} from "../hooks/useImageOnLoad";

const LoadImage: React.FC = () => {
    const {handleImageOnLoad, css} = useImageOnLoad()

    const style: { [key: string]: CSSProperties } = {
        wrap: {
            position: "relative",
            width: 600,
            height: 600
        },
        image: {
            position: "absolute",
            width: '100%',
            height: '100%'
        }
    }
    return (
        <div style={style.wrap}>
            <img
                src="https://via.placeholder.com/150"
                alt="thumbnail"
                style={{...style.image, ...css.thumbnail}}
            />
            <img
                onLoad={handleImageOnLoad}
                src="https://via.placeholder.com/600"
                alt="fullImage"
                style={{...style.image, ...css.fullImage}}
            />
        </div>
    );
};

export default LoadImage
