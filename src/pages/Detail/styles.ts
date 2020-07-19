import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '4%',
    backgroundColor: '#0096dc',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  infoContainer: {
    fontFamily: 'Roboto_400Regular',
    alignSelf: 'center',
    marginTop: -8,
    paddingLeft: 8,
    paddingRight: 8,
    width: '95%',
    height: '100%',
  },

  bannerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  bannerSubContainer: {
    width: '50%'
  },

  starsContainer: {
    width: '40%',
    marginTop: 6,
    marginBottom: 6
  },

  descriptionContainer: {
    width: '90%'
  },

  titleText: {
    lineHeight: 26,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#707070'
  },

  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  statusOpenText: {
    lineHeight: 18,
    fontSize: 13,
    color: '#2DBE37'
  },

  statusText: {
    lineHeight: 18,
    fontSize: 13,
    color: '#707070'
  },

  statusCloseText: {
    lineHeight: 18,
    fontSize: 13,
    color: '#E34949'
  },

  descriptionTitleText: {
    fontWeight: 'bold',
    fontSize: 27,
    color: '#707070'
  },

  descriptionText: {
    marginTop: 8,
    lineHeight: 24,
    fontSize: 18,
    color: '#707070',
    textAlign: 'left'
  },

  addressContainer: {
    marginTop: 8,
    flexDirection: 'row',
  },

  addressTitleText: {
    fontWeight: 'bold',
    lineHeight: 24,
    fontSize: 16,
    color: '#707070',
    textAlign: 'left'
  },

  addressText: {
    lineHeight: 24,
    fontSize: 16,
    color: '#707070',
    textAlign: 'left'
  },

  departamentContainer: {
    marginTop: 8,
    flexDirection: 'row'
  },

  departamentTitleText: {
    fontWeight: 'bold',
    fontSize: 19,
    color: '#707070',
    textAlign: 'left'
  },

  departamentText: {
    fontWeight: 'bold',
    fontSize: 19,
    color: '#82277D',
    textAlign: 'left'
  },

  contactContainer: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  contactText: {
    fontWeight: 'bold',
    fontSize: 21,
    color: '#707070',
    textAlign: 'left',
  },

  productsContainer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    marginTop: 24,
    paddingTop: 16,
  },

  productsTitleText: {
    marginBottom: 8,
    fontWeight: 'bold',
    fontSize: 21,
    color: '#707070',
    textAlign: 'center',
  },

  badgeStyle: {
    margin: 4,
    backgroundColor: 'rgba(52, 52, 52, 0)',
    borderColor: '#707070',
    padding: 16
  },

  badgeTextStyle: {
    color: '#707070',
    fontSize: 18,
    margin: 16
  },

  container: {
    flex: 1,
    padding: 16,
    paddingTop: 16,
  },

  footer: {
    paddingVertical: 20,
    paddingHorizontal: 32,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  
  button: {
    width: '30%',
    backgroundColor: '#0096dc',
    borderRadius: 10,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    marginLeft: 8,
    color: '#FFF',
    fontSize: 16,
  },
});

export default styles;
