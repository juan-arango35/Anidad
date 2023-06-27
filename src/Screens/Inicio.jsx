import { View, Text , Button, StyleSheet} from 'react-native'
import React from 'react'

const Inicio = ({navigation}) => {
  return (
    <View style={styles.fondo} >
      <Text style={styles.texto} >Esramos en Inicio</Text>
      <Button title='Vamos a Perfil'  onPress={()=>navigation.navigate('Perfil')} />
    </View>
  )
}

export default Inicio; 


const styles = StyleSheet.create({
  fondo: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  
    backgroundColor: '#2CF7DE'
  }, 

  texto: {
    fontSize: 30,
    fontWeight: 'bold', 
    padding: 20, 
    color: 'blue'
  }
});