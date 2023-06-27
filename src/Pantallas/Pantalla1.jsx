import { View, Text , Button, StyleSheet} from 'react-native'
import React from 'react'

const Pantalla1 = ({navigation}) => {
  return (
    <View style={styles.fondo} >
      <Text style={styles.texto} >Pantalla principal</Text>
      <Button title='vamos a Contenido' onPress={()=> navigation.navigate('Contenido')}  />
     
    </View>
  )
}

export default Pantalla1; 

const styles = StyleSheet.create({
  fondo: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  
    backgroundColor: 'gray'
  }, 

  texto: {
    fontSize: 30,
    fontWeight: 'bold', 
    padding: 20, 
    color: 'blue'
  }
});