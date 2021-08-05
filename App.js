import React from 'react';
import Routes from './src/routes';
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
// import FlashMessage from 'react-native-flash-message';
import Pokemons from './src/screens/pokemons';
import PokemonDetail from './src/screens/pokemonDetail';

const App = () => {
  console.log('!!!!!APP');

  const bgColor = '#EEE';
  return (
    <Routes />
  );
};

export default App;
