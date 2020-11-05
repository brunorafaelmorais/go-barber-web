import { tint, shade } from 'polished';

export default {
  title: 'dark',

  colors: {
    primary: '#FF9000',
    primaryRgb: '56,128,255',
    primaryContrast: '#FFF',
    primaryContrastRgb: '255,255,255',
    primaryShade: shade(0.1, '#FF9000'),
    primaryTint: tint(0.1, '#FF9000'),

    background: '#312E38',
    backgroundShade: shade(0.2, '#312E38'),
    backgroundTint: tint(0.2, '#312E38'),

    text: '#FFF',
  },
};
