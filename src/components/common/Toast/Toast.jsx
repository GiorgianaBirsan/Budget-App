import React from 'react';
import './Toast.css';

export default function Toast({ children }) {
  return <div id="toast">{children}</div>;
}

export function displayToast(element) {
   element.className = 'show';
  setTimeout(function () {
    element.className = element.className.replace('show', '');
  }, 5000);
}
