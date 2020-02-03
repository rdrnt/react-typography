import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { TextStyleProps, SupportedTextTags } from './types';

export let DefaultTagStyles: {
  [key in SupportedTextTags]: FlattenSimpleInterpolation;
} = {
  h1: css`
    font-size: 80px;
    font-weight: 600;
    letter-spacing: -0.04em;
  `,
  h2: css`
    font-size: 45px;
    font-weight: 600;
    letter-spacing: -0.03em;
  `,
  h3: css`
    font-size: 36px;
    font-weight: 700;
    letter-spacing: -0.02em;
  `,
  h4: css`
    font-size: 28px;
    letter-spacing: -0.5px;
    font-weight: 600;
  `,
  h5: css`
    font-size: 23px;
    font-weight: 500;
  `,
  h6: css`
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.24px;
  `,
  p: css`
    font-size: 16px;
    line-height: 20px;
    font-weight: 300;
  `,
  span: css`
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1px;
  `,
  a: css`
    font-size: 16px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  `,
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
    ${DefaultStyles};
    ${newStyles};
  `;
};

// it wont always be an h1, because we use the `as` attribute
export const StyledText = styled.h1<
  TextStyleProps & { useTagStyle: SupportedTextTags }
>`
  ${DefaultStyles};
  ${props => DefaultTagStyles[props.useTagStyle]};

  ${props => props.weight && `font-weight: ${props.weight}`};
  ${props => props.color && `color: ${props.color}`};
`;
