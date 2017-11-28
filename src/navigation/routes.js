import { StackNavigator } from 'react-navigation';

import Repositories from 'pages/repositories';
import Issues from 'pages/issues';

const RootNavigator = StackNavigator({
  Repositories: { screen: Repositories },
  Issues: { screen: Issues },
});

export default RootNavigator;
