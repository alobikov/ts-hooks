import React, {createFactory, Dispatch, SetStateAction} from 'react'

interface ReturnType {
    value: boolean;
    setValue: Dispatch<SetStateAction<boolean>>
    setTrue: () => void;
    setFalse: () => void;
    toggle: () => void;
}

function useBoolean(defaultValue?: boolean): ReturnType {
    const [value, setValue] = React.useState(!!defaultValue)

    const setTrue = () => setValue(true)
    const setFalse = () => setValue(false)
    const toggle = () => setValue(value => !value)

   return {value, setValue, setTrue, setFalse, toggle}
}