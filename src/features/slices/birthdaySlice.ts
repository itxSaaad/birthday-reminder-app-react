interface Birthday {
  id: string;
  name: string;
  age: number;
  dob: string;
  avi: string;
  linkedin: string;
}

export interface BirthdayState {
  birthdays: Birthday[];
}

import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState: BirthdayState = {
  birthdays: [
    {
      id: nanoid(),
      name: 'Hassaan Muneer',
      age: 21,
      dob: '22 September, 2003',
      avi: '/assets/images/hassaan-avi.jpg',
      linkedin: 'https://linkedin.com/hassaan-muneer-37990b250',
    },
    {
      id: nanoid(),
      name: 'Moiz Nadeem',
      age: 21,
      dob: '11 April, 2003',
      avi: '/assets/images/moiz-avi.jpg',
      linkedin: 'https://linkedin.com/mirza-moiz',
    },
    {
      id: nanoid(),
      name: 'Muhammad Umair',
      age: 24,
      dob: '13 July, 2000',
      avi: '/assets/images/umair-avi.jpg',
      linkedin: 'https://linkedin.com/umair-chughtai-4b096324b',
    },
  ],
};

const birthdaySlice = createSlice({
  name: 'birthday',
  initialState,
  reducers: {
    addBirthday: (state, action) => {
      const newBirthday: Birthday = {
        id: nanoid(),
        name: action.payload.name,
        age: action.payload.age,
        dob: action.payload.dob,
        avi: `https://avatar.iran.liara.run/username?username=${action.payload.name}`,
        linkedin: action.payload.linkedin,
      };
      state.birthdays.push(newBirthday);
    },
    updateBirthday: (state, action) => {
      const birthday = state.birthdays.find(
        (birthday) => birthday.id === action.payload.id
      );
      if (birthday) {
        const updatedBirthday: Birthday = {
          ...birthday,
          name: action.payload.name,
          age: action.payload.age,
          dob: action.payload.dob,
          linkedin: action.payload.linkedin,
        };

        // add the updated birthday to the birthdays array
        state.birthdays = state.birthdays.map((birthday) =>
          birthday.id === action.payload.id
            ? { ...birthday, ...updatedBirthday }
            : birthday
        );
      }
    },
    deleteBirthday: (state, action) => {
      state.birthdays = state.birthdays.filter(
        (birthday) => birthday.id !== action.payload.id
      );
    },
    clearState: (state) => {
      state.birthdays = [];
    },
    resetState: (state) => {
      state.birthdays = initialState.birthdays;
    },
  },
});

export const {
  addBirthday,
  updateBirthday,
  deleteBirthday,
  clearState,
  resetState,
} = birthdaySlice.actions;

export default birthdaySlice.reducer;
