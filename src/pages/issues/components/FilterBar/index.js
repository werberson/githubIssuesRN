import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import PropTypes from 'prop-types';
import styles from './styles';

const TabFilter = ({ filters, selectedValue, onChange }) => (
  <View style={styles.container}>
    {
      filters.map(filter => (
        <TouchableOpacity
          onPress={() => filter.value !== selectedValue && onChange(filter.value)}
          key={filter.value}
          style={[styles.itemContainer]}
        >
          <Text style={[styles.item, filter.value === selectedValue && styles.selectedItem]}>
            {filter.label}
          </Text>
        </TouchableOpacity>
      ))
    }
  </View>
);

TabFilter.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  selectedValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TabFilter;
