import {View, Text} from 'react-native';
import React from 'react';

import Navigation from './src/navigation/Navigation';
import {Provider} from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
