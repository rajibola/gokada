export const baseURL = 'https://reqres.in/api';

export const contacts = {
  state: {
    users_data: [],
  },

  reducers: {
    saveUsersList(state, users) {
      return {
        ...state,
        users_data: users,
      };
    },
  },

  effects: {
    async listUsers(_, state) {
      await fetch(`${baseURL}/users?page=1`)
        .then(response => response.json())
        .then(json => {
          this.saveUsersList(json);
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
