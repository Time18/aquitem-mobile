import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Alert, Text, TouchableOpacity } from 'react-native';
import { SearchBar, Avatar } from 'react-native-elements';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import StarRating from 'react-native-star-rating';

import api from '../../services/api';

import styles from './styles';
import { Store } from '../../types';

const Search = () => {
  const navigation = useNavigation();

  const [searchText, setSearchText] = useState('');
  const [cardVisible, setCardVisible] = useState(false);
  const [nearbyStores, setNearbyStores] = useState<Store[]>([]);
  const [selectedStore, setSelectedStore] = useState<Store>();

  const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    async function loadPosition() {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert('Tudo bem', 'Você ainda pode usar nossa caixa de pesquisa.');
        return;
      }
  
      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;

      setInitialPosition([latitude, longitude]);
    }
    loadPosition();
  }, []);

  useEffect(() => {
    api.get(`stores`).then(response => {
      if (response.data) {
        setNearbyStores(response.data);
      }
    });
  }, []);

  function handleSearch(text: string) {
    setSearchText(text);
    if (text.length >= 3) {
      api.get(`stores?name=${searchText}`).then(response => {
        if (response.data) {
          handleSelect(response.data[0]);
          setCardVisible(true);
        }
      });
    }
  }

  function handleSelect(store: Store) {
    setCardVisible(true);
    setSelectedStore(store);
  }

  function navigateToDetail() {
    navigation.navigate('Detail', {store: selectedStore});
  }

  return (
    <SafeAreaView>
      <View style={styles.header} />
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <SearchBar
            round
            lightTheme
            cancelIcon
            containerStyle={styles.searchBarContainerStyle}
            inputContainerStyle={styles.searchBarInputContainerStyle}
            searchIcon={{ size: 24 }}
            value={searchText}
            onChangeText={(text) => handleSearch(text)}
            placeholder="Pesquisar..."
          />
        </View>

        <View style={styles.mapContainer}>
          { initialPosition[0] !== 0 && (
            <MapView
              accessible
              mapType="standard"
              style={styles.map}
              loadingEnabled={initialPosition[0] === 0}
              initialRegion={{ 
                latitude: initialPosition[0],
                longitude: initialPosition[1],
                latitudeDelta: 0.007,
                longitudeDelta: 0.007
              }}
            >
              {nearbyStores.map(store => (
                <Marker      
                  key={String(store.id)}  
                  style={styles.mapMarker}
                  focusable
                  onPress={() => handleSelect(store)}
                  coordinate={{ 
                    latitude: store.latitude,
                    longitude: store.longitude,
                  }}
                >
                  <View style={styles.mapMarkerContainer}>
                    <Avatar
                      rounded
                      size='medium'
                      source={{uri: store.avatar}}
                    />
                    <Text style={styles.mapMarkerTitle}>{store.shortName.substring(0, 15)}</Text>
                  </View>
                </Marker>
              ))}
            </MapView>
          )}
        </View>

        {cardVisible && selectedStore && (
          <View style={styles.cardContainer}>
            <TouchableOpacity onPress={navigateToDetail}>
              <Icon name='chevron-up' size={32} color='#82277D' />
            </TouchableOpacity>
            <View style={styles.infoContainer}>
              <View style={styles.infoSubContainer}>
                <Avatar
                  rounded
                  size='xlarge'
                  source={{uri: selectedStore.avatar}}
                />
              </View>
              <View style={styles.infoSubContainer}>
                <Text style={styles.titleText}>{selectedStore.name.toUpperCase()}</Text>
                <View style={styles.starsContainer}>
                  <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={4.5}
                    fullStarColor="#FBDF00"
                    starSize={16}
                  />
                </View>
                <Text style={styles.statusText}>Aberto</Text>
              </View>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Search;
