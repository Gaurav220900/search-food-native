import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './src/screen/SearchScreen';
import ResultShowScreen from './src/screen/ResultShowScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Result" component={ResultShowScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}