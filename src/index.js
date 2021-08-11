import React from 'react';
import ReactDOM from 'react-dom';
import DailyBitsRouter from './routers/DailyBitsRouter'
import './style/style.css'
import DailyBitsApp from "./container/DailyBitsApp";


ReactDOM.render(
    <DailyBitsRouter />,
  document.getElementById('root')
);
