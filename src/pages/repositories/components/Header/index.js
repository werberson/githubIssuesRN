import React, { Component } from 'react';

import {
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from 'styles';
import styles from './styles';

export default class Header extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  };

  state = {
    username: '',
  };

  addRepository = async () => {

  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          placeholder="Adicionar repositório"
          onChangeText={(username) => { this.setState({ username }); }}
        />
        <View style={styles.addButtonContainer}>
          <TouchableOpacity onPress={this.addRepository}>
            <Icon name="plus" style={styles.addIcon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
