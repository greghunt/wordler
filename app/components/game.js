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

    const setLetter = (l, x, y) => {
        let m = [...state.matrix]
        m[y][x] = l
        if (x < m[y].length) {
            x++;
        } else {
            x = 0;
            y++;
        }
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
                            focused={state.x == x && state.y == y}
                            letter={letter}
                            setLetter={setLetter}
                        />)}
                </Guess>
            )}
        </div >
    )
}