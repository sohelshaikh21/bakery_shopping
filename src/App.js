import React from "react";
import Header from "./components/Header/Header.component";
import HomePage from "./pages/HomePage/HomePage.component";
import "./App.style.css";
const App = () => {
    return (
        <div className="App">
            <div>
                <Header/>
                <HomePage/>
            </div>
            Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </div>
    )
}

export default App;