import React from 'react';
import ReactDOM from 'react-dom/client';
import OriginalApp from './OriginalApp';
import './original-styles.css';

ReactDOM.createRoot(document.getElementById('original-root')!).render(
  <React.StrictMode>
    <OriginalApp />
  </React.StrictMode>,
);
