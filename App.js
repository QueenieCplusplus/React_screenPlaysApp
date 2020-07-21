// 2020, 7/21, pm 5:30 - 6:10
// Navigation Screen 過場功能

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import KatesScreen from './Screen/kate';
import QueenieScreen from './Screen/q';
import PoupouScreen from './Screen/poupou';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Page2" component={KatesScreen} options={{ title: 'Touch' }} />
        <Stack.Screen name="Page3" component={QueenieScreen} options={{ title: 'Feel' }} />
        <Stack.Screen name="Page1" component={PoupouScreen} options={{ title: 'Listen' }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

