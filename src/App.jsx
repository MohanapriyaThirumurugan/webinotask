// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
// const {name,setname}=useState("")
// const {city,setcity}=useState("")
// const {phone ,setphoneno}=useState("")

//   return (
//     <div className="container">
//       <header className="d-flex justify-content-between align-items-center p-3">
//         <h5 className='foodie'>foodie</h5>
//         <button className="btn btn-danger">Join the Waitlist</button>
//       </header>
//       <div className="main-content">
//         <div className="row align-items-center">
//           <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
//             <div className="smartphone">
//               <video autoPlay loop preload="auto">
//                 <source src="3195650-uhd_3840_2160_25fps.mp4" type="video/mp4" />
//               </video>
//             </div>
//           </div>
//           <div className="col-12 col-md-6 text-center text-md-left">
//           <h5 className='foodie'>foodie</h5>
//            <h1>Welcome to Foodie</h1>
//             <p className='para'style={{color:'white'}}>
//               At foodie, we redefine convenience with our seamless food delivery service.
//               Whether you're craving the flavors of home or exploring new culinary delights,
//               foodie brings it all to your doorstep. From hearty breakfasts to gourmet dinners
//               and everything in between, our curated menu caters to every palate and preference.
//             </p>
//             <button className="btn btn-outline-light">Join the Waitlist</button>
//           </div>
//         </div>
//       </div>
//       <div className="form-section text-center">
//         <h2 style={{color:'orange'}}>Join the Waitlist</h2>
//         <form className="d-flex justify-content-center flex-wrap">
//           <input type="text" placeholder="Name" className="form-control m-2" />
//           <input type="tel" placeholder="Phone Number" className="form-control m-2" />
//           <input type="text" placeholder="City" className="form-control m-2" />
//           <button type="submit" className="btn btn-primary m-2">Join the Waitlist</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fooder from './layouts/Fooder';

function App() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [waitlistCount, setWaitlistCount] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Incrementing the count of waitlist entries
    setWaitlistCount(waitlistCount + 1);
    // Marking the form as submitted
    setSubmitted(true);
    // Clearing the form inputs after submission
    setName("");
    setCity("");
    setPhone("");
  };

  const resetForm = () => {
    setSubmitted(false);
  };

  return (
    <>
    <div className="background">
    <div className="content">
        <header className="d-flex flex-column flex-md-row justify-content-between align-items-center p-3"  >
            <img src="src\images\FoodieLogo.png" style={{height:"60px"}}></img>
            <button className="btn btn-danger mb-2 mb-md-0">Join the Waitlist</button>
        </header>
        <div className="main-content">
            <div className="row align-items-center">
                <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mb-3 mb-md-0 phone-container">
                    <div className="smartphone">
                        <div className="smartphone-frame">
                            <video autoPlay loop preload="auto">
                                <source src="1111421-hd_1920_1080_30fps.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 text-center text-md-left">
                <img src="src\images\FoodieLogo.png" style={{height:"60px"}}></img>
                  <h1 style={{color:"white"}}>Welcome to Foodie</h1>
                    <p className='para' style={{color:'white'}}>
                        At foodie, we redefine convenience with our seamless food delivery service.
                        Whether you're craving the flavors of home or exploring new culinary delights,
                        foodie brings it all to your doorstep. From hearty breakfasts to gourmet dinners
                        and everything in between, our curated menu caters to every palate and preference.
                    </p>
                    <button className="btn btn-outline-light submit">Join the Waitlist</button>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="form-section text-center">
    {!submitted ? (
        <>
            <h2 style={{color:'orange'}}>Join the Waitlist</h2>
            <form className="d-flex justify-content-center flex-wrap" onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" className="form-control m-2" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="tel" placeholder="Phone Number" className="form-control m-2" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <input type="text" placeholder="City" className="form-control m-2" value={city} onChange={(e) => setCity(e.target.value)} />
                <button type="submit" className="btn btn-primary m-2 formbtn">Join the Waitlist</button>
            </form>
        </>
    ) : (
        <div className="thank-you">
            <h2>Thank You!</h2>
            <p>Your details have been submitted.</p>
            <button className="btn btn-secondary" onClick={resetForm}>Submit Another Response</button>
        </div>
    )}
</div>
{/* Displaying the count of waitlist entries */}
<div className="waitlist-count">
    <h4 className='form-section'>Waitlist Count: {waitlistCount}</h4>
</div>



      <Fooder/>
    </>
  );
}

export default App;
