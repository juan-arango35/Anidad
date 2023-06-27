import { View, Text, Button , StyleSheet} from 'react-native'
import React from 'react'


const Catalogo = ({navigation}) => {
  return (
    <View style={styles.fondo} >
      <Text style={styles.texto}  >Catalogo</Text>
      <Button title='Vamos a Resultados' onPress={()=>navigation.navigate('Resultados')} />
    </View>
  )
}

export default Catalogo; 

const styles = StyleSheet.create({
  fondo: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',

  
    backgroundColor: '#D64C3E'
  }, 

  texto: {
    fontSize: 30,
    fontWeight: 'bold', 
    padding: 20, 
    color: 'blue'
  }
});