import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '4%',
    backgroundColor: '#0096dc',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },

  button: {
    width: '70%',
    backgroundColor: '#82277d',
    borderRadius: 10,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },

  buttonText: {
    fontFamily: 'Roboto_400Regular',
    marginLeft: 8,
    color: '#FFF',
    fontSize: 20,
  },

  footer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 24,
  }
});

export default styles;
