import Sidebar from './components/sidebar/Sidebar'
import MainContainer from './components/MainContainer'
import './App.css'

function App() {

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <MainContainer />
    </div>
  )
}

export default App
