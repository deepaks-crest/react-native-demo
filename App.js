import React, { useState } from 'react';
import { Button, View, Text, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { createStore } from 'redux';

const Stack = createStackNavigator();

const store = createStore(reducers);

function App() {
    return (
        <Provider store={store}>
             <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'My home' }}/>
                    <Stack.Screen name="Details" component={DetailsScreen} options={({ route }) => ({ title: route.params.name })}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default App;