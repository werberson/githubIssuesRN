import { StyleSheet } from 'react-native';
import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 5,
    marginTop: 20,
    marginHorizontal: 20,
  },
  avatar: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
    borderRadius: 22.5,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  title: {
    color: colors.dark,
    fontSize: fonts.regular,
    fontWeight: 'bold',
    paddingRight: 15,
  },
  login: {
    fontSize: fonts.small,
    color: colors.grey,
  },
  forwardIconContainer: {
    justifyContent: 'center',
  },
  forwardIcon: {
    color: colors.grey,
    fontSize: 20,
  },
});

export default styles;
