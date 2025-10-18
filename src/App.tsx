import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'
import PortfolioWithForm from './screens/PortfolioWithForm'
import Blog  from "./screens/Blog/Blog";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PortfolioWithForm} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </Router>
  )
}

export default App
