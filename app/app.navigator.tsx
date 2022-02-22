import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import  LoginScreen  from './screens/login/login.screen';
import { HomeScreen } from './screens/home/home.screen';
import { RegisterScreen } from './screens/register/register.screen';


const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
          <Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <Screen name="Login" component={LoginScreen}/>
            <Screen name="Home" component={HomeScreen}/>
            <Screen name="Register" component={RegisterScreen}/>
          </Navigator>
        </NavigationContainer>
      );
}

export default AppNavigator;
