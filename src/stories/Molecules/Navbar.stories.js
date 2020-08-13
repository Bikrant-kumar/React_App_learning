import React from 'react';
import { storiesOf } from '@storybook/react';
import Navbar from '../../Component/Molecules/Navbar';

storiesOf('Molecules/Navbar', module)

  .add('with default', () => {
    return (
      <Navbar />
    )
  }      
  )

