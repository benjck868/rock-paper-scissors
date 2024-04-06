import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Main from './layout/main/Main'
import Index from './pages/index/Index'
import Advance from './pages/advanced/Advance'
function App() {
   return (
    <>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/game' element={<Main />}>
          <Route index element={<Home />} />
          <Route path='advance' element={<Advance />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
