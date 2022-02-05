import { useState } from 'react';
import Guess from '~/components/guess';
import Letter from '~/components/letter';

export default function Game() {
    const word = 'penis'
    const tries = 6

    const initMatrix = () => {
        let m = []
        for (let y = 0; y < tries; y++) {
            m[y] = []
            for (let x = 0; x < word.length; x++) {
                m[y][x] = ''
            }
        }
        return m
    }

    const [state, setState] = useState({
        x: 0,
        y: 0,
        matrix: initMatrix(),
    })

    const setLetter = (l, x, y, m) => {
        m[y][x] = l
        setState({ x: x, y: y, matrix: m })
    }

    return (
        <div className="bg-slate-800 p-8 text-slate-100" >
            {state.matrix.map((guesses, y) =>
                <Guess key={y}>
                    {guesses.map((letter, x) =>
                        <Letter
                            key={x}
                            x={x}
                            y={y}
                            letter={letter}
                            game={state.matrix}
                            setLetter={setLetter}
                        />)}
                </Guess>
            )}
        </div >
    )
}