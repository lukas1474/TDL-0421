export default {
  fonts: {
    body: `system-ui, sans-serif`,
    heading: `"Avenir Next", sans-serif`,
    monospace: `Menlo, monospace`,
  },
  colors: {
    text: `#000`,
    background: `#282c34`,
    primary: `#07c`,
    secondary: `#30c`,
    muted: `#f6f6f6`,
    delete: `red`,
    new: `#368631`,
    buttonText: `white`,
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
  },
};
