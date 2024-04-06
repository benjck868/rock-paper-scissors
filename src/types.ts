export const handSign = ["rock","paper","scissors","lizard","spock"] as const
export type HandSign = typeof handSign[number]
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