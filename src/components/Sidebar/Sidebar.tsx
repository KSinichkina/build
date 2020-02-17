import * as React from 'react';
import { Link } from 'react-router-dom';

import styles from './Sidebar.scss';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
          <Link to={`/`}>Overview</Link>
          <Link to={`/form`}>Form</Link>
        </div>
    );
}

export default Sidebar;