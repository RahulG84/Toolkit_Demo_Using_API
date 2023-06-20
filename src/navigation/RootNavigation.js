import React from 'react';
import {useSelector} from 'react-redux';
import Protectednavigation from './Protectednavigation';
import NonProtectednavigation from './NonProtectednavigation';

const RootNavigation = () => {
  const {token} = useSelector(state => state.loginReducer);
  return token ? <Protectednavigation /> : <NonProtectednavigation />;
};

export default RootNavigation;
