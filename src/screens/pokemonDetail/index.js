import React, {useEffect, useState} from 'react';
import {Text, View, Image} from 'react-native';
import {styles} from './styles';
import api from '../../services/api';
import Spinner from 'react-native-loading-spinner-overlay';
import {flashError} from '../../services/utils';

const PokemonDetail = ({navigation, route}) => {
  const [details, setDetails] = useState({});
  const [photo, setPhoto] = useState(null);
  const [namePokemon, setNamePokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [messageLoading, setMessageLoading] = useState('Consultando...');

  const getPokemon = async name => {
    setLoading(true);

    try {
      const response = await api.get('pokemon/' + name);
      if (response?.data) {
        setDetails({
          type: response?.data?.types[0].type?.name || '',
          weight: response?.data?.weight || '',
          height: response?.data?.height || '',
          batles: response?.data?.game_indices?.length || null,
        });
        setPhoto(response?.data?.sprites?.front_default);
        setLoading(false);
      } else {
        flashError('Não foi possível localizar o pokemon');
        navigation.goBack();
        setLoading(false);
      }
    } catch (error) {
      flashError('Erro: ' + error);
      navigation.goBack();
      setLoading(false);
    }
  };

  useEffect(() => {
    if (route?.params?.name) {
      setNamePokemon(route?.params?.name);
      getPokemon(route?.params?.name);
    } else {
      flashError('Não foi possível localizar o pokemon');
      navigation.goBack();
    }
  }, []);

  return (
    <View>
      <Spinner
        visible={loading}
        textContent={messageLoading}
        textStyle={styles.spinnerTextStyle}
        overlayColor="rgba(0, 0, 0, 0.5)"
      />

      <View style={styles.containerInfos}>
        <View style={styles.info}>
          <Text style={styles.label}>Nome:</Text>
          <Text style={styles.text}>{namePokemon}</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.label}>Tipo:</Text>
          <Text style={styles.text}>{details?.type}</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.label}>Altura:</Text>
          <Text style={styles.text}>{details?.height}</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.label}>Peso:</Text>
          <Text style={styles.text}>{details?.weight}</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.label}>Número de batalhas:</Text>
          <Text style={styles.text}>{details?.batles}</Text>
        </View>

        <Image
          source={{
            uri: photo,
          }}
        />
      </View>
    </View>
  );
};

export default PokemonDetail;
