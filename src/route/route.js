import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';
import {useDispatch, useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

export default function Route() {
  const storedValue = useSelector(state => state.storage.value);

  return (
    <NavigationContainer>
      {storedValue ? (
        <Stack.Navigator>
          <Stack.Screen name="Second" component={SecondScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="First" component={FirstScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
