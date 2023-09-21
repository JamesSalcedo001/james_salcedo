import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './Navigation'
import ProjectsList from './ProjectsList'
import Home from './Home'

function App() {

  return (
    <div className='App'>
        <Navigation/>
        <Routes>
          <Route path="/james_salcedo" element={<Home/>}/>
          <Route path="/james_salcedo/projects_list" element={<ProjectsList/>}/>
        </Routes>
    </div>
  )
}

export default App
