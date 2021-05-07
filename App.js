import 'react-native-gesture-handler';

import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FirstPage from './components/pages/FirstPage';
import SecondPage from './components/pages/SecondPage';

import { FontAwesome } from '@expo/vector-icons';
import Subcat from './components/pages/SubCat';
// Import Custom Sidebar
import CustomSidebarMenu from './components/CustomSidebarMenu';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Left = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const Right = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row', marginRight: 10 }}>
      <TouchableOpacity>
        <FontAwesome name="search" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

function firstScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="FirstPage">
      <Stack.Screen
        name="FirstPage"
        component={FirstPage}
        options={{
          title: 'Home', //Set Header Title
          headerLeft: () => <Left navigationProps={navigation} />,
          headerRight: () => <Right navigationProps={navigation} />,
          headerStyle: {
            backgroundColor: '#ffd300', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="Subcat"
        component={Subcat}
        options={{
          title: 'Sub Categories', //Set Header Title
          headerLeft: () => <Left navigationProps={navigation} />,
          headerStyle: {
            backgroundColor: '#ffd300', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => <Left navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          title: 'Search Address', 
        }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen
          name="FirstPage"
          options={{ drawerLabel: 'Home' }}
          component={firstScreenStack}
        />
        <Drawer.Screen
          name="SecondPage"
          options={{ drawerLabel: 'Search' }}
          component={secondScreenStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
