/**
 * Created by joni on 30/11/16.
 */
import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import Button from './Button';

storiesOf('Button', module)
  .add('Basic Button', () => (
    <Button onClick={() => action('kliksuti')}>Lorem Ipsum</Button>
  ))
  .add('Disabled Button', () => (
    <Button disabled onClick={() => action('block kliksuti')}>Lorem Ipsum</Button>
  ))
  .add('Block Button', () => (
    <Button block onClick={() => action('block kliksuti')}>Lorem Ipsum</Button>
  ))
  .add('Disabled Block Button', () => (
    <Button block disabled onClick={() => action('block kliksuti')}>Lorem Ipsum</Button>
  ))
;
