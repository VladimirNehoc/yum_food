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

  bgColor1: '#F5795B',
  bgColor2: '#FFBC6C',
  bgColor3: '#FFF8B8',
  bgColor4: '#99C8B4',
  bgColorDefault: '#fff',

  bgColorHover1: '#f1623f',
  bgColorHover2: '#ffae4b',
  bgColorHover3: '#fdf183',
  bgColorHover4: '#70c7a1',
  bgColorHoverDefault: '#eee',

  textColor: '#222',
  borderColor: '#777',
  textColorContrast: '#000',
};

export const dark = {
  ...theme,

  bgBodyColor: '#222',
  bgCardColor: '#333',

  bgColor1: '#F5795B',
  bgColor2: '#FFBC6C',
  bgColor3: '#FFF8B8',
  bgColor4: '#333',
  bgColorDefault: '#222',

  bgColorHover1: '#f1623f',
  bgColorHover2: '#ffae4b',
  bgColorHover3: '#fdf183',
  bgColorHover4: '#70c7a1',
  bgColorHoverDefault: '#333',

  textColor: '#eee',
  borderColor: '#777',
  textColorContrast: '#fff',
};
