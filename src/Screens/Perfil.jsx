import { View, Text, StyleSheet} from 'react-native'
import React from 'react'; 
import { Button } from 'react-native-paper';



const Perfil = ({navigation}) => {
  return (
    <View style={styles.fondo} >
      <Text style={styles.texto} >Esramos en Perfil</Text>
      <Button title='go to Pantalla Principal'  mode='contained'    theme={{ colors: { primary: 'blue' } }} onPress={()=>navigation.navigate('Pantalla1')}  > Go to Pantalla Principal </Button>

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