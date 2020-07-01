import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header.component";
import HomePage from "./pages/HomePage/HomePage.component";
import ShopPage from "./pages/ShopPage/ShopPage.component";
import AccountPage from "./pages/AccountPage/AccountPage.component";
import "./App.style.css";

const BakedPage = () => {
    return <div>
        <h2>Baked Page</h2>
    </div>
}
const App = () => {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route path="/" component={HomePage} exact={true} />
                    <Route path="/baked" component={BakedPage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/account" component={AccountPage} />
                </Switch>
            </Router>
        </div>
    )
}

export default App;