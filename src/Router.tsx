
import * as React from 'react';
import { hot } from "react-hot-loader/root";
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

class Router extends React.Component {
  render() {
    return (<BrowserRouter>
      <App />
    </BrowserRouter>);
  }
}

export default hot(Router);
