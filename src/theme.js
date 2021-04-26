export default {
  fonts: {
    body: `system-ui, sans-serif`,
    heading: `"Avenir Next", sans-serif`,
    monospace: `Menlo, monospace`,
  },
  colors: {
    text: `white`,
    background: `#334552`,
    primary: `#07c`,
    secondary: `#7E8071`,
    editButton: `#578F53`,
    muted: `#f6f6f6`,
    delete: `#B94A3E`,
    new: `#578F53`,
    buttonText: `white`,
    backgroundInput: `white`,
    backgroundList: `white`,
    inputText: `black`,
    completedTodo: `lightGrey`,
  },
  buttons: {
    primary: {
      color: `buttonText`,
      fontSize: `20px`,
      fontFamily: `body`,
      Width: `55px`,
      Height: `55px`,
      cursor: `pointer`,
      bg: `background`,
      '&:hover': {
        bg: `delete`,
      },
    },
    secondary: {
      color: `buttonText`,
      fontSize: `20px`,
      Width: `50px`,
      Height: `50px`,
      cursor: `pointer`,
      bg: `secondary`,
      '&:hover': {
        bg: `editButton`,
        color: `black`,
      },
    },
    third: {
      color: `buttonText`,
      fontSize: `20px`,
      fontFamily: `body`,
      cursor: `pointer`,
      bg: `new`,
      '&:hover': {
        bg: `secondary`,
        color: `black`,
      },
    },
    fourth: {
      color: `buttonText`,
      fontSize: `18px`,
      cursor: `pointer`,
      bg: `secondary`,
    },
  },
  forms: {
    textarea: {
      borderColor: `background`,
      '&:focus': {
        borderColor: `background`,
        boxShadow: t => `0 0 0 2px ${t.colors.background}`,
        outline: `none`,
      },
    },
  },
};
