import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 

import LoginScreen from '../screens/LoginScreen'
import CreateAccountScreen from '../screens/CreateAccountScreen';

import HomeScreen from '../screens/HomeScreen'
import PerfilScreen from '../screens/PerfilScreen'
import SettingsScreen from '../screens/SettingsScreen'
import { createStackNavigator } from '@react-navigation/stack';

import ToDo3Screen from '../screens/ToDo3Screen';
import DiaryScreen from '../screens/DiaryScreen';
import { ScreenStack } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';

import DescribeScreen from '../screens/DescribeScreen';

import NewCalendar from '../screens/NewCalendar'

const LoginStack = createStackNavigator()
const AccountStack = createStackNavigator()
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

function AccountNavigator(){
  return(
    <AccountStack.Navigator screenOptions={{ headerShown: false, animation: 'none', gestureEnabled: false }}>
      <AccountStack.Screen name="CreateAccount" component={CreateAccountScreen} />
    </AccountStack.Navigator>
  )
}

function HomeNavigator(){
  return (
    <ScreensStack.Navigator screenOptions={{ headerShown: false, animation: 'none', gestureEnabled: false }}>
      <ScreensStack.Screen name="Home" component={HomeScreen} />
      <ScreensStack.Screen name="ToDo" component={ToDo3Screen} />
      <ScreensStack.Screen name="Diary" component={DiaryScreen} />
      {/* RETIRAR A LINHA ABAIXO DPS */}
      <ScreensStack.Screen name="NewCalendar" component={NewCalendar} /> 
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
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === 'Perfil') {
                iconName = focused ? 'user-alt' : 'user'
                return <FontAwesome5 name={iconName} size={size} color={color} />;
            }

            
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Perfil" component={PerfilScreen} />
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
      <ScreensStack.Screen name={"AccountNavigator"} component={AccountNavigator} />
      <ScreensStack.Screen name={"TabNavigator"} component={TabNavigator} />
      <ScreensStack.Screen name={"HomeNavigator"} component={HomeNavigator} />
      <ScreensStack.Screen name={"CalendarNavigator"} component={CalendarNavigator} />
    </ScreensStack.Navigator>
  )
}