import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { publicRoutes } from './route/AllRoutes'

const Navbar = lazy(() => import("./components/Navbar"))


const App = () => {


  return <>

    <BrowserRouter>
      <Suspense fallback={<h1>wait...</h1>}>
        <Navbar />
      </Suspense>
      <Routes>
        {
          publicRoutes.map(item => <Route
            path={item.path}
            element={<Suspense fallback={<h1>Please wait....</h1>}>
              {item.element}
            </Suspense>} />)
        }

        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>


    {/* <BrowserRouter>
      <Suspense fallback={<><div class="spinner-border text-primary"></div></>}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
      </Suspense>
    </BrowserRouter> */}


    {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Suspense fallback={<h1>Please wait...</h1>}><Navbar /> <Outlet /></Suspense> </>}>
          <Route index element={<Suspense fallback={<h1>Please wait...</h1>}> <Home /></Suspense>} />
          <Route path='about' element={<Suspense fallback={<h1>Please wait...</h1>}><About /></Suspense>} />
          <Route path='contact' element={<Suspense fallback={<h1>Please wait...</h1>}><Contact /></Suspense>} />
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter> */}
  </>
}

export default App