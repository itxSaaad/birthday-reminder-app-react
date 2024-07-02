interface UserData {
  id: string;
  name: string;
  age: number;
  dob: string;
  linkedin: string;
}

export interface UserState {
  users: UserData[];
}

import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState: UserState = {
  users: [
    {
      id: nanoid(),
      name: 'Hassaan Muneer',
      age: 21,
      dob: '22 September, 2003',
      linkedin: 'https://linkedin.com/hassaan-muneer-37990b250',
    },
    {
      id: nanoid(),
      name: 'Moiz Nadeem',
      age: 21,
      dob: '11 April, 2003',
      linkedin: 'https://linkedin.com/mirza-moiz',
    },
    {
      id: nanoid(),
      name: 'Muhammad Umair',
      age: 24,
      dob: '13 July, 2000',
      linkedin: 'https://linkedin.com/umair-chughtai-4b096324b',
    },
  ],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const newUser = {
        id: nanoid(),
        name: action.payload.name,
        age: action.payload.age,
        dob: action.payload.dob,
        linkedin: action.payload.linkedin,
      };
      state.users.push(newUser);
    },
    updateUser: (state, action) => {
      const user = state.users.find((user) => user.id === action.payload.id);
      if (user) {
        user.name = action.payload.name;
        user.age = action.payload.age;
        user.dob = action.payload.dob;
        user.linkedin = action.payload.linkedin;
      }
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    },
    resetState: (state) => {
      state.users = initialState.users;
    },
  },
});

export const { addUser, updateUser, deleteUser, resetState } =
  userSlice.actions;

export default userSlice.reducer;
