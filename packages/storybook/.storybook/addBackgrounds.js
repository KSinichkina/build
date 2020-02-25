const defaultBackgrounds = [
  { name: 'light', value: '#e4e9ee' },
  { name: 'dark', value: '#383835' },
  { name: 'white', value: '#fff' },
  { name: 'orange', value: '#ffcc66' },
  { name: 'chatpop', value: '#050827' },
];

const addBackgrounds = ({
  backgrounds = defaultBackgrounds,
  defaultBackground = 'light',
  extraBackgrounds = [],
} = {}) => {
  return {
    backgrounds: [...backgrounds, ...extraBackgrounds].map(bg => {
      if (bg.name === defaultBackground) return { ...bg, default: true };
      return bg;
    }),
  };
};

export default addBackgrounds;
