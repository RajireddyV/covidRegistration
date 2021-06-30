import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import registrationScreen from '../screens/registrationScreen';
import loginScreen from '../screens/loginScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Registration"
        component={registrationScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={loginScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
