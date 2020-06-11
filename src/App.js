import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header.component";
import HomePage from "./pages/HomePage/HomePage.component";
import "./App.style.css";
const Shop = () => {
    return (<h1>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></h1>)
}
const App = () => {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route path="/" component={HomePage} exact={true} />
                    <Route path="/shop" component={Shop} />
                </Switch>
            </Router>
        </div>
    )
}

export default App;