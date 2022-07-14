import {Route, Routes} from 'react-router-dom';
// import Preloader from './preloader';
import NavBar from './navbar';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import '../css/App.css';

function App() {

    return (
        <div className="App">
            {/* <Preloader/> */}
            {/* <NavBar/> */}
            {/* <Home/> */}
            <About/>
            {/* <Portfolio/> */}
            {/* <Contact/> */}
        </div>
    )

}

export default App;