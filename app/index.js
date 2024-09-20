import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './Screen1';
import Screen2 from './Screen2';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
            options={{ headerStyle: { height: 60 } }}
            name="Home"
            component={Screen1}
            />
            <Stack.Screen name="ChonMau" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}