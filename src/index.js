/* index.js */
/* React 애플리케이션의 초기화와 관련된 작업을 처리 */
/* ex) ReactDOM.render, 글로벌 스타일 적용, 상태 관리 설정 등 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './styles/commons/reset.css';
import './styles/commons/font.css';
import './styles/mediaQuery/styles_0-479.css';
import './styles/mediaQuery/styles_480-767.css';
import './styles/mediaQuery/styles_768-1023.css';
import './styles/mediaQuery/styles_1024-1279.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
