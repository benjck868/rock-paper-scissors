import HandSignButton from "../HandSignButton/HandSignButton"
import { useDispatch } from "react-redux"
import {HandSign, handSign } from "@/types"
import {setDuel, onPickPlayer, onPickComputer } from "@/state/game/gameSlice"

export default function BeforePick() {
  const dispatcher = useDispatch()

  function onSelectHandSign(handsign : HandSign){
    const pick = Math.floor(Math.random()*3)
    const computer_hand = handSign[pick]
    dispatcher(setDuel(true))
    dispatcher(onPickPlayer(handsign))
    dispatcher(onPickComputer(computer_hand))
  }

  return(
    <>
      <div className="game">
        <div className="paper w-full h-full grid place-items-center">
          <div className="-ml-10 md:-ml-0">
            <HandSignButton handSign="paper" onClick={()=>onSelectHandSign("paper")}/>
          </div>
        </div>
        <div className="scissors w-full h-full grid place-items-center">
          <HandSignButton handSign="scissors" onClick={()=>onSelectHandSign("scissors")} />
        </div>
        <div className="rock w-full h-full grid place-items-center">
          <HandSignButton handSign="rock" onClick={()=>onSelectHandSign("rock")} />
        </div>
      </div>
    </>
  )
}
