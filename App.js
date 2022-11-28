
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Home } from './Home';
import { store } from './bll/store';
import {Provider} from 'react-redux';



 export const App = () => {

  return (
    <Provider store={store}>
    <Home/>
    </Provider>
  );
};

const styles = StyleSheet.create({

});


