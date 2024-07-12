import React from 'react';
import Fooder from './layouts/Fooder.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataForm from './layouts/DataForm.jsx';

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6 text-left foodie'>
          <h2>foodie</h2>
        </div>
        <div className='col-6 text-right'>
          <h4 className='head-btn'>join the wishlist</h4>
        </div>
      </div>
      <div className='row mt-4'>
        <div className='col-12 col-md-6 d-flex justify-content-center align-items-center'>
          <div className='smartphone'>
            <div className='smartphone-top'>
              <div className='camera'></div>
              <div className='speaker'></div>
            </div>
            <div className='smartphone-screen'>
              <video width='320' height='240' autoPlay>
                <source src='C:/Users/mohan/OneDrive/Documents/webinotask/src/3015488-hd_1920_1080_24fps.mp4' type='video/mp4' />
              </video>
            </div>
            <div className='smartphone-bottom'>
              <div className='home-button'></div>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-6 d-flex justify-content-center align-items-center'>
          <div className='content'>
            <h2>welcome to foodie</h2>
            <p className='para'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Mollitia accusantium accusamus, quasi tenetur earum itaque nisi molestias beatae architecto,
              natus quo magni. Placeat iusto velit sapiente dolorem nam facilis sit labore necessitatibus!
            </p>
            <button className='btn btn-primary '>join the waitlist</button>
          </div>
        </div>
      </div>
      <div className="form-container mt-5 d-flex justify-content-center align-items-center">
        <form className="row g-3">
          <div className="col-auto">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name"/>
          </div>
          <div className="col-auto">
            <label htmlFor="city" className="form-label">City</label>
            <input type="text" className="form-control" id="city" placeholder="Enter your city"/>
          </div>
          <div className="col-auto">
            <label htmlFor="phone" className="form-label">Phone No</label>
            <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number"/>
          </div>
          <div className="col-auto py-4">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
      <Fooder/>
    </div>
  
   
  );
}

export default App;
