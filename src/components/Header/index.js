import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

export const Header = ({title}) => {


  return (
    <View style={styles.view}>
      <Text style={styles.text}>{title || 'Pokedex'}</Text>
    </View>
  );
};

