import React from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const Home = () => {
  const navigation = useNavigation();

  function navigateToSearch() {
    navigation.navigate('Search');
  }
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header} />
      <View style={styles.footer}>
        <RectButton
          style={styles.button}
          onPress={navigateToSearch}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </RectButton>
      </View>
    </SafeAreaView>
  );
};

export default Home;
