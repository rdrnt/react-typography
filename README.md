# React Typography

Easily manage the text & text styles used in your project.

## How to use

```jsx
import Text from '@rileyyy/react-typography';

const Example = () => <Text tag="h1">Hello!</Text>;
```

## API

### Overriding styles

There are many different ways you can override the text styles. You can either do it at the component level, or via an exposed method `overrideDefaultTagStyles()`. Using the `overrideDefaultTagStyles()` method allows you to set your own custom styles when your app launches.

Component level:

```jsx
<Text tag="h1" style={{ color: 'red', lineHeight: 24 }}>
  Hello!
</Text>
```

Via `overrideDefaultTagStyles()`:

```jsx
overrideDefaultTagStyles({
  p: { size: 40, lineHeight: 62, color: 'purple' },
});
```

To override the default text styles, which are applied to every element, we also expose an `overrideDefaultStyles()` which allows your to set the css that should be applied to every element.

```jsx
import { css } from 'styled-components';

overrideDefaultStyles(css`
  color: black;
  margin-bottom: 5px;
`);
```
