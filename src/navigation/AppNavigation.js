import React from 'react';
import RootNavigation from './RootNavigation';
import {NavigationContainer} from '@react-navigation/native';

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}
