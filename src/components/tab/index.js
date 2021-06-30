import React from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import {
  FontAwesome,
  FontAwesome5,
  AntDesign,
  Fontisto
} from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { View } from 'react-native';

function Tab() {
  const navigation = useNavigation();

  function quote() {
    navigation.navigate('Quote')
  }

  function btnHome() {
    navigation.navigate('Home')
  }

  function btnReport() {
    navigation.navigate('Report')
  }

  function btnForm() {
    navigation.navigate('Rergister')
  }

  function btnContribution() {
    navigation.navigate('Contribution')
  }

  return (
    <View style={styles.tab}>
      <RectButton style={styles.tabBtns} onPress={quote}>
        <Fontisto name="money-symbol" size={24} color="white" />
      </RectButton>

      <RectButton style={styles.tabBtns} onPress={btnReport}>
        <FontAwesome name="th-list" size={23} color="white" />
      </RectButton>

      <RectButton style={styles.tabBtns} onPress={btnHome}>
        <FontAwesome name="home" size={29} color="white" />
      </RectButton>

      <RectButton style={styles.tabBtns} onPress={btnForm}>
        <AntDesign name="pluscircle" size={24} color="white" />
      </RectButton>

      <RectButton style={styles.tabBtns} onPress={btnContribution}>
        <FontAwesome5 name="piggy-bank" size={24} color="white" />
      </RectButton>
    </View>
  );
}

export default Tab;