import { selector, useRecoilCallback } from 'recoil';
import { goRestApiKey } from './config';

export const todosList = selector({
  key: `todosList`,
  get: async () => {
    const response = await fetch(`https://gorest.co.in/public-api/users/1331/todos?access-token=${goRestApiKey}`);
    const todo = await response.json();

    console.log(`todo`, todo);
    return todo;

  },
});
