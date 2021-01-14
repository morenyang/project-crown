import { injectGlobal } from '@emotion/css';
import Normalize from './Normalize';
import theme from './theme';

injectGlobal`
  html {
    font-size: 16px;
    color: ${theme.colors.N800};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default function StyleBoostrap() {
  return <Normalize />;
}
