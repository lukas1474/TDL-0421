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
    secondary: `#30c`,
    muted: `#f6f6f6`,
    delete: `red`,
    new: `#368631`,
    buttonText: `white`,
    backgroundInput: `white`,
    backgroundList: `white`,
    inputText: `black`,
  },
  buttons: {
    primary: {
      color: `buttonText`,
      fontSize: `20px`,
      cursor: `pointer`,
      bg: `background`,
      '&:hover': {
        bg: `delete`,
      },
    },
    secondary: {
      color: `buttonText`,
      fontSize: `20px`,
      cursor: `pointer`,
      bg: `secondary`,
    },
    third: {
      color: `buttonText`,
      fontSize: `20px`,
      cursor: `pointer`,
      bg: `new`,
    },
    fourth: {
      color: `buttonText`,
      fontSize: `18px`,
      cursor: `pointer`,
      bg: `secondary`,
    },
  },
};
