
import React from 'react';
/* import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; */
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Catalogo from '../ScreenTab/Catalogo';
import Resultados from '../ScreenTab/Resultados';
import Vistas from '../ScreenTab/Vistas';


/* const Tab=createBottomTabNavigator() */
const Tab = createMaterialBottomTabNavigator();


/* Este componente es el componenete de las rutas del tab */
const Configuracion = () => {
  return (

    
    <Tab.Navigator shifting={true}
    activeColor='#FFFFFF'
    inactiveColor='#A6A6A6'
    barStyle={{ backgroundColor: '#000000' }}  >
    <Tab.Screen name='Catalogo' component={Catalogo}  options={{
          tabBarIcon: ({ color }) => (
            <Icon name='format-list-bulleted' color={color} size={26} />
          ),
        }} />
    <Tab.Screen name='Resultados' component={Resultados} options={{
          tabBarIcon: ({ color }) => (
            <Icon name='check-circle' color={color} size={26} />
          ),
        }}  />
    <Tab.Screen name='Vistas' component={Vistas} options={{
          tabBarIcon: ({ color }) => (
            <Icon name='view-grid' color={color} size={26} />
          ),
        }} />
 
</Tab.Navigator>
  );
};

export default Configuracion;
