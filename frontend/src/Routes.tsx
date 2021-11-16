import Dashboard from 'pages/Dashboard'
import Home from 'pages/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const Routes = () => {
  return (
    <Router>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Router>
  )
}

export default Routes
