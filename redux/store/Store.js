import {configureStore} from '@reduxjs/toolkit';
import loginReducer from '../../src/screen/login/loginState/LoginSlice';

const Store = configureStore({
  reducer: {
    loginReducer: loginReducer,
  },
});

export default Store;
