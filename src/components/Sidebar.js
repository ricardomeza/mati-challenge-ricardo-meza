import React from 'react';
import logo from '../img/logo-mati.png';
import '../css/sidebar.css';

const Sidebar = props => {
  const links = props.links.map( (item, index) => {
    return getLink(item, index);
  })

  return (
    <div id="sidebar" className="sidebar">
      <nav className="sidebar-nav">
        {/* Logo */}
        <div className="sidebar-logo">
          <img src={ logo } alt='Mati'/>
        </div>

        {/* Item Name */}
        <ul className="nav">
          { links }
        </ul>
      </nav>
    </div>
  );
};

const getLink = (item, index) => {
  if (item.type === 'item') {
    // Icon + Name
    return (
      <li key={ index } className="nav-item">
          <a href="/" className="nav-link">
            <div className="nav-link-icon"></div>
            { item.value }
          </a>
      </li>
    );
  } else {
    // Section Name
    return (
      <li key={ index } className="nav-item nav-item-title">
        { item.value }
      </li>
    );
  }
}

export default Sidebar;
