import React from 'react';
import ReactDOM from 'react-dom';
import { SignupContext } from './store/SignupContext';
import App from './App';
import './assets/css/global.scss';
import './assets/css/terms.scss';
import './assets/css/article.scss';
import './assets/css/readmore.scss';

ReactDOM.render(
   <React.StrictMode>
      <SignupContext>
         <App />
      </SignupContext>
   </React.StrictMode>,
   document.getElementById('root')
);
