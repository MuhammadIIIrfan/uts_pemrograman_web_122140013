import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/articles">Articles</Link> | 
        <Link to="/ask">Ask</Link>
      </nav>
    </header>
  );
}
