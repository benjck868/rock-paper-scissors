import { HandSign } from "@/types"
import { twMerge } from "tailwind-merge"

type HandProps = {
  hand : string
  image : string
  colors : string
}

const hands:HandProps[] = [
  {
    hand: "paper",
    image : "/images/icon-paper.svg",
    colors : "paper"
  }
  ,
  {
    hand: "scissors",
    image : "/images/icon-scissors.svg",
    colors : "scissors"
  },
  {
    hand: "rock",
    image : "/images/icon-rock.svg",
    colors : "rock"
  },
  {
    hand: "lizard",
    image : "/images/icon-lizard.svg",
    colors : "lizard"
  },
  {
    hand: "spock",
    image : "/images/icon-spock.svg",
    colors : "spock"
  }]

type HandSignProps = React.HTMLAttributes<HTMLButtonElement> & {
    handSign : HandSign
    isWinner ?: boolean
    isAdvance ?: boolean
}

export default function HandSignButton({handSign, isWinner,isAdvance, onClick}: HandSignProps) {
  const btnPropVal = hands.find(hand => hand.hand === handSign)
  return (
    <button onClick={onClick} value={handSign} className={twMerge(isAdvance?"size-20 md:size-28":"size-20 md:size-40", ["choice-btn rounded-full"])}>
      <div className={twMerge(isAdvance?"size-24 md:size-28":"size-24 md:size-40",isWinner&&"winner",btnPropVal?.colors,["choice rounded-full"])}>
        <img src={btnPropVal?.image}  alt={handSign}/>
      </div>
    </button>
  )
}
