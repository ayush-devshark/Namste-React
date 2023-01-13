import React from 'react';
import ReacDOM from 'react-dom/client';

const heading = React.createElement('h1', { id: 'heading' }, 'Hello World');
const heading2 = React.createElement('h3', {}, 'Hello World');
const container = React.createElement('div', {}, heading);
const root = ReacDOM.createRoot(document.getElementById('root'));
root.render(container);
