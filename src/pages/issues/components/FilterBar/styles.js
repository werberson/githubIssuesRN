import { StyleSheet } from 'react-native';

import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.clear,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 10,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 5,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.clear,
  },
  item: {
    opacity: 0.5,
    color: colors.darker,
    fontSize: fonts.small,
  },
  selectedItem: {
    opacity: 1,
    fontWeight: 'bold',
  },
});

export default styles;
