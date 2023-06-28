import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Button, Searchbar} from 'react-native-paper';

const Resultados = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={styles.fondo}>
    <Searchbar
          placeholder="Buscar"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{height: '10%', with:'60%'}}
        />
      <Text style={styles.texto}>Resultados</Text>
      <Button
        title="Vamos a vistas"
        mode="contained"
        theme={{colors: {primary: 'blue'}}}
        onPress={() => navigation.navigate('Vistas')}>
        
        Go to a vistas
      </Button>
    </View>
  );
};

export default Resultados;

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding:20,

    backgroundColor: '#6E605F',
  },

  texto: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 40,
    color: 'blue',
  },
});
