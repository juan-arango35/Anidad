import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Contenido from '../Pantallas/Contenido';

import Configuracion from '../Pantallas/Configuracion';
import Pantalla1 from '../Pantallas/Pantalla1';
import Perfil from '../Screens/Perfil';
import Catalogo from '../ScreenTab/Catalogo';
import Resultados from '../ScreenTab/Resultados';
import Vistas from '../ScreenTab/Vistas';

const Stack = createNativeStackNavigator();

const StackNavegacion = () => {
  return (
    <Stack.Navigator initialRouteName="Pantalla1">
      <Stack.Screen
        options={{headerShown: false}}
        name="Pantalla1"
        component={Pantalla1}
      />
      <Stack.Screen name="Contenido" component={Contenido} options={{headerShown: false}} />

      {/*  este es el componente donde se encuantra el tab */}
      <Stack.Screen
        name="Configuracion"
        component={Configuracion}
        /*   esto es para que se vea el boton de arriba y pueda regresar. */
        options={{headerShown: false}}
      />

      {/* el perfil esta concetado para que me lleve al componenete me lleva a la pantalla1 */}
      <Stack.Screen name="Perfil" component={Perfil}  />


     {/*  Esta es la anavegacion de las panatallas del tab. */}
      <Stack.Screen  name='Catalogo' component={Catalogo}  options={{headerShown: false}} />
      <Stack.Screen  name='Resultados' component={Resultados}  options={{headerShown: false}} />
      <Stack.Screen  name='Vistas' component={Vistas}  options={{headerShown: false}} />
      
    </Stack.Navigator>
  );
};

export default StackNavegacion;
