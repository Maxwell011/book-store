import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <h1 className={styles.Bookstore}>Bookstore CMS</h1>
          <ul className={styles.navul}>
            <li className={styles.books}>
              <Link to="/">Books </Link>
            </li>
            <li className={styles.categories}>
              <Link to="/categories">Categories</Link>
            </li>
          </ul>
          <div className="icon-div">
            <Link to="/">
              <FaRegUserCircle className={styles.icon} />
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
