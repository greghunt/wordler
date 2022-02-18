import classNames from 'classnames/bind';
import { useRef, useEffect, useState } from 'react';

export default function Letter({ index, setFocused, focused, result, active }) {
    const inputEl = useRef(null);

    useEffect(() => {
        if (focused) {
            inputEl.current.focus();
            setTimeout(() => inputEl.current.click(), 100)
        }

    })

    const [letter, setLetter] = useState('')

    const letterInput = ({ key }) => {
        if (['Tab', 'ArrowLeft', 'Backspace'].includes(key))
            setFocused(() => index - 1)

        if (!key.match(/^[A-Za-z]$/)) return;
        const letter = key.toUpperCase()
        setLetter(letter.toUpperCase())
        setFocused(() => index + 1)
    }

    return (
        <input
            ref={inputEl}
            type="text"
            maxLength={1}
            className={classNames("w-12 h-12 border-2 border-slate-600 inline-flex text-slate-200 items-center justify-center text-center bg-transparent outline-none", {
                'border-red-500': focused,
                'bg-green-600': 1 === result,
                'bg-yellow-600': 0 === result,
                'bg-slate-400': -1 === result,
            })}
            value={letter}
            disabled={!active}
            onKeyDown={(e) => letterInput(e)}
            readOnly
        />
    )
}
