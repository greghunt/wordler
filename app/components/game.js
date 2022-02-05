import Guess from '~/components/guess';
import Letter from '~/components/letter';

export default function Game() {
    const word = 'penis'

    return (
        <div className="bg-slate-800 p-8 text-slate-100">
            <Guess>
                <Letter />
                <Letter />
                <Letter />
                <Letter />
                <Letter />
            </Guess>
        </div>
    )
}