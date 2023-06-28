import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Button, Banner} from 'react-native-paper';

const Contactos = ({navigation}) => {

  const [visible, setVisible] = React.useState(true);

  return (
    <View style={styles.fondo}>
      <Text style={styles.texto}>Estamos en Contactos</Text>
      <View>
        
      </View>
      <View style={{flex:1, justifyContent:'flex-end', padding: 20}}  >
        <Button
          title="Vamos a Inicio"
          mode="contained"
          theme={{colors: {primary: 'blue'}}}
          onPress={() => navigation.navigate('Inicio')}>
          
          Go to Inicio
        </Button>
      </View>
    </View>
  );
};

export default Contactos;

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',

    backgroundColor: '#F7CC2C',
  },

  texto: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 20,
    color: 'blue',
  },
});
