import React from 'react';

interface InputFromProps {
    onChange(title: string): void
}

export const InputForm: React.FC<InputFromProps> = ({onChange}) => {
    const [title, setTitle] = React.useState('')

    const handleInput: React.ChangeEventHandler<HTMLInputElement> =
        (e) => {
            setTitle(e.currentTarget.value)
        }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> =
        (e) => {
            e.preventDefault()
            onChange(title)
            setTitle('')
        }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={handleInput}/>
            <button type="submit">{"Add Todo"}</button>
        </form>
    );
};

