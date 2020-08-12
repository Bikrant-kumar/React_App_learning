import React from 'react';
import { storiesOf } from '@storybook/react';
import InputField from '../../Component/Atoms/InputField';

storiesOf('Atoms/InputField', module)

  .add('Input Name', () => 
  <InputField placeholder='Item Name' value='' type='text' /> )

  .add('Input Cost',() => 
  <div className="center"><InputField placeholder='Cost' value='' type='number' /> </div> )