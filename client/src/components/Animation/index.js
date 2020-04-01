import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import "./style.css";


class Animation extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div className="all" >
       
       <ParticlesBg type="random" bg={true}/>
      </div>
    );
  }
}

export default Animation;