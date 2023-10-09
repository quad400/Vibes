import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Onboarding from '../screens/Onboarding';
import Authentication from '../screens/Authentication';


const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        
        <Stack.Screen name="Authentication" component={Authentication} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
  )
}

export default MainNavigation