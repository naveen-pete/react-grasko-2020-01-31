import React from 'react';
import ReactDOM from 'react-dom';

const header = <div>
  <h1>Blogger App</h1>
  <p>This is a simple React application!</p>
</div>;

ReactDOM.render(
  header,
  document.querySelector('#root')
);

