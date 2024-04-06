import HandSignButton from "../HandSignButton/HandSignButton"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/state/store"
import { HandSign, rulesBasic } from "@/types"
import Result from "../Result/Result"
import { setScorePlayer, setScoreComputer } from "@/state/game/gameSlice"

function setWinner(player: HandSign | undefined, computer: HandSign| undefined){
    if(player != computer){
      const selected = rulesBasic.find(rule=>rule.selected === player)
      let beat = undefined
      if(selected != undefined){
          const selected = rulesBasic.find(rule=>rule.selected === player)
          if(computer !== undefined){
              beat = selected?.beat.includes(computer)
              return beat
          }
      }
    }
  }

export default function AfterPick() {
  const dispatcher = useDispatch()
  const player = useSelector((state: RootState)=>state.game.player)
  const computer = useSelector((state: RootState)=>state.game.computer)
  const [resultText, setResultText] = useState<string | undefined>(undefined)
  const [playerWinner, setPlayerWinner] = useState<boolean>(false)
  const [computerWinner, setComputerWinner] = useState<boolean>(false)

  useEffect(()=>{
  const isWinner = setWinner(player, computer)
    if(isWinner !== undefined){
      if(isWinner){
        setResultText("YOU WIN")
        dispatcher(setScorePlayer())
        setPlayerWinner(true)
      }
      else {
        dispatcher(setScoreComputer())
        setResultText("YOU LOSE")
        setComputerWinner(true)
      }
    }
    else {
      setResultText("IT'S A DRAW")
    }
  },[])
  console.log(playerWinner)
  return (
    <>
      <div className="grid md:grid-cols-3 gap-20 grid-cols-2 place-items-center mt-20">
        <div className="flex flex-col md:flex-col-reverse">
          {player !== undefined && <HandSignButton isWinner={playerWinner} handSign={player} />}       
          <p className="text-xl text-center mt-10 md:mb-10 font-semibold text-white">YOU PICKED</p>
        </div>
        <div className="md:col-start-3 flex flex-col md:flex-col-reverse">
          {computer !== undefined && <HandSignButton isWinner={computerWinner} handSign={computer} />}
          <p className="text-xl text-center mt-10 md:mb-10 font-semibold text-white">THE HOUSE PICKED</p>
        </div>
        <div className="col-span-2 md:col-span-1 md:col-start-2 md:row-start-1">
          <Result text={resultText} />
        </div>
      </div>
    </>
  )
}