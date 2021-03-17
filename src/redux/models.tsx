import {createModel} from '@rematch/core';
import {Dispatch} from '../../App';

export const baseURL = 'https://reqres.in/api';

export const contacts = createModel({
  state: {
    users_data: [],
  },

  reducers: {
    saveUsersList(state?: any, users?: any) {
      return {
        ...state,
        users_data: users,
      };
    },
  },

  effects: (dispatch: Dispatch) => ({
    async listUsers(_: any, state: any) {
      await fetch(`${baseURL}/users?page=1`)
        .then(response => response.json())
        .then(json => {
          dispatch.contacts.saveUsersList(json);
        })
        .catch(error => {
          console.error(error);
        });
    },
  }),
});
