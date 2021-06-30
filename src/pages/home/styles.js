import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  txtWhite: { color: '#fff' },

  /** COMPONENT INFOR MONTH */
  lastMonth: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  boxLastMonth: {
    width: '49.5%',
    backgroundColor: '#20232a',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtCoin: {
    fontWeight: 'bold',
  },
  txtMonthCoin: {
    color: '#909090',
    fontSize: 12,
    fontWeight: 'bold',
  },

  /** COMPONENT BALANCE YEAR */
  balanceYear: {
    flex: 1,
    width: '100%',
    backgroundColor: '#20232a',
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  txtBalanceYear: {
    color: '#909090',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  txtTitle: {
    width: '100%',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 20,
  },
  informations: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtYear: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  /** COMPONENT BALANCE MONTH */
  month: {
    width: '100%',
    backgroundColor: '#20232a',
    marginBottom: 5,
    padding: 15,
  },
  txtMonth: {
    color: '#909090',
    fontWeight: 'bold',
  },
  coinMonth: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});