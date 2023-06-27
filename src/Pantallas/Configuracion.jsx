
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Catalogo from '../ScreenTab/Catalogo';
import Resultados from '../ScreenTab/Resultados';
import Vistas from '../ScreenTab/Vistas';


const Tab=createBottomTabNavigator()

/* Este componente es el componenete de las rutas del tab */
const Configuracion = () => {
  return (

    
    <Tab.Navigator  >
    <Tab.Screen name='Catalogo' component={Catalogo} />
    <Tab.Screen name='Resultados' component={Resultados} />
    <Tab.Screen name='Vistas' component={Vistas} />
 
</Tab.Navigator>
  );
};

export default Configuracion;
