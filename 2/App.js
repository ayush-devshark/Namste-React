import React from  "react";  
import ReacDOM from 'react-dom/client';


const heading = React.createElement('h1',{id:'heading'}, 'Hello World');
const root = ReacDOM.createRoot(document.getElementById('root'));
root.render(heading);

