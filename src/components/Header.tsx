import React, { VFC, HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { links } from '../Route';

const Header: VFC<HTMLAttributes<HTMLDivElement>> = ({ ...attributes }) => (
  <header {...attributes}>
    <h1>
      <Link to={links.home}>{process.env.REACT_APP_NAME}</Link>
    </h1>
    <nav className="navbar">
      <Link to={links.home}>HOME</Link> | <Link to={links.counter}>COUNTER</Link> | <Link to={links.NotFound}>404</Link>
    </nav>
  </header>
);

export default Header;
