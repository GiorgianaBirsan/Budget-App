import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

export default function Modal({ open, children, onClose, title }) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <div className="modal_container">
      <div className="modal_content">
        <button id="close_modal_btn" children="X" onClick={onClose} />
        <h1>{title}</h1>
        {children}
      </div>
    </div>,
    document.getElementById('modals')
  );
}
