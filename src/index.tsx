import * as React from 'react';
import { TextProps } from './types';

import {
  StyledText,
  overrideDefaultTagStyles,
  overrideDefaultStyles,
  DefaultTagStyles,
} from './text.styles';

const Text: React.FunctionComponent<TextProps> = ({
  tag,
  useTagStyle,
  children,
  ...rest
}) => {
  return (
    <StyledText
      as={tag}
      useTagStyle={useTagStyle ? useTagStyle : tag}
      {...rest}
    >
      {children}
    </StyledText>
  );
};

export { overrideDefaultTagStyles, overrideDefaultStyles, DefaultTagStyles };

export default Text;
