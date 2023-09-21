import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './Navigation'
import ProjectsList from './ProjectsList'

function App() {

  return (
    <div className='App'>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="projects_list" element={<ProjectsList/>}/>
        </Routes>
    </div>
  )
}

export default App
