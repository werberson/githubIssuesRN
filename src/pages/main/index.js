import 'config/ReactotronConfig';

import React, { Component } from 'react';
import { View } from 'react-native';
import RootNavigator from 'navigation/routes';
import styles from './styles';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <RootNavigator />
      </View>
    );
  }
}

