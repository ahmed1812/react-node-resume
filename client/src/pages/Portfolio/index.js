import React from 'react';
import Skill from '../Skill'
import './style.css'
 function Zoo(props) {
  return (
    <div className="body">
    <section className="section section-top">
  <div className="content " >
    <h1>AHMED AHMED</h1>
    <h1>Full Stack Javascript </h1>
  </div>
</section>

<section className="section section-stream">
  <img
    className="play "
    src={require('../../Images/ahmed.png')}
    alt=""
  />
  
  <div className="content " >
    <div>
      <p>
      <Skill />
         </p>
    </div>
    
  </div>
</section>

<section className="section section-grid">
  <div  >
    <i className="fas fa-address-card fa-3x secondary-text"></i>
    <h2>About<span className="secondary-text dot">.</span></h2>
    <p>
     I'm a Full Stack Web Developer with a background in statstics and accounting.
     I love jigsaw and logic puzzles alike. My abilities both as a quick learner and problem 
     solver serve me well as a computer programmer. I love being able 
     to write code to implement creative solutions.
    </p>
  </div>
  <div  >
    <i className="fas fa-laptop-code fa-3x secondary-text"></i>
  
        <h2>Certificate<span className="secondary-text dot">.</span></h2>
    <p>
    Full Stack Web Development Coding Boot Camp in Northwestern University.
     Rutgers Coding BootCamp - Javascript Full Stack Web Development​ .
      Northwestern University​ , Chicago, IL.
    </p>
  </div>
  <div  >
    <i className="fas fa-university fa-3x secondary-text"></i>
    <h2>Bachelor<span className="secondary-text dot">.</span></h2>
    <p>
    Bachelor Science Degree in Statistics
University Of Baghdad in Iraq .
    </p>
  </div>
</section>


  </div>
  )
}

export default Zoo