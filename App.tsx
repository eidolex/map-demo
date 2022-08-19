import { useEffect, useMemo, useRef, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MapView, { Marker, Region, PROVIDER_GOOGLE } from 'react-native-maps';
import { getPokemons } from './api';
import { Pokemon } from './types';

const SearchItem: React.FC<{
  item: Pokemon,
  onPress: (item: Pokemon) => void
}> = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={() => onPress(item)}>
      <Text style={styles.itemText} >{item.name}</Text>
    </TouchableOpacity>
  );
}

export default function App() {

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState<string>("");
  const [inputFocus, setInputFocus] = useState<boolean>(false);
  const [region, setRegion] = useState<Region>({
    latitude: 16.7915509,
    longitude: 96.1686981,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })

  const inputRef = useRef<TextInput>();

  const filtered = useMemo<Pokemon[]>(() => {

    if (search == "") return [];

    const result = pokemons.filter(pokemon => pokemon.name.toLowerCase().startsWith(search.toLowerCase()));

    return result;
  }, [search]);

  useEffect(() => {
    getPokemons().then(setPokemons);
  }, [])

  return (
    <View style={styles.container}>
      <MapView provider={PROVIDER_GOOGLE} style={styles.map} region={region} >
        {pokemons.map(pokemon => {
          return (<Marker
            key={pokemon.id}
            title={pokemon.name}
            coordinate={{ latitude: pokemon.latitude, longitude: pokemon.longitude }}
            image={{ method: 'GET', uri: pokemon.image_url }}
          />)
        })}
      </MapView>

      <View style={styles.searchInputWrapper}>
        <TextInput ref={inputRef} style={styles.searchInput} onChangeText={(value) => setSearch(value)} onFocus={() => setInputFocus(true)} onBlur={() => setInputFocus(false)} />
      </View>

      {(search && inputFocus) && (
        <View style={styles.searchResultWrapper}>
          <FlatList keyboardShouldPersistTaps='handled' data={filtered} keyExtractor={item => item.id.toString()} renderItem={(item) => <SearchItem item={item.item} onPress={(item) => {
            setRegion({
              ...region,
              latitude: item.latitude,
              longitude: item.longitude
            });
            inputRef.current?.blur();
          }} />} />
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapWrapper: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  searchInputWrapper: {
    position: 'absolute',
    top: 24,
    left: 16,
    right: 16
  },
  searchInput: {
    width: "100%",
    height: 40,
    backgroundColor: 'white',
  },
  searchResultWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    maxHeight: 100,
    minHeight: 24,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 16
  },
  item: {
    height: 42,
  },
  itemText: {
    fontSize: 20,
    color: 'black',
  },
});