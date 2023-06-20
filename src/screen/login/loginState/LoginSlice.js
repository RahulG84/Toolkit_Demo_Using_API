import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const loginAction = createAsyncThunk(
  'auth/login',
  async ({email, password}) => {
    try {
      const response = await fetch(
        `http://52.31.96.106/api/login?username=${email}&password=${password}`,
        {
          method: 'post',
        },
      );
      const data = await response.json();
      console.log(data);
      const result = data;
      console.log(result);
      return result;
    } catch (error) {
      throw new Error('Login failed');
    }
  },
);

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
    },
  },
  extraReducers: builder => {
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.status = action.payload.status;
      state.success = action.payload.success;
      state.token = action.payload.token;
      state.isLoading = false;
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

export const {logout} = LoginSlice.actions;
export default LoginSlice.reducer;

// superexaze@exazeit.com
// super@exaze
