import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import Loader from './loader';
import Home from './home';
import Biography from './biography';
import Portfolio from './portfolio';
import Hobbies from './hobbies';
import '../css/App.css';

function App() {

    const [doneLoading, setDoneLoading] = useState(false);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setDoneLoading([true]);
    //     }, 2000);
        
    // })

    const closePage = (e) => {
        var id = e.target.id;
        if (id == "returnBio") {
            var container = document.getElementById("biographyContainer");
            container.style.width = "0";
            var returnButton = document.getElementById("returnBio");
            returnButton.style.width = "0";
        }
        else if (id == "returnPortfolio") {
            var container = document.getElementById("portfolioContainer");
            container.style.height = "0";
            var returnButton = document.getElementById("returnPortfolio");
            returnButton.style.height = "0";
        }
        else if (id == "returnHobbies"){
            var container = document.getElementById("hobbiesContainer");
            container.style.width = "0";
            var returnButton = document.getElementById("returnHobbies");
            returnButton.style.width = "0";
        }
    }

    return (
        <div className="App">
            {/* {!doneLoading ? (
              <Loader doneLoading={doneLoading}/>
            ) : (
                <div>
                
                </div>
            )} */}
            <Home/>
            <Biography closePage={closePage}/>
            <Portfolio closePage={closePage}/>
            <Hobbies closePage={closePage}/>
            {/* <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/aboutme" component={Biography}/>
                <Route exact path="/portfolio" component={Portfolio}/>
                <Route exact path="/hobbies" component={Hobbies}/>
            </Switch> */}
        </div>
      )

}

export default App;
