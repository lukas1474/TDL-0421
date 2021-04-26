import { selector, atom } from 'recoil';

export const todosState = atom({
  key: `todos`,
  default: [],
});
// {console.log(`atom todo`, todosState);}

export const titleState = atom({
  key: `titleState`,
  default: ``,
});

export const editedTitleState = atom({
  key: `editedTitleState`,
  default: ``,
});

export const searchPhrase = atom({
  key: `SearchPhrase`,
  default: ``,
});

export const todosStats = selector({
  key: `todosStats`,
  get: ({get}) => {
    const todosId = get(todosState);
    const todosCom = todosId && todosId.filter(({completed}) => !!completed);
    console.log(`todosId`, todosId);
    return {
      all: todosId.length,
      completed: todosCom.length,
    };
  },
});

export const filteredSearch = selector({
  key: `filteredSearch`,
  get: ({get}) => {
    const todosId = get(todosState);
    const todoSearch = get(searchPhrase);

    if(todoSearch === ``) {
      return todosId;
    }
    return todosId.filter((item) =>{
      return item.title.includes(todoSearch);
    });
  },
});
