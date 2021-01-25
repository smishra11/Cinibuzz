import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import reducer from './store/reducer/reducer';
// import logger from 'redux-logger';
// import thunkMiddleware from 'redux-thunk';

// const store = createStore(reducer, applyMiddleware(logger, thunkMiddleware));

// const app = (
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
ReactDOM.render(app, document.getElementById('root'));

reportWebVitals();
