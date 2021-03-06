import styled, { css } from 'styled-components';
import { TextStyleProps, SupportedTextTags } from './types';

export let DefaultTagStyles: {
  [key in SupportedTextTags]: TextStyleProps;
} = {
  h1: {
    size: 80,
    weight: 600,
    letterSpacing: -0.03,
  },
  h2: {
    size: 45,
    weight: 600,
    letterSpacing: -0.02,
  },
  h3: {
    size: 36,
    weight: 700,
    letterSpacing: -0.03,
  },
  h4: {
    size: 28,
    weight: 600,
    letterSpacing: -0.05,
  },
  h5: {
    size: 23,
    weight: 500,
  },
  h6: {
    size: 14,
    weight: 700,
  },
  p: {
    size: 16,
    weight: 300,
    lineHeight: 20,
  },
  span: {
    size: 11,
    letterSpacing: 0.5,
    css: css`
      text-transform: uppercase;
    `,
  },
  a: {
    size: 16,
    weight: 600,
    letterSpacing: -0.03,
    css: css`
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    `,
  },
};

export let DefaultStyles = css`
  display: block;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  color: black;
`;

export const overrideDefaultTagStyles = (
  newStyles: typeof DefaultTagStyles
): void => {
  DefaultTagStyles = {
    ...DefaultTagStyles,
    ...newStyles,
  };
};

export const overrideDefaultStyles = (
  newStyles: typeof DefaultStyles
): void => {
  DefaultStyles = css`
    ${newStyles};
  `;
};

export const createTextStyles = ({
  styles,
  applyDefaultStyles,
}: {
  styles: TextStyleProps;
  applyDefaultStyles?: boolean;
}) => css<TextStyleProps>`
  ${applyDefaultStyles && DefaultStyles};

  ${styles.size && `font-size: ${styles.size}px`};
  ${styles.weight && `font-weight: ${styles.weight}`};
  ${styles.color && `color: ${styles.color}`};
  ${styles.lineHeight && `line-height: ${styles.lineHeight}px`};
  ${styles.letterSpacing && `letter-spacing: ${styles.letterSpacing}em`};
  ${styles.css && styles.css};
`;

export const BaseStyledText = styled.h1`
  ${DefaultStyles};
`;
