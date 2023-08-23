import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shows from './components/Shows'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Shows />} />
    </Routes>
  </BrowserRouter>
)

export default App
