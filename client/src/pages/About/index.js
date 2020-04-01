import React, { Component } from "react";
import Header from '../../components/Header';
import Map from '../Map';
import "./style.css";
import Project from '../../pages/Portfolio';
import { Link, Element, Events, animateScroll as scroll, scroller } from 'react-scroll'

import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem,  MDBNavbarToggler, MDBCollapse } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';


class Nev extends Component {
    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    state = {
        isOpen: false
      };
      
      toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
      }

    componentDidMount() {

        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
        });

    }
    scrollToTop() {
        scroll.scrollToTop();
    }
    scrollTo() {
        scroller.scrollTo('scroll-to-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }
    scrollToWithContainer() {

        let goToContainer = new Promise((resolve, reject) => {

            Events.scrollEvent.register('end', () => {
                resolve();
                Events.scrollEvent.remove('end');
            });

            scroller.scrollTo('scroll-container', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            });

        });

        goToContainer.then(() =>
            scroller.scrollTo('scroll-container-second-element', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart',
                containerId: 'scroll-container'
            }));
    }
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    render() {

        return (
            <div>
                <Router>
      <MDBNavbar color="light" light expand="md" style={{backgroundColor: "#040b14", position: "fixed", zIndex: 1000, width: "100%"}}>
        <MDBNavbarBrand >
          <strong className="white-text"></strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
            <Link href="" activeClass="active" className={this.props === "Home" ? "nav-link active" : "nav-link"}
                                style={{ color: "#e3f2fd" }} to="test5" spy={true} smooth={true} duration={500} > <i className="fas fa-home"></i> Home</Link>
            </MDBNavItem>
            <MDBNavItem>
            <Link href="" activeClass="active" className={this.props === "About" ? "nav-link active" : "nav-link"}
                                style={{ color: "#e3f2fd" }} to="test1" spy={true} smooth={true} duration={500} > <i className="fas fa-user"></i> About</Link>
            </MDBNavItem>
            
            <MDBNavItem>
            <Link href="" activeClass="active" className={this.props === "Contact" ? "nav-link active" : "nav-link"}
                                style={{ color: "#e3f2fd" }} to="test4" spy={true} smooth={true} duration={500} > <i className="fas fa-envelope"></i>Contact</Link>
            </MDBNavItem>
          
          </MDBNavbarNav>
          <MDBNavbarNav right>
           
            <MDBNavItem>
              <a  className="waves-effect waves-light" href="https://myresumecode.herokuapp.com/">
                <i style={{ color: "#e3f2fd", margin:"10px 10px",  }}className="fas fa-file"></i>
              </a>
            </MDBNavItem>
                     <MDBNavItem>
<i className="fas fa-phone-volume" style={{ color: "#e3f2fd", margin:"10px 10px",  }}> 224-520-1811</i> </MDBNavItem>

          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    
                
                {/* header */}
                <Element name="test5" className="element" >

                    <Link href="" activeClass="active" className={this.props === "About" ? "nav-link active" : "nav-link"}
                        style={{ color: "black" }} to="test1" spy={true} smooth={true} duration={500} ><Header /></Link>

                </Element>
                <br />
                {/* about */}

                <Element name="test1" className="element" >
                <Project />
                </Element>
        
                <br /><br />
                {/* map */}
                        <Element name="test4" className="element" >
                            <div id="top_menu"><Map /></div>
                        </Element>
               
              
            </div>
        )
    }
}

export default Nev;