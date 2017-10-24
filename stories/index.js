import React from 'react';
import styled from 'styled-components';
import color from 'color';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { setDefaults } from '@storybook/addon-info';

import { Welcome } from '@storybook/react/demo';

import { Button } from '../lib';

import * as colors from '../lib/styles/colors';
// console.log(colors);
const colorsArr = Object.keys(colors)
  .filter(color => color !== 'default')
  .map(color => {
    return {
      color: colors[color],
      name: color
    };
  });

const ColorPallete = styled.h3`
  font-size: 1.5rem;
  font-weight: lighter;
  font-family: sans-serif;
  background: ${props => props.bgColor};
  padding: 2rem;
  color: ${props => (color(props.bgColor).dark() ? 'white' : 'black')};
`;

const Colors = () => {
  return colorsArr.map((col, key) => {
    return (
      <ColorPallete key={key} bgColor={col.color}>
        {col.name} <br />
        <br />
        {col.color}
      </ColorPallete>
    );
  });
};

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Colors', module).add('Color Scheme', () => <Colors />);

storiesOf('Button', module)
  .add(
    'Default',
    withInfo('Default button with no background color')(() => (
      <Button onClick={action('clicked')}>Default Button</Button>
    ))
  )
  .add(
    'With Preset Background Color',
    withInfo('Preset Color')(() => <Button bgColor="info">Info Button</Button>)
  )
  .add(
    'With Custom Background Color',
    withInfo('Custom Background Color')(() => (
      <Button bgColor="#2980b9">Blue Button</Button>
    ))
  )
  .add(
    'Large',
    withInfo('Large Variant')(() => (
      <Button onClick={action('clicked')} bgColor="danger" large>
        Large Red Button
      </Button>
    ))
  )
  .add(
    'Small',
    withInfo('Small Variant')(() => (
      <Button onClick={action('clicked')} bgColor="success" small>
        Small Green Button
      </Button>
    ))
  )
  .add(
    'Block',
    withInfo('Block Variant')(() => (
      <Button onClick={action('clicked')} bgColor="darkPurple" block>
        Block Purple Button
      </Button>
    ))
  )
  .add(
    'Disabled',
    withInfo('Disabled Variant')(() => (
      <Button onClick={action('clicked')} bgColor="pink" disabled="true">
        Disabled Button
      </Button>
    ))
  )
  .add(
    'Outline',
    withInfo('Outline Variant')(() => (
      <Button onClick={action('clicked')} bgColor="darkGreen" outline>
        Outline Button
      </Button>
    ))
  )
  .add(
    'Loading',
    withInfo('Loading Variant')(() => (
      <Button onClick={action('clicked')} bgColor="blue" loading>
        Loading Button
      </Button>
    ))
  )
  .add(
    'with some emoji',
    withInfo('Emoji Variant')(() => (
      <Button onClick={action('clicked')} bgColor="lightBlue">
        😀 😎 👍 💯
      </Button>
    ))
  );
