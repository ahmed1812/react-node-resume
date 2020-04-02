import React from "react";
import  Mail from '../../components/Model';
import "./style.css";

function Footer(props) {
  return (
    <footer className="footer text-center">
    <div className="container">
      <ul className="list-inline mb-5">
        
        <li className="list-inline-item">
          <a className="social-link rounded-circle text-white " href="https://www.linkedin.com/in/ahmed-ahmed-b2b6a1191/">
          <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li className="list-inline-item">
          <a className="social-link rounded-circle text-white" href="https://github.com/ahmed1812">
          <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
          <i c="fas fa-at"> <Mail /></i>
          <br />
        
      <h1 className="text-muted small mb-0"><a href="tel:2245201811"><i className="fas fa-phone-volume fa-2x"> 224-520-1811</i> </a><br /><br />Copyright &copy; Your Website 2020 </h1>
    </div>
  </footer>
  )
  
}

export default Footer;