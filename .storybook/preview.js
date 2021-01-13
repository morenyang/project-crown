import { addDecorator } from '@storybook/react';
import { Normalize } from '../src/components/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

addDecorator((story) => (
  <>
    <Normalize />
    {story()}
  </>
));
