import React, { useEffect, useState } from 'react';
import styles from './styles';
import {
  SafeAreaView,
  View,
  Text
} from 'react-native';
import Tab from '../../components/tab';
import * as SQLite from 'expo-sqlite';
import { useUpdateList } from '../../context/UpdateList';

/** DATABASE OPEN OR CREATE */
const db = SQLite.openDatabase("dbtrade", 1);

/** CALENDAR */
const monthDates = new Date();
const mesplus = monthDates.getMonth()+1;
const funMonth = monthDates.getMonth();
const funLastMonth = monthDates.getMonth()-1;
const funYear = monthDates.getFullYear();
const months = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

/** CONTAINER APP */
function Home() {

  /** USESTATES */
  const [month, setMoth] = useState([]);
  const [year, setYear] = useState([]);
  const [lastMonth, setLastMonth] = useState([]);
  const [monthLast, setMonthLast] = useState([]);
  const { updateList, setUpdateList } = useUpdateList();

  /**FUNÇÃO TOTAL DO ANO E MÊS*/
  useEffect(() => {
    db.transaction(
      tx => {
        tx.executeSql("select id, sum(money) as total from tradetb where year = ?", [funYear], (_, { rows: { _array } }) => setYear(_array));

        tx.executeSql("select id, sum(money) as total from tradetb where month = ? and year = ?", [mesplus, funYear], (_, { rows: { _array } }) => setMoth(_array));
        
      },
      null,
    );
  },[updateList]);

  /**FUNÇÃO TOTAL DO MÊS PASSADO*/
  useEffect(() => {
    db.transaction(
      tx => {
        tx.executeSql("select id, sum(money) as total from tradetb where month = ? and year = ?", [funMonth, funYear], (_, { rows: { _array } }) => setLastMonth(_array));

        tx.executeSql("select id, sum(money) as total from tradetb where month = ? and year = ?", [funLastMonth, funYear], (_, { rows: { _array } }) => setMonthLast(_array));
      },
      null,
    );
  },[]);

  /** CREATE COMPONENT BALANCE LAST MONTH*/
  function LastMonth() {
    return (
      <>
        {lastMonth.map(({id, total}) => (
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
            }}
            key={id}
          >
          {Intl.NumberFormat('pt-BR', { 
            style: 'currency', 
            currency: 'USD' 
          }).format(total)}
          </Text>
        ))}
        <Text style={[styles.txtWhite, styles.txtMonthCoin]}>{months[funMonth - 1]}</Text>
      </>  
    );
  }


  /** CREATE COMPONENT BALANCE LAST MONTH*/
  function MonthLast() {
    return (
      <>
        {monthLast.map(({id, total}) => (
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
            }}
            key={id}
          >
          {Intl.NumberFormat('pt-BR', { 
            style: 'currency', 
            currency: 'USD' 
          }).format(total)}
          </Text>
        ))}
        <Text style={[styles.txtWhite, styles.txtMonthCoin]}>{months[funLastMonth - 1]}</Text>
      </>  
    );
  }

  /** CREATE COMPONENT BALANCE MONTH*/
  function CalcMonth() {
    return (
      <>
        {month.map(({id, total}) => (
          <Text
            style={{
              color: '#fff',
              fontSize: 22,
              fontWeight: 'bold',
            }}
            key={id}
          >
          {Intl.NumberFormat('pt-BR', { 
            style: 'currency', 
            currency: 'USD' 
          }).format(total)}
          </Text>
        ))}
      </>  
    );
  }

  /** CREATE COMPONENT BALANCE YEAR*/
  function CalcYear() {
    return (
      <>
        {year.map(({id, total}) => (
          <Text
            style={{
              color: '#fff',
              fontSize: 22,
              fontWeight: 'bold',
            }}
            key={id}
          >
          {Intl.NumberFormat('pt-BR', { 
            style: 'currency', 
            currency: 'USD' 
          }).format(total)}
          </Text>
        ))}
      </>  
    );
  }

  /** RETORNO DO APP */
  return (
    <SafeAreaView style={styles.container}>
      {/** COMPONENT INFORMATION MONTH */}
      <View style={styles.lastMonth}>
        <View style={styles.boxLastMonth}>
          <MonthLast />
        </View>

        <View style={styles.boxLastMonth}>
          <LastMonth />
        </View>
      </View>

      {/** COMPONENT BALANCE YEAR */}
      <View style={styles.balanceYear}>
        <View style={styles.informations}>
          <Text style={[styles.txtWhite, styles.txtYear]}>
            <CalcYear />
          </Text>
          <Text style={styles.txtBalanceYear}>2020</Text>
        </View>
      </View>

      {/** COMPONENT BALANCE MONTH */}
      <View style={styles.month}>
        <Text style={styles.txtMonth}>
          {months[mesplus - 1]}
        </Text>
        <Text style={[styles.txtWhite, styles.coinMonth]}>
          <CalcMonth />
        </Text>
      </View>

      {/** COMPONENT TAB */}
      <Tab />
    </SafeAreaView>
  );
}

export default Home;