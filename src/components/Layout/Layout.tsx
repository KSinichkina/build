import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Overview from '../Overview';
import Form from '../Form';

import styles from './Layout.scss';

const Layout = () => (
  <div className={styles.layout}>
    <Helmet>
      <title>BigID-test</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    </Helmet>
    <Switch>
      <Route exact path='/' component={Overview}/>
      <Route exact path='/form' component={Form}/>
    </Switch>
  </div>
)

export default Layout;
