import { StackNavigator } from 'react-navigation';

import Repositories from 'pages/repositories';

const RootNavigator = StackNavigator({
  Repositories: { screen: Repositories },
});

export default RootNavigator;
