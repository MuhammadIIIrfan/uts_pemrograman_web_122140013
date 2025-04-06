import React from "react";
import { Link } from "react-router-dom";

// Font Awesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faNewspaper, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>
          <FontAwesomeIcon icon={faHome} /> Home
        </Link>
        <Link to="/articles" style={styles.link}>
          <FontAwesomeIcon icon={faNewspaper} /> Articles
        </Link>
        <Link to="/ask" style={styles.link}>
          <FontAwesomeIcon icon={faQuestionCircle} /> Ask
        </Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#2c2f33",
    padding: "10px 20px",
  },
  nav: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
  },
};

export default Header;
