import { useState } from 'react';
import Letter from '~/components/letter';
import whatsmyname from '~/whatsmyname.mp3';

export default function Guess({ active, word, attempt, setAttempt }) {
    const letters = word.toUpperCase().split('');
    const [focused, setFocused] = useState(0);
    const [revealed, setRevealed] = useState(false);
    const [guess, setGuess] = useState(Array(letters.length).fill(''));

    const submitGuess = (event) => {
        event.preventDefault()
        const audio = new Audio(whatsmyname);
        const values = Array.from(event.target.querySelectorAll('input:not([hidden])')).map(el => el.value)
        if (values.filter(i => i).length !== letters.length) {
            alert("Please fill in all the letters before guessing.")
        } else {
            setGuess(values);
            setRevealed(true)
            setAttempt(() => attempt + 1)
        }

        if (values.join('') === letters.join('')) {
            audio.play();
        }
    }

    const getResult = (index) => {
        if (!revealed) return null;

        if (guess[index] == letters[index])
            return 1;

        if (guess[index] !== letters[index] && letters.includes(guess[index]))
            return 0;

        return -1;
    }


    return (
        <form className="my-4 space-x-4 flex items-center justify-center" onSubmit={(e) => submitGuess(e)}>
            {letters.map((letter, x) =>
                <Letter key={x} index={x} focused={x == focused && active} setFocused={setFocused} submitGuess={submitGuess} letters={letters} result={getResult(x)} active={active} />
            )}
            <input type="submit" hidden />
        </form>
    )
}