import React, { useState } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, TouchableOpacity, SafeAreaView, Linking, Text, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import StarRating from 'react-native-star-rating';

import styles from './styles';
import { Avatar, Badge } from 'react-native-elements';
import { Store } from '../../types';

interface Params {
  store: Store;
}

const Detail = () => {
  const navigation = useNavigation();

  const route = useRoute();
  const routeParams = route.params as Params;
  const [store, setStore] = useState(routeParams.store);

  function handleNavigateBack() {
    navigation.goBack();
  }

  function handleWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=${
        551148377404
      }&text=Olá, te encontrei no AquiTem. Desejo fazer uma compra.`
    );
  }

  function handleMessenger() {
    Linking.openURL(
      `whatsapp://send?phone=${
        551148377404
      }&text=Olá, te encontrei no AquiTem. Desejo fazer uma compra.`
    );
  }

  function handleSMS() {
    Linking.openURL(
      `whatsapp://send?phone=${
        551148377404
      }&text=Olá, te encontrei no AquiTem. Desejo fazer uma compra.`
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header} />
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon name="arrow-left" size={32} color="#707070" />
        </TouchableOpacity>
        <View style={styles.infoContainer}>
          <View style={styles.bannerContainer}>
            <View style={styles.bannerSubContainer}>
              <Avatar
                rounded
                size='xlarge'
                source={{uri: store.avatar}}
              />
            </View>
            <View style={styles.bannerSubContainer}>
              <Text style={styles.titleText}>{store.name.toUpperCase()}</Text>

              <View style={styles.starsContainer}>
                <StarRating
                  disabled={true}
                  maxStars={5}
                  rating={store.rating}
                  fullStarColor="#FBDF00"
                  starSize={16}
                />
              </View>

              <View style={styles.statusContainer}>
                <Text style={styles.statusOpenText}>Aberto</Text>
                <Text style={styles.statusText}> - Fecha às </Text>
                <Text style={styles.statusCloseText}>21:00</Text>
              </View>
            </View>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitleText}>Descrição</Text>
            <Text style={styles.descriptionText}>
              {store.description}
            </Text>
          </View>

          <View style={styles.addressContainer}>
            <Text style={styles.addressTitleText}>Endereço: </Text>
            <Text style={styles.addressText}>{store.address}</Text>
          </View>

          <View style={styles.departamentContainer}>
            <Text style={styles.departamentTitleText}>Departamento: </Text>
            <Text style={styles.departamentText}>{store.departament}</Text>
          </View>

          <View style={styles.contactContainer}>
            <Text style={styles.contactText}>Entrar em contato</Text>
            <TouchableOpacity onPress={handleWhatsapp}>
              <Image source={require('../../../assets/whatsapp.png')} />  
            </TouchableOpacity>
            <TouchableOpacity onPress={handleMessenger}>
              <Image source={require('../../../assets/facebook.png')} />  
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSMS}>
              <Image source={require('../../../assets/facebook.png')} />  
            </TouchableOpacity>
          </View>

          <View style={styles.productsContainer}>
            <Text style={styles.productsTitleText}>
              Algumas coisas que você pode encontrar nesse estabelecimento
            </Text>
            {store.products
              .slice(0, 6)
              .map(product => (
                <Badge
                  key={product.id}
                  value={product.name}
                  badgeStyle={styles.badgeStyle} textStyle={styles.badgeTextStyle}
                />
              ))
            }
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Detail;
