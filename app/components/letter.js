import classNames from 'classnames/bind';
import { useRef, useEffect } from 'react';

export default function Letter({ x, y, letter, focused, setLetter }) {
    const inputEl = useRef(null);

    useEffect(() => {
        if (focused) inputEl.current.focus();
    })

    return (
        <input
            ref={inputEl}
            type="text"
            maxLength={1}
            className={classNames("w-12 h-12 border-2 border-slate-600 inline-flex text-slate-200 items-center justify-center text-center bg-transparent", { 'bg-red-500': focused })}
            onChange={(e) => setLetter(e.target.value, x, y)}
            value={letter}
        // onFocus={(e) => handleFocus(e)}
        // onKeyDown={(e) => handleKeyDown(e)}
        />
    )
}
    // const handleFocus = (event) => {
    //     // event.target.setSelectionRange(0, -1)
    // }

    // const handleKeyDown = ({ target, key }) => {
    //     if (key === 'Backspace') {
    //         if (target.value === '' && target.previousElementSibling !== null) {
    //             target.previousElementSibling.value = ''
    //             this.focusPrevChar(target)
    //         } else {
    //             target.value = ''
    //         }
    //         this.setModuleOutput(target)
    //     } else if (key === 'ArrowLeft') {
    //         this.focusPrevChar(target)
    //     } else if (key === 'ArrowRight' || key === ' ') {
    //         this.focusNextChar(target)
    //     }
    // }
