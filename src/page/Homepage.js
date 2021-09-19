import React from "react";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer
} from "mdbreact";

class MinimalisticIntro extends React.Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  componentDidMount() {
    document.querySelector("nav").style.height = "65px";
  }
  componentWillUnmount() {
    document.querySelector("nav").style.height = "auto";
  }
  render() {
    const navStyle = { marginTop: "4rem" };
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
     
        <MDBView
          src={`https://mdbootstrap.com/img/Photos/Others/img%20%2848%29.jpg`}
        >
          <MDBMask className="rgba-black-light d-flex justify-content-center align-items-center">
            <MDBContainer>
              <MDBRow>
                <MDBCol md="12" className="mb-4 white-text text-center">
                  <h1 className="h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 ">
                    Minimalist intro
                  </h1>
                  <hr className="hr-light my-4" />
                  <h5 className="text-uppercase mb-4 white-text ">
                    <strong>Photography & design</strong>
                  </h5>
                  <MDBBtn outline color="white">
                    portfolio
                  </MDBBtn>
                  <MDBBtn outline color="white">
                    About me
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
     
    );
  }
}

export default MinimalisticIntro;
