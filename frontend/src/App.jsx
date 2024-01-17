import './App.css'


import Addexpense from './Components/Addexpense'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './Components/Sidebar'
import Allexpense from './Components/Allexpense'

function App() {



  return (
    <div className='app'>
      <Sidebar />

      <Routes>
        <Route path='/allexpense' element={<Allexpense />}></Route>
        <Route path="/addexpense" element={<Addexpense />}></Route>
      </Routes>

    </div>
  )
}

export default App
