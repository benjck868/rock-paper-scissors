import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import {Dialog , DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { RootState } from "@/state/store";

function CloseIcon(){
    return (
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"/></svg>
    )
}

export default function Rules() {
    const mode = useSelector((state: RootState)=>state.game.mode)
  return (
    <Dialog>
        <DialogTrigger asChild>
            <Button type="button" className="w-32 bg-none border-2 rounded-lg border-slate-400 text-white">RULES</Button>
        </DialogTrigger>
        <DialogContent className="max-w-lg h-screen md:h-min">
            <DialogHeader>
                <DialogTitle><p className="text-3xl text-RPS-dark-text">Rules</p></DialogTitle>
            </DialogHeader>
            <div className="flex justify-center items-center space-x-2">
                <img src={mode === 'basic'?"/images/image-rules.svg":"/images/image-rules-bonus.svg"} alt="rules" />
            </div>
            <DialogFooter className="md:hidden">
                <div className="flex justify-center">
                    <DialogClose asChild>
                        <Button type="button" size="icon" variant="ghost" className="rounded-full p-2">
                            <CloseIcon />
                        </Button>
                    </DialogClose>
                </div>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}
