import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    searchedUsers: [],
    userInfo: null,
  },
  reducers: {
    setUsers(state, action) {
      state.users = action.payload;
    },
    setSearchedUsers(state, action) {
      state.searchedUsers = action.payload;
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
  },
});

export const { setUsers, setUserInfo, setSearchedUsers } = userSlice.actions;
export default userSlice.reducer;
