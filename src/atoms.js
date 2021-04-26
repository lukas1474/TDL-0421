import { selector, atom } from 'recoil';

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

//     console.log(`selector todo list`, todo);
//     return todo;
//   },
// });
