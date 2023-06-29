import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel';
import {Button} from 'react-native-paper';

import {Image} from 'react-native';

const Inicio = ({navigation}) => {
  const width = Dimensions.get('window').width;

  const images = [
    require('../assets/paisaje1.jpeg'),
    require('../assets/paisaje2.jpg'),
    require('../assets/paisaje3.jpeg'),
    require('../assets/paisaje4.jpg'),
    require('../assets/paisaje5.jpg'),
    require('../assets/paisaje6.jpg'),
  ];

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      {/*       caja principal */}
      <View style={styles.fondo}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: '#FB1F09',
            padding: 20,
          }}>
          Carrusel de Paisajes
        </Text>
        <Carousel
          loop
          vertical={true}
          width={width}
          height={width / 2}
          autoPlay={true}
          data={images}
          scrollAnimationDuration={2000}
          renderItem={({item}) => (
            <View style={{flex: 1, borderWith: 1, justifyContent: 'center'}}>
              <Image
                source={item}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 25,
                  padding: 10,
                  borderColor: 'white',
                }}
                resizeMode="cover"
              />
            </View>
          )}
        />

        <View style={styles.textobajo}>
          <Text style={styles.texto}>Estamos en Inicio</Text>
          <Button
            title="Vamos a Perfil"
            onPress={() => navigation.navigate('Perfil')}
            mode="contained"
            theme={{colors: {primary: 'blue'}}}>
            Go to Perfil
          </Button>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default Inicio;

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    justifyContent: 'center',

    alignItems: 'center',

    backgroundColor: '#2CF7DE',
  },

  texto: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 20,
    color: 'blue',
  },
  textobajo: {
    flex: 0.5,

    justifyContent: 'flex-end',
  },
});
