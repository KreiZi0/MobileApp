import React from 'react';
import { Image } from 'react-native'

import Splash from './src/screens/auth/Splash';
import Signup from './src/screens/auth/Signup';
import Signin from './src/screens/auth/Signin';

import Home from './src/screens/app/Home';
import Favorites from './src/screens/app/Favorites';
import Profile from './src/screens/app/Profile';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from './src/utils/colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const theme = {
  colors: {
    background: colors.white,
  },
};

const isSignedIn = true

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let icon;

        if (route.name == 'Home') {
          icon = focused
          ? require('./src/assets/tabs/home_active.png')
          : require('./src/assets/tabs/home.png');
        } else if (route.name == 'Favorites') {
          icon = focused
          ? require('./src/assets/tabs/favorite_active.png')
          : require('./src/assets/tabs/favorite.png');
        } else if (route.name == 'Profile') {
          icon = focused
          ? require('./src/assets/tabs/person_active.png')
          : require('./src/assets/tabs/person.png');
        }

        return <Image style={{width: 24, height: 24}} source={icon} />;
      },
      headerShown: false
    })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
      <Stack.Navigator>
        {
        isSignedIn ? (
          <>
            <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}} />
          </>
        ) : (
          <>
            <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
            <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}} />
            <Stack.Screen name="Signin" component={Signin} options={{headerShown: false}} />
          </>
        )  
        }    
      </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};


export default App;
