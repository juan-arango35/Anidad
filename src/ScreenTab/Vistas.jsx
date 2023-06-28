import {View, StyleSheet} from 'react-native';
import React, { useState } from 'react';
import {Button, Dialog, Portal, Text} from 'react-native-paper';

const Vistas = ({navigation}) => {
  /* insertaremos un cuadro de dialogo de paper:  */

  const [visible, setVisible] = useState(false);
  

  const mostrar = () => setVisible(true);

  const ocultar = () => setVisible(false);

  return (
    <View style={styles.fondo}>
      <Text style={styles.texto}>Vistas</Text>
      <Button
        title="Vamos a Catalogo"
        icon="camera"
        theme={{colors: {primary: 'green'}}}
        mode="contained"
        onPress={() => navigation.navigate('Catalogo')}>
        
        Go to catalogo
      </Button>

 {/*      CUADRO DE DIALOGO */}
      <View style={{padding: 10, height: '20%', justifyContent:'flex-end'}}  >
        <Button  mode='contained' theme={{colors: {primary: 'blue'}}} onPress={mostrar}>OPCION  DE REGRESO</Button>
        <Portal>
          <Dialog visible={visible} onDismiss={ocultar}>
            <Dialog.Title>REGRESA A RESULTADOS</Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium">ESTAS SEGURO DE REGRESAR, A RESULTADOS, DE LO CONTRARIO HAGA CLICK EN LA PANTALLA</Text>
            </Dialog.Content>
            <Dialog.Actions>

              {/* AGREGAMOS DOS FUNCIONALIDADES DEL BOTON - IR A RESULTDOS Y OCULTAR EL CUADRO */}
              <Button onPress={()=>{
                ocultar(); 
                navigation.navigate('Resultados')
              }}>IR</Button>
       
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </View>
  );
};

export default Vistas;

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#9A7D0A',
  },

  texto: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 20,
    color: 'blue',
  },
});
