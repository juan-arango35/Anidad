import { View, Text , Button, StyleSheet} from 'react-native'
import React from 'react'

const Contenido = ({navigation}) => {
  return (
    <View style={styles.fondo}  >
      <Text style={styles.texto}  >ESTAMOS EN CONTENIDO</Text>
      <Button title='Vamos a Configuracion' onPress={()=>navigation.navigate('Configuracion')} />
   
    </View>
  )
}

export default Contenido; 

const styles = StyleSheet.create({
  fondo: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',

  
    backgroundColor: 'green'
  }, 

  texto: {
    fontSize: 30,
    fontWeight: 'bold', 
    padding: 20, 
    color: 'blue'
  }
});
