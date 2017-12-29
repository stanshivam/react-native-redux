import React from 'react'
import { Text } from 'react-native'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
// import LoginScreen from '../components/LoginScreen'
import Login from '../components/login'
import SecuredScreen from '../components/secured'
import ForgottenPasswordScreen from '../components/ForgottenPasswordScreen'
import Screen1 from '../components/screen1'
import Screen2 from '../components/screen2'
import Start from '../components/start'
import SelectCrops from '../components/selectCrops'
import Constants from 'expo'


// drawer stack
const DrawerStack = DrawerNavigator({
  screen1: { screen: Screen1 },
  screen2: { screen: Screen2 },
})

const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: 'green'},
    title: 'Logged In to your app!',
    headerLeft: <Text onPress={() => navigation.navigate('DrawerOpen')}>Menu</Text>
  })
})

// login stack
const LoginStack = StackNavigator({
  loginScreen: { screen: Start },
  forgottenPasswordScreen: { 
    screen: ForgottenPasswordScreen, 
    navigationOptions: { 
      title: 'Forgot Password' 
    } 
  }
}, {
  headerMode: 'none',
  navigationOptions: {
    headerStyle: { marginTop: Constants.statusBarHeight, backgroundColor: 'red' },
    title: 'You are not logged in'
  } 
  
})

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  loginStack: { screen: LoginStack },
  drawerStack: { screen: DrawerNavigation },
  selectCrops: {screen: SelectCrops}
}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'loginStack'
})

export default PrimaryNav