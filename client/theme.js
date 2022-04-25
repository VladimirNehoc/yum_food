const theme = {
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
  buttonBlockShadow: '0 0 8px 0 rgba(0, 0, 0, 0.2)',
};

export const light = {
  ...theme,

  bgBodyColor: '#fff',
  bgCardColor: '#fff',
  bgHeaderColor: '#99C8B4',

  bgColor1: '#F5795B',
  bgColor2: '#FFBC6C',
  bgColor3: '#FFF8B8',
  bgColor4: '#99C8B4',
  bgColorDefault: '#fff',
  bgColorButton: '#fff',

  bgColorHover1: '#f1623f',
  bgColorHover2: '#ffae4b',
  bgColorHover3: '#fdf183',
  bgColorHover4: '#70c7a1',
  bgColorHoverDefault: '#eee',
  bgColorHoverButton: '#efefef',

  bgColorActive: '#ccc',

  textColor: '#222',
  textColorPlaceholder: '#999',
  borderColor: '#777',
  textColorContrast: '#000',
};

export const dark = {
  ...theme,

  containerBlockShadow: 'none',
  buttonBlockShadow: 'none',

  bgBodyColor: '#222',
  bgCardColor: '#333',
  bgHeaderColor: '#333',

  bgColor1: '#F5795B',
  bgColor2: '#FFBC6C',
  bgColor3: '#FFF8B8',
  bgColor4: '#333',
  bgColorDefault: '#555',
  bgColorButton: '#555',

  bgColorHover1: '#f1623f',
  bgColorHover2: '#ffae4b',
  bgColorHover3: '#fdf183',
  bgColorHover4: '#70c7a1',
  bgColorHoverDefault: '#666',
  bgColorHoverButton: '#666',

  bgColorActive: '#555',

  textColor: '#eee',
  textColorPlaceholder: '#bbb',
  borderColor: '#777',
  textColorContrast: '#fff',
};
