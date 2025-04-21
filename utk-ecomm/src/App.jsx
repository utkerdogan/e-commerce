import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Shop } from './pages/Shop'
import { Layout } from './layout/Layout'
import { Contact } from './pages/Contact'
import { AboutUs } from './pages/AboutUs'
import { Team } from './pages/Team'

function App() {

  return (
    
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/contact" component={Contact} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/team" component={Team} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
