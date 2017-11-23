import React, {Component} from 'react';

import {
  View,
  FlatList,
  AsyncStorage,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';

import EmptyList from 'components/EmptyList';
import Header from './components/Header';
import Repository from './components/Repository';
import styles from './styles';

export default class Repositories extends Component {

  static navigationOptions = {
    header: <Header />,
  };

  state = {
    repositories: [],
    loading: false,
    refreshing: false,
  };

  componentWillMount() {
    this.setState({ loading: true });
    this.loadRepositories().then(() => this.setState({ loading: false }));
  }

  loadRepositories = async () => {
    this.setState({ refreshing: true });

    const repositories = await AsyncStorage.getItem('@GithubIssues:repositories');

    this.setState({ repositories: repositories, refreshing: false });
  };

  renderList = () => (
    this.state.repositories && this.state.repositories.length
      ? this.renderRepositories()
      : (<EmptyList
          icon="github-alt"
          text="Nenhum repositório encontrado"
          instruction="Informe o nome do repositório na barra de pesquisa e clique no ícone + para salvar."
        />)
  );

  renderRepositories = () => (
    <FlatList
      refreshControl={
        <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this.loadRepositories}
        />
      }
      data={this.state.repositories}
      keyExtractor={repository => repository.id}
      renderItem={({ item }) => <Repository repository={item} />}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.loading
            ? <ActivityIndicator size="large" color="#999" style={styles.loading} />
            : this.renderList()
        }
      </View>
    );
  }
}
