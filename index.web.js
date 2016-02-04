/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import App from './app/views/app'

import React, {
  AppRegistry,
} from 'react-native'

AppRegistry.registerComponent('SampleApp', () => App);

var app = document.createElement('div');
document.body.appendChild(app);

AppRegistry.runApplication('SampleApp', {
  rootTag: app
})
