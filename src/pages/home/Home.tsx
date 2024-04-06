import AfterPick from "@/components/AfterPick/AfterPick"
import BeforePick from "@/components/BeforePick/BeforePick"
import { RootState } from "@/state/store"
import { useSelector } from "react-redux"

export default function Home(){
  const duel = useSelector((state: RootState)=>state.game.duel)
  return (
    <>
     {!duel? <BeforePick /> : <AfterPick  />}
    </>
  )
}