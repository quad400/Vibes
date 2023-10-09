import { View, Text } from 'react-native'
import React from 'react'
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS } from '../../constants'
import Player from '../screens/Player'
import { Entypo, Feather } from '@expo/vector-icons'
import Home from '../screens/Home'
import Search from '../screens/Search'

const Tabs = createBottomTabNavigator()

const BottomNav = () => {
  return (
    <Tabs.Navigator screenOptions={{
        headerShown: false,
        tabBarStyle: {
            backgroundColor: COLORS.darkGray
        }
        
    }}
    tabBar={(props)=> (
        <View>
            <BottomTabBar {...props} />
            <Player />
        </View>
    )}
    >
        <Tabs.Screen name='home' component={Home} options={{
            title: "Home",
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => 
            <Entypo name="home" size={24} color={focused ? COLORS.light :  "gray"} />
        }} />
        <Tabs.Screen name='search' component={Search} options={{
            title: "Search",
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => 
            <Feather name="search" size={24} color={focused ? COLORS.light :  "gray"} />
        }} />
    </Tabs.Navigator>
  )
}

export default BottomNav