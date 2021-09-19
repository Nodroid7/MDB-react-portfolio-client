import React, { Component } from "react";
import {
  MDBFooter
} from "mdbreact";


class Footer extends Component {
  
  render() {
   
    return (
  
          <>
            <MDBFooter color="indigo">
              <p className="footer-copyright mb-0 py-3 text-center">
                &copy; {new Date().getFullYear()} Copyright:
                <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
              </p>
            </MDBFooter>
          </>
       
    );
  }
}

export default Footer;
