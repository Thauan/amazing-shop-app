import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Main from '~/pages/Main';
import BootScreen from '~/pages/BootScreen';

const Routes = createAppContainer(
  createSwitchNavigator({
    BootScreen,
    Main,
  }),
);

export default Routes;
