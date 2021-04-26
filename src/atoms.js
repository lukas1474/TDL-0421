import { selector, atom } from 'recoil';

export const todosState = atom({
  key: `todos`,
  default: [],
});

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

export const categoryState = atom({
  key: `categoryState`,
  default: `Wszystkie`,
});

export const todosStats = selector({
  key: `todosStats`,
  get: ({get}) => {
    const todosId = get(todosState);
    const todosCom = todosId && todosId.filter(({completed}) => !!completed);
    return {
      all: todosId.length,
      completed: todosCom.length,
    };
  },
});

export const filteredSearch = selector({
  key: `filteredSearch`,
  get: ({get}) => {
    const todosId = get(choosenCategory);
    const todoSearch = get(searchPhrase);
    if(todoSearch === ``) {
      return todosId;
    }
    return todosId.filter((item) =>{
      return item.title.toLowerCase().includes(todoSearch.toLowerCase());
    });
  },
});

export const choosenCategory = selector({
  key: `choosenCategory`,
  get: ({get}) => {
    const todos = get(todosState);
    const category = get(categoryState);
    if (category === `Aktywne`) {
      return todos.filter(({completed}) => completed === false );
    } else if(category === `Zakończone`) {
      return todos.filter(({completed}) => completed === true );
    }
    return todos;
  },
});
