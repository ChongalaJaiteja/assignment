import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Shows from './components/Shows'
import UserDetails from './components/UserDetails'
import NotFound from './components/NotFound'
import ShowDetails from './components/ShowDetails'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/userDetails" component={UserDetails} />
      <Route exact path="/shows" component={Shows} />
      <Route exact path="/showDetails/:id" component={ShowDetails} />
      <Route exact component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
