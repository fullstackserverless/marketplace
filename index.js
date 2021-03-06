/**
 * @format
 */

import { AppRegistry, YellowBox } from 'react-native'
import App from './src'
import { name as appName } from './app.json'

YellowBox.ignoreWarnings([
  'Warning: AsyncStorage',
  'Warning: componentWillReceiveProps',
  'RCTRootView cancelTouches',
  'not authenticated',
  'Sending `onAnimatedValueUpdate`',
  'Animated: `useNativeDriver`',
  "Can't perform a React",
  '[WARN]',
  'Trying to load',
  'Setting a timer for a long period of time',
  'DataStore - Connection failed: {"errors":[{"message":"Validation error of type UnknownArgument: Unknown field argument owner'
])

AppRegistry.registerComponent(appName, () => App)
