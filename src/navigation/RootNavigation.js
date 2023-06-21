import React from 'react';
import {useSelector} from 'react-redux';
import Protectednavigation from './Protectednavigation';
import UnProtectednavigation from './UnProtectednavigation';

const RootNavigation = () => {
  const {token} = useSelector(state => state.loginReducer);
  return token ? <Protectednavigation /> : <UnProtectednavigation />;
};

export default RootNavigation;
