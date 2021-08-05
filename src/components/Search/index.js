import React, {useState} from 'react';
import {View, TextInput} from 'react-native';

import {styles} from './styles';

import {Button} from '../Button';

export const Search = ({onSearch}) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query) ;
  }

  return (
    <View style={styles.searchContainer}>
      <TextInput
        value={query}
        style={styles.searchText}
        onChangeText={setQuery}
        placeholder="Digite o nome do pokemon aqui"
        editable={true}
        disabled={false}
      />
      <Button
        title="Buscar"
        onPress={handleSearch}
        style={styles.buttonSearch}
      />
    </View>
  );
};
