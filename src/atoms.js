import { selector, atom } from 'recoil';
import { goRestApiKey } from './config';

export const todosState = atom({
  key: `todos`,
  default: [],
});
{console.log(`atom todo`, todosState);}


export const titleState = atom({
  key: `titleState`,
  default: ``,
});


// export const todosList = selector({
//   key: `todosList`,
//   get: async () => {
//     const response = await fetch(`https://gorest.co.in/public-api/todos`);
//     const todo = await response.json();

//     console.log(`asdasdasdasd`, todo);
//     return todo;
//   },
// });
