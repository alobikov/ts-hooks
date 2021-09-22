import {useState, useEffect, RefObject} from 'react'

function useHover<T extends HTMLElement>(elementRef: RefObject<T>): boolean {
    const [isHover, setIsHover] = useState(false)

    const handleMouseEnter = () => {
        setIsHover(true)
    }
    const handleMouseLeave = () => {
        setIsHover(false)
    }
    useEffect(() => {
        const node = elementRef?.current
        if (node) {
            node.addEventListener('mouseenter', handleMouseEnter)
            node.addEventListener('mouseleave', handleMouseLeave)
            return () => {
                node.removeEventListener('mouseenter', handleMouseEnter)
                node.removeEventListener('mouseenter', handleMouseEnter)
            }
        }

    }, [elementRef])

    return isHover
}

export {useHover}