import React, { useState, useEffect } from 'react';
import styles from './styles';
import {
  SafeAreaView,
  View,
  ScrollView,
  Text
} from 'react-native';
import Tab from '../../components/tab';
import {
  AdMobBanner
} from 'expo-ads-admob';

/** COMPONENT QUOTE */
function Quote() {

  /** USESTATES */
  const [dolarBuy, setDolarBuy] = useState('0');
  const [dolarSell, setDolarSell] = useState('0');
  
  const [euroBuy, setEuroBuy] = useState('0');
  const [euroSell, setEuroSell] = useState('0');
  
  const [libraBuy, setLibraBuy] = useState('0');
  const [libraSell, setLibraSell] = useState('0');
  
  const [bitcoinBuy, setBitcoinBuy] = useState('0');
  const [bitcoinSell, setBitcoinSell] = useState('0');
  
  const [pesoBuy, setPesoBuy] = useState('0');
  const [pesoSell, setPesoSell] = useState('0');

  /** CHAMADA API */
  useEffect(() => {
    fetch('https://api.hgbrasil.com/finance?array_limit=1&fields=currencies&key=568a710a')
    .then((response) => {
      return response.json();
    })
    .then(jsonBody => {
      try {
        /** DOLLAR */
        setDolarBuy(jsonBody.results.currencies.USD.buy)
        setDolarSell(jsonBody.results.currencies.USD.sell)

        /** EURO */
        setEuroBuy(jsonBody.results.currencies.EUR.buy)
        setEuroSell(jsonBody.results.currencies.EUR.sell)

        /** LIBRA */
        setLibraBuy(jsonBody.results.currencies.GBP.buy)
        setLibraSell(jsonBody.results.currencies.GBP.sell)

        /** BITCOIN */
        setBitcoinBuy(jsonBody.results.currencies.BTC.buy)
        setBitcoinSell(jsonBody.results.currencies.BTC.sell)

        /** PESO ARS */
        setPesoBuy(jsonBody.results.currencies.ARS.buy)
        setPesoSell(jsonBody.results.currencies.ARS.sell)

        console.log('api')
      } catch (error) {
        console.log('Erro na chamada api')
      }
    });
  },[])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.admob}>
        <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-9749684125060902/6061812091" // Test ID, Replace with your-admob-unit-id
          servePersonalizedAds // true or false
        />
      </View>
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 5,
        }}
      >
        {/** DOLLAR */}
        <Text style={[styles.txtWhite, styles.title]}>Dólar</Text>
        <View style={styles.box}>
          {/** DOLAR BUY */}
          <View style={[styles.boxCoin, styles.buy]}>
            <Text style={[styles.txtWhite, styles.money]}>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency', 
                  currency: 'BRL' 
                }).format(dolarBuy)}
            </Text>
            <Text style={[styles.txtWhite, styles.txtMoney]}>usd / brl / comprar</Text>
          </View>
          {/** DOLLAR SELL */}
          <View style={[styles.boxCoin, styles.sell]}>
            <Text style={[styles.txtWhite, styles.money]}>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency', 
                  currency: 'BRL' 
                }).format(dolarSell)}
            </Text>
            <Text style={[styles.txtWhite, styles.txtMoney]}>usd / brl / vender</Text>
          </View>
        </View>

        {/** EURO */}
        <Text style={[styles.txtWhite, styles.title]}>Euro</Text>
        <View style={styles.box}>
          {/** EURO BUY */}
          <View style={[styles.boxCoin, styles.buy]}>
            <Text style={[styles.txtWhite, styles.money]}>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency', 
                  currency: 'BRL' 
                }).format(euroBuy)}
            </Text>
            <Text style={[styles.txtWhite, styles.txtMoney]}>eur / brl / comprar</Text>
          </View>
          
          {/** EURO SELL */}
          <View style={[styles.boxCoin, styles.sell]}>
            <Text style={[styles.txtWhite, styles.money]}>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency', 
                  currency: 'BRL' 
                }).format(euroSell)}
            </Text>
            <Text style={[styles.txtWhite, styles.txtMoney]}>eur / brl / vender</Text>
          </View>
        </View>

        {/** LIBRA */}
        <Text style={[styles.txtWhite, styles.title]}>Libra</Text>
        <View style={styles.box}>
          {/** LIBRA BUY */}
          <View style={[styles.boxCoin, styles.buy]}>
            <Text style={[styles.txtWhite, styles.money]}>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency', 
                  currency: 'BRL' 
                }).format(libraBuy)}
            </Text>
            <Text style={[styles.txtWhite, styles.txtMoney]}>GBP / brl / comprar</Text>
          </View>
          
          {/** LIBRA SELL */}
          <View style={[styles.boxCoin, styles.sell]}>
            <Text style={[styles.txtWhite, styles.money]}>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency', 
                  currency: 'BRL' 
                }).format(libraSell)}
            </Text>
            <Text style={[styles.txtWhite, styles.txtMoney]}>GBP / brl / vender</Text>
          </View>
        </View>

        {/** BITCOIN */}
        <Text style={[styles.txtWhite, styles.title]}>Bitcoin</Text>
        <View style={styles.box}>
          {/** BITCOIN BUY */}
          <View style={[styles.boxCoin, styles.buy]}>
            <Text style={[styles.txtWhite, styles.money]}>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency', 
                  currency: 'BRL' 
                }).format(bitcoinBuy)}
            </Text>
            <Text style={[styles.txtWhite, styles.txtMoney]}>BTC / brl / comprar</Text>
          </View>
          
          {/** BITCOIN SELL */}
          <View style={[styles.boxCoin, styles.sell]}>
            <Text style={[styles.txtWhite, styles.money]}>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency', 
                  currency: 'BRL' 
                }).format(bitcoinSell)}
            </Text>
            <Text style={[styles.txtWhite, styles.txtMoney]}>BTC / brl / vender</Text>
          </View>
        </View>

        {/** PESO */}
        <Text style={[styles.txtWhite, styles.title]}>Peso</Text>
        <View style={styles.box}>
          {/** PESO BUY */}
          <View style={[styles.boxCoin, styles.buy]}>
            <Text style={[styles.txtWhite, styles.money]}>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency', 
                  currency: 'BRL' 
                }).format(pesoBuy)}
            </Text>
            <Text style={[styles.txtWhite, styles.txtMoney]}>ARS / brl / comprar</Text>
          </View>
          
          {/** PESO SELL */}
          <View style={[styles.boxCoin, styles.sell]}>
            <Text style={[styles.txtWhite, styles.money]}>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency', 
                  currency: 'BRL' 
                }).format(pesoSell)}
            </Text>
            <Text style={[styles.txtWhite, styles.txtMoney]}>ARS / brl / vender</Text>
          </View>
        </View>

      </ScrollView>

      {/** COMPONENT TAB */}
      <Tab />
    </SafeAreaView>
  );
}

export default Quote;