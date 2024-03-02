import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Contact from './pages/Contact'
import Vote from './pages/Vote'
import Sponsors from './pages/Sponsors'
import Candidiates from './pages/Candidiates'
import Media from './pages/Media'
import Login from './pages/Login'
import SignUp from './pages/Signup'
import Votes from './components/dashboard/Votes'
import Users from './components/dashboard/Users'
import SetTime from './components/dashboard/SetTime'
import AdminLogin from './pages/AdminLogin'
import ProtectedRoute from './components/ProtectedRoute'
import  { Toaster } from 'react-hot-toast';





function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sponsor' element={<Sponsors />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/vote' element={<ProtectedRoute>
            <Vote />
          </ProtectedRoute>} />
          <Route path='/media' element={<Media />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/login-admin' element={<AdminLogin />} />
          <Route path='/dashboard' element={
            <Votes />
        } />
          <Route path='/dashboard/users' element={
            <Users />
          } />
          <Route path='/dashboard/set-time' element={
            <SetTime />
          } />

          <Route path="/vote/:candidiateId" element={
            <Candidiates />
          }/>
        </Routes>

      </BrowserRouter>
      <div> <Toaster /></div>

    </>
  )
}

export default App
