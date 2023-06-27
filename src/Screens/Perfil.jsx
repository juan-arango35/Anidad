import { View, Text, Button , StyleSheet} from 'react-native'
import React from 'react'



const Perfil = ({navigation}) => {
  return (
    <View style={styles.fondo} >
      <Text style={styles.texto} >Esramos en Perfil</Text>
      <Button title='go to Pantalla Principal'  onPress={()=>navigation.navigate('Pantalla1')}  />

    </View>
  )
}

export default Perfil; 


const styles = StyleSheet.create({
  fondo: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  
    backgroundColor: '#C92CF7'
  }, 

  texto: {
    fontSize: 30,
    fontWeight: 'bold', 
    padding: 20, 
    color: 'blue'
  }
});