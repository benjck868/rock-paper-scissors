import { useReducer } from "react"

export const handSign = ["rock","paper","scissors","lizard","spock"] as const

type Rules = {
    selected: typeof handSign[number]
    beat : typeof handSign[number][]
}
export const rulesBasic:Rules[] = [{
        selected: "rock" ,
        beat : ["scissors","lizard"]
    },
    {
        selected: "paper",
        beat: ["rock","spock"]
    },
    {
        selected: "scissors",
        beat: ["paper","lizard"]
    },
    {
        selected: "lizard",
        beat: ["spock","paper"]
    },
    {
        selected : "spock",
        beat : ["scissors","rock"]
    }
]

export type HandSign = typeof handSign[number]

export const enum REDUCER_ACTION_TYPE {
        SET_DUEL,
        SET_PLAYER_SELECT,
        SET_COMPUTER_SELECT,
        SET_SCORE
    }
    export type ReducerActionProps = {
        type : REDUCER_ACTION_TYPE,
        payload? : HandSign
    }
    export type InitStateProps = {
        isDuel : boolean,
        player_select: HandSign | undefined ,
        computer_select: HandSign | undefined,
        score: number
    }
    const initState: InitStateProps = {
        isDuel: false,
        player_select: undefined,
        computer_select: undefined,
        score : 0
    }
    const reducer = (state: InitStateProps, action: ReducerActionProps): InitStateProps => {
        switch(action.type){
            case REDUCER_ACTION_TYPE.SET_DUEL :
                return {...state, isDuel : state.isDuel? false : true}
            case REDUCER_ACTION_TYPE.SET_PLAYER_SELECT : 
                return {...state, player_select : action.payload}
            case REDUCER_ACTION_TYPE.SET_COMPUTER_SELECT :
                return {...state, computer_select: action.payload}
            case REDUCER_ACTION_TYPE.SET_SCORE :
                return {...state, score : state.score++}
            default: 
                throw new Error()
        }
    }

export default function useRPS(){
    const [state, dispatch] = useReducer(reducer,initState)

    return {state, dispatch}
}