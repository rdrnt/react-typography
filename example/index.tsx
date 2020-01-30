import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Text from '../.';

const App = () => {
  return (
    <div>
      <Text tag="h1">Example</Text>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
