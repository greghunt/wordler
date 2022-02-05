import Game from '~/components/game'

export default function Index() {
  return (
    <div className="px-8 mx-auto w-full max-w-6xl">
      <h1 className="text-3xl font-bold uppercase">
        A <a href="https://www.powerlanguage.co.uk/wordle/">Wordle</a> Clone
      </h1>
      <p>
        For groups of friends (wordlers) that like to SPAM their group chats.
      </p>
      <div className="my-20">
        <h3 className="font-bold text-slate-600 text-xl uppercase italic">* In Progress</h3>
        <p>You can find <a className="text-blue-500 underline" href="https://github.com/greghunt/wordler">the code here.</a></p>
        <Game />
      </div>
    </div>
  );
}
