import React, {CSSProperties} from 'react'

export function useImageOnLoad() {
    const [isLoaded, setIsLoaded] = React.useState(false)
    const handleImageOnLoad = () => {
        setIsLoaded(true)
    }

    const css: { [key: string]: CSSProperties } = {
        thumbnail: {
            visibility: isLoaded ? 'hidden':'visible',
            filter: 'blur(8px)',
            // transition: 'visibility 0ms ease-out 500ms'
        },
        fullImage: {
            opacity: isLoaded ? 1 : 0,
            // transition: 'opacity 500ms easy-in 0ms'
        }
    }

    return {handleImageOnLoad, css}
}