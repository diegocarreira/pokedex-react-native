import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  searchContainer: {
    justifyContent: 'space-around',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  searchText: {
    backgroundColor: '#FFF',
    borderColor: '#bbb',
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 6,
    width: '79%',
    height: 48,
  },
  buttonSearch: {
    paddingHorizontal: 8,
    backgroundColor: '#29F',
    borderRadius: 10,
    width: '19%',
    height: 48,
    lineHeight: 48,
    justifyContent: 'center',
    color: '#FFF',
  }
});
