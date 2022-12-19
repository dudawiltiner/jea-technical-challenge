import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GeneralLoading from './components/molecules/GeneralLoading'
const Home = lazy(() => import('./pages/Home'))
const SignUp = lazy(() => import('./pages/SignUp'))
const SignIn = lazy(() => import('./pages/SignIn'))
const Error = lazy(() => import('./pages/Error'))

function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<GeneralLoading />}>
        <Routes>
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default AppRoutes
