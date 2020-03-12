import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@build/storybook';
import styles from './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Link to={`/`}>Overview</Link>
      <Link to={`/form`}>Form</Link>
      <Button>Hello Button</Button>
    </div>
  );
};

export default Sidebar;
