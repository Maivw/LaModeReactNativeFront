import * as React from 'react';
import {View, Text, Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/Home/HomeScreenCarousel';
import LoginScreen from '../screens/Home/LoginScreen';
import ProfileScreen from '../screens/Home/ProfileScreen';
import WishlistScreen from '../screens/Home/WishListScreen';
import CartScreen from '../screens/Home/CartScreen';
import ProductScreen from '../screens/Products/ProductScreen';
import DetailScreen from '../screens/Products/Detail';

const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();
const HomeStack = createStackNavigator();
Ionicons.loadFont();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Product" component={ProductScreen} />
      <HomeStack.Screen name="Detail" component={DetailScreen} />
    </HomeStack.Navigator>
  );
}

function MainStackScreen() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'HomeStack') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Wishlist') {
            iconName = focused ? 'heart' : 'ios-heart-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="HomeStack" component={HomeStackScreen} />
      <Tab.Screen name="Wishlist" component={WishlistScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" headerMode="none">
        <RootStack.Screen name="Main" component={MainStackScreen} />
        <RootStack.Screen name="MyModal" component={LoginScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
