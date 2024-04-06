import { HandSign } from "@/types"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type ModeState = 'basic' | 'advance'
type GameState = {
    mode: ModeState
    duel : boolean | undefined
    player : HandSign | undefined
    computer : HandSign | undefined
    score : {
        player : 0
        computer : 0
    }
}
const initialState:GameState = {
    mode: 'basic',
    duel: undefined,
    player: undefined,
    computer: undefined,
    score : {
        player : 0,
        computer : 0
    }

}

const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        setDuel : (state, action: PayloadAction<boolean>)=>{
            state.duel = action.payload
        },
        onPickPlayer : (state, action : PayloadAction<HandSign>)=>{
            state.player = action.payload
        },
        onPickComputer : (state, action : PayloadAction<HandSign>)=>{
            state.computer = action.payload
        },
        setScorePlayer : (state)=>{
            state.score.player += 1
        },
        setScoreComputer : (state)=>{    
            state.score.computer += 1
        },
        setMode: (state, action: PayloadAction<ModeState>)=>{
            state.mode = action.payload
        }
    }
})
export const {setDuel, onPickPlayer, onPickComputer, setScorePlayer, setScoreComputer, setMode} = gameSlice.actions
export default gameSlice.reducer