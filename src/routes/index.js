import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';
import Pokemons from '../screens/pokemons';
import PokemonDetail from '../screens/pokemonDetail';

const Stack = createStackNavigator();
console.log('routesss');
function Routes() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Pokemons"
            component={Pokemons}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PokemonDetail"
            component={PokemonDetail}
            options={{title: 'Detalhes'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <FlashMessage position="top" />
    </SafeAreaProvider>
  );
}

export default Routes;
