import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../../Component/Atoms/Button';
import { action } from '@storybook/addon-actions';
import { withKnobs,text,boolean, color } from '@storybook/addon-knobs'; 

storiesOf('Atoms/Button', module)
  .addDecorator(withKnobs)

  .add('with primary', () => 
  <Button disabled={boolean("Disabled",false)} text={text("Label"," Button ")}
  style={{backgroundColor: color("color",'yellow')}}/> )

  .add('with outline', () => 
  <Button
    text="Ouline Button"
    style={{ background: 'transparent', borderColor: 'green' }}
  />)

  .add('with rounder corners', () => 
  <Button
    text="Rounded Button"
    style={{ borderRadius: '15px', float:'right', backgroundColor:'yellow' }}
    endIcon={"<DeleteIcon/>"}
  />)
