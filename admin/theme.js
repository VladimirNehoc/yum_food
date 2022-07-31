const theme = {
  fontFamily: '"Roboto", sans-serif',
  fontWeight: '300',

  borderRadiusXS: '4px',
  borderRadiusS: '6px',
  borderRadiusM: '10px',
  borderRadiusL: '14px',
  borderRadiusXL: '18px',

  paddingXS: '3px',
  paddingS: '5px',
  paddingM: '10px',
  paddingL: '15px',
  paddingXL: '20px',

  fontSizeXS: '0.8rem',
  fontSizeS: '1rem',
  fontSizeM: '1.2rem',
  fontSizeL: '1.4rem',
  fontSizeXL: '2rem',

  containerBlockShadow: '0 0 15px 0 rgba(0, 0, 0, 0.2)',
  popoverBlockShadow: '0 0 15px 0 rgba(0, 0, 0, 0.2)',
  buttonBlockShadow: '0 0 8px 0 rgba(0, 0, 0, 0.2)',

  inputHeight: '38px',

  color1: '#000',
  color2: '#111',
  color3: '#222',
  color4: '#333',
  color5: '#444',
  color6: '#555',
  color7: '#666',
  color8: '#777',
  color9: '#888',
  color10: '#999',
  color11: '#aaa',
  color12: '#bbb',
  color13: '#ccc',
  color14: '#ddd',
  color15: '#eee',
  color16: '#fff',
};

export const light = {
  ...theme,

  status: 'light',

  bgBodyColor: '#fff',
  bgCardColor: '#fff',
  bgHeaderColor: '#99C8B4',

  bgColor1: '#F5795B',
  bgColor2: '#FFBC6C',
  bgColor3: '#FFF8B8',
  bgColor4: '#99C8B4',
  bgColorDefault: '#fff',
  bgColorButton: '#ddd',

  bgColorHover1: '#f1623f',
  bgColorHover2: '#ffae4b',
  bgColorHover3: '#fdf183',
  bgColorHover4: '#70c7a1',
  bgColorHoverDefault: '#efefef',
  bgColorHoverButton: '#eee',

  bgColorActive: '#dedede',

  textColor: '#222',
  textColorReverse: '#eee',
  borderColor: '#777',
  textColorContrast: '#000',

  inputBgColor: '#eee',
  inputPlaceholder: '#999',
  notValidColor: '#ff0000',
};

export const dark = {
  ...theme,

  status: 'dark',

  containerBlockShadow: 'none',
  popoverBlockShadow: '0px 0px 5px 2px rgb(0 0 0 / 10%)',
  buttonBlockShadow: 'none',

  bgBodyColor: '#222',
  bgCardColor: '#333',
  bgHeaderColor: '#333',

  bgColor1: '#F5795B',
  bgColor2: '#FFBC6C',
  bgColor3: '#FFF8B8',
  bgColor4: '#99C8B4',
  bgColorDefault: '#555',
  bgColorButton: '#555',

  bgColorHover1: '#f1623f',
  bgColorHover2: '#ffae4b',
  bgColorHover3: '#fdf183',
  bgColorHover4: '#70c7a1',
  bgColorHoverDefault: '#666',
  bgColorHoverButton: '#666',

  bgColorActive: '#444',

  textColor: '#eee',
  textColorReverse: '#222',
  borderColor: '#777',
  textColorContrast: '#fff',

  inputBgColor: '#222',
  inputPlaceholder: '#777',
  notValidColor: '#ad3434',
};
