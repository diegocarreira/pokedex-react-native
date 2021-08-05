import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

export const Button = ({title, onPress, style}) => {

  return (
    <TouchableOpacity style={{...styles.button, ...style}} onPress={onPress}>
      <Text style={{color: '#FFF'}}>{title || 'OK'}</Text>
    </TouchableOpacity>
  );
};

