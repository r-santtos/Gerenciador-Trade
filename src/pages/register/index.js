import React, {useState, useEffect} from 'react';
import styles from './styles';
import {
  SafeAreaView,
  View,
  Text,
  Platform,
  Alert
} from 'react-native';
import Tab from '../../components/tab';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Fontisto } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import * as SQLite from 'expo-sqlite';

/** INPORT USER */
import Input from '../../components/input';
import { useUpdateList } from '../../context/UpdateList';

/** DATABASE OPEN OR CREATE */
const db = SQLite.openDatabase("dbtrade", 1);

/** COMPONENT REGISTER */
function Register() {

  /** FUNCTION UPDATELIST */
  const { updateList, setUpdateList } = useUpdateList();
  function Count() {
    setUpdateList(updateList + 1);
  }

  /** COMPONENT INPUT MONEY*/
  const [money, setMoney] = useState('');
  const numberFloat = money.replace(/\D/g, "").replace(/(\d)(\d{2})$/, "$1.$2");
  const negativo = numberFloat * -1;
  function handleCuston(value) {setMoney(value);}
  

  /** COMPONENT DATE TIME PICKER */
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  /**ADICIONE ZERO À ESQUERDA NA DATA ANTES DE EXIBIR NA TELA */
  const dia = ("0" + date.getDate()).slice(-2);
  const mesplus = date.getMonth()+1;
  const mes = ("0" + mesplus).slice(-2);
  const showView = `${dia}/${mes}/${date.getFullYear()}`

  /** CONVERTENDO DATE PARA STRING ANTES DE SALVA NO DB */
  const datestr = date.toString();

  /** DATE YEAR */
  const funYear = date.getFullYear();

  /** DATABASE FUNCTIONS */
  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(
        "create table if not exists tradetb (id integer primary key not null, money int not null, options text not null, day text not null, month int not null, year int not null, userdate text not null);"
      );
    });
  },[]);

  /** FUNCTIONS BTNS POSITIVE AND NEGATIVE*/
  const optionDayTrade = 'trade';
  function btnSubmitPositivo() {
    if (numberFloat == '') {
      Alert.alert("Campo valor vazio ", 'Por favor, preencha o valor');
    } else {
      db.transaction(
        tx => {
          tx.executeSql("insert into tradetb (money, options, day, month, year, userdate) values (?,?,?,?,?,?)", [numberFloat, optionDayTrade, dia, mes, funYear, datestr]);
        },
        null,
      );
      setMoney('');
      Count();
    }
  }
  /** NEGATIVE FUNCTION */
  function btnSubmitNegativo() {
    if (numberFloat == '') {
      Alert.alert("Campo valor vazio", 'Por favor, preencha com o valor.');
    } else {
      db.transaction(
        tx => {
          tx.executeSql("insert into tradetb (money, options, day, month, year, userdate) values (?,?,?,?,?,?)", [negativo, optionDayTrade, dia, mes, funYear, datestr]);
        },
        null,
      );
      setMoney('');
      Count();
    }
  }

  /** COMPONENT REGISTER */
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        {/** COMPONENT INPUT */}
        <View style={styles.inputMoney}>
          <Text style={[styles.txtWhite, styles.txtCoin]}>US$</Text>
          <Input
            style={[styles.inputs, styles.txtWhite]}
            value={money}
            placeholder='0,00'
            placeholderTextColor='#909090'
            keyboardType="decimal-pad"
            maxLength={14}
            inputMaskChange={(text) => handleCuston(text)}
          />
        </View>

        {/** COMPONENT DATE */}
        <View style={styles.btnDate}>
          <>
            <Text style={[styles.txtWhite, styles.txtDate]}>
              {showView}
            </Text>
          </>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
          <Fontisto 
            name="date" 
            size={24} 
            color="white" 
            onPress={showDatepicker} 
          />
        </View>
      </View>

      {/** COMPONENT BTNS */}
      <View style={styles.boxBtns}>
        <RectButton style={[styles.btns, styles.btnNegativo]} onPress={btnSubmitNegativo}>
          <Text style={[styles.txtWhite, styles.txtBtn]}>Negativo</Text>
        </RectButton>
        
        <RectButton style={[styles.btns, styles.btnPositivo]} onPress={btnSubmitPositivo}>
          <Text style={[styles.txtWhite, styles.txtBtn]}>Positivo</Text>
        </RectButton>
      </View>

      {/** COMPONENT TAB */}
      <Tab />
    </SafeAreaView>
  );
}

export default Register;