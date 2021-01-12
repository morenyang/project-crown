import { injectGlobal } from '@emotion/css';
import 'normalize.css/normalize.css';
import theme from './theme';

injectGlobal`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: ${theme.fonts.base};
  }
`;

export default function Normalize() {
  return null;
}
