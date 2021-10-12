import React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import TodoItem from './TodoItem';

storiesOf('TodoItem', module).add('default', () => <TodoItem item={{text:'todo item'}} />);
