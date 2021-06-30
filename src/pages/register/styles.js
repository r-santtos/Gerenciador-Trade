import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  txtWhite: {color: '#fff'},

  /** COMPONENT FORM */
  form: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  inputMoney:{
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#20232a',
    marginVertical: 5,
    paddingHorizontal: 15,
  },
  txtCoin: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  inputs: {
    fontSize: 20,
    paddingLeft: 5,
    width: '100%',
    paddingVertical: 15,
  },
  btnDate: {
    width: '100%',
    backgroundColor: '#20232a',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txtDate: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  /** COMPONENT BTN POSITIVE AND NEGATIVE */
  boxBtns: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btns: {
    width: '49.5%',
    padding: 15,
    backgroundColor: '#20232a',
    borderRadius: 2,
  },
  btnPositivo: {
    backgroundColor: '#01FF97',
  },
  btnNegativo: {
    backgroundColor: '#E64061',
  },
  txtBtn: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});