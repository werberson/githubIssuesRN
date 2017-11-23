import React, { Component } from 'react';

import {
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import repositoryService from 'services/repositoryService';
import api from 'services/api';
import styles from './styles';

export default class Header extends Component {

  state = {
    repositoryName: '',
  };

  addRepository = async () => {
    if (this.state.repositoryName.length === 0) return;

    const response = await api.get(`/repos/${this.state.repositoryName}`);
    if (!response.ok) throw Error();

    // TODO filtrar attributes
    const repository = response.data;

    repositoryService.save(repository).then(result => console.tron.log(result));
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          placeholder="Adicionar repositório"
          onChangeText={(repositoryName) => { this.setState({ repositoryName }); }}
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
