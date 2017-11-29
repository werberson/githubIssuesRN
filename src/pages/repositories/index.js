import React, { Component } from 'react';

import {
  View,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';

import PropTypes from 'prop-types';

import EmptyList from 'components/EmptyList';
import api from 'services/api';
import Header from './components/Header';
import Repository from './components/Repository';
import store from './store';
import styles from './styles';

export default class Repositories extends Component {
  static navigationOptions = {
    header: ({ scene }) => (
      <Header
        handleAddRepository={
          repositoryName => scene.route.params.handleAddRepository(repositoryName)
        }
      />
    ),
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      setParams: PropTypes.func,
    }).isRequired,
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

  componentDidMount() {
    this.props.navigation.setParams({ handleAddRepository: this.handleAddRepository });
  }

  loadRepositories = async () => {
    this.setState({ refreshing: true });

    const repositories = await store.list();

    this.setState({ repositories, refreshing: false });
  };

  handleNavigateToIssues(repository) {
    this.props.navigation.navigate('Issues', { repository });
  }

  handleAddRepository = async (repositoryName) => {
    if (repositoryName.length === 0) return;

    if (!/^.+?\/.+$/.test(repositoryName)) throw new Error('O nome do respositório é composto por owner/name');

    const response = await api.get(`/repos/${repositoryName}`);
    if (!response.ok) throw new Error('Repositório não encontrado.');

    const repository = {
      owner: {
        login: response.data.owner.login,
        avatar_url: response.data.owner.avatar_url,
      },
      id: response.data.id,
      name: response.data.name,
      issues_url: response.data.issues_url,
    };

    await store.save(repository);
    await this.loadRepositories();
  };

  renderList = () => (
    this.state.repositories.length
      ? this.renderRepositories()
      : (
        <EmptyList
          icon="github-alt"
          text="Nenhum repositório encontrado"
          instruction="Informe o nome do repositório na barra de pesquisa e clique no ícone + para salvar."
        />
      )
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
      renderItem={({ item }) =>
        <Repository repository={item} onPress={this.handleNavigateToIssues.bind(this)} />
      }
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
