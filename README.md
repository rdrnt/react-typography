# React Typography

Easily manage the text & text styles used in your project.

## How to use

```jsx
import Text from '@rileyyy/react-typography';

const Example = () => <Text tag="h1">Hello!</Text>;
```

## Props

### tag

The type of tag the element should be, and what styles should be used.

### useTagStyle (optional)

The tag styles you like to use. This allows you to render h1 elements, with the styles from p.

e.x

```jsx
<Text tag="h1" useTagStyle="p">
  This will be an h1 element with p's styles!
</Text>
```

### style (optional)

Used for overriding styles. You can either use the `overrideDefaultTagStyles()` which is explained below, or the `style` prop for one time changes.

e.x

```jsx
<Text tag="p" style={{ color: 'red', weight: 600 }}>
  blah blah blah
</Text>
```

### children

The string of text you want rendered.

## Utilities

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
