import * as React from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';

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
  weight?: string | number; // e.x can be bold or 600
  color?: string; // the text color
  lineHeight?: number; // the height in px
  letterSpacing?: number; // the spacing in em
  size?: number; // the text size in px
  css?: FlattenSimpleInterpolation; // extra css
}

export interface TextProps {
  tag: SupportedTextTags;
  useTagStyle?: SupportedTextTags;
  style?: TextStyleProps;
  children: React.ReactChildren;
}
