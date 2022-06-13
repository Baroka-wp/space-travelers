import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Navbar from './components/Navbar';
import store from './redux/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <Navbar />
        <App />
      </React.StrictMode>
    </Router>
  </Provider>,
);
