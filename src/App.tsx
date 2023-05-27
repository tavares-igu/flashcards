import './App.css'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Dash from './pages/Dash'
import Game from './pages/Game'
import ProtectedRoutes from './pages/ProtectedRoutes'
import Menu from './components/Menu/Menu'

function App() {

  return (
    <>
      <Menu />
      {/* // <>
      //   <UserProvider>
      //     <BrowserRouter>
      //       <Routes>
      //         <Route path='login' element={<Login />} />
      //         <Route element={<ProtectedRoutes />}>
      //           <Route path='dashboard' element={<Dashboard />} />
      //           <Route path='game' element={<Game />} />
      //         </Route>
      //         <Route path='/' element={<Navigate to={'/login'} />} />
      //       </Routes>
      //     </BrowserRouter>
      //   </UserProvider>
      // </> */}  
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='/' element={<Navigate to={'/login'} />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='dash' element={<Dash />} />
            <Route path='game' element={<Game />} />
          </Route>
        </Routes>
      </BrowserRouter></>
  )
}

export default App
