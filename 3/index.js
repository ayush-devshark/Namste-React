import React from 'react';
import ReactDOM from 'react-dom/client';

//* Using React createElement
// const h1 = React.createElement('h1', { key: '0' }, 'H1');
// const h2 = React.createElement('h3', { key: '1' }, 'H3');
// const h3 = React.createElement('h3', { key: '2' }, 'H3');
// const container = React.createElement('div', { className: 'title' }, 
//   h1,
//   h2,
//   h3,
// );

//* Using JSX element
// const heading1 = <h1>H1</h1>;
// const heading2 = <h2>H2</h2>;
// const heading3 = <h3>H3</h3>;
// const container = (
//   <div className='title'>
//     {heading1}
//     {heading2}
//     {heading3}
//   </div>
// );

//* Using Functional Component
// const Heading1 = () => <h1>H1</h1>;
// const Heading2 = () => <h2>H2</h2>;
// const Heading3 = () => <h3>H3</h3>;

// const Container = () => {
//   return (
//     <div className='title'>
//       <Heading1 />
//       <Heading2 />
//       <Heading3 />
//     </div>
//   );
// };

const logo = (
  <div className='box'>
    <img
      className='image'
      src='https://png.pngtree.com/png-clipart/20190611/original/pngtree-wolf-logo-png-image_2306634.jpg'
      alt='logo'
    />
  </div>
);

const searchBar = <input placeholder='search' className='search' />;

const user = (
  <div className='box'>
    <img
      src='https://cdn-icons-png.flaticon.com/512/3388/3388823.png'
      alt='icon'
      className='icon'
    />
  </div>
);

const Header = () => {
  return (
    <nav className='container'>
      {logo}
      {searchBar}
      {user}
    </nav>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(Container());
root.render(<Header />);
// root.render(container);
