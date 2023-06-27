import { View, Text, Button , StyleSheet} from 'react-native'
import React from 'react'

const Resultados = ({navigation}) => {
  return (
    <View style={styles.fondo} >
      <Text style={styles.texto} >Resultados</Text>
      <Button title='Vamos a vistas' onPress={()=>navigation.navigate('Vistas')} />
    </View>
  )
}

export default Resultados; 

const styles = StyleSheet.create({
  fondo: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',

  
    backgroundColor: '#6E605F'
  }, 

  texto: {
    fontSize: 30,
    fontWeight: 'bold', 
    padding: 20, 
    color: 'blue'
  }
});