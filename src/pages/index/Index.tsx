
export default function Index() {
    localStorage.clear()
  return (
    <>
      <main className="h-screen grid grid-cols-12 grid-rows-12">
        <header className="col-span-12 border border-red-500">
          hhh
        </header>
        <div className="col-span-12 row-start-2 row-span-10 border border-blue-500">
          <button className="choice-btn" data-choice="paper">
            <div className="choice paper">
              <img src="./images/icon-paper.svg" alt="paper" />
            </div>
          </button>
          <button className="choice-btn" data-choice="scissors">
            <div className="choice scissors">
              <img src="./images/icon-scissors.svg" alt="scissors" />
            </div>
          </button>
          <button className="choice-btn" data-choice="rock">
            <div className="choice rock">
              <img src="./images/icon-rock.svg" alt="rock" />
            </div>
          </button>
        </div>
        <footer className="col-span-12 border border-pink-500">
          fff
        </footer>
      </main>
    </>  )
}
