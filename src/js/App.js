import React from 'react';
import {Route, Switch} from 'react-router-dom';
// import {AnimatePresence, motion} from 'framer-motion'
// import Loader from './loader';
// import Preloader from './preloader';
import NavBar from './navbar';
import ParticlesBG from './particles';
import Home from './home';
import Biography from './biography';
import Portfolio from './portfolio';
import Contact from './contact';
import '../css/App.css';

function App() {

    return (
        <div className="App">
            {/* <Preloader doneLoading={doneLoading}/> */}
            <NavBar/>
            <ParticlesBG/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={Biography}/>
                <Route exact path="/portfolio" component={Portfolio}/>
                <Route exact path="/contact" component={Contact}/>
            </Switch>
        </div>
    )

}

export default App;