import React, {useState, useEffect} from 'react';
import styles from './styles';
import {
  SafeAreaView,
  View,
  Text,
  FlatList
} from 'react-native';
import Tab from '../../components/tab';
import * as SQLite from 'expo-sqlite';
import { RectButton } from 'react-native-gesture-handler';
import { useUpdateList } from '../../context/UpdateList';

/** DATABASE OPEN OR CREATE */
const db = SQLite.openDatabase("dbtrade", 1);

/** CALENDAR */
const monthDates = new Date();
const mesplus = monthDates.getMonth()+1;
const funMonth = monthDates.getMonth();
const funYear = monthDates.getFullYear();
const months = ["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];

/** COMPONENT REPORT */
function Report() {

  /** USESTATES */
  const [resposta, setResposta] = useState([]);
  const [month, setMoth] = useState([]);
  const [del, setDel] = useState(0);
  const { updateList, setUpdateList } = useUpdateList();

  /** FUNCTION UPDATELIST */
  function Count() {
    setUpdateList(updateList + 1);
  }

  /** DATABASE */
  useEffect(() => {
    db.transaction(
      tx => {
        tx.executeSql("select * from tradetb order by userdate desc limit 31", [], (_, { rows: { _array } }) => setResposta(_array));
        tx.executeSql("select id, sum(money) as total from tradetb where month = ? and year = ?", [mesplus, funYear], (_, { rows: { _array } }) => setMoth(_array));
      },
      null,
    );
  },[updateList]);

  /** CREATE COMPONENT BALANCE */
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
  
  /** FUNÇÃO CHAMADA QUANDO UM ITEM É DELETADO  */
  function Update() {
    db.transaction(
      tx => {
        tx.executeSql("select * from tradetb order by userdate desc limit 31", [], (_, { rows: { _array } }) => setResposta(_array));
      },
      null,
    );
  }

  /** FUNCTION DELETE REGISTER */
  useEffect(() => {
    db.transaction(
      tx => {
        tx.executeSql(`delete from tradetb where id = ?;`, [del]);
      },
      null,
    );
    Update();
    Count();
  },[del]);

  return (
    <SafeAreaView style={styles.container}>
      {/** COMPONENT BALANCE */}
      <View style={styles.balance}>
        <Text style={[styles.txtMonth]}>Saldo/{months[funMonth]}</Text>
        <CalcMonth />
      </View>

      {/** TITULO PARA LISTA */}
      <View style={styles.latestRecords}>
        <Text style={[styles.txtWhite, styles.scrollTitle]}>Últimos Registros</Text>
      </View>

      {/** COMPONENT LIST */}
      <FlatList
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 0}}
        data={resposta}
        keyExtractor={resposta => String(resposta.id)}
        renderItem={({ item }) => (
          <View style={styles.box}>
            <View style={styles.boxMoney}>
              <Text style={[styles.txtWhite, styles.dollar]}>
                {Intl.NumberFormat('pt-BR', { 
                  style: 'currency', 
                  currency: 'USD' 
                }).format(item.money)}
              </Text>
              <Text style={styles.txtOptions}>
                {item.options} - {item.day}/{item.month}/{item.year}
              </Text>
            </View>

            {/** COMPONENT BTN DEL */}
            <RectButton style={styles.btnDell} onPress={() => setDel(item.id)}>
              <Text style={styles.txtWhite}>X</Text>
            </RectButton>
          </View>
        )}
      />

      {/** COMPONENT TAB */}
      <Tab />
    </SafeAreaView>
  );
}

export default Report;