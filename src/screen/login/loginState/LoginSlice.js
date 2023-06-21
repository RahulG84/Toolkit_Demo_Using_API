import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginAction = createAsyncThunk(
  'login',
  async ({email, password}) => {
    try {
      const response = await fetch(
        `http://52.31.96.106/api/login?username=${email}&password=${password}`,
        {
          method: 'post',
        },
      );
      const data = await response.json();
      const result = data;
      console.log(result);
      await AsyncStorage.setItem('token', result.token);
      return result;
    } catch (error) {
      throw new Error('Login failed');
    }
  },
);

// export const storedToken = createAsyncThunk('getToken', async () => {
//   try {
//     const token = await AsyncStorage.getItem('tokne');
//     console.log('Stored-token', token);
//     return token;
//   } catch (error) {
//     console.log(error);
//   }
// });

// export const getToken = async () => {
//   try {
//     const token = await AsyncStorage.getItem('token');
//     return token;
//   } catch (error) {
//     console.log(error);
//   }
// };

const LoginSlice = createSlice({
  name: 'login',
  initialState: {
    token: null,
    status: null,
    success: false,
    isLoading: false,
  },
  reducers: {
    logout: (state, action) => {
      state.token = null;
      state.isLoading = false;
      AsyncStorage.removeItem('token');
    },
    getToken: async (state, action) => {
      const token = await AsyncStorage.getItem('token');
      return token;
    },
  },
  extraReducers: builder => {
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.status = action.payload.status;
      state.success = action.payload.success;
      state.token = action.payload.token;
      state.isLoading = true;
    });

    builder.addCase(loginAction.rejected, (state, action) => {
      state.token = null;
      state.isLoading = false;
    });
    builder.addCase(loginAction.pending, state => {
      state.token = null;
      state.isLoading = true;
    });
  },
});

export const {logout, getToken} = LoginSlice.actions;
export default LoginSlice.reducer;

// superexaze@exazeit.com
// super@exaze
