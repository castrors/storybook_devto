import React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import AddTodo from './AddTodo';

storiesOf('AddTodo', module).add('default', () => <AddTodo />);
