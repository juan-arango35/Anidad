import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import DrawerNavegacion from './src/Navegaciones/DrawerNavegacion';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (

 /*    estamos iniciando con una navegaciondo del componente drawer */
    <NavigationContainer>
      <DrawerNavegacion />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
