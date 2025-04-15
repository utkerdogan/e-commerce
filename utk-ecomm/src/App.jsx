import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Shop } from './pages/Shop'
import { Layout } from './layout/Layout'

function App() {

  return (
    
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
