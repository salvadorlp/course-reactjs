import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import Header from "./components/header";
import Home from "./pages/home";
import About from "./pages/about";
import Product from "./pages/product";
import Error from "./pages/error"

const Routes = () => {
    return(
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About}/>
                <Route path="/product/:id" component={Product}></Route>
                <Route path="*" component={Error}/>
            </Switch>
        </Router>
    );
}

export default Routes;