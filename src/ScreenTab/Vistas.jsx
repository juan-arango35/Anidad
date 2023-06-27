import { View, Text, Button , StyleSheet} from 'react-native'
import React from 'react'

const Vistas = ({navigation}) => {
  return (
    <View style={styles.fondo} >
      <Text style={styles.texto}  >Vistas</Text>
      <Button title='Vamos a Catalogo' onPress={()=>navigation.navigate('Catalogo')} />
    </View>
  )
}

export default Vistas; 

const styles = StyleSheet.create({
  fondo: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',

  
    backgroundColor: '#9A7D0A'
  }, 

  texto: {
    fontSize: 30,
    fontWeight: 'bold', 
    padding: 20, 
    color: 'blue'
  }
});