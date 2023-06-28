import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import DrawerNavegacion from './src/Navegaciones/DrawerNavegacion';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-native-paper';

const App = () => {
  return (
    /*    estamos iniciando con una navegaciondo del componente drawer */

    <Provider>
      <NavigationContainer>
        <DrawerNavegacion />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
