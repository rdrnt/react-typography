import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Text, { DefaultTagStyles } from '../.';

const App = () => {
  return (
    <div>
      {Object.keys(DefaultTagStyles).map(key => (
        <Text tag={key} key={key} style={{ color: 'green' }}>
          {`${key} example`}
        </Text>
      ))}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
