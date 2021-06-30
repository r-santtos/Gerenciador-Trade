import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../pages/home';
import Report from '../pages/report';
import Register from '../pages/register';
import Contribution from '../pages/contribution';
import Quote from '../pages/quote';

const { Navigator, Screen} = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen 
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Trade',
            headerStyle: {backgroundColor: '#20232a'},
            headerTintColor: '#fff',
          }}
        />

        <Screen
          name="Report"
          component={Report}
          options={{
            title: 'Extrato',
            headerStyle: {backgroundColor: '#20232a'},
            headerTintColor: '#fff',
          }}
        />

        <Screen
          name="Rergister"
          component={Register}
          options={{
            title: 'Registrar Trades',
            headerStyle: {backgroundColor: '#20232a'},
            headerTintColor: '#fff',
          }}
        />

        <Screen
          name="Contribution"
          component={Contribution}
          options={{
            title: 'Aportes e Retiradas',
            headerStyle: {backgroundColor: '#20232a'},
            headerTintColor: '#fff',
          }}
        />

        <Screen
          name="Quote"
          component={Quote}
          options={{
            title: 'Cotação',
            headerStyle: {backgroundColor: '#20232a'},
            headerTintColor: '#fff',
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;