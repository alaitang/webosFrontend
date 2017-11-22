import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Desktop from './Components/Desktop';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Desktop />, document.getElementById('content'));
registerServiceWorker();
