import { NavigationContainer } from '@react-navigation/native';
import {  createNativeStackNavigator } from '@react-navigation/native-stack';
import Math from './Components/Math'
import History from './Components/History'
const Tab = createNativeStackNavigator();


export default function App() {
  return (
<NavigationContainer>
  <Tab.Navigator>
    <Tab.Screen name="Calculator" component={Math} />
    <Tab.Screen name="History" component={History} />
  </Tab.Navigator>
</NavigationContainer>
  );
};
