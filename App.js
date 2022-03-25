import { StyleSheet, Text, View } from 'react-native';
import Emergency from './screens/Emergency';
import Map from './screens/Map';
import Message from './screens/Message';
import PhoneBook from './screens/PhoneBook';
import Profile from './screens/Profile';
import {createDrawerNavigator} from 'react-navigation ';
import {createAppContainer} from 'react-navigation ';

const Drawer=createDrawerNavigator({
  Emergency:Emergency,
  Map:Map,
  Message:Message,
  PhoneBook:PhoneBook,
  Profile:Profile
})

const AppContainer =createAppContainer(Drawer)


export default function App() {
  return (
     <AppContainer>
       
     </AppContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
