import { css } from 'styled-components';

export type SupportedTextTags =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'a';

export interface TextStyleProps {
  weight?: string | number;
  color?: string;
  lineHeight?: number;
  letterSpacing?: number;
  css?: typeof css;
}

export interface TextProps extends TextStyleProps {
  tag: SupportedTextTags;
  useTagStyle?: SupportedTextTags;
}
