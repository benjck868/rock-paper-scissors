import { useDispatch } from "react-redux"
import { Button } from "../ui/button"
import { setDuel } from "@/state/game/gameSlice"

type ResultProps = {
    text : string | undefined
}
export default function Result({text}:ResultProps) {
    const dispatcher = useDispatch()
  return (
    <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-white text-4xl">{text}</p>
        <Button variant="outline" className="w-44 text-RPS-dark-text font-bold hover:bg-slate-400" onClick={()=>dispatcher(setDuel(false))}>
            PLAY AGAIN 
        </Button>
    </div>
  )
}
