import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import App from './pages/App';
import './css/index.css';

ReactDOM.render(
    <HashRouter>
        <App/>
    </HashRouter>,
    document.getElementById('root')
);