import React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import Header from './Header';

storiesOf('Header', module).add('default', () => <Header />);
