import AfterPick from "@/components/AfterPick/AfterPick";
import BeforePickAdvance from "@/components/BeforePickAdvance/BeforePickAdvance";
import { RootState } from "@/state/store";
import { useDispatch, useSelector } from "react-redux";
import {setMode} from '@/state/game/gameSlice'
import { useEffect } from "react";
export default function Advance() {
  const duel = useSelector((state: RootState)=>state.game.duel)
  const dispatcher = useDispatch()
  useEffect(()=>{
    dispatcher(setMode('advance'))
  })
  return (
    <>
      {!duel?<BeforePickAdvance /> : <AfterPick />}
    </>
    
  )
}
