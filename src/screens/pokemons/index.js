import React, {useEffect, useState} from 'react';
import {TouchableOpacity, FlatList, Text, View} from 'react-native';
import {styles} from './styles';
import {Search} from '../../components/Search';
import {Header} from '../../components/Header';
import api from '../../services/api';
import Spinner from 'react-native-loading-spinner-overlay';
import {flashError} from '../../services/utils';
import {useNavigation} from '@react-navigation/native';
import {Button} from '../../components/Button';

const Pokemons = () => {
  const navigation = useNavigation();

  const [count, setCount] = useState(0);
  const [next, setNext] = useState('');
  const [itens, setItens] = useState([]);
  const [loading, setLoading] = useState(false);
  const [messageLoading, setMessageLoading] = useState('Consultando...');

  const clearState = async () => {
    setItens([]);
    setCount(0);
    setNext('');
  };

  const getPokemons = async (query, page) => {
    setLoading(true);

    try {
      let url = 'pokemon';
      if (query && query != '') {
        url += '/' + query;
      }
      if (page) {
        url += '?' + page;
      }
      const {data} = await api.get(url);

      if (data) {
        if (query && query != '' && data.name) {
          setItens([{name: data.name}]);
        } else {
          if (data.results?.length > 0) {
            setItens(data.results);
          }
          if (data.count > 0) {
            setCount(data.count);
          }
          if (data.next) {
            setNext(data.next);
          }
        }

        setLoading(false);
      } else {
        flashError('Falha na consulta!');
        setLoading(false);
        clearState();
      }
    } catch (error) {
      flashError('Erro: ' + error);
      setLoading(false);
      clearState();
    }
  };

  const onSearch = query => {
    if (query && query != '') {
      getPokemons(query);
    } else {
      getPokemons();
    }
  };

  const handleClickPokemon = name => {
    navigation.navigate('PokemonDetail', {name: name});
  };

  const handleLoadMore = () => {
    if (next) {
      let page = next.split('?');
      getPokemons(null, page[1]);
    }
    // navigation.navigate('PokemonDetail', {name: name});
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <View>
      <Header />
      <Spinner
        visible={loading}
        textContent={messageLoading}
        textStyle={styles.spinnerTextStyle}
        overlayColor="rgba(0, 0, 0, 0.5)"
      />
      <Search onSearch={onSearch} />

      {itens && itens.length > 0 && (
        <FlatList
          style={styles.list}
          data={itens}
          keyExtractor={item => item.name}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.1}
          renderItem={({item, index}) => (
            <View style={styles.item} key={item?.name}>
              <TouchableOpacity
                onPress={() => {
                  handleClickPokemon(item?.name);
                }}>
                <Text style={styles.name}>{item?.name}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
{/* 
      <Button
        title="Carregar Mais"
        onPress={loadMore}
        style={styles.buttonMore}
      /> */}

      {(!itens || itens.length <= 0) && (
        <Text style={styles.noone}>Nenhum resultado a exibir</Text>
      )}

    </View>
  );
};

export default Pokemons;
