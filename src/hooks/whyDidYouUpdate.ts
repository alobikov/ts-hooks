import {useEffect, useRef} from 'react'

export function useWhyDidYouUpdate<T>(name: string, props: T) {
    const currentProps = useRef<T>({} as T)

    useEffect(() => {
        const allProps = {...currentProps.current, ...props}
        const changedProps = Object.keys(allProps).filter((key) => {
                return allProps[key as keyof T] !== currentProps.current[key as keyof T]
            }
        )
        currentProps.current = props
        console.log(`Component ${name} received updated props:`,changedProps.join(','))
    })
}