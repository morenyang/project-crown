import React from 'react';
import { Meta } from '@storybook/react';
import { css } from '@emotion/css';
import theme from './theme';

const Palette = (props: { name: string; color: string }) => {
  return (
    <div
      className={css`
        border-radius: 4px;
        width: 240px;
        overflow: hidden;
        color: #333;
        box-shadow: 2px 2px 4px ${theme.colors.N50O};
      `}
    >
      <div
        className={css`
          height: 80px;
          background-color: ${props.color};
        `}
      />
      <div
        className={css`
          padding: ${theme.spaces.md}px;
          background-color: ${theme.colors.N25};
        `}
      >
        <div
          className={css`
            font-weight: bolder;
            font-family: ${theme.fonts.monospace};
            margin-bottom: ${theme.spaces.xs}px;
          `}
        >
          {props.name}
        </div>
        <div>{props.color}</div>
      </div>
    </div>
  );
};

const PaletteWrapper: React.FC = ({ children }) => {
  return (
    <div
      className={css`
        display: flex;
        flex-wrap: wrap;
        justify-content: start;

        & > div {
          margin-right: ${theme.spaces.md}px;
          margin-bottom: ${theme.spaces.md}px;
        }
      `}
    >
      {children}
    </div>
  );
};

export const Colors = () => {
  const patterns: { name: string; startWith: string }[] = [
    { name: 'Neutrals', startWith: 'N' },
    { name: 'Crown', startWith: 'C' },
    { name: 'Green', startWith: 'G' },
    { name: 'Red', startWith: 'R' },
    { name: 'Yellow', startWith: 'Y' },
    { name: 'Blue', startWith: 'B' },
  ];
  return (
    <div>
      <h2>Colors</h2>
      {patterns.map(({ name, startWith }) => (
        <>
          <h3>{name}</h3>
          <PaletteWrapper>
            {Object.keys(theme.colors)
              .filter((x) => x.startsWith(startWith))
              .map((name) => {
                const color = theme.colors[name as keyof typeof theme.colors];
                return <Palette color={color} name={name} />;
              })}
          </PaletteWrapper>
        </>
      ))}
    </div>
  );
};

export default {
  title: 'Colors',
  component: Colors,
} as Meta;
