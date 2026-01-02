import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import LearnState from './pages/state/LearnState'
import LearnEffect from './pages/effect/LearnEffect'
import LearnContext from './pages/context/LearnContext'
import Navbar from './components/Navbar'
import LearnChildCompo from './pages/test/LearnChildCompo'
import LearnuseMemo from './pages/performance/LearnuseMemo'
import LearnOnlyMemo from './pages/performance/LearnOnlyMemo'
import LearnRef from './pages/ref/LearnRef'
import Dropbox from './pages/ref/Dropbox'
import LearnReducer from './pages/state/LearnReducer'
import PracticeReducer from './pages/state/PracticeReducer'
import LearnCustomHooks from './pages/custom/LearnCustomHooks'
import Login from './pages/test/Login'

const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<> <Navbar /> <Outlet /> </>}>
          <Route index element={<LearnState />} />
          <Route path='effect' element={<LearnEffect />} />
          <Route path='context' element={<LearnContext />} />
          <Route path='child' element={<LearnChildCompo />} />
          <Route path='memo' element={<LearnuseMemo />} />
          <Route path='only-memo' element={<LearnOnlyMemo />} />
          <Route path='ref' element={<LearnRef />} />
          <Route path='dropbox' element={<Dropbox />} />
          <Route path='reducer' element={<LearnReducer />} />
          <Route path='practice' element={<PracticeReducer />} />
          <Route path='custom' element={<LearnCustomHooks />} />
          <Route path='login' element={<Login />} />
        </Route>
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App
