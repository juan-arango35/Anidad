import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {Button, Dialog, Portal, Text} from 'react-native-paper';

const Catalogo = ({navigation}) => {
  /* 
  colocamos el estado de el cuadro scrrol:  */

  const [visible, setVisible] = React.useState(false);

  const mostrar = () => setVisible(true);
  const ocultar = () => setVisible(false);
  

  return (
    <View style={styles.fondo}>
      <Button  mode='contained' theme={{colors: {primary: 'green'}}}  onPress={mostrar}>cuadro de dialogo</Button>

    {/*   componenete del scroll */}
      <Portal>
        
        <Dialog visible={visible} onDismiss={ocultar}>
          <Dialog.ScrollArea style={{ maxHeight: 200, overflow: 'scroll' }}   >
            
            <ScrollView>
              <Text>Esto es un texto de prueba ademas no se que mas escribir ya que este este componenete no tiene la descripcion correcta para su fucnionamiento  seguro qeu ademas debe avgregarse otras cosas mas para que se muestre correctamente , de sde la ubicacion donde me encuantro actualmente son se muestra sisnoq ue tengo que colocar otras funcionalidades ademas , este componenete se puede adicionar de3 la atrdeete no tiene la descripcion correcta para su fucnionamiento  seguro qeu ademas debe avgregarse otras cosas mas para que se muestre correctamente , de sde la ubicacion donde me encuantro actualmente son se muestra sisnoq ue tengo que colocar otras funcionalidades ademas , este com te no tiene la descripcion correcta para su fucnionamiento  seguro qeu ademas debe avgregarse otras cosas mas para que se muestre correctamente , de sde la ubicacion u ademas debe avgregarse otras cosas mas para que se muestre correctamente , de sde la ubicacion donde me encuantro actualmente son se muestra sisnoq ue tengo que colocar otras funcionalidades ademas , este com te no tiene la descripcion correcta para su fucnionamiento  seguro qeu ademas debe avgregarse otras cosas mas para que se muestre correctamente , de sde la ubicacio donde me encuantro actualmente son se muestra sisnoq ue tengo que colocar otras funcionalidades ademas , este coponenete se puede adicionar de3 la atrde de otro componenete como el cuadro de texcto donde me manda a aotra pantalla, que adicinamios en la pantalla princupa  del otro compoenente, lue</Text>
            </ScrollView>
          </Dialog.ScrollArea>
          <Dialog.Actions>

        
              <Button  theme={{colors: {primary: 'green'}}} mode='contained' onPress={ocultar}>ocultar</Button>
       
            </Dialog.Actions>
        </Dialog>
       
      </Portal>

      <Text style={styles.texto}>Catalogo</Text>
      <Button
        title="Vamos a Resultados"
        mode="contained"
        theme={{colors: {primary: 'blue'}}}
        onPress={() => navigation.navigate('Resultados')}>
        {' '}
        Go to Resultados{' '}
      </Button>
    </View>
  );
};

export default Catalogo;

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#D64C3E',
  },

  texto: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 20,
    color: 'blue',
  },
});
