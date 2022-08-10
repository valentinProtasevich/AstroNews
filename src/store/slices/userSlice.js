import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: null,
  email: null,
  token: null,
  id: null,
  userPhotoUrl: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.userName = action.payload.userName;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.userPhotoUrl = action.payload.userPhotoUrl;
    },
    removeUser(state) {
      state.userName = null;
      state.email = null;
      state.token = null;
      state.id = null;
      state.userPhotoUrl = null;
    },
  },
});

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;