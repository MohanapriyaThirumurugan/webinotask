import React from 'react';
import Fooder from './layouts/Fooder.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6 text-left'>
          <h2>foodie</h2>
        </div>
        <div className='col-6 text-right'>
          <h2>join the wishlist</h2>
        </div>
      </div>
      <div className='row mt-4'>
        <div className='col-12 col-md-6 d-flex justify-content-center align-items-center'>
          <div className='phone-content border border-dark rounded p-3'>
            <h1>phone content</h1>
          </div>
        </div>
        <div className='col-12 col-md-6'>
          <div className='content'>
            <h2>welcome to foodie</h2>
            <p className='para'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Mollitia accusantium accusamus, quasi tenetur earum itaque nisi molestias beatae architecto,
              natus quo magni. Placeat iusto velit sapiente dolorem nam facilis sit labore necessitatibus!
            </p>
            <button className='btn btn-primary'>join the waitlist</button>
          </div>
        </div>
      </div>
      {/* <Fooder/> */}
    </div>
  );
}

export default App;
