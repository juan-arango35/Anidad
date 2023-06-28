import { View, Text , StyleSheet} from 'react-native'
import React from 'react'; 
import { Button } from 'react-native-paper';

const Contenido = ({navigation}) => {
  return (
    <View style={styles.fondo}  >
      <Text style={styles.texto}  >ESTAMOS EN CONTENIDO</Text>
      <Button title='Vamos a Configuracion' mode='contained' theme={{ colors: { primary: 'blue' } }}  onPress={()=>navigation.navigate('Configuracion')} icon='account-circle'> Go to Configuracion </Button>
   
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
