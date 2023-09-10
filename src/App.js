import './App.css';
import {Route, Routes,BrowserRouter} from "react-router-dom"
import AboutPage from './pages/aboutpage';
import NavBar from './components/navbar';
import HobbiePage from './pages/HobbiePage';
import GoalPage from './pages/GoalPage';
import ProjectPage from './pages/ProjectPage';








const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes> 
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/hobbies' element={<HobbiePage/>} />
        <Route path='/goals' element={<GoalPage/>}/>
        <Route path='/projects' element={<ProjectPage/>} />
      </Routes>
      </BrowserRouter>
  )
}

export default App
