import { Provider } from 'react-redux'
import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import store from './redux/store'

function App() {

  return (
    <Provider store={store}>
      <div>
        <Sidebar />
      </div>
    </Provider>
  )
}

export default App
