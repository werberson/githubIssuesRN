import { StyleSheet } from 'react-native';
import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    padding: 20,
    borderRadius: 5,
    marginTop: 20,
    marginHorizontal: 20,
  },
  avatar: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: '#343',
    paddingLeft: 10,
    // alignItems: 'flex-start',
    // backgroundColor: '#000'
  },
  name: {
    color: colors.primary,
    fontSize: fonts.regular,
    fontWeight: 'bold',
  },
  owner: {
    fontSize: fonts.small,
    color: colors.inactive,
  },
  forwardIconContainer: {
    justifyContent: 'center',
  },
  forwardIcon: {
    color: colors.inactive,
    fontSize: 20,
  },
});

export default styles;