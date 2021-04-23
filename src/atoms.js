import { selector } from 'recoil';
import { goRestApiKey } from './config';

export const todosList = selector({
  key: `todosList`,
  get: async () => {
    const response = await fetch(`https://gorest.co.in/public-api/todos?access-token=${goRestApiKey}`);
    const todo = await response.json();

    console.log(todo);
    return todo;

  },
});
