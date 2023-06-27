import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Inicio from '../Screens/Inicio';
import Perfil from '../Screens/Perfil';
import Contactos from '../Screens/Contactos';
import StackNavegacion from './StackNavegacion';

const Drawer = createDrawerNavigator();

const DrawerNavegacion = () => {
  return (
    <Drawer.Navigator>
     {/*  importamos los componentes y tambien el componenete donde haremos la navegacion del stack en este caso es el stackNavgacion- estos son elementos del drawer */}
      <Drawer.Screen name="StackNavegacion" component={StackNavegacion} />
      <Drawer.Screen name="Inicio" component={Inicio} />
      <Drawer.Screen name="Perfil" component={Perfil} />
      <Drawer.Screen name="Contactos" component={Contactos} />
    </Drawer.Navigator>
  );
};

export default DrawerNavegacion;
