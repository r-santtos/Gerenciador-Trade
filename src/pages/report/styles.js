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

  /** COMPONENT BALANCE */
  balance: {
    width: '100%',
    padding: 15,
    marginTop: 5,
    backgroundColor: '#20232a',
    borderBottomColor: '#000',
    borderBottomWidth: 5,
  },
  txtCoin : {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  txtMonth : {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#909090',
  },

  /** COMPONENT TITLE SCROLLVIEW */
  latestRecords: {
    width: '100%',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#20232a',
    marginBottom: 5,
  },
  scrollTitle: {
    fontSize: 20,
  },

  /** COMPONENT SCROLLVIEW */
  scrollView: {
    width: '100%',
  },
  box: {
    backgroundColor: '#20232a',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  boxMoney: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 15,
  },
  dollar: {
    textAlign: 'right',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  txtOptions: {
    color: '#909090',
    textAlign: 'left',
    textTransform: 'capitalize',
    fontSize: 11,
  },
  btnDell: {
    minHeight: 55,
    maxHeight: 55,
    minWidth: 55,
    maxWidth: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E64061',
  },
});