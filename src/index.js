import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Desktop from './Components/Desktop';
import 'bootstrap/dist/css/bootstrap.css';
import './site.css';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Desktop />, document.getElementById('content'));
registerServiceWorker();
