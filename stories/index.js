import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

import { Button } from '../lib';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
  .add('Default', () => (
    <Button onClick={action('clicked')}>Default Button</Button>
  ))
  .add('With Background Color', () => (
    <Button onClick={action('clicked')} bgColor="#2980b9">
      Blue Button
    </Button>
  ))
  .add('Large', () => (
    <Button onClick={action('clicked')} bgColor="#e74c3c" large>
      Large Red Button
    </Button>
  ))
  .add('Small', () => (
    <Button onClick={action('clicked')} bgColor="#27ae60" small>
      Small Green Button
    </Button>
  ))
  .add('Block', () => (
    <Button onClick={action('clicked')} bgColor="#9b59b6" block>
      Block Purple Button
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));
