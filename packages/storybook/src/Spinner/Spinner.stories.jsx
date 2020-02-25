import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Spinner from '../Spinner';

// eslint-disable-next-line no-undef
storiesOf('Genneral', module)
  .addDecorator(withKnobs)
  .add('Spinner', () => {
    return <Spinner />;
  });
