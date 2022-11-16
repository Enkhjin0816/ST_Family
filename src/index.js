import React from 'react';
import ReactDOM from 'react-dom/client';
import Swipe from './swiper';
import reportWebVitals from './reportWebVitals';

import img1 from './img1.jpeg';
import img2 from './img2.jpeg';
import img3 from './img3.jpeg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Swipe imgs={[img1, img2, img3]} title={[<h1>hi</h1>, <h1>ha</h1>, <h1>hu</h1>]}  Swidth='300px' Sheight='300px' Theight={'fit-content'} Twidth='100%' Jc='center' Ai='center' Color='red' Bg={'grey'} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
