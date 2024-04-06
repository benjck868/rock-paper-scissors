import Rules from "@/components/Rules/Rules"
import { RootState } from "@/state/store"
import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"

function Header(){
  const score = useSelector((state: RootState)=>state.game.score)
  
  return(
    <header className="col-span-12 row-span-2 border-2 border-gray-300 rounded-lg p-2 flex justify-between items-center py-2">
      <img src="/images/logo.svg" className="h-20 md:h-full" alt="header logo" />
      <div className="flex flex-col bg-white rounded-md w-3/6 md:w-2/6 h-full">
        <p className="text-3xl text-RPS-score-text text-center">Score</p>
        <div className="flex gap-x-2 justify-evenly">
          <div className="flex flex-col justify-center items-center">
            <p className="text-xs">You</p>
            <p className="text-3xl text-RPS-dark-text font-bold">{score.player}</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-xs">Computer</p>
            <p className="text-3xl text-RPS-dark-text font-bold">{score.computer}</p>
          </div>
        </div>
      </div>
    </header>
  )
}

function Footer(){
  return(
    <footer className="col-span-12">
      <div className="p-2 flex justify-center md:justify-end">
        <Rules />
      </div>
    </footer>
  )
}


export default function Main(){
  const isDuel = useSelector((state: RootState)=>state.game.duel)
  console.log("isduel from main: "+isDuel)
  return (
    <main className="h-screen grid grid-cols-12 grid-rows-12 md:w-3/6 mx-auto px-2 pt-2">
        <Header />
        <div className="col-span-12 row-start-3 row-span-9">
          <Outlet />
        </div>
        <Footer />
      </main>
  )
}
