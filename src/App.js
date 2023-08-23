import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Shows from './components/Shows'
import UserDetails from './components/UserDetails'
import NotFound from './components/NotFound'
import ShowDetails from './components/ShowDetails'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={UserDetails} />
      <ProtectedRoute exact path="/shows" component={Shows} />
      <ProtectedRoute exact path="/showDetails/:id" component={ShowDetails} />
      <Route exact component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
