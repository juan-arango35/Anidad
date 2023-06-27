import { View, Text ,Button, StyleSheet} from 'react-native'
import React from 'react'

const Contactos = ({navigation}) => {
  return (
    <View style={styles.fondo} >
      <Text  style={styles.texto} >Estamos en Contactos</Text>
    <Button  title='Vamos a Inicio' onPress={()=> navigation.navigate('Inicio')}  />
    </View>
  )
}

export default Contactos; 


const styles = StyleSheet.create({
  fondo: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  
    backgroundColor: '#F7CC2C'
  }, 

  texto: {
    fontSize: 30,
    fontWeight: 'bold', 
    padding: 20, 
    color: 'blue'
  }
});