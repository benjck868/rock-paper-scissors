import HandSignButton from "../HandSignButton/HandSignButton";
import { useDispatch } from "react-redux"
import {HandSign, handSign } from "@/types"
import {setDuel, onPickPlayer, onPickComputer } from "@/state/game/gameSlice"

export default function BeforePickAdvance() {
    const dispatcher = useDispatch()

  function onSelectHandSign(handsign : HandSign){
    const pick = Math.floor(Math.random()*5)
    const computer_hand = handSign[pick]
    dispatcher(setDuel(true))
    dispatcher(onPickPlayer(handsign))
    dispatcher(onPickComputer(computer_hand))
  }
  return (
    <div className="game-advance">
      <div className="scissors">
        <HandSignButton isAdvance={true} handSign="scissors" onClick={()=>onSelectHandSign("scissors")} />
      </div>
      <div className="spock">
        <div className="-mt-16 -ml-16 md:-mt-10 md:ml-0">
          <HandSignButton isAdvance={true} handSign="spock" onClick={()=>onSelectHandSign("spock")}/>
        </div>
      </div>
      <div className="paper">
        <div className="-mt-10 -mr-7 md:-mt-10 md:mr-0">
          <HandSignButton isAdvance={true} handSign="paper" onClick={()=>onSelectHandSign("paper")}/>
        </div>
      </div>
      <div className="lizard">
        <div className="md:mt-10 md:-mr-28">
          <HandSignButton isAdvance={true} handSign="lizard" onClick={()=>onSelectHandSign("lizard")}/>
        </div>
      </div>
      <div className="rock">
        <div className="md:mt-10 md:-ml-28">
          <HandSignButton isAdvance={true} handSign="rock" onClick={()=>onSelectHandSign("rock")}/>
        </div>
      </div>
    </div>
  )
}
