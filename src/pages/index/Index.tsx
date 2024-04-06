import { Link } from "react-router-dom"

export default function Index() {
    localStorage.clear()
  return (
    <>
      <main className="grid place-items-center h-screen bg-[url('/images/rock-paper-scissors.jpg')] bg-cover bg-center fl">
        <div className="flex flex-col">
          <div className="text-RPS-dark-text text-5xl">Game Mode</div>
          <div className="flex flex-col mt-10 gap-5"> 
            <Link className="text-RPS-radial-gradient-to py-3 text-3xl border border-gray-950 text-center rounded-xl bg-slate-500" to="/game">Basic</Link>
            <Link className="text-RPS-radial-gradient-to py-3 text-3xl border border-gray-950 text-center rounded-xl bg-slate-500" to="/game/advance">Advanced</Link>
          </div>
        </div>
      </main>
    </>  )
}
