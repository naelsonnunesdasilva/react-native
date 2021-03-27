import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function TelaHome({ navigation }){
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Canal')}
        title="Tela Canal"/>
    </View>
  );
}

function TelaCanal({ navigation }){
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.navigate('Home')} title="Tela Home" />
    </View>
  );
}

export default function App1() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={TelaHome} />
        <Stack.Screen name="Canal" component={TelaCanal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};