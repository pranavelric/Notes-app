import React from 'react';
import logo from '../../Images/notes.png';
import './header.scss';
export default function Header() {
  return (
    <div className="header">
        <img src={logo} alt="logo" width='70'/>
        <h1>Notes App</h1>
    </div>
  )
}
