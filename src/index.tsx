import * as React from 'react';
import * as ReactDOM from "react-dom";

import Router from './Router';

var mountNode = document.getElementById("app");
ReactDOM.render(<Router/>, mountNode);
