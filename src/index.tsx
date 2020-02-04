import * as React from 'react';
import styled from 'styled-components';

import {
  BaseStyledText,
  overrideDefaultTagStyles,
  overrideDefaultStyles,
  DefaultTagStyles,
  createTextStyles,
} from './text.styles';
import { SupportedTextTags, TextProps } from './types';

const Text = styled(({ style, tag, children, ...rest }: TextProps) => (
  <BaseStyledText as={tag} {...rest}>
    {children}
  </BaseStyledText>
))`
  ${props =>
    createTextStyles({
      ...DefaultTagStyles[
        (props.useTagStyle as SupportedTextTags) || props.tag
      ],
      ...props.style,
    })}
`;

export { overrideDefaultTagStyles, overrideDefaultStyles, DefaultTagStyles };

export default Text;
