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

  searchContainer: {
    paddingTop: 16,
    fontFamily: 'Roboto_400Regular',
    alignSelf: 'center',
    width: '90%',
    zIndex: 1,
  },

  container: {
    height: '100%',
  },

  mapContainer: {
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },

  map: {
    width: '100%',
    height: '100%',
  },

  mapMarker: {
    width: 90,
    height: 80,
  },

  mapMarkerContainer: {
    width: 90,
    height: 70,
    backgroundColor: '#d4d4d4',
    flexDirection: 'column',
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'center'
  },

  mapMarkerTitle: {
    flex: 1,
    fontFamily: 'Roboto_400Regular',
    fontWeight: 'bold',
    color: '#82277D',
    marginTop: -6,
    fontSize: 13,
    lineHeight: 23,
  },

  cardContainer: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 80,
    zIndex: 1,
    height: 200,
    width: '100%',
    borderRadius: 50,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  infoContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },

  titleText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#707070'
  },

  statusText: {
    fontSize: 13,
    color: '#2DBE37'
  }
});

export default styles;
