import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import MainPage from "./components/main-page";
import PaymentPage from "./components/payment-page";

import './App.scss';
import Header from "./components/header";
import Footer from "./components/footer";


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header/>
                    <Switch>
                        <Route path={'/'} exact component={MainPage}/>
                        <Route path={'/payment'} component={PaymentPage}/>
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        )
    }
}

export default App;
