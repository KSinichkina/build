import * as React from 'react';
import Layout from '../Layout';
import Sidebar from '../Sidebar';
import styles from './App.scss';

const App = () => (
    <div className={styles.body}>
      <Sidebar />
      <Layout />
    </div>
  )

export default App;