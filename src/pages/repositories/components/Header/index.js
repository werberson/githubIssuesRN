import React, { Component } from 'react';

import {
  View,
  TextInput,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default class Header extends Component {
  static propTypes = {
    handleAddRepository: PropTypes.func.isRequired,
  };

  state = {
    repositoryName: '',
    loading: false,
  };

  handleAddRepository = (name) => {
    this.setState({ loading: true });
    this.props.handleAddRepository(name)
      .then(() => this.setState({ repositoryName: '', loading: false }))
      .catch((error) => {
        this.setState({ loading: false });
        Alert.alert(
          'Atenção',
          error.message,
          [
            { text: 'OK' },
          ],
          { cancelable: false },
        );
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          placeholder="Adicionar repositório"
          value={this.state.repositoryName}
          onChangeText={(repositoryName) => { this.setState({ repositoryName }); }}
        />
        <View style={styles.addButtonContainer}>
          <TouchableOpacity onPress={() => this.handleAddRepository(this.state.repositoryName)}>
            {
              this.state.loading
                ? <ActivityIndicator size="small" color="#999" />
                : <Icon name="plus" style={styles.addIcon} />
            }
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
