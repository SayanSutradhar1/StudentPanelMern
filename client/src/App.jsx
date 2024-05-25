import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import StudentDetails from './pages/StudentDetails'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/studentlist' element={<StudentDetails/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App