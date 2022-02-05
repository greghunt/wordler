import { useState } from "react"

export default function Letter({ x, y, letter, game, setLetter }) {
    const input = (event) => {
        setLetter(event.target.value, x, y, game)
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

    return (
        <input
            type="text"
            className="w-12 h-12 border-2 border-slate-600 inline-flex text-slate-200 items-center justify-center text-center bg-transparent"
            onChange={(e) => input(e)} value={letter}
        // onFocus={(e) => handleFocus(e)}
        // onKeyDown={(e) => handleKeyDown(e)}
        />
    )
}