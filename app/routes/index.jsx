import Game from '~/components/game'

export default function Index() {
  return (
    <div className="px-8 mx-auto w-full max-w-6xl">
      <div className="my-12">
        <h1 className="text-3xl font-bold uppercase">
          A <a href="https://www.powerlanguage.co.uk/wordle/">Wordle</a> Clone
        </h1>
        <p>
          For groups of friends (wordlers) that like to SPAM their group chats.
        </p>
        <p><strong className="font-bold text-slate-600 italic">* In Progress</strong>. You can find <a className="text-blue-500 underline" href="https://github.com/greghunt/wordler">the code here.</a></p>
      </div>
      <Game />
    </div>
  );
}
