import { useState } from 'react';
import Guess from '~/components/guess';

export default function Game() {
    const word = 'penis'
    const tries = 6
    const [attempt, setAttempt] = useState(-1)

    return (
        <div className="bg-slate-800 p-8 text-slate-100" >
            {attempt < 0 ?
                <button onClick={() => setAttempt(0)}>Start</button>
                :
                <div>
                    Guess {attempt} / {tries}
                </div>
            }
            {[...Array(tries).keys()].map(y =>
                <Guess key={y} active={y == attempt} word={word} attempt={y} setAttempt={setAttempt} />
            )}
        </div >
    )
}