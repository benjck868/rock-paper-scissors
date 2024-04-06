import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Main from './layout/main/Main'
import Advance from './pages/advanced/Advance'
function App() {
   return (
    <>
      <Routes>
        <Route element={<Main />}>
          <Route index path='/' element={<Home />} />
          <Route path='/advance' element={<Advance />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
