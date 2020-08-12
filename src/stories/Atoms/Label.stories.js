import React from 'react';
import { storiesOf } from '@storybook/react';
import Label from '../../Component/Atoms/Label';
import { withKnobs,text, color } from '@storybook/addon-knobs';

storiesOf('Atoms/Label', module)
  .addDecorator(withKnobs)

  .add('Restaurant Title', () => 
  <h3><Label text={text("Label"," My Restaurant ")} 
    style={{color: color("color",'blue')}}
  /></h3> )

  .add('Item Name',()=> 
  <Label text={text("Label"," Biryani ")} /> )