import { Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'


function Search() {
  return <h1>Search Page Placeholder</h1>
}

function About() {
  return <h1>Return About Page Placeholder.</h1>
}

function App() {
  return (
    <div>
      <Navbar />
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/About" element={<About />}></Route>
      </Routes>
    </div>
  )
}

export default App