import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  txtWhite: {
    color: '#fff',
    fontWeight: 'bold',
  },

  /** ADMOB */
  admob: {
    backgroundColor: '#20232a',
    marginTop: 5,
  },

  /** COMPONENT GLOBAL */
  box: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    width: '100%',
    backgroundColor: '#20232a',
    padding: 15,
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 5,
  },
  buy: {
    backgroundColor: '#23DAFC',
  },
  sell: {
    backgroundColor: '#E64061',
  },
  boxCoin: {
    backgroundColor: '#20232a',
    width: '49.5%',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  money: {
    fontSize: 20,
  },
  txtMoney: {
    fontSize: 11,
    color: '#fff',
    textTransform: 'uppercase',
  },
});