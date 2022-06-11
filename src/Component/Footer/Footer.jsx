import React from 'react'
import './footer.scss';
export default function Footer() {
    const year = new Date().getFullYear();
  return (
    <footer>
        <p>Copyright © {year}</p>
    </footer>
  )
}
