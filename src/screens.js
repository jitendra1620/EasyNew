import {Navigation} from 'react-native-navigation';
export function registerScreens() {
    Navigation.registerComponent('AddJourney', () => require('./AddJourney').default);
    Navigation.registerComponent('Home', () => require('./Home').default);
    Navigation.registerComponent('Report', () => require('./Report').default);
    Navigation.registerComponent('YourDetail', () => require('./YourDetail').default);
  }