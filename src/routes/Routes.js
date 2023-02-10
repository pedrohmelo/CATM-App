import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import LoginScreen from '../screens/LoginScreen'

import HomeScreen from '../screens/HomeScreen'
import DetailsScreen from '../screens/DetailsScreen'
import SettingsScreen from '../screens/SettingsScreen'
import { createStackNavigator } from '@react-navigation/stack';

import ToDoScreen from '../screens/ToDoScreen';
import DiaryScreen from '../screens/DiaryScreen';
import { ScreenStack } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';

import DescribeScreen from '../screens/DescribeScreen';

const LoginStack = createStackNavigator()
const Tab = createBottomTabNavigator();
const ScreensStack = createStackNavigator()
const DiaryStack = createStackNavigator()


function LoginNavigator(){
  return(
    <LoginStack.Navigator screenOptions={{ headerShown: false, animation: 'none', gestureEnabled: false }}>
      <LoginStack.Screen name="Login" component={LoginScreen} />
    </LoginStack.Navigator>
  )
}

function HomeNavigator() {
  return (
    <ScreensStack.Navigator screenOptions={{ headerShown: false, animation: 'none', gestureEnabled: false }}>
      <ScreensStack.Screen name="Home" component={HomeScreen} />
      <ScreensStack.Screen name="ToDo" component={ToDoScreen} />
      <ScreensStack.Screen name="Diary" component={DiaryScreen} />
    </ScreensStack.Navigator>
  );
}

function TabNavigator(){
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (route.name === 'Details') {
                iconName = focused ? 'ios-airplane' : 'ios-airplane-outline'
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Details" component={DetailsScreen} />
      </Tab.Navigator>
    )
}

function CalendarNavigator(){
  return(
    <DiaryStack.Navigator screenOptions={{ headerShown: false, animation: 'none', gestureEnabled: false }}>
      <DiaryStack.Screen name="DescribeScreen" component={DescribeScreen} />
    </DiaryStack.Navigator>
  )
}

export default function Routes(){
  return (
    <ScreensStack.Navigator screenOptions={{ headerShown: false, animation: 'none', gestureEnabled: false }}>
      <ScreensStack.Screen name={"LoginNavigator"} component={LoginNavigator} />
      <ScreensStack.Screen name={"TabNavigator"} component={TabNavigator} />
      <ScreensStack.Screen name={"HomeNavigator"} component={HomeNavigator} />
      <ScreensStack.Screen name={"CalendarNavigator"} component={CalendarNavigator} />
    </ScreensStack.Navigator>
  )
}